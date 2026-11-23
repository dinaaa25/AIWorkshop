// Business Context AI · inscripciones a las capacitaciones gratuitas.
// Columns: Timestamp, Email, Source, Event.
// Event is the session id (e.g. claude-2026-12-03) or <course>-waitlist. Older rows say "Claude" or "Agentes".
// The same email can sign up for every session; only the exact same Event is a duplicate.
// After editing: Deploy → Manage deployments → edit the existing web app → New version (keeps the URL).

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON)
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}')
    const email = String(data.email || '').trim().toLowerCase()
    const eventId = normalizeEvent_(data.event)
    const source = String(data.source || 'curso').trim().slice(0, 40)

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json_({ ok: false, error: 'Invalid email' })
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
    ensureEventColumn_(sheet)

    const lastRow = sheet.getLastRow()
    if (lastRow > 1) {
      const values = sheet.getRange(2, 1, lastRow - 1, 4).getValues()
      const alreadyListed = values.some(function (row) {
        return String(row[1] || '').trim().toLowerCase() === email
          && eventLabel_(row[3], row[2]) === eventId
      })

      if (alreadyListed) {
        return json_({ ok: false, duplicate: true })
      }
    }

    sheet.appendRow([new Date(), email, source, eventId])
    return json_({ ok: true })
  } catch (error) {
    return json_({ ok: false, error: String(error) })
  }
}

function ensureEventColumn_(sheet) {
  const lastRow = sheet.getLastRow()

  if (lastRow === 0) {
    sheet.appendRow(['Timestamp', 'Email', 'Source', 'Event'])
    return
  }

  const header = sheet.getRange(1, 1, 1, 4).getValues()[0]
  if (String(header[0]) !== 'Timestamp') {
    return
  }

  if (!String(header[3] || '').trim()) {
    sheet.getRange(1, 4).setValue('Event')
  }

  if (lastRow < 2) {
    return
  }

  // Backfill legacy rows that only had a Source.
  const range = sheet.getRange(2, 3, lastRow - 1, 2)
  const rows = range.getValues()
  let changed = false

  for (var i = 0; i < rows.length; i++) {
    if (!String(rows[i][1] || '').trim()) {
      const label = legacyLabel_(rows[i][0])
      if (label) {
        rows[i][1] = label
        changed = true
      }
    }
  }

  if (changed) {
    range.setValues(rows)
  }
}

/** Session ids are kept as-is. Requests from very old clients without an event count as legacy "Claude". */
function normalizeEvent_(value) {
  const text = String(value || '').trim()
  return text ? text.slice(0, 80) : 'Claude'
}

function legacyLabel_(sourceCell) {
  const source = String(sourceCell || '').trim().toLowerCase()
  if (!source) {
    return ''
  }
  return source.indexOf('agente') !== -1 ? 'Agentes' : 'Claude'
}

function eventLabel_(eventCell, sourceCell) {
  const event = String(eventCell || '').trim()
  return event || legacyLabel_(sourceCell)
}

function doGet() {
  return json_({
    ok: true,
    version: 3,
    service: 'Business Context AI · inscripciones a capacitaciones gratuitas',
  })
}

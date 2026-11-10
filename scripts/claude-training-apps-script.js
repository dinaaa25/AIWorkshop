function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON)
}

var CLAUDE_EVENT = 'Claude'
var AGENTES_EVENT = 'Agentes'

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}')
    const email = String(data.email || '').trim().toLowerCase()
    const eventType = normalizeEvent_(data.event)

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
          && eventLabel_(row[3], row[2]) === eventType
      })

      if (alreadyListed) {
        return json_({ ok: false, duplicate: true })
      }
    }

    const source = eventType === AGENTES_EVENT ? 'agentes-training' : 'claude-training'
    sheet.appendRow([new Date(), email, source, eventType])
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

  const range = sheet.getRange(2, 3, lastRow - 1, 2)
  const rows = range.getValues()
  let changed = false

  for (var i = 0; i < rows.length; i++) {
    if (!String(rows[i][1] || '').trim()) {
      const label = eventLabel_('', rows[i][0])
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

function normalizeEvent_(value) {
  const text = String(value || '').trim().toLowerCase()
  if (text.indexOf('agente') !== -1) {
    return AGENTES_EVENT
  }
  return CLAUDE_EVENT
}

function eventLabel_(eventCell, sourceCell) {
  const event = String(eventCell || '').trim()
  if (event) {
    return normalizeEvent_(event)
  }

  const source = String(sourceCell || '').trim().toLowerCase()
  if (!source) {
    return ''
  }
  if (source.indexOf('agente') !== -1) {
    return AGENTES_EVENT
  }
  return CLAUDE_EVENT
}

function doGet() {
  return json_({
    ok: true,
    version: 2,
    service: 'Inscripciones a las capacitaciones de Claude y Agentes',
  })
}

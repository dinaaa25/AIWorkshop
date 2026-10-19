const CLAUDE_TRAINING_TAB = 'Claude Training'

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON)
}

function isListed_(sheet, email) {
  const lastRow = sheet.getLastRow()

  if (lastRow === 0) {
    return false
  }

  return sheet.getRange(1, 2, lastRow, 1).getValues().flat().some(function (value) {
    return String(value).trim().toLowerCase() === email
  })
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}')
    const email = String(data.email || '').trim().toLowerCase()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json_({ ok: false, error: 'Invalid email' })
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()

    if (data.sheet === CLAUDE_TRAINING_TAB) {
      const sheet = spreadsheet.getSheetByName(CLAUDE_TRAINING_TAB)
        || spreadsheet.insertSheet(CLAUDE_TRAINING_TAB, spreadsheet.getNumSheets())

      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Timestamp', 'Email', 'Source'])
      }

      if (isListed_(sheet, email)) {
        return json_({ ok: false, duplicate: true })
      }

      sheet.appendRow([new Date(), email, 'claude-training'])
      return json_({ ok: true })
    }

    const name = String(data.name || '').trim()
    const organization = String(data.organization || '').trim()
    const sheet = spreadsheet.getSheets()[0]

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Email', 'Name', 'Organization', 'Source'])
    }

    if (isListed_(sheet, email)) {
      return json_({ ok: false, duplicate: true })
    }

    sheet.appendRow([new Date(), email, name, organization, 'website'])
    return json_({ ok: true })
  } catch (error) {
    return json_({ ok: false, error: String(error) })
  }
}

function doGet() {
  return json_({ ok: true, service: 'Lista de espera del Taller Ejecutivo de IA' })
}

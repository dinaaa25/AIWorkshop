function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON)
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}')
    const email = String(data.email || '').trim().toLowerCase()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json_({ ok: false, error: 'Invalid email' })
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
    const lastRow = sheet.getLastRow()

    if (lastRow === 0) {
      sheet.appendRow(['Timestamp', 'Email', 'Source'])
    }

    if (lastRow > 0) {
      const emails = sheet.getRange(1, 2, lastRow, 1).getValues().flat()
      const alreadyListed = emails.some(function (value) {
        return String(value).trim().toLowerCase() === email
      })

      if (alreadyListed) {
        return json_({ ok: false, duplicate: true })
      }
    }

    sheet.appendRow([new Date(), email, 'claude-training'])
    return json_({ ok: true })
  } catch (error) {
    return json_({ ok: false, error: String(error) })
  }
}

function doGet() {
  return json_({ ok: true, service: 'Inscripciones a la capacitación de Claude' })
}

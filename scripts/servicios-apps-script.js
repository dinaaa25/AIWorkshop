// Business Context AI · solicitudes de diagnóstico desde /servicios
// Paste into Extensions → Apps Script of the leads spreadsheet, deploy as a web app
// (execute as: me, access: anyone) and set NUXT_SERVICIOS_APPS_SCRIPT_URL to its URL.

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON)
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}')
    const email = String(data.email || '').trim().toLowerCase()
    const name = String(data.name || '').trim()
    const organization = String(data.organization || '').trim()
    const proceso = String(data.proceso || '').trim()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json_({ ok: false, error: 'Invalid email' })
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Email', 'Name', 'Organization', 'Proceso', 'Source'])
    }

    // Repeat requests are allowed: a client may ask about a second process.
    sheet.appendRow([new Date(), email, name, organization, proceso, 'servicios'])
    return json_({ ok: true })
  } catch (error) {
    return json_({ ok: false, error: String(error) })
  }
}

function doGet() {
  return json_({ ok: true, service: 'Business Context AI · solicitudes de servicios' })
}

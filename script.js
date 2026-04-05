function buildEmail(type) {
    const name = document.getElementById('userName').value || "User";
    const data = document.getElementById('mainData').value || "0000";
    let template = "";

    if (type === 'invoice') {
        // Table-based Invoice for Outlook/Gmail compatibility
        template = `
<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f8f9fa">
    <tr>
        <td align="center" style="padding: 20px;">
            <table width="500" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff" style="border: 1px solid #eeeeee;">
                <tr><td bgcolor="#007bff" align="center" style="padding: 15px; color: #ffffff; font-family: Arial;"><b>INVOICE</b></td></tr>
                <tr>
                    <td style="padding: 20px; font-family: Arial; font-size: 14px;">
                        Hi ${name}, aapka payment successful raha.<br><br>
                        <b>Total Amount:</b> ₹${data}
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>`;
    } else {
        // Simple OTP Template
        template = `
<table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
        <td align="center" style="padding: 30px;">
            <div style="border: 2px dashed #fd7e14; padding: 20px; width: 300px; font-family: Arial;">
                <h3 style="color: #fd7e14;">OTP Verification</h3>
                <p>Hello ${name}, your otp is:</p>
                <h1 style="letter-spacing: 5px; color: #333;">${data}</h1>
            </div>
        </td>
    </tr>
</table>`;
    }

    // Displaying the result
    document.getElementById('outputCode').value = template;
    document.getElementById('previewContainer').innerHTML = template;
    document.getElementById('resultArea').style.display = 'block';
}
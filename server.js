const { google } = require('googleapis');
const sheets = google.sheets('v4');
const { JWT } = require('google-auth-library');
const express = require('express');
const app = express();
const cors = require('cors');

const postKomenSpreadsheet = require('./controller/postKomenSpreadsheet');

const port = 3000;

require('dotenv').config()

const email = process.env.CLIENT_EMAIL;
const key = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');
console.log(email);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post('/api/set_matrices', postKomenSpreadsheet.postMatrixSpreadsheet);

app.listen(port, () => {
    console.log(`Server berjalan di ${port}`);
})

// async function accessAndEditSpreadsheet(value) {
//   // Authenticate with the service account
//   const auth = new JWT({
//     email: email,
//     key: key,
//     scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//   });

//   // Load client secrets from a file, and set up the sheets API
//   const sheetsAPI = google.sheets({ version: 'v4', auth });

//   // Specify the spreadsheet ID and range
//   const spreadsheetId = '1crFPc-q2unKqsKwjmTQG8xv5IieQ6irhiKQNO8LSL1A';
//   const range = 'C5'; // Example: Edit cell A1

//   // Read the current value of the cell
//   const response = await sheetsAPI.spreadsheets.values.get({
//     spreadsheetId,
//     range,
//   });

//   // Update the cell with a new value
//   const newValue = value;
//   const updateValueCell = async() =>{
//     try {
//         await sheetsAPI.spreadsheets.values.update({
//             spreadsheetId,
//             range,
//             valueInputOption: 'RAW',
//             resource: {
//               values: [[newValue]],
//             },
//           });
        
//           console.log(`Cell ${range} was updated to "${newValue}"`);
//     } catch (error) {
//         console.log(error);
//     }
    
// }
// updateValueCell()
// }

// accessAndEditSpreadsheet()
//   .catch(console.error);

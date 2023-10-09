const { google } = require('googleapis');
const sheets = google.sheets('v4');
const { JWT } = require('google-auth-library');
require('dotenv').config()

const email = process.env.CLIENT_EMAIL;
const key = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');

const auth = new JWT({
  email: email,
  key: key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Load client secrets from a file, and set up the sheets API
const sheetsAPI = google.sheets({ version: 'v4', auth });

// Specify the spreadsheet ID and range
const spreadsheetId = '1crFPc-q2unKqsKwjmTQG8xv5IieQ6irhiKQNO8LSL1A';

const postMatrixSpreadsheet = async (req, res) => {
    try {
      let count = 0;
      // Convert the matrixA and matrixB arrays to the format expected by the Flask server
      let range = 'B5'; // Example: Edit cell A1
      const {matrixA, matrixB} = req.body;
      console.log(matrixA);
      for(let i = 0;i < matrixA.length;i++){
        for(let j = 0;j < matrixA[i].length;j++){
          // console.log(matrixA[i][j]);
          await sheetsAPI.spreadsheets.values.update({
                        spreadsheetId,
                        range,
                        valueInputOption: 'RAW',
                        resource: {
                          values: [[matrixA[i][j]]],
                        },
                      });
          count+=1;
          range = `${String.fromCharCode(66+count)}5`
          console.log(count);
        }
      }
      res.status(200).json("success");
    } catch (error) {
      console.error('Error:', error);
      res.send("Gagal");
    }
  };

module.exports = {postMatrixSpreadsheet}
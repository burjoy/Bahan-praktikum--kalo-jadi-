const {data_mahasiswa} = require('../model/data_app');

const postUser = async (req, res) => {
    function generateRandomString(length) {
        const {nomor_mahasiswa} = req.body;
        let text = '';
      
        for (let i = 0; i < nomor_mahasiswa.length; i++) {
          text += Number(nomor_mahasiswa[i])+2+i;
        }
        return text;
      }

    const codeVerifier = generateRandomString();
    try {
        const {nomor_mahasiswa} = req.body;
        const hasil = await data_mahasiswa.findOne({'npm':nomor_mahasiswa});
        if(hasil){
            res.json([nomor_mahasiswa, hasil]);
            console.log("Ketemu");
            return codeVerifier;
        }
        else{
            res.json(false);
            console.log("Kagak ketemu");
            return false;
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {postUser}
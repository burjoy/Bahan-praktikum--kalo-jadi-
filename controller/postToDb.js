const {data_mahasiswa} = require('../model/data_app');

const postToDb = async(req, res) => {
    try {
        //const hasil = await result.json();
        const {matrixA, matrixB, nomor_mahasiswa} = req.body;
        const update = {'pre_test': matrixB, 'praktikum': matrixB, 'submit_pre_test':true};
        const updatedDoc = await data_mahasiswa.findOneAndUpdate({'npm':nomor_mahasiswa}, update);
        console.log(`Updated Document: ${updatedDoc}`);
        const result = await data_mahasiswa.findOne({'npm':nomor_mahasiswa});
        console.log(`Result: ${matrixA}`);
        console.log(result);
        res.json(updatedDoc);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

module.exports = {postToDb}
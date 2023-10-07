const {data_mahasiswa} = require('../model/data_app');

const postToDb = async(req, res) => {
    try {
        const npm = '12345';
        //const hasil = await result.json();
        const {matrixA, matrixB} = req.body;
        const update = {'pre_test': matrixA, 'praktikum':matrixB};
        const updatedDoc = await data_mahasiswa.findOneAndUpdate({'npm':npm}, update);
        console.log(`Updated Document: ${updatedDoc}`);
        const result = await data_mahasiswa.findOne({'npm':npm});
        console.log(`Result: ${matrixA}`);
        console.log(result);
        res.json(updatedDoc);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

module.exports = {postToDb}
const {data_mahasiswa} = require('../model/data_app');

require('dotenv').config()

const postToDb = async(req, res) => {
    try {
        const update = {};
        //const hasil = await result.json();
        const {matrixA, matrixB, nomor_mahasiswa} = req.body;
        const jawaban = await data_mahasiswa.findOne({'npm':process.env.NPM_ADMIN});
        const jawabanA = jawaban.jawaban_A;
        const jawabanB = jawaban.jawaban_B;
        let nilai = 0;
        for(let i = 0;i < matrixA.length;i++){
            for(let j = 0; j < matrixA[i].length;j++){
                if(matrixA[i][j] == jawabanA[i][j]){
                    nilai += 8;
                }
                else{
                    nilai += 4;
                }
            }
        }

        for(let i = 0;i < matrixB.length;i++){
            for(let j = 0; j < matrixB[i].length;j++){
                if(matrixB[i][j] == jawabanB[i][j]){
                    nilai += 8;
                }
                else{
                    nilai += 4;
                }
            }
        }

        console.log(`Nilai lu: ${nilai}`);

        // if(nomor_mahasiswa == "12345"){
        //     update = {'pre_test': matrixA, 'praktikum': matrixB, 'submit_pre_test':false, 'nilai':nilai};
        // }
        // else{
        //     update = {'pre_test': matrixA, 'praktikum': matrixB, 'submit_pre_test':true, 'nilai':nilai};
        // }
        update = {'pre_test': matrixA, 'praktikum': matrixB, 'submit_pre_test':true, 'nilai':nilai};

        const updatedDoc = await data_mahasiswa.findOneAndUpdate({'npm':nomor_mahasiswa}, update);
        res.json(updatedDoc);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

module.exports = {postToDb}
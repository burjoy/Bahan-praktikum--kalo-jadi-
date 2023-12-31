const {data_mahasiswa} = require('../model/data_app');

require('dotenv').config()

const postToDb = async(req, res) => {
    try {
        // const update = {};
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

        if(nomor_mahasiswa == "12345"){
           const update = {'pre_test': matrixA, 'praktikum': matrixB, 'submit_pre_test':false, 'nilai':nilai};
           const updatedDoc = await data_mahasiswa.findOneAndUpdate({'npm':nomor_mahasiswa}, update);
        }
        else{
           const update = {'pre_test': matrixA, 'praktikum': matrixB, 'submit_pre_test':true, 'nilai':nilai};
           const updatedDoc = await data_mahasiswa.findOneAndUpdate({'npm':nomor_mahasiswa}, update);
        }
        // const update = {'pre_test': matrixA, 'praktikum': matrixB, 'submit_pre_test':true, 'nilai':nilai};

        const newOne = await data_mahasiswa.findOne({'npm':nomor_mahasiswa});
        res.json(newOne);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

module.exports = {postToDb}
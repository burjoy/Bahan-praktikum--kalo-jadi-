const mongoose = require('mongoose');

const format_nilai = new mongoose.Schema(
    {
        nama: String,
        npm: String,
        pre_test: Array,
        praktikum: Array,
        submit_pre_test: Boolean,
        jawaban_A: Array,
        jawaban_B: Array,
        nilai: Number
    });

const data_mahasiswa = mongoose.model("data_mahasiswa", format_nilai, "daftar_nama");

module.exports = {data_mahasiswa};
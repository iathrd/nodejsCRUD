const mongoose = require('mongoose');

var produkSchema = new mongoose.Schema({
    nama_produk: {
        type: String,
    },
    keterangan: {
        type: String,
    },
    harga: {
        type: Number,
    },
    jumlah: {
        type: Number,
    },
})

mongoose.model('Produk', produkSchema);
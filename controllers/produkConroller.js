const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Produk = mongoose.model('Produk');

router.get('/', (req, res) => {
    res.render('produk/addOrEdit', {
        viewTitle: "Insert Produk"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
    {
        insertProduk(req, res);
    } else
    {
        updateProduk(req, res);
    }

});

function insertProduk(req, res) {
    var produk = new Produk();
    produk.nama_produk = req.body.namaProduk;
    produk.keterangan = req.body.keterangan;
    produk.harga = req.body.harga;
    produk.jumlah = req.body.jumlah;

    produk.save((err, doc) => {
        if (!err)
        {
            res.redirect('produk/list');
        } else
        {
            console.log("error during insert" + err);
        }
    });
}

function updateProduk(req, res) {
    Produk.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true, }, (err, doc) => {
        if (!err)
        {
            res.redirect('produk/list');
        } else
        {
            console.log("Can't Update data" + err)
        }
    })
}

router.get('/list', (req, res) => {
    Produk.find((err, docs) => {
        if (!err)
        {
            res.render('produk/list', {
                list: docs,
            });
        } else
        {
            console.log('error in retrieving data' + err);
        }
    });
});

router.get('/:id', (req, res) => {
    Produk.findById(req.params.id, (err, doc) => {
        if (!err)
        {
            res.render("produk/addOrEdit", {
                viewTitle: "Update Produk",
                produk: doc
            });
        } else
        {
            console.log("cannot retrive data" + err);
        }
    })

});

router.get('/delete/:id', (req, res) => {
    Produk.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err)
        {
            res.redirect('/produk/list');
        } else
        {
            console.log("Can't Delete !" + err)
        }
    })
});

module.exports = router;
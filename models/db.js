const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Arcademy', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
    if (!err) { console.log('MongoDB Connection Success.') }
    else { console.log('Error in Db connection' + err) }
});

require('./produk.model');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27018/appMarket',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})
.then(db => console.log('DB is connected to -> ', db.connection.host))
.catch(err => console.error('Error: ', err));
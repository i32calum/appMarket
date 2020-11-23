const mongoose = require('mongoose');

const {Schema} = mongoose;

const ForexPriceSchema = new Schema({
    date: {type:Date, default: Date.now},
    type: {type:String, required:true},
    openPrice: {type:Number, required:true},
    highPrice: {type:Number, required:true},
    lowPrice: {type:Number, required:true},
    closedPrice: {type:Number, required:true},
    volumen: {type:Number, required:true}
});

module.exports = mongoose.model('ForexPrice', ForexPriceSchema);
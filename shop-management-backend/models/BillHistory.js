const mongoose = require('mongoose');

const BillHistorySchema = new mongoose.Schema({
  updatedStocks: [
    {
      product: String,
      size: Number,
      lastQuantity: Number,
      quantity: Number,
      price: Number,
      totalSale: Number,
    }
  ],
  pdfDate: { type: Date, required: true },
  totalSale: Number,
  upiPayment: Number,
  discount: Number,
  breakageCash: Number,
  canteenCash: Number,
  totalDesiSale: Number,
  totalBeerSale: Number,
  salary: Number,
  shop: String,
  rateDiff: Number,
  rent: Number,
  totalPaymentReceived: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BillHistory', BillHistorySchema);

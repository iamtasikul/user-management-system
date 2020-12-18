const mongoose = require('mongoose');
const { Schema } = mongoose.Schema;

const userDBSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    status: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('userdb', userDBSchema);

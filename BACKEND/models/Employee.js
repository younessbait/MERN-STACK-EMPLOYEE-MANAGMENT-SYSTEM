const mongoose = require("mongoose");
const Modelschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  familyName: {
    type: String,
    required: true,
    maxlength: 20,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  job: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  cni: {
    type: String,
    required: true,
    unique: true,
  },
  dateInscription: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("Employee", Modelschema);
module.exports = model;

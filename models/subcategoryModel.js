const mongoose = require("mongoose");

const { Schema } = mongoose;

const subcategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  isActive: {
    type: String,
    default: false,
  },
  status: {
    type: String,
    default: "waiting",
    enum: ["waiting", "approved", "rejected"],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  update: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Subcategory", subcategorySchema);

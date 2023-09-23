const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  // description: {
  //   type: String,
  // },
  isActive: {
    type: String,
    default: false,
  },
  status: {
    type: String,
    default: "waiting",
    enum: ["waiting", "approved", "rejected"],
  },
  subcategory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Subcategory",
    },
  ],
  update: {
    type: Date,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Category", categorySchema);

const Category = require("../models/categoryModel.js");
const Subcategory = require("../models/subcategoryModel.js");

async function categoryController(req, res) {
  const { name } = req.body;
  let duplicatename = await Category.find({ name });
  if (duplicatename.length > 0) {
    return res.send({ error: "Category Already Exists" });
  }

  let category = new Category({
    name,
  });
  category.save();

  res.send({ Success: "Category Successfull" });
}

async function categoryStatusController(req, res) {
  const { name, status } = req.body;
  if (status == "rejected") {
    let updateStatus = await Category.findOneAndUpdate(
      { name },
      { status },
      { new: true }
    );

    return res.send({ Success: "Status Update" });
  } else if (status == "approved") {
    let updateStatus = await Category.findOneAndUpdate(
      { name },
      { status },
      { new: true }
    );

    return res.send({ Success: "Status Update" });
  }
}

// subCategory Controller
async function subCategoryController(req, res) {
  const { name, category, description } = req.body;

  let duplicatename = await Subcategory.find({ name });
  if (duplicatename.length > 0) {
    return res.send({ error: "SubCategory Already Exists" });
  }
  try {
    let subcategory = new Subcategory({
      name,
      category,
      description,
    });
    subcategory.save();
    res.send({ Success: "Sub Category Successfull" });
  } catch (error) {
    console.log(error);
  }
}

async function categorySubStatusController(req, res) {
  const { name, status } = req.body;
  if (status == "rejected") {
    let updateStatus = await Subcategory.findOneAndUpdate(
      { name },
      { status },
      { new: true }
    );

    return res.send({ Success: "Status Update" });
  } else if (status == "approved") {
    let updateStatus = await Subcategory.findOneAndUpdate(
      { name },
      { status },
      { new: true }
    );

    return res.send({ Success: "Status Update" });
  }
}

module.exports = {
  categoryController,
  categoryStatusController,
  subCategoryController,
  categorySubStatusController,
};

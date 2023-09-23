const express = require("express");
const router = express.Router();
const {
  categoryController,
  categoryStatusController,
  subCategoryController,
  categorySubStatusController,
} = require("../../controllers/categoryController");

router.post("/category", categoryController);
router.post("/categorystatus", categoryStatusController);
router.post("/subcategory", subCategoryController);

router.post("/subcategorystatus", categorySubStatusController);

module.exports = router;

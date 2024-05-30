const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/EmployeeController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname),
    );
  },
});

const upload = multer({ storage });

// Route to create a new employee
router.post("/", upload.single("photo"), EmployeeController.create);

router.get("/:id", EmployeeController.find);

router.get("/", EmployeeController.list);

router.put("/:id", upload.single("photo"), EmployeeController.update);

router.delete("/:id", EmployeeController.delete);

module.exports = router;

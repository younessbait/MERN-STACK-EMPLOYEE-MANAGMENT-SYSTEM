const Employee = require("../models/Employee");
const path = require("path");

exports.create = async (req, res) => {
  try {
    // Extracting form data including files
    const { name, familyName, phone, job, cni, address, dateInscription } = req.body;

    // Extracting file paths from req.file object
    const photo = req.file ? req.file.path : "";

    // Create a new Employee instance with form data
    const employee = new Employee({
      name,
      familyName,
      phone,
      job,
      photo: photo ? path.basename(photo) : "",
      cni,
      address,
      dateInscription,
    });

    // Save the new employee to the database
    await employee.save();

    res.json({
      message: "Employee created successfully.",
      data: employee,
    });
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(500).json({ message: "Failed to create employee.", error });
  }
};

exports.find = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);
  if (!employee) return res.status(404).send();
  res.json({
    message: "find ✅",
    data: employee,
  });
};


exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, familyName, phone, job, cni, address, dateInscription } = req.body;

  const photo = req.file ? req.file.path : "";

  console.log("Received update request for ID:", id);
  console.log("File upload data:", req.file);  // Debugging log to check file upload
  console.log("Other data:", req.body);  // Debugging log to check other form data

  try {
    const updateData = {
      name,
      familyName,
      phone,
      job,
      cni,
      address,
      dateInscription,
    };

    if (photo) {
      updateData.photo = path.basename(photo);
      console.log("Photo path set to:", updateData.photo);  // Debugging log to check photo path
    }

    const result = await Employee.updateOne(
      { _id: id },
      {
        $set: updateData,
      },
    );

    console.log("Update result:", result);  // Debugging log to check the result of the update

    res.json({
      message: "update ✅",
    });
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({
      message: "Error updating employee",
    });
  }
};
exports.delete = async (req, res) => {
  const { id } = req.params;
  await Employee.deleteOne({ _id: id });
  res.json({ message: "delete ✅" });
};

exports.list = async (req, res) => {
  const employee = await Employee.find();
  res.json({
    message: "list ✅",
    data: employee,
  });
};

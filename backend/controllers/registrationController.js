const { Student, Batch, Registration } = require('../models');



exports.registerStudent = async (req, res) => {
  const { studentId, batchId } = req.body;
  try {
    const registration = await Registration.create({ studentId, batchId });
    res.status(201).json({ message: 'Registration successful', registration });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

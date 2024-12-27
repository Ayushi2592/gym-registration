const { Registration } = require('../models');

exports.markPayment = async (req, res) => {
  const { registrationId } = req.body;
  try {
    const registration = await Registration.update(
      { paymentStatus: 'Paid' },
      { where: { id: registrationId } }
    );
    res.status(200).json({ message: 'Payment marked as paid', registration });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

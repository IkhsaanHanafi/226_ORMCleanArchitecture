const db = require('../models');

async function getAllKomik(req, res) {
  try {
    const komik = await db.Komik.findAll();
    res.status(200).json(komik);
  } catch (err) {
    console.error('Error fetching komik:', err.message);
    res.status(500).json({ error: 'Failed to fetch komik' });
  }
}

async function getKomikById(req, res) {
  const { id } = req.params;
  try {
    const komik = await db.Komik.findByPk(id);
    if (!komik) {
      return res.status(404).json({ error: 'Komik not found' });
    }
    res.status(200).json(komik);
  } catch (err) {
    console.error('Error fetching komik by id:', err.message);
    res.status(500).json({ error: 'Failed to fetch komik' });
  }
}

async function createKomik(req, res) {
  try {
    const komik = await db.Komik.create(req.body);
    res.status(201).json(komik);
  } catch (err) {
    console.error('Error creating komik:', err.message);
    if (err.name === 'SequelizeValidationError') {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: 'Failed to create komik' });
  }
}


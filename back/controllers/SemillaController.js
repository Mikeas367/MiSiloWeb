const { Semilla } = require('../models');

const semillaController = {
  // Obtener todas las semillas
  getAllSemillas: async (req, res) => {
    try {
      const semillas = await Semilla.findAll();
      res.status(200).json(semillas);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las semillas', error });
    }
  },

  // Obtener una semilla por ID
  getSemillaById: async (req, res) => {
    const { id } = req.params;
    try {
      const semilla = await Semilla.findByPk(id);
      if (semilla) {
        res.status(200).json(semilla);
      } else {
        res.status(404).json({ message: 'Semilla no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la semilla', error });
    }
  },

  // Crear una nueva semilla
  createSemilla: async (req, res) => {
    const { nombre } = req.body;
    try {
      const newSemilla = await Semilla.create({ nombre });
      res.status(201).json(newSemilla);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la semilla', error });
    }
  },

  // Actualizar una semilla existente
  updateSemilla: async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
      const semilla = await Semilla.findByPk(id);
      if (semilla) {
        semilla.nombre = nombre;
        await semilla.save();
        res.status(200).json(semilla);
      } else {
        res.status(404).json({ message: 'Semilla no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la semilla', error });
    }
  },

  // Eliminar una semilla
  deleteSemilla: async (req, res) => {
    const { id } = req.params;
    try {
      const semilla = await Semilla.findByPk(id);
      if (semilla) {
        await semilla.destroy();
        res.status(200).json({ message: 'Semilla eliminada con éxito' });
      } else {
        res.status(404).json({ message: 'Semilla no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la semilla', error });
    }
  }
};

module.exports = semillaController;

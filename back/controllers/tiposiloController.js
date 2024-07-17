const { TipoSilo } = require('../models');

const tipoSiloController = {
  // Obtener todos los tipos de silo
  getAllTiposSilo: async (req, res) => {
    try {
      const tiposSilo = await TipoSilo.findAll();
      res.status(200).json(tiposSilo);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los tipos de silo', error });
    }
  },

  // Obtener un tipo de silo por ID
  getTipoSiloById: async (req, res) => {
    const { id } = req.params;
    try {
      const tipoSilo = await TipoSilo.findByPk(id);
      if (tipoSilo) {
        res.status(200).json(tipoSilo);
      } else {
        res.status(404).json({ message: 'Tipo de silo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el tipo de silo', error });
    }
  },

  // Crear un nuevo tipo de silo
  createTipoSilo: async (req, res) => {
    const { nombre } = req.body;
    try {
      const newTipoSilo = await TipoSilo.create({ nombre });
      res.status(201).json(newTipoSilo);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el tipo de silo', error });
    }
  },

  // Actualizar un tipo de silo existente
  updateTipoSilo: async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
      const tipoSilo = await TipoSilo.findByPk(id);
      if (tipoSilo) {
        tipoSilo.nombre = nombre;
        await tipoSilo.save();
        res.status(200).json(tipoSilo);
      } else {
        res.status(404).json({ message: 'Tipo de silo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el tipo de silo', error });
    }
  },

  // Eliminar un tipo de silo
  deleteTipoSilo: async (req, res) => {
    const { id } = req.params;
    try {
      const tipoSilo = await TipoSilo.findByPk(id);
      if (tipoSilo) {
        await tipoSilo.destroy();
        res.status(200).json({ message: 'Tipo de silo eliminado con éxito' });
      } else {
        res.status(404).json({ message: 'Tipo de silo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el tipo de silo', error });
    }
  }
};

module.exports = tipoSiloController;

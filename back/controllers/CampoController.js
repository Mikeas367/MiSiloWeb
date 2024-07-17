const { Campo } = require('../models');

const campoController = {
  // Obtener todos los campos
  getAllCampos: async (req, res) => {
    try {
      const campos = await Campo.findAll();
      res.status(200).json(campos);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los campos', error });
    }
  },

  // Obtener un campo por ID
  getCampoById: async (req, res) => {
    const { id } = req.params;
    try {
      const campo = await Campo.findByPk(id);
      if (campo) {
        res.status(200).json(campo);
      } else {
        res.status(404).json({ message: 'Campo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el campo', error });
    }
  },

  // Crear un nuevo campo
  createCampo: async (req, res) => {
    const { nombre } = req.body;
    try {
      const newCampo = await Campo.create({ nombre });
      res.status(201).json(newCampo);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el campo', error });
    }
  },

  // Actualizar un campo existente
  updateCampo: async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
      const campo = await Campo.findByPk(id);
      if (campo) {
        campo.nombre = nombre;
        await campo.save();
        res.status(200).json(campo);
      } else {
        res.status(404).json({ message: 'Campo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el campo', error });
    }
  },

  // Eliminar un campo
  deleteCampo: async (req, res) => {
    const { id } = req.params;
    try {
      const campo = await Campo.findByPk(id);
      if (campo) {
        await campo.destroy();
        res.status(200).json({ message: 'Campo eliminado con éxito' });
      } else {
        res.status(404).json({ message: 'Campo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el campo', error });
    }
  }
};

module.exports = campoController;

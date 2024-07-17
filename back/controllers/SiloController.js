// const { Silo } = require('../models');
const { Silo, Campo, Semilla, TipoSilo } = require('../models');
const siloController = {
  // Obtener todos los silos
  getAllSilos: async (req, res) => {
    try {
      const silos = await Silo.findAll({
        include: [
          { model: Campo, attributes: ['nombre'] },
          { model: Semilla, attributes: ['nombre'] },
          { model: TipoSilo, attributes: ['nombre'] }
        ]
      });// Con el include puedo hacer que me traiga el valor de la fk, lo unico es que en el front tengo que indicar otra cosa
      res.status(200).json(silos);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los silos', error });
    }
  },

  // Obtener un silo por ID
  getSiloById: async (req, res) => {
    const { id } = req.params;
    try {
      const silo = await Silo.findByPk(id);
      if (silo) {
        res.status(200).json(silo);
      } else {
        res.status(404).json({ message: 'Silo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el silo', error });
    }
  },

  // Crear un nuevo silo
  createSilo: async (req, res) => {
    const { idCampo, idSemilla, idTipoSilo, cantidad, nombre } = req.body;
    try {
      const newSilo = await Silo.create({
        idCampo,
        idSemilla,
        idTipoSilo,
        cantidad,
        nombre
      });
      res.status(201).json(newSilo);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el silo', error });
    }
  },

  // Actualizar un silo existente
  updateSilo: async (req, res) => {
    const { id } = req.params;
    const { idCampo, idSemilla, idTipoSilo, cantidad, nombre } = req.body;
    try {
      const silo = await Silo.findByPk(id);
      if (silo) {
        silo.idCampo = idCampo;
        silo.idSemilla = idSemilla;
        silo.idTipoSilo = idTipoSilo;
        silo.cantidad = cantidad;
        silo.nombre = nombre;
        await silo.save();
        res.status(200).json(silo);
      } else {
        res.status(404).json({ message: 'Silo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el silo', error });
    }
  },

  // Eliminar un silo
  deleteSilo: async (req, res) => {
    const { id } = req.params;
    try {
      const silo = await Silo.findByPk(id);
      if (silo) {
        await silo.destroy();
        res.status(200).json({ message: 'Silo eliminado con éxito' });
      } else {
        res.status(404).json({ message: 'Silo no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el silo', error });
    }
  }
};

module.exports = siloController;

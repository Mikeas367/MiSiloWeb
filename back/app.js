const express = require('express');

const cors = require('cors')
const app = express();
const siloRoutes = require('./routers/siloRouters.js');
const campoRoutes = require('./routers/campoRouters.js');
const semillaRoutes = require('./routers/semillaRouters.js');
const tipoSiloRoutes = require('./routers/tiposiloRouters.js');
app.use(express.json());
app.use(cors())

app.use('/silos', siloRoutes); 
app.use('/campos', campoRoutes); // funciona getAllCampos-getCampoById-createCampo-updateCampo-deleteCampo
app.use('/semillas', semillaRoutes); //funciona getAllSemillas-getSemillaById-createSemilla-updateSemilla-deleteSemilla
app.use('/tipo-silo', tipoSiloRoutes) // funciona todo

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

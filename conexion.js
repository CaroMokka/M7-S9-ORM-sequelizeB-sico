import { Sequelize } from 'sequelize';


// Configuración de la base de datos
const sequelize = new Sequelize('clase_orm', 'postgres', 'postgres', {
  host: 'localhost', 
  dialect: 'postgres',
  logging: (msg) => console.log(`Sequelize: ${msg}`),
});

// Probar la conexión
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
})();

export default sequelize;


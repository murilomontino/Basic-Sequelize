import { DataTypes, Sequelize } from 'sequelize'

const database = new Sequelize('postgres://root:root@localhost:5432/root', {
    dialect: 'postgres'
}) // Example for postgres



export default database
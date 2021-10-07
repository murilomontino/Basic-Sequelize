import { DataTypes, Model, Optional } from 'sequelize'
import { database } from "./"


// We recommend you declare an interface for the attributes, for stricter typechecking
interface PatientAttributes {
    id: number;
    nome: string;
  }
  
  // Some fields are optional when calling PatientModel.create() or PatientModel.build()
  interface PatientCreationAttributes extends Optional<PatientAttributes, "id"> {}
  
  // We need to declare an interface for our model that is basically what our class would be
  export interface PatientInstance
    extends Model<PatientAttributes, PatientCreationAttributes>,
      PatientAttributes {}

const Patient = database.define<PatientInstance>('Patient', {
    id: {
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        
    },
    nome: DataTypes.STRING

}, {
    freezeTableName: true,
    // para evitar que o sequelize defina suas tabelas com o nome em plural automaticamente
// como permanencia para permanencium ative a opção como true


// definindo o nome da sua tabela
tableName: 'patients'
})

export default Patient

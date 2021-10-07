import { DataTypes, Model, Optional } from 'sequelize'
import { database } from "."
import Exam from './Exam'
import Patient from './Patient'


// We recommend you declare an interface for the attributes, for stricter typechecking
interface UBSAttributes {
    id: number;
    rua: string;
    nome: string;
    numero: string
  }
  
  // Some fields are optional when calling UBSModel.create() or UBSModel.build()
  interface UBSCreationAttributes extends Optional<UBSAttributes, "id"> {}
  
  // We need to declare an interface for our model that is basically what our class would be
  export interface UBSInstance
    extends Model<UBSAttributes, UBSCreationAttributes>,
      UBSAttributes {}

const UBS = database.define<UBSInstance>('UBS', {
    id: {
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        
    },
    nome: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.STRING

}, {
    freezeTableName: true,
        // para evitar que o sequelize defina suas tabelas com o nome em plural automaticamente
    // como permanencia para permanencium ative a opção como true

  
    // definindo o nome da sua tabela
    tableName: 'ubs'
})

/* UBS.hasOne(Patient,{
    constraints: true,
    foreignKey: 'idUBS'
})

Patient.hasMany(Exam, {
    constraints: true,
    foreignKey: 'idPatient'
}) */

UBS.belongsToMany(Exam, {
    through: {
        model: Patient
    },
    foreignKey: 'idUBS',
    constraints: true
})

Exam.belongsToMany(UBS, {
    through: {
        model: Patient
    },
    foreignKey: 'idExam',
    constraints: true
})

export default UBS

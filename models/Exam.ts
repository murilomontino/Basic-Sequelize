import { DataTypes, Model, Optional } from 'sequelize'
import { database } from "./"


// We recommend you declare an interface for the attributes, for stricter typechecking
interface ExamAttributes {
    id: number;
    resultado: string;
  }
  
  // Some fields are optional when calling ExamModel.create() or ExamModel.build()
  interface ExamCreationAttributes extends Optional<ExamAttributes, "id"> {}
  
  // We need to declare an interface for our model that is basically what our class would be
  export interface ExamInstance
    extends Model<ExamAttributes, ExamCreationAttributes>,
      ExamAttributes {}

const Exam = database.define<ExamInstance>('Exam', {
    id: {
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        
    },
    resultado: DataTypes.STRING,


}, {
    freezeTableName: true,
    // para evitar que o sequelize defina suas tabelas com o nome em plural automaticamente
// como permanencia para permanencium ative a opção como true


// definindo o nome da sua tabela
tableName: 'exams'
})

export default Exam

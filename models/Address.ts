import { DataTypes, Model, Optional } from 'sequelize'
import { database } from "./"


// We recommend you declare an interface for the attributes, for stricter typechecking
interface AddressAttributes {
    id: number;
    rua: string;
    numero: string
  }
  
  // Some fields are optional when calling AddressModel.create() or AddressModel.build()
  interface AddressCreationAttributes extends Optional<AddressAttributes, "id"> {}
  
  // We need to declare an interface for our model that is basically what our class would be
  export interface AddressInstance
    extends Model<AddressAttributes, AddressCreationAttributes>,
      AddressAttributes {}

const Address = database.define<AddressInstance>('address', {
    id: {
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        
    },
    rua: DataTypes.STRING,
    numero: DataTypes.STRING

}, {
    freezeTableName: true,
    // para evitar que o sequelize defina suas tabelas com o nome em plural automaticamente
// como permanencia para permanencium ative a opção como true


// definindo o nome da sua tabela
tableName: 'address'
})

export default Address

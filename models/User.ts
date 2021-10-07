import { DataTypes, Model, Optional } from 'sequelize'
import { database } from './'
import Address, {AddressInstance} from './Address'


// We recommend you declare an interface for the attributes, for stricter typechecking
interface UserAttributes {
    id: number;
    login: string,
    password: string,
    endereco?: number
  }
  
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}
  
  // We need to declare an interface for our model that is basically what our class would be
  export interface UserInstance
    extends Model<UserAttributes, UserCreationAttributes>,
      UserAttributes {
        address: AddressInstance,
        createdAt: Date,
        updatedAt: Date,
        getAddress: () => AddressInstance
      }
      
const User = database.define<UserInstance>('users', {
    id: {
        primaryKey: true,
        allowNull: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    endereco: DataTypes.INTEGER
},
  {
    // adicionar os atributos (updatedAt, createdAt)
    timestamps: true,
  
    // não permite deletar do banco, mas inseri na coluna deletedAt a data da exclusão
    // se o timestamps estiver ativado
    paranoid: true,
  
    // não adiciona camelcase para atributos gerados automaticamente
    // então se definirmos updatedAt ele será criado como updated_at
    underscored: false,
  
    // para evitar que o sequelize defina suas tabelas com o nome em plural automaticamente
    // como permanencia para permanencium ative a opção como true
    freezeTableName: true,
  
    // definindo o nome da sua tabela
    tableName: 'users'
  
})

User.belongsTo(Address, {
    foreignKey: "endereco",
    // this determines the name in `associations`!
})



export default User


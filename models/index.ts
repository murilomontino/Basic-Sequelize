/* 
  CONFIGURAçÃO DO DATABASE

*/
import {Dialect, ModelCtor, Sequelize} from 'sequelize';

interface Options {
  username: string,
  password: string,
  database: string,
  host: string,
  port: number,
  use_env_variable: string,
  dialect: Dialect
}

const env = process.env.NODE_ENV || 'development';
const config: Options = require(__dirname + '/../config/database.json')[env];

export const database: Sequelize = new Sequelize(config.database, config.username, config.password, config);

/* 
  CONFIGURAçÃO DO OBJETO DE MODELS
*/

import Address, { AddressInstance } from '../models/Address'
import User, { UserInstance } from '../models/User'

interface Models {
    Address: ModelCtor<AddressInstance>
    User: ModelCtor<UserInstance>
  }

const db: Models = {
  Address: Address,
  User: User
};

export default db;
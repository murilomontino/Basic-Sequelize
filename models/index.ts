'use strict';
import fs from 'fs'
import path from 'path';
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

interface Models {
  Address: ModelCtor<AddressInstance>
  User: ModelCtor<UserInstance>
  
}

const env = process.env.NODE_ENV || 'development';
const config: Options = require(__dirname + '/../config/database.json')[env];

export const database: Sequelize = new Sequelize(config.database, config.username, config.password, config);

import Address, { AddressInstance } from './Address'
import User, { UserInstance } from './User'

const db: Models = {
  Address: Address,
  User: User
};

export default db;

const __main = async () => {
  await database.sync()
}

__main()

import { Sequelize } from 'sequelize';
import dbConfig from '../config/dbConfig.js';
import productModel from '../models/productModel.js';

const db = new Sequelize(dbConfig.name, dbConfig.username, dbConfig.password, dbConfig.options);

export const product = productModel(db);

export default db;

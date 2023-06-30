import {DB_LOCAL_URI, DB_LOCAL_NAME } from '../config.js';
import mongoose from 'mongoose';
import User from '../models/user.model.js';

// Si no hay MongoDB URI, se conecta al localhost
const connectionString = DB_LOCAL_URI;
const dbName = DB_LOCAL_NAME;
const connectionOptions = {
  dbName,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(connectionString, connectionOptions);

mongoose.Promise = global.Promise;

export default {
  connection: mongoose.connection,
  User,
};

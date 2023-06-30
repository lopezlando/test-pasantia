import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Conexión a environment según si es testing o no
let envFile = 'default.env';

dotenv.config({
  path: path.resolve(rootDir, envFile),
});

// Acá exportar las variables del .env
export const PORT = process.env.PORT;
export const DB_LOCAL_URI = process.env.DB_LOCAL_URI;
export const DB_LOCAL_NAME = process.env.DB_LOCAL_NAME;

import { config } from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;
config();

let pool;

if (process.env.NODE_ENV === "production") {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL
    });
    console.log('ESTAS EN UN ENTORNO DE PRODUCCION');
} else {
    pool = new Pool({
        database: 'stripe_app',
        host: 'localhost',
        user: 'postgres',
        password: '1234',
        port: 5432
    });
    console.log('ESTAS EN UN ENTORNO DE DESARROLLO');
}

export default pool;
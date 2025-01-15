import { config } from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;
config();

let pool;

if (process.env.NODE_ENV === "production") {
    pool = undefined;
} else {
    pool = new Pool({
        database: 'stripe_app',
        host: 'localhost',
        user: 'postgres',
        password: '1234',
        port: 5432
    });
}

export default pool;
//import pkg from 'pg';
import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";

//const { Pool } = pkg;

configDotenv()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT)
    }
)



// const pool = new Pool({
//     connectionString: process.env.DB
// })

export default sequelize;


import express, { Express } from "express";
import sequelize from "./db/db";
import router from "./routes/user-routes";
import { configDotenv } from "dotenv";

configDotenv()

const PORT = process.env.PORT;
const app: Express = express();
app.use(express.json());

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()

    app.listen(PORT, () => {
      console.log('connected on port' + process.env.PORT);
    });

    app.use('/api', router)

  } catch {
    console.log('error');
  }
}

start()

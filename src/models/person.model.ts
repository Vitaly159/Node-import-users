import sequelize from "../db/db";
import { DataTypes } from "sequelize";

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  surname: { type: DataTypes.STRING, allowNull: false },
  patronymic: { type: DataTypes.STRING, allowNull: false },
  gosb: { type: DataTypes.STRING, allowNull: false },
})

export { User }


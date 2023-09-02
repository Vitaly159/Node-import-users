import express from "express";
import { getUsers, createUser, findUser, deleteUser } from "../controller/person.controller";

const router = express.Router();

router.get('/user', getUsers) //получение всех юзеров юзера
router.get('/user/:id', findUser) //найти юзера
router.post('/user', createUser) //создание юзера
router.delete('/user/', deleteUser) //удалить юзера

export default router;

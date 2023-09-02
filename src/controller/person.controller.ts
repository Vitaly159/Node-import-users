import express from "express";
import { User } from '../models/person.model'

const app = express();
app.use(express.json());

//получение всех юзеров
const getUsers = async (req: express.Request, res: express.Response) => {
  console.log(req.hostname);
  
  const data = await User.findAll()
  res.json({ results: data })
}

//создание юзера
const createUser = async (req: express.Request, res: express.Response) => {
  try {
    const { name, surname, patronymic, email, id, gosb } = req.body
    await User.create({ name, surname, patronymic, email, id, gosb })
    res.json(`Пользователь ${name} ${surname} ${patronymic} добавлен`)
  } catch (err) {
    res.json({ result: `Ошибка ${err}` })
  }
}

//получение одного юзера
const findUser = async (req: express.Request, res: express.Response) => {
  const { id } = req.params

  try {
    const data = await User.findOne({
      where: { id }
    })

    res.json({ results: data })
  } catch (err) {
    res.json({ results: `Ошибка ${err}` })
  }
}

//удаление юзера
const deleteUser = async (req: express.Request, res: express.Response) => {
  const { id } = req.body

  try {
    const data = await User.destroy({
      where: { id }
    })

    res.json({ results: data })
  } catch (err) {
    res.json({ results: `Ошибка ${err}` })
  }
}

export { getUsers, createUser, findUser, deleteUser }

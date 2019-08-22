import User from "./../../models/user"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {IUser} from './../../interfaces/user.interface'
export const login = async (
  root: any,
  args: { username: string; password: string },
  context: any,
  info: any
) => {
  const { username } = args
  const user: IUser = await User.findOne({ username })
  if (Object.keys(user).length) {
    if (bcrypt.compareSync(args.password, user.password)) {
      const { JWT_SECRET } = process.env
      const token = jwt.sign({ username }, JWT_SECRET)
      return token
    }
  }
  return ""
}

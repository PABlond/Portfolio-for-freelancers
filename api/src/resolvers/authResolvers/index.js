import User from "./../../models/user"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export const login = async (root, args, context, info) => {
  const { username } = args
  const user = await User.findOne({ username })
  if (Object.keys(user).length) {
    if (bcrypt.compareSync(args.password, user.password)) {
      const { JWT_SECRET } = process.env
      const token = jwt.sign({ username }, JWT_SECRET)
      return token
    }
  }
  return new Error(404)
}

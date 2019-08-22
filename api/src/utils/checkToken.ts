import jwt from "jsonwebtoken"

export default async (token: string) => {
  const { JWT_SECRET } = process.env
  return !!jwt.verify(
    token,
    JWT_SECRET
  )
}

import jwt from "jsonwebtoken"

export default async token => {
  const { JWT_SECRET } = process.env
  return await jwt.verify(token, JWT_SECRET, async (err, decoded) => !!decoded)
}

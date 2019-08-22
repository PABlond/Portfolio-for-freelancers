import Work from "./../../models/work"
import { IWork } from "./../../interfaces/work.interface"

export const works = async (root: any, args: any, context: any, info: any) => {
  const data = await Work.find({})
  return data
}

export const setWorks = async (
  root: any,
  args: any,
  context: any,
  info: any
) => {
  const works: IWork[] = args.works.map((work: any) => JSON.parse(work))
  await Work.remove({})
  works.forEach(async (work: any) => {
    await new Work(work).save()
  })
  return works
}

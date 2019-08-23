import Work from "./../../models/work"
import { IWork } from "./../../interfaces/work.interface"

export const works = async (root: any, args: any, context: any, info: any) => {
  const data: IWork[] = await Work.find({})
  return data.sort((a, b) => a.position - b.position)
}

export const setWorks = async (
  root: any,
  args: any,
  context: any,
  info: any
) => {
  const works: IWork[] = args.works
    .map((work: any) => JSON.parse(work))
    .map((work: any, i: number) => {
      return { ...work, position: i }
    })

  if (works.every(work => !!work.title)) {
    await Work.remove({})
    works.forEach(async (work: any) => {
      await new Work(work).save()
    })
    return works
  }
  return []
}

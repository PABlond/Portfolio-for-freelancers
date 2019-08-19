import Work from "./../../models/work"

export const works = async (root, args, context, info) => {
  const data = await Work.find({})
  return data
}

export const setWorks = async (root, args, context, info) => {
  const works = args.works.map(work => JSON.parse(work))
  await Work.remove({})
  works.forEach(async work => {
    await new Work(work).save()
  })
  return works
}

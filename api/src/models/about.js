import mongoose from "mongoose"

const { Schema, model } = mongoose

const aboutSchema = new Schema({
  //   _id: String,
  img: {
    href: String,
    alt: String
  },
  description: [{ content: String }],
  skills: [
    {
      title: String,
      nodes: [
        {
          id: String,
          group: Number
        }
      ],
      links: [
        {
          source: String,
          target: String,
          value: Number
        }
      ]
    }
  ],
  certifications: [
    {
      original: String,
      thumbnail: String
    }
  ]
})

export default model("about", aboutSchema)

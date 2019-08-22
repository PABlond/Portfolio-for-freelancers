import mongoose from "mongoose"
import { Schema, model } from "mongoose"
import {IAbout} from './../interfaces/about.interface'

const aboutSchema: Schema = new Schema({
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

export default model<IAbout>("about", aboutSchema)

import Certification from "./../models/certification";
import { makeExecutableSchema } from "graphql-tools";
import Work from './../models/work'

// Sample Data
const blogsData = [{ _id: 1, title: "Hello", content: "World" }];

const typeDefs = `
    type Certification{
        _id: String,
        original: String!,
        thumbnail: String!
    }
    type Work{
        _id: String,
        title: String!,
        image: String!,
        content: String!,
        technos: String!
    }
    type Query{
        certifications: [Certification],
        works: [Work],
        certification(_id: Int): Certification
    }
`;

const resolvers = {
  Query: {
    async certifications(root, args, context, info) {
      const data = await Certification.find({});
      return data;
    },
    async works(root, args, context, info) {
        const data = await Work.find({});
        return data;
      }
  }
};

export default makeExecutableSchema({ typeDefs, resolvers });

import express from "express";
import "dotenv/config";
import schema from "./schema/graphQLSchema";
import graphqlHTTP from "express-graphql";
import mongoose from "mongoose";
import cors from 'cors'
require("@babel/polyfill");
import About from './models/about'

// (async () => {
//   await new About({
//     img: {
//       href:
//         "https://res.cloudinary.com/pablond/image/upload/q_auto:eco/v1529395706/20180619_095724.jpg",
//       alt: "Pierre-Alexis_Blond"
//     },
//     description: [
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi eget mauris pharetra et.",
//       "Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Dignissim cras tincidunt lobortis feugiat. Est velit egestas dui id ornare. Donec ac odio tempor orci dapibus."
//     ],
//     skills: {
//       front: {
//         nodes: [
//           { id: "Front end", group: 7 },
//           // {id: "Data", group: 3},
//           { id: "HTML5", group: 2 },
//           { id: "Gatsby", group: 1 },
//           { id: "CSS3", group: 3 },
//           { id: "SASS", group: 3 },
//           { id: "React Native", group: 6 },
//           { id: "React", group: 6 },
//           { id: "Redux", group: 4 },
//           { id: "Expo", group: 1 },
//           { id: "Framework", group: 6 }
//         ],
//         links: [
//           { source: "Front end", target: "HTML5", value: 3 },
//           { source: "Front end", target: "CSS3", value: 3 },
//           { source: "Front end", target: "Framework", value: 3 },
//           { source: "Framework", target: "React", value: 3 },
//           { source: "Framework", target: "React Native", value: 3 },
//           { source: "React", target: "Redux", value: 1 },
//           { source: "Expo", target: "React Native", value: 1 },
//           { source: "React Native", target: "Redux", value: 1 },
//           { source: "React", target: "Gatsby", value: 1 },
//           { source: "CSS3", target: "SASS", value: 1 }
//         ]
//       },
//       back: {
//         nodes: [
//           { id: "Back end", group: 7 },
//           { id: "Javascript", group: 4 },
//           { id: "Express", group: 4 },
//           { id: "Hapi.Js", group: 4 },
//           { id: "Python", group: 5 },
//           { id: "Django", group: 5 },
//           { id: "Flask", group: 5 },
//           { id: "Databases", group: 2 },
//           { id: "Mysql", group: 2 },
//           { id: "MariaDB", group: 2 },
//           { id: "MongoDB", group: 2 }
//         ],
//         links: [
//           { source: "Back end", target: "Javascript", value: 1 },
//           { source: "Back end", target: "Python", value: 1 },
//           { source: "Back end", target: "Databases", value: 1 },
//           { source: "Javascript", target: "Express", value: 1 },
//           { source: "Javascript", target: "Hapi.Js", value: 1 },
//           { source: "Python", target: "Django", value: 1 },
//           { source: "Python", target: "Flask", value: 1 },
//           { source: "Databases", target: "Mysql", value: 1 },
//           { source: "Databases", target: "MariaDB", value: 1 },
//           { source: "Databases", target: "MongoDB", value: 1 }
//         ]
//       },
//       data: {
//         nodes: [
//           { id: "Data", group: 7 },
//           // {id: "Data", group: 3},
//           { id: "Visualization", group: 1 },
//           { id: "Matplotlib", group: 1 },
//           { id: "Pandas", group: 1 },
//           { id: "Seaborn", group: 1 },
//           { id: "Analysis", group: 2 },
//           { id: "Keras", group: 2 },
//           { id: "Scikit-learn", group: 2 },
//           { id: "Other", group: 3 },
//           { id: "Tensorflow", group: 3 }
//         ],
//         links: [
//           { source: "Data", target: "Visualization", value: 3 },
//           { source: "Data", target: "Analysis", value: 3 },
//           { source: "Data", target: "Other", value: 3 },
//           { source: "Visualization", target: "Matplotlib", value: 3 },
//           { source: "Visualization", target: "Pandas", value: 3 },
//           { source: "Visualization", target: "Seaborn", value: 3 },
//           { source: "Analysis", target: "Keras", value: 1 },
//           { source: "Analysis", target: "Scikit-learn", value: 1 },
//           { source: "Other", target: "Tensorflow", value: 1 }
//         ]
//       }
//     },
//     certifications: [
//       {
//         original:
//           "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=zAhX%2FEhCFGcWw0lYXpf3oz%2FwhZU%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi_e5GOebf1pUAReS4AjQBkLbm1STKyEo7tKo2-e90gjJbmJsb5agYUbhl4j3lK6w",
//         thumbnail:
//           "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=zAhX%2FEhCFGcWw0lYXpf3oz%2FwhZU%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi_e5GOebf1pUAReS4AjQBkLbm1STKyEo7tKo2-e90gjJbmJsb5agYUbhl4j3lK6w"
//       },
//       {
//         original:
//           "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=HGaGnpxaYz89ZufTMDm248KqyrM%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi7es7ZfLOjoEAXe31UjQA3K7q1SDGzQY66f9u7f9wl3ZKwcpT5agYUbhl4j3lK6w",
//         thumbnail:
//           "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=HGaGnpxaYz89ZufTMDm248KqyrM%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi7es7ZfLOjoEAXe31UjQA3K7q1SDGzQY66f9u7f9wl3ZKwcpT5agYUbhl4j3lK6w"
//       },
//       {
//         original:
//           "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=FVmYNIvhToj5Tfy8g1RfA7eHGOw%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjofZPcf7b1rUAUeipSjQBkLO-1STjpRo7vKo_nddR23cbtcJD5agYUbhl4j3lK6w",
//         thumbnail:
//           "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=FVmYNIvhToj5Tfy8g1RfA7eHGOw%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjofZPcf7b1rUAUeipSjQBkLO-1STjpRo7vKo_nddR23cbtcJD5agYUbhl4j3lK6w"
//       },
//       {
//         original:
//           "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=bLzlB5rf3b%2B%2Bl2QhsnCOv641Tig%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi6esTYcLKgoEAQKi0DjQBkLb21STfoQI7qK4nrdIlziMTjJpj5agYUbhl4j3lK6w",
//         thumbnail:
//           "https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=bLzlB5rf3b%2B%2Bl2QhsnCOv641Tig%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi6esTYcLKgoEAQKi0DjQBkLb21STfoQI7qK4nrdIlziMTjJpj5agYUbhl4j3lK6w"
//       }
//     ]
//   }).save()
// })()


const app = express();
const { PORT, DB_USER, DB_PASSWORD } = process.env;
app.use(cors())

mongoose.connect(
  `mongodb://${DB_USER}:${DB_PASSWORD}@ds119090.mlab.com:19090/pablond-portfolio`,
  { useNewUrlParser: true },
  () => console.log("Database is connected")
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    customFormatErrorFn: (err) => ({ message: err.locations, status: parseInt(err.message) }),
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

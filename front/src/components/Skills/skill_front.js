export default {
  nodes: [
    { id: "Front end", group: 7 },
    // {id: "Data", group: 3},
    { id: "HTML5", group: 2 },
    { id: "Gatsby", group: 1 },
    { id: "CSS3", group: 3 },
    { id: "SASS", group: 3 },
    { id: "React Native", group: 6 },
    { id: "React", group: 6 },
    { id: "Redux", group: 4 },
    { id: "Expo", group: 1 },
    { id: "Framework", group: 6 }
  ],
  links: [
    { source: "Front end", target: "HTML5", value: 3 },
    { source: "Front end", target: "CSS3", value: 3 },
    { source: "Front end", target: "Framework", value: 3 },
    { source: "Framework", target: "React", value: 3 },
    { source: "Framework", target: "React Native", value: 3 },
    { source: "React", target: "Redux", value: 1 },
    { source: "Expo", target: "React Native", value: 1 },
    { source: "React Native", target: "Redux", value: 1 },
    { source: "React", target: "Gatsby", value: 1 },
    { source: "CSS3", target: "SASS", value: 1 },
  ],
}

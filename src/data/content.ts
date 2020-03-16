export const header: {
  name: string
  role: string
  description: string
  resume: string
} = {
  name: "Pierre-Alexis Blond",
  role: "Fullstack Developer",
  description:
    "Full stack web and mobile development for your idea or product.",
  resume: "-> My Resume <-",
}

export const bio = {
  content: ['Hi,', "I am a full stack developer with deep knowledge of web app development, I've got experience in developing a great number of web apps grown from simple idea to deployment and beyond.", "Flexible and adaptive, I've got big expertise in Web and Mobile architectures, libraries, and frameworks.", 'Feel free to contact me for any purpose !']
}

export const social: {
  linkedin: string
  twitter: string
  github: string
} = {
  linkedin: "https://www.linkedin.com/in/pierre-alexis-blond-00924b158/",
  twitter: "https://twitter.com/_pablond",
  github: "https://github.com/PABlond",
}

export const hire: {
  form: {
    mail: {
      type: string
      label: string
      placeholder: string
      name: string
    }
    name: {
      type: string
      label: string
      placeholder: string
      name: string
    }
    message: {
      type: string
      label: string
      placeholder: string
      name: string
    }
  }
} = {
  form: {
    mail: {
      type: "text",
      label: "Email",
      placeholder: "name@example.com",
      name: "email",
    },
    name: {
      type: "text",
      label: "Name",
      placeholder: "John Doe",
      name: "name",
    },
    message: {
      type: "textarea",
      label: "Message",
      placeholder: "",
      name: "message",
    },
  },
}

import { contact, isRead, sendMessage } from "./contactResolvers"
import { about, setAboutDesc, certifications } from "./aboutResolvers"
import { header, setHeader } from "./headerResolvers"
import { works, setWorks } from "./worksResolvers"
import { login } from "./authResolvers"

export const contactResolvers = {
  contact,
  isRead,
  sendMessage
}

export const aboutResolvers = {
  about,
  setAboutDesc,
  certifications
}

export const headerResolver = {
  header,
  setHeader
}

export const worksResolvers = {
  works,
  setWorks
}

export const authResolvers = {
  login
}

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  // Request to check user credentials
  if (username === `john` && password === `pass`) { //TODO: add logic
    return setUser({
      username: `john`,
      name: `Johnny`,
      email: `johnny@example.org`,
    })
  }

  return false
}

export const isLoggedIn = () => !!getUser().username

export const logout = callback => {
  setUser({})
  callback()
}

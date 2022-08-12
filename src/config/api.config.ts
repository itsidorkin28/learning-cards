export const API_LOCAL_URL = `${process.env.REACT_APP_LOCAL_SERVER_URL}`
export const API_HEROKU_URL = `${process.env.REACT_APP_HEROKU_SERVER_URL}`

export const getAuthUrl = (string: string) => `/auth${string}`

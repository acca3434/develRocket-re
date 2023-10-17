const { NODE_ENV } = process.env
const isDev = NODE_ENV === 'development'

export const baseURL = isDev ? 'http://127.0.0.1:4000' : 'https://api.develrocket.com'
export const currentURL = isDev ? 'http://127.0.0.1:3005/api' : 'https://admin.develrocket.com/api'
export const clientURL = isDev ? 'http://127.0.0.1:3000' : 'https://develrocket.com'
export const Domain = isDev ? '127.0.0.1' : '.develrocket.com'
export const S3Url = `https://develrocket-test.s3.ap-northeast-2.amazonaws.com`

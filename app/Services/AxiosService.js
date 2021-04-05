export const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=1&type=boolean',
  timeout: 10000
})
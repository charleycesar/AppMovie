// import axios from 'axios'
import { Config } from '@/config'
import { setup } from 'axios-cache-adapter'

const instance = setup({
    baseURL: Config.API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Config.TOKEN_TMDB}`,
    },
    params: {
        language: Config.LANGUAGE,
    },
    timeout: 3000,
    cache: {
        maxAge: 15 * 60 * 1000,
    },
})

export const handleError = ({ message, data, status }) => {
    return Promise.reject({ message, data, status })
}

instance.interceptors.response.use(
    (response) => response,
    ({ message, response: { data, status } }) => {
        return handleError({ message, data, status })
    },
)

export default instance

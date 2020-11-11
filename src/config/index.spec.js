import { Config } from '@/config'

describe('Testing config App Constants', () => {
    it('should be equal all values', () => {
        expect(Config.API_URL).toEqual('https://api.themoviedb.org/3/')
        expect(Config.IMAGE_BASE_URL).toEqual('https://image.tmdb.org/t/p')
        expect(Config.LANGUAGE).toEqual('pt-BR')
        expect(Config.TOKEN_TMDB).not.toBeNull()
    })
})

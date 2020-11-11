import { LABELS, optionsChoose } from '@modules/search/helpers'

describe('Testing Labels', () => {
    it('should retrieve all values labels', () => {
        expect(LABELS.movie.name).toEqual('Filmes')
        expect(LABELS.tv.name).toEqual('TV Shows')
    })
})

describe('Testing optionsChoose', () => {
    it('should retrieve 2 options', () => {
        expect(optionsChoose).toHaveLength(2)
    })
    it('should retrieve correct values', () => {
        expect(optionsChoose[0].value).toEqual('movie')
        expect(optionsChoose[1].value).toEqual('tv')
    })
    it('should retrieve correct names', () => {
        expect(optionsChoose[0].name).toEqual('Filmes')
        expect(optionsChoose[1].name).toEqual('TV Shows')
    })
})

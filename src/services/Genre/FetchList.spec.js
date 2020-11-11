import GenreFetchList from '@/services/Genre/FetchList'
import GenresMock from '@mocks/genres.json'

describe('Testing Genre Validation', () => {
    it('should return handleError when there is no type', () => {
        return GenreFetchList().catch((error) =>
            expect(error.message).toEqual('type is required'),
        )
    })

    it('should return handleError when type is not permit', () => {
        return GenreFetchList('multi').catch((error) =>
            expect(error.message).toEqual('this type is not allowed'),
        )
    })
})

describe('Testing success', () => {
    it('fetches successfully data from an API', async () => {
        expect(GenreFetchList('tv')).resolves.toEqual(GenresMock)
    })
})

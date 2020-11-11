import MovieFetchOne from '@/services/Movie/FetchOne'
import MoviesMock from '@mocks/movies.json'

describe('Testing Movie Validation', () => {
    it('should return handleError when there is no movieId', () => {
        return MovieFetchOne().catch((error) =>
            expect(error.message).toEqual('movieId is required'),
        )
    })
})

describe('Testing success', () => {
    it('fetches successfully data from an API', async () => {
        const response = await MovieFetchOne(1)
        expect(response).toEqual(MoviesMock.results[0])
    })
})

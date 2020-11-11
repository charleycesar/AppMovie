import MovieFetchList from '@/services/Movie/FetchList'
import MoviesMock from '@mocks/movies.json'

describe('Testing success', () => {
    it('fetches successfully data from an API', async () => {
        expect(MovieFetchList()).resolves.toEqual({ data: MoviesMock })
    })
})

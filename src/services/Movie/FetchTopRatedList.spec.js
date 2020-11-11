import FetchTopRatedList from '@/services/Movie/FetchTopRatedList'
import MoviesMock from '@mocks/movies.json'

describe('Testing success', () => {
    it('fetches successfully data from an API', async () => {
        const response = await FetchTopRatedList()
        expect(response).toEqual(MoviesMock)
    })
})

import FetchList from '@/services/MultiSearch/FetchList'
import MoviesMock from '@mocks/movies.json'

describe('Testing Multi Search Validation', () => {
    it('should return handleError when there is no params', () => {
        return FetchList().catch((error) =>
            expect(error.message).toEqual('query is required'),
        )
    })
})

describe('Testing success', () => {
    it('fetches successfully data from an API', async () => {
        const response = await FetchList({ query: 'teste' })
        expect(response).toEqual({ data: MoviesMock })
    })
})

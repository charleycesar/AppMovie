import DiscoverFetchList from '@/services/Discover/FetchList'
import DiscoverMock from '@mocks/discover.json'

describe('Testing Discover Validation', () => {
    it('should return handleError when there is no searchType', () => {
        return DiscoverFetchList().catch((error) =>
            expect(error.message).toEqual('type is required'),
        )
    })

    it('should return handleError when type is not permit', () => {
        return DiscoverFetchList('multi').catch((error) =>
            expect(error.message).toEqual('this type is not allowed'),
        )
    })
})

describe('Testing success', () => {
    it('fetches successfully data from an API', async () => {
        await expect(DiscoverFetchList('tv')).resolves.toEqual(DiscoverMock)
    })
})

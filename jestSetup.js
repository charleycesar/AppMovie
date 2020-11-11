import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock'

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage)
jest.mock('react-native-gesture-handler', () => {})
jest.mock('@react-navigation/stack', () => {
    return { Header: () => 'whatever' }
})
jest.mock('axios')
jest.mock('axios-cache-adapter', () => {
    return {
        setup: jest.fn().mockReturnValue({
            adapter: 'mockAdapter',
            interceptors: {
                request: { use: jest.fn(), eject: jest.fn() },
                response: { use: jest.fn(), eject: jest.fn() },
            },
            get: jest.fn((url) => {
                if (url === 'discover/tv') {
                    const discoverMock = require('@mocks/discover.json')
                    return Promise.resolve(discoverMock)
                }
                if (url === 'genre/tv/list') {
                    const genreMock = require('@mocks/genres.json')
                    return Promise.resolve(genreMock)
                }
                if (url === 'movie/popular') {
                    const moviesMock = require('@mocks/movies.json')
                    return Promise.resolve(moviesMock)
                }
                if (url === 'movie/top_rated' || url === 'search/multi') {
                    const moviesTopRatedMock = require('@mocks/movies.json')
                    return Promise.resolve({ data: moviesTopRatedMock })
                }
                if (url === 'movie/1') {
                    const moviesMock = require('@mocks/movies.json')
                    return Promise.resolve({ data: moviesMock.results[0] })
                }
            }),
        }),
    }
})

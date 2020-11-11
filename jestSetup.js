import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock'
import { NativeModules, View as mockView } from 'react-native'

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

jest.mock(
    '@modules/navigation/hooks',
    () => require('@mocks/react-navigation').useNavigation,
)

jest.mock('realm', () => require('@mocks/realm').default)

jest.mock('react-native-reanimated', () => {
    return {
        Value: jest.fn(),
        event: jest.fn(),
        add: jest.fn(),
        eq: jest.fn(),
        set: jest.fn(),
        cond: jest.fn(),
        interpolate: jest.fn(),
        View: mockView,
        Extrapolate: { CLAMP: jest.fn() },
    }
})

NativeModules.RNCNetInfo = {
    getCurrentState: jest.fn(() => Promise.resolve()),
    addListener: jest.fn(),
    removeListeners: jest.fn(),
}

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
}))

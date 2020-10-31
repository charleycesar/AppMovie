import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock'

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage)
jest.mock('react-native-gesture-handler', () => {})
jest.mock('@react-navigation/stack', () => {
    return { Header: () => 'whatever' }
})

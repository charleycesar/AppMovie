export const useNavigation = {
    useNavigation: () => ({
        navigate: jest.fn(),
        replace: jest.fn(),
    }),
    useNativeNavigation: () => ({
        openDrawer: jest.fn(),
        closeDrawer: jest.fn(),
    }),
    useRoute: () => ({
        openDrawer: jest.fn(),
        closeDrawer: jest.fn(),
        params: {
            typeSearch: 'movie',
        },
    }),
}

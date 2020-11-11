export const useNavigation = {
    useNavigation: () => ({
        navigate: jest.fn(),
        replace: jest.fn(),
    }),
    useNativeNavigation: () => ({
        openDrawer: jest.fn(),
        closeDrawer: jest.fn(),
    }),
}

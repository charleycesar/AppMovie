import React from 'react'
import { renderWithTheme, getProps } from '@tests/utils'
import Startup from '@modules/startup/screens/Startup'

const testIDComponent = 'AppMovieSplash-component'

jest.useFakeTimers()
describe(`Testing Startup Screen`, () => {
    beforeEach(() => {
        const renderComponent = renderWithTheme(<Startup />)

        this.getTestID = renderComponent.getByTestId
    })

    it('check if has prop testID', () => {
        const testIDsInComponent = [`${testIDComponent}`]
        testIDsInComponent.map((testID) => {
            expect(this.getTestID(testID).props.testID).toEqual(testID)
        })
    })

    it('check if replace is called', () => {
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000)
    })
})

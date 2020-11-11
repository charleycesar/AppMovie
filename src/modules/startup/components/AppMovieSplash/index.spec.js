import React from 'react'
import { renderWithTheme, getProps } from '@tests/utils'
import AppMovieSplash from '@modules/startup/components/AppMovieSplash'

const componentName = 'AppMovieSplash'
const testIDComponent = 'AppMovieSplash-component'
const getPropsComponent = (component) => getProps(component, testIDComponent)

describe(`Testing ${componentName}`, () => {
    beforeEach(() => {
        const renderComponent = renderWithTheme(<AppMovieSplash />)

        this.getTestID = renderComponent.getByTestId
    })

    it('check if has prop testID', () => {
        const testIDsInComponent = [
            `${componentName}-component`,
            `${componentName}-animation`,
        ]
        testIDsInComponent.map((testID) => {
            expect(this.getTestID(testID).props.testID).toEqual(testID)
        })
    })
})

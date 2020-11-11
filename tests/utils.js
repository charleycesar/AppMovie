import ThemeProvider from '@styles/ThemeProvider'
import React from 'react'
import { render } from '@testing-library/react-native'

const renderWithTheme = (child) => {
    return render(<ThemeProvider>{child}</ThemeProvider>)
}

const getProps = (component, testID) => {
    return component.getByTestId(testID).parent.props
}

const generateTestProps = ({ type, arrayToTest, props }) => {
    switch (type) {
        case 'toBeTruthy':
            return arrayToTest.map((propToCheck) => {
                expect(props[propToCheck]).toBeTruthy()
            })
            break
        case 'toBeFalsy':
            return arrayToTest.map((propToCheck) => {
                expect(props[propToCheck]).toBeFalsy()
            })
            break
        case 'propsToBeEqual':
            return arrayToTest.map((objectCheck) => {
                Object.keys(objectCheck).map((propName) => {
                    expect(props[propName]).toEqual(objectCheck[propName])
                })
            })
            break
        case 'propsToBeEqualInObject':
            arrayToTest.map((objectCheck) => {
                Object.keys(objectCheck).map((propName) => {
                    Object.keys(objectCheck[propName]).map((propKey, index) => {
                        expect(props[propName][propKey]).toEqual(
                            objectCheck[propName][propKey],
                        )
                    })
                })
            })
            break
    }
}

export { renderWithTheme, getProps, generateTestProps }

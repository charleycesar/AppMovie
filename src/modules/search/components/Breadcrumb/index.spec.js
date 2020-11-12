import React from 'react'
import { renderWithTheme, getProps } from '@tests/utils'
import Breadcrumb from '@modules/search/components/Breadcrumb'
import { fireEvent } from '@testing-library/react-native'

const componentName = 'Breadcrumb'
const testIDComponent = 'Breadcrumb-component'
const getPropsComponent = (component) => getProps(component, testIDComponent)

describe(`Testing ${componentName}`, () => {
    beforeEach(() => {
        const renderComponent = renderWithTheme(<Breadcrumb />)
        this.getTestID = renderComponent.getByTestId
        this.props = getPropsComponent(renderComponent)
    })

    it('check if has prop testID', () => {
        const testIDsInComponent = [
            `${componentName}-component`,
            `${componentName}-BackButton`,
            `${componentName}-onPressChoose`,
            `${componentName}-choose-name`,
            `${componentName}-onPressGenre`,
            `${componentName}-onPressGenre-genre-name`,
            `${componentName}-onPressSearch`,
        ]
        testIDsInComponent.map((testID) => {
            expect(this.getTestID(testID).props.testID).toEqual(testID)
        })
    })

    it('check goBack press', () => {
        const onPressGoBack = jest.fn()
        const { getByTestId } = renderWithTheme(
            <Breadcrumb onPressGoBack={onPressGoBack} />,
        )

        fireEvent.press(getByTestId(`${componentName}-BackButton`), 'onPress')
        expect(onPressGoBack).toHaveBeenCalled()
    })

    it('check onPressGenre press', () => {
        const onPressGenre = jest.fn()
        const { getByTestId } = renderWithTheme(
            <Breadcrumb onPressGenre={onPressGenre} />,
        )

        fireEvent.press(getByTestId(`${componentName}-onPressGenre`), 'onPress')
        expect(onPressGenre).toHaveBeenCalled()
    })

    it('check onPressChoose press', () => {
        const onPressChoose = jest.fn()
        const { getByTestId } = renderWithTheme(
            <Breadcrumb onPressChoose={onPressChoose} />,
        )

        fireEvent.press(
            getByTestId(`${componentName}-onPressChoose`),
            'onPress',
        )
        expect(onPressChoose).toHaveBeenCalled()
    })

    it('check onPressSearch press', () => {
        const onPressSearch = jest.fn()
        const { getByTestId } = renderWithTheme(
            <Breadcrumb onPressSearch={onPressSearch} />,
        )

        fireEvent.press(
            getByTestId(`${componentName}-onPressSearch`),
            'onPress',
        )
        expect(onPressSearch).toHaveBeenCalled()
    })

    it('check render correct label for tv', () => {
        const { queryAllByText } = renderWithTheme(
            <Breadcrumb choose={{ value: 'tv' }} />,
        )

        const search = queryAllByText(`TV Shows`)
        expect(search).toHaveLength(1)
    })

    it('check render correct label for movie', () => {
        const { queryAllByText } = renderWithTheme(
            <Breadcrumb choose={{ value: 'movie' }} />,
        )

        const search = queryAllByText(`Filmes`)
        expect(search).toHaveLength(1)
    })
})

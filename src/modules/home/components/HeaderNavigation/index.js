import Box from '@UI/Box'
import { propTypes, defaultProps } from './propTypes'
import React from 'react'
import HeaderNavigationItem from '@modules/home/components/HeaderNavigationItem'

const HeaderNavigation = ({ options }) => (
    <Box direction="row" py={3} animation={'slideInDown'}>
        {options.map((option, index) => (
            <HeaderNavigationItem key={index.toString()} label={option.label} />
        ))}
    </Box>
)

HeaderNavigation.propTypes = {
    ...propTypes,
}

HeaderNavigation.defaultProps = {
    ...defaultProps,
}

export default React.memo(HeaderNavigation)

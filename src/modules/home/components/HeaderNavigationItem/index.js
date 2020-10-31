import Box from '@UI/Box'
import { propTypes, defaultProps } from './propTypes'
import React from 'react'
import Text from '@UI/Text'

const HeaderNavigationItem = ({ label }) => (
    <Box display={'flex'} alignItems="center">
        <Text>{label}</Text>
    </Box>
)

HeaderNavigationItem.propTypes = {
    ...propTypes,
}

HeaderNavigationItem.defaultProps = {
    ...defaultProps,
}

export default React.memo(HeaderNavigationItem)

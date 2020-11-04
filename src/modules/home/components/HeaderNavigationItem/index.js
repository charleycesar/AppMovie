import Box from '@UI/Box'
import { propTypes, defaultProps } from './propTypes'
import React from 'react'
import Text from '@UI/Text'
import { TouchableOpacity } from 'react-native'

const HeaderNavigationItem = ({ label, onPress }) => (
    <Box display={'flex'} alignItems="center">
        <TouchableOpacity onPress={onPress}>
            <Text color="white" weight={'medium'}>
                {label}
            </Text>
        </TouchableOpacity>
    </Box>
)

HeaderNavigationItem.propTypes = {
    ...propTypes,
}

HeaderNavigationItem.defaultProps = {
    ...defaultProps,
}

export default React.memo(HeaderNavigationItem)

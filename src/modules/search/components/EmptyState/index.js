import React from 'react'
import Box from '@UI/Box'
import Text from '@UI/Text'
import { propTypes, defaultProps } from './propTypes'
import Empty from '@assets/images/Empty'

const EmptyState = ({ title, description }) => {
    return (
        <Box display="flex" alignItems="center" justifyContent={'center'}>
            <Empty color={'secondary'} />
            <Text variant="h4" align="center">
                {title}
            </Text>
            <Text variant="h5" align="center">
                {description}
            </Text>
        </Box>
    )
}
EmptyState.propTypes = {
    ...propTypes,
}

EmptyState.defaultProps = {
    ...defaultProps,
}

export default React.memo(EmptyState)

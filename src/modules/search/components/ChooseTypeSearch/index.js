import React from 'react'
import Box from '@UI/Box'
import Text from '@UI/Text'
import Thumbnail from '@UI/Thumbnail'
import { getScreenDimensions } from '@helpers/screen'
import { propTypes, defaultProps } from './propTypes'

const cardWidth = getScreenDimensions().width / 2

const ChooseTypeSearch = ({ title, options }) => (
    <Box pt={2}>
        <Text variant="h4" align="center">
            {title}
        </Text>
        <Box direction="row" alignSelf="space-around" py={2}>
            {options.map((option) => (
                <Box display="flex" key={option.name}>
                    <Thumbnail
                        width={cardWidth}
                        height={250}
                        uri={option.uri}
                        usePrefix={false}
                    />
                    <Text variant="h4" align={'center'}>
                        {option.name}
                    </Text>
                </Box>
            ))}
        </Box>
    </Box>
)

ChooseTypeSearch.propTypes = {
    ...propTypes,
}

ChooseTypeSearch.defaultProps = {
    ...defaultProps,
}

export default React.memo(ChooseTypeSearch)

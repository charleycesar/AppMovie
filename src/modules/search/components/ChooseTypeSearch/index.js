import React from 'react'
import Box from '@UI/Box'
import Text from '@UI/Text'
import Thumbnail from '@UI/Thumbnail'
import { getScreenDimensions } from '@helpers/screen'
import { propTypes, defaultProps } from './propTypes'
import { TouchableOpacity } from 'react-native'
import Layout from '@styles/layout'

const cardWidth = getScreenDimensions().width / 2

const ChooseTypeSearch = ({ title, options }) => {
    return (
        <Box pt={2}>
            <Text variant="h4" align="center">
                {title}
            </Text>
            <Box direction="row" alignSelf="space-around" py={2}>
                {options.map((option) => (
                    <Box display="flex" key={option.name}>
                        <TouchableOpacity
                            onPress={option.onPress}
                            style={Layout.alignItemsCenter}>
                            <Thumbnail
                                width={cardWidth}
                                height={250}
                                uri={option.uri}
                                usePrefix={false}
                            />
                            <Text variant="h4" justify={'center'}>
                                {option.name}
                            </Text>
                        </TouchableOpacity>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
ChooseTypeSearch.propTypes = {
    ...propTypes,
}

ChooseTypeSearch.defaultProps = {
    ...defaultProps,
}

export default React.memo(ChooseTypeSearch)

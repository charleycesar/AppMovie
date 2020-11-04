import React from 'react'
import Text from '@UI/Text'
import Box from '@UI/Box'
import { TouchableOpacity } from 'react-native'
import BackButton from '@modules/navigation/BackButton'
import { LABELS } from '@modules/search/helpers'
import ArrowDownIcon from '@UI/Icon/ArrowDownIcon'
import { propTypes, defaultProps } from './propTypes'

const Breadcrumb = ({
    onPressGoBack,
    onPressChoose,
    onPressGenre,
    choose,
    genre,
}) => (
    <Box
        alignItems={'center'}
        animation={'fadeInDown'}
        direction={'row'}
        alignItems={'center'}>
        <BackButton htmlColor={'white'} onPress={onPressGoBack} />
        <TouchableOpacity onPress={onPressChoose}>
            <Box
                fullWidth={false}
                height={40}
                alignItems={'center'}
                direction={'row'}
                pr={2}>
                <Text variant="h4" color="white" fullWidth={false}>
                    {LABELS[choose.value].name || 'não informado'}
                </Text>
                <ArrowDownIcon color={'white'} />
            </Box>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressGenre}>
            <Box
                fullWidth={false}
                height={40}
                alignItems={'center'}
                direction={'row'}>
                <Text variant="h5" color="white" fullWidth={false}>
                    {genre.name || 'não informado'}
                </Text>
                <ArrowDownIcon color={'white'} />
            </Box>
        </TouchableOpacity>
    </Box>
)

Breadcrumb.propTypes = {
    ...propTypes,
}

Breadcrumb.defaultProps = {
    ...defaultProps,
}

export default React.memo(Breadcrumb)

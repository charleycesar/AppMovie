import Box from '@UI/Box'
import { propTypes, defaultProps } from './propTypes'
import React from 'react'
import Thumbnail from '@UI/Thumbnail'
import Text from '@UI/Text'
import moment from 'moment'
moment.locale('pt')

const MovieCard = ({ data }) => {
    const { uri, title, release_date } = data

    return (
        <Box fullWidth={false} width={100}>
            <Thumbnail uri={uri} />
        </Box>
    )
}

MovieCard.propTypes = {
    ...propTypes,
}

MovieCard.defaultProps = {
    ...defaultProps,
}

export default React.memo(MovieCard)

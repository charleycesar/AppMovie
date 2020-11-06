import { propTypes, defaultProps } from './propTypes'
import React from 'react'
import Text from '@UI/Text'
import Box from '@UI/Box'
import moment from 'moment'
import Thumbnail from '@UI/Thumbnail'
import { Rating } from 'react-native-ratings'
import { convertTime } from '@helpers/time'
import { useTheme } from '@styles/hooks'

const DetailsMovie = ({ movie, size }) => {
    const theme = useTheme()
    return (
        <Box p={1} animation={'fadeIn'}>
            <Box direction={'row'} py={0.5}>
                <Thumbnail uri={`${movie.poster_path}`} />
                <Box px={1}>
                    <Text variant={'h6'} color={'white'} numberOfLines={2}>
                        {movie.title}
                    </Text>
                    <Box direction="row" py={1}>
                        <Text color="white">
                            {moment(movie.release_date).format('Y')}
                        </Text>
                        {movie.adult ? (
                            <Box
                                bgcolor={'red'}
                                justifyContent="center"
                                fullWidth={false}
                                width={25}
                                height={20}
                                ml={1}
                                mr={1}
                                border={{ radius: 5 }}>
                                <Text
                                    variant={'body2'}
                                    color="white"
                                    align={'center'}
                                    weight={'medium'}>
                                    18
                                </Text>
                            </Box>
                        ) : (
                            <Box
                                bgcolor={'green'}
                                justifyContent="center"
                                fullWidth={false}
                                width={25}
                                height={20}
                                ml={1}
                                mr={1}
                                border={{ radius: 5 }}>
                                <Text
                                    variant={'body3'}
                                    color="white"
                                    align={'center'}
                                    weight={'medium'}>
                                    L
                                </Text>
                            </Box>
                        )}
                        {movie.runtime && (
                            <Text color="white">
                                {convertTime(movie.runtime)}
                            </Text>
                        )}
                    </Box>
                    <Text>Avaliação</Text>
                    {movie.vote_average && (
                        <Rating
                            tintColor={theme.palette.grey.dark}
                            ratingCount={5}
                            imageSize={15}
                            startingValue={movie.vote_average / 2}
                            readonly
                            ratingBackgroundColor={'grey'}
                        />
                    )}
                </Box>
            </Box>
            <Text variant={'body2'} color="textPrimary" weight={'medium'}>
                {movie.overview || 'Sem informações'}
            </Text>
        </Box>
    )
}

DetailsMovie.propTypes = {
    ...propTypes,
}

DetailsMovie.defaultProps = {
    ...defaultProps,
}

export default React.memo(DetailsMovie)

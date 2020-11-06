import Box from '@UI/Box'
import Thumbnail from '@UI/Thumbnail'
import { getScreenDimensions } from '@helpers/screen'
import { propTypes, defaultProps } from './propTypes'
import React from 'react'
import { TouchableOpacity, FlatList } from 'react-native'
import Loading from '@UI/Loading'

const CatalogList = ({
    data,
    onPressItem,
    loading,
    discoverMovies,
    onScroll,
}) => (
    <Box alignItems="center">
        <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
                if (item.poster_path) {
                    return (
                        <Box
                            fullWidth={false}
                            width={'50%'}
                            py={2}
                            alignItems={'center'}>
                            <TouchableOpacity onPress={() => onPressItem(item)}>
                                <Thumbnail
                                    width={getScreenDimensions().width / 2}
                                    height={200}
                                    uri={`${item.poster_path}`}
                                />
                            </TouchableOpacity>
                        </Box>
                    )
                }
                return null
            }}
            ListFooterComponent={() => {
                return loading ? (
                    <Box fullWidth={false} justifyContent={'center'}>
                        <Loading />
                    </Box>
                ) : null
            }}
            onScroll={onScroll}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                {
                    !loading && discoverMovies()
                }
            }}
            scrollEventThrottle={400}
        />
    </Box>
)

CatalogList.propTypes = {
    ...propTypes,
}

CatalogList.defaultProps = {
    ...defaultProps,
}

export default React.memo(CatalogList)

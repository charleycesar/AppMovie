import React from 'react'
import Text from '@UI/Text'
import Box from '@UI/Box'
import { TextInput } from 'react-native'
import { useTheme } from '@styles/hooks'
import { propTypes, defaultProps } from './propTypes'

const SearchBar = ({ onChangeText, onBlur, btnText, placeholder }) => {
    const theme = useTheme()

    return (
        <Box direction="row" alignItems="center" px={2} pb={2}>
            <Box
                p={2}
                border={{ radius: 8 }}
                bgcolor={theme.palette.grey.main}
                mt={1}
                animation={'fadeIn'}>
                <TextInput
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    style={{
                        width: '100%',
                        color: theme.palette.grey.darkest,
                        fontSize: 18,
                        fontWeight: 'bold',
                        padding: 0,
                    }}
                    selectionColor={theme.palette.primary.main}
                    autoCompleteType={'off'}
                    autoCorrect={false}
                    returnKeyType={'search'}
                    autoCapitalize={'none'}
                    maxLength={30}
                    underlineColorAndroid="transparent"
                />
            </Box>
        </Box>
    )
}

SearchBar.propTypes = {
    ...propTypes,
}

SearchBar.defaultProps = {
    ...defaultProps,
}

export default React.memo(SearchBar)

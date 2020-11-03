import React from 'react'
import FetchList from '@/services/Genre/FetchList'
import getRealm from '@/services/realm'

const useGenres = () => {
    const [genres, setGenres] = React.useState([])

    const saveGenre = async (genre, typeSearch) => {
        const data = {
            uuid: `${genre.id}${typeSearch}`,
            id: genre.id,
            name: genre.name,
            type_search: typeSearch,
        }

        const realm = await getRealm()

        realm.write(() => {
            realm.create('Genre', data, 'modified')
        })

        return data
    }

    const populateRealm = async () => {
        try {
            const realm = await getRealm()
            const genres = realm.objects('Genre').toJSON()

            if (genres.length) {
                return genres
            }

            const dataMovies = await FetchList('movie')
            const dataTv = await FetchList('tv')
            if (dataMovies?.genres?.length) {
                dataMovies.genres.map(async (genre) => {
                    saveGenre(genre, 'movie')
                })
            }
            if (dataTv?.genres?.length) {
                dataTv.genres.map(async (genre) => {
                    saveGenre(genre, 'tv')
                })
            }
        } catch (error) {
            alert('Houve um erro, favor entrar em contato com a empresa.')
        }
    }

    const getGenres = async (typeSearch) => {
        try {
            const realm = await getRealm()
            const genres = realm
                .objects('Genre')
                .filtered(`type_search = '${typeSearch}'`)
            setGenres(genres)
        } catch (error) {
            alert(
                'Houve um erro, ao buscar os dados de genero tente novamente mais tarde.',
            )
        }
    }

    return {
        populateRealm,
        getGenres,
        genres,
    }
}

export default useGenres

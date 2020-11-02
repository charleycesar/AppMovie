import config from '@modules/search/config'
import Search from '@modules/search/screens/Search'
import Genre from '@modules/search/screens/Genre'

export default [
    {
        name: 'Search',
        component: Search,
        path: `${config.frontEndUrl}/index`,
        options: {
            header: () => null,
        },
    },
    {
        name: 'Genre',
        component: Genre,
        path: `${config.frontEndUrl}/genre`,
        options: {
            header: () => null,
        },
    },
    {
        name: 'Tv',
        component: Genre,
        path: `${config.frontEndUrl}/tv`,
        options: {
            header: () => null,
        },
    },
]

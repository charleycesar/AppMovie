import config from '@modules/search/config'
import Search from '@modules/search/screens/Search'

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
        name: 'Movie',
        component: Search,
        path: `${config.frontEndUrl}/movie`,
        options: {
            header: () => null,
        },
    },
    {
        name: 'Tv',
        component: Search,
        path: `${config.frontEndUrl}/tv`,
        options: {
            header: () => null,
        },
    },
]

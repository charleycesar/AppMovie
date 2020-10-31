import config from '@modules/startup/config'
import Startup from '@modules/startup/screens/Startup'

export default [
    {
        name: 'Startup',
        component: Startup,
        path: `${config.urlStack}/index`,
        options: {
            header: () => null,
        },
    },
]

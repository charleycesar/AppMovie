import fetchOneMovieService from '@/services/Movie/FetchOne'
import { buildAction, buildReducers } from '@/store/builder'

export default {
    initialState: {
        fetchOne: { loading: false, error: null },
    },
    action: buildAction('movie/fetchOne', fetchOneMovieService),
    reducers: buildReducers({
        errorKey: 'fetchOne.error',
        loadingKey: 'fetchOne.loading',
    }),
}

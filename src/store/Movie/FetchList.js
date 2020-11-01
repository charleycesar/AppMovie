import fetchListMovieService from '@/services/Movie/FetchList'
import { buildAction, buildReducers } from '@/store/builder'

export default {
    initialState: {
        fetchList: { loading: false, error: null },
    },
    action: buildAction('movie/fetchList', fetchListMovieService),
    reducers: buildReducers({
        errorKey: 'fetchList.error',
        loadingKey: 'fetchList.loading',
    }),
}

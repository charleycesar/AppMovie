import fetchTopRatedListMovieService from '@/services/Movie/FetchTopRatedList'
import { buildAction, buildReducers } from '@/store/builder'

export default {
    initialState: {
        fetchList: { loading: false, error: null },
    },
    action: buildAction(
        'topRatedMovies/fetchList',
        fetchTopRatedListMovieService,
    ),
    reducers: buildReducers({
        errorKey: 'fetchList.error',
        loadingKey: 'fetchList.loading',
    }),
}

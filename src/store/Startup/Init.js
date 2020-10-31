import { buildAction, buildReducers } from '@/store/builder'
import FetchOne from '@/store/Movie/FetchOne'

export default {
    initialState: { loading: false, error: null },
    action: buildAction('startup/init', async (args, { dispatch }) => {
        await dispatch(FetchOne.action(1))
    }),
    reducers: buildReducers({ itemKey: null }),
}

import { buildAction, buildReducers } from '@/store/builder'

export default {
    initialState: { loading: false, error: null },
    action: buildAction('startup/init', {}),
    reducers: buildReducers({ itemKey: null }),
}

import { buildSlice } from '@/store/builder'
import FetchOne from './FetchOne'

const moduleInitialState = {
    item: {},
}

export default buildSlice('user', [FetchOne], moduleInitialState).reducer

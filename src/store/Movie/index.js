import { buildSlice } from '@/store/builder'
import FetchOne from './FetchOne'

const moduleInitialState = {
    item: {},
}

export default buildSlice('movie', [FetchOne], moduleInitialState).reducer

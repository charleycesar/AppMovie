import { buildSlice } from '@/store/builder'
import FetchOne from './FetchOne'
import FetchList from './FetchList'

const moduleInitialState = {
    item: {},
}

export default buildSlice('movies', [FetchOne, FetchList], moduleInitialState)
    .reducer

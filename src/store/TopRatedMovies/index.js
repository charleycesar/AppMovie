import { buildSlice } from '@/store/builder'
import FetchList from './FetchList'

const moduleInitialState = {
    item: {},
}

export default buildSlice('topRatedMovies', [FetchList], moduleInitialState)
    .reducer

import { buildSlice } from '@/store/builder'
import InitStartup from './Init'

export default buildSlice('startup', [InitStartup]).reducer

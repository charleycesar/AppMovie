import api, { handleError } from '@/services'

export default (params) => {
    if (!params?.query) {
        return handleError({ message: 'query is required' })
    }

    return api.get(`search/multi`, { params })
}

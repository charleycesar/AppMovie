import api, { handleError } from '@/services'

export default (searchType, params) => {
    const TYPES_ALLOWED = ['tv', 'movie']

    if (!searchType) {
        return handleError({ message: 'type is required' })
    }

    if (!TYPES_ALLOWED.includes(searchType)) {
        return handleError({ message: 'this type is not allowed' })
    }

    return api.get(`discover/${searchType}`, { params })
}

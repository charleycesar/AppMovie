import api from '@/services'

export default async (type) => {
    const TYPES_ALLOWED = ['tv', 'movie']
    if (!type) {
        return handleError({ message: 'type is required' })
    }

    if (!TYPES_ALLOWED.includes(type)) {
        return handleError({ message: 'this type is not allowed' })
    }

    const response = await api.get(`genre/${type}/list`)
    return response.data
}

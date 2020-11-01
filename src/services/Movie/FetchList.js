import api, { handleError } from '@/services'

export default async (ListId) => {
    if (!ListId) {
        console.log('teste')
        return handleError({ message: 'ListId is required' })
    }
    const response = await api.get(`list/${ListId}`)
    return response.data
}

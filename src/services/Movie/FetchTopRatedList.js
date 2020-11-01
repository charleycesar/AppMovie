import api from '@/services'

export default async () => {
    const response = await api.get(`movie/top_rated`)
    return response.data
}

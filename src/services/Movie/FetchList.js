import api from '@/services'

export default async () => {
    const response = await api.get(`movie/popular`)
    return response.data
}

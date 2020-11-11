export const convertTime = (convertTime) => {
    if (!convertTime) return null
    const num = convertTime
    const hours = num / 60
    const rhours = Math.floor(hours)
    const minutes = (hours - rhours) * 60
    const rminutes = Math.round(minutes)
    return `${rhours}h ${rminutes}m`
}

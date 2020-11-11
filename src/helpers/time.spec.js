import { convertTime } from '@helpers/time'

describe('test time converter', () => {
    it('should to return null without params', () => {
        expect(convertTime()).toBeNull()
    })

    it('should convert time to human format', () => {
        expect(convertTime('109')).toEqual('1h 49m')
    })
})

import config from '@modules/search/config'

describe('Testing config file', () => {
    it('should return correct value for frontEndUrl', () => {
        expect(config.frontEndUrl).toEqual('search')
    })
})

import ConfigStartup from '@modules/startup/config'

describe('Testing configs', () => {
    it('should be equal frontEndUrl', () => {
        expect(ConfigStartup.frontEndUrl).toEqual('startup')
    })
})

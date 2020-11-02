import Realm from 'realm'

export default class GenreSchema extends Realm.Object {
    static schema = {
        name: 'Genre',
        primaryKey: 'uuid',
        properties: {
            uuid: { type: 'string' },
            id: 'int',
            name: 'string',
            type_search: 'string',
        },
    }
}

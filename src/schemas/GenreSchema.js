export default class GenreSchema {
    static schema = {
        name: 'Genre',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            name: 'string',
            type_search: 'string',
        },
    }
}

import Realm from 'realm'
import GenreSchema from '@schemas/GenreSchema'

const SCHEMA_VERSION = 1
export default function getRealm() {
    return new Realm({
        schema: [GenreSchema],
        schemaVersion: SCHEMA_VERSION,
    })
}

import Realm from 'realm'

import GenreSchema from '@schemas/GenreSchema'

export default function getRealm() {
    return Realm.open({
        schema: [GenreSchema],
    })
}

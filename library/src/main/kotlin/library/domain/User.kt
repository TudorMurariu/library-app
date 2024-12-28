package library.domain

import java.util.UUID

class User(
    id: UUID,
    userName: String,
    password: String)
{
    constructor() : this(UUID.randomUUID(), "", "") {}
}
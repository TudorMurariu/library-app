package library.domain

import java.util.*

class Book(
    id: UUID,
    title: String,
    author: String,
    nrOfPages: Int,
    description: String,
    link: String?)
{
    constructor() : this(UUID.randomUUID(), "", "", 0, "", "") {}
}
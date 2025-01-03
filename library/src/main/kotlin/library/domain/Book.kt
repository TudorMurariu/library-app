package library.domain

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import java.util.UUID

@Entity
data class Book(
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID?,
    var title: String,
    var author: String,
    var nrOfPages: Int,
    var description: String,
    var link: String?)
{
    constructor() : this(UUID.randomUUID(), "", "", 0, "", "")
}
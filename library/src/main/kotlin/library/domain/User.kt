package library.domain

import jakarta.persistence.*
import java.util.UUID

@Entity
@Table(name = "\"user\"")
class User(
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    var id: UUID? = null,
    var userName: String,
    var password: String)
{
    constructor() : this(UUID.randomUUID(), "", "")
}
package library.repo

import library.domain.User
import org.springframework.data.jpa.repository.JpaRepository
import java.util.UUID

interface UserRepo : JpaRepository<User, UUID> {
    fun findByUserName(userName: String): User?  // nu merge asa
}
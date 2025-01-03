package library.repo

import library.domain.Book
import org.springframework.data.jpa.repository.JpaRepository
import java.util.UUID

interface BookRepo : JpaRepository<Book, UUID> {
    fun findByTitleStartingWith(title: String): List<Book>
}
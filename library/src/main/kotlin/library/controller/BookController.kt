package library.controller

import library.domain.Book
import library.repo.BookRepo
import org.springframework.web.bind.annotation.*
import java.util.UUID

@RestController
@CrossOrigin
class BookController(
    val repository: BookRepo
) {
    @GetMapping("/books")
    fun all() =
        repository.findAll()

    @PostMapping("/books")
    fun newBook(@RequestBody newBook: Book?) =
        newBook?.let { repository.save(it) }

    @GetMapping("/books/{id}")
    fun one(@PathVariable id: UUID?) =
        id?.let {
            repository.findById(it)
        }

    @PutMapping("/books/{id}")
    fun replaceBook(@RequestBody newBook: Book, @PathVariable id: UUID?) =
        id?.let {
            repository.findById(it)
                .map { book ->
                    book.title = newBook.title
                    book.author = newBook.author
                    book.link = newBook.link
                    book.nrOfPages = newBook.nrOfPages
                    book.description = newBook.description
                    repository.save(book)
                }
        }

    @DeleteMapping("/books/{id}")
    fun deleteBook(@PathVariable id: UUID?) =
        id?.let { repository.deleteById(it) }
}
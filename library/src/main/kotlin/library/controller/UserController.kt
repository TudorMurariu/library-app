package library.controller

import library.domain.User
import library.repo.UserRepo
import org.springframework.web.bind.annotation.*
import java.util.UUID

@RestController
@CrossOrigin
class UserController(
    val repository: UserRepo
) {
    @GetMapping("/users")
    fun all() =
        repository.findAll()

    @PostMapping("/users")
    fun newUser(@RequestBody newUser: User?) =
        newUser?.let { repository.save(it) }

    @GetMapping("/users/{id}")
    fun one(@PathVariable id: UUID?) =
        id?.let {
            repository.findById(it)
        }

    @PutMapping("/users/{id}")
    fun replaceUser(@RequestBody newUser: User, @PathVariable id: UUID?) =
        id?.let {
            repository.findById(it)
                .map { user ->
                    user.userName = newUser.userName
                    user.password = newUser.password
                    repository.save(user)
                }
        }

    @DeleteMapping("/users/{id}")
    fun deleteUser(@PathVariable id: UUID?) =
        id?.let { repository.deleteById(it) }
}
package library

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class OnlineLibraryApplication

fun main(args: Array<String>) {
	runApplication<OnlineLibraryApplication>(*args)
}

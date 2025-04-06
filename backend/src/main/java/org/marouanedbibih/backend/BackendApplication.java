package org.marouanedbibih.backend;

import org.marouanedbibih.backend.student.Student;
import org.marouanedbibih.backend.student.StudentDAO;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(StudentDAO studentDAO) {
        return (args) -> {
            // Initialize 10 students
            for (int i = 1; i <= 10; i++) {
                Student student = Student.builder()
                        .firstName("FirstName" + i)
                        .lastName("LastName" + i)
                        .email("student" + i + "@example.com")
                        .phone("123-456-789" + i)
                        .build();
                studentDAO.save(student);
            }
            System.out.println("10 students have been initialized in the database!");
        };
    }
}

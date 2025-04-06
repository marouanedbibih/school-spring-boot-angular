package org.marouanedbibih.backend.student;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@RequiredArgsConstructor
public class StudentREST {

    private final StudentService studentService;

    // Create a new student
    @PostMapping
    public ResponseEntity<StudentDTO> createStudent(@RequestBody StudentREQ studentREQ) {
        StudentDTO createdStudent = studentService.createStudent(studentREQ);
        return new ResponseEntity<>(createdStudent, HttpStatus.CREATED);
    }

    // Update an existing student
    @PutMapping("/{id}")
    public ResponseEntity<StudentDTO> updateStudent(@RequestBody StudentREQ studentREQ, @PathVariable Long id) {
        StudentDTO updatedStudent = studentService.updateStudent(studentREQ, id);
        return new ResponseEntity<>(updatedStudent, HttpStatus.OK);
    }

    // Delete a student
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT); // 204 No Content
    }

    // Get a student by ID
    @GetMapping("/{id}")
    public ResponseEntity<StudentDTO> getStudent(@PathVariable Long id) {
        StudentDTO student = studentService.getStudent(id);
        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    // Get all students
    @GetMapping
    public ResponseEntity<List<StudentDTO>> getAllStudents() {
        List<StudentDTO> students = studentService.getAllStudents();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }
}

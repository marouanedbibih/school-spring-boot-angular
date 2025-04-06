package org.marouanedbibih.backend.student;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentDAO dao;
    private final StudentMapper mapper;

    // Create a new student
    public StudentDTO createStudent(StudentREQ req) {
        Student student = Student.builder()
                .firstName(req.firstName())
                .lastName(req.lastName())
                .email(req.email())
                .phone(req.phone())
                .build();
        student = dao.save(student);
        return mapper.toDTO(student);
    }

    // Update a student
    public StudentDTO updateStudent(StudentREQ req, Long id) {
        return dao.findById(id)
                .map(student -> {
                    student.setFirstName(req.firstName());
                    student.setLastName(req.lastName());
                    student.setEmail(req.email());
                    student.setPhone(req.phone());
                    student = dao.save(student);
                    return mapper.toDTO(student);
                })
                .orElseThrow(() -> new RuntimeException("Student with ID " + id + " not found"));
    }

    // Delete a student
    public void deleteStudent(Long id) {
        Student student = dao.findById(id)
                .orElseThrow(() -> new RuntimeException("Student with ID " + id + " not found"));
        dao.delete(student);
    }

    // Get student by id
    public StudentDTO getStudent(Long id) {
        return dao.findById(id)
                .map(mapper::toDTO)
                .orElseThrow(() -> new RuntimeException("Student with ID " + id + " not found"));
    }

    // Get all students
    public List<StudentDTO> getAllStudents() {
        return dao.findAll().stream()
                .map(mapper::toDTO)
                .collect(Collectors.toList());
    }
}

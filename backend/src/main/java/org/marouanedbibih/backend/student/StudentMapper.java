package org.marouanedbibih.backend.student;

import org.springframework.stereotype.Component;

@Component
public class StudentMapper {

    public StudentDTO toDTO(Student entity) {
        if (entity == null) {
            return null;
        }
        return StudentDTO.builder()
                .id(entity.getId())
                .lastName(entity.getLastName())
                .firstName(entity.getFirstName())
                .email(entity.getEmail())
                .phone(entity.getPhone())
                .build();
    }

    public Student toEntity(StudentDTO dto) {
        if (dto == null) {
            return null;
        }
        return Student.builder()
                .id(dto.getId())
                .lastName(dto.getLastName())
                .firstName(dto.getFirstName())
                .email(dto.getEmail())
                .phone(dto.getPhone())
                .build();
    }

}

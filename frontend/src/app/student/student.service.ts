import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { get } from 'http';
import { Observable } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  // Attributes
  baseUrl: string = 'http://localhost:8082';
  list: Array<Student> = [];

  constructor(private http: HttpClient) {}

  // Get all students
  getAllStudents(): Observable<Student[]> {
    return this.http.get<Array<Student>>(`${this.baseUrl}/api/students`);
  }

  // Create a new student
  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/api/students`, student);
  }

  // Delete the student by id API
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/api/students/${id}`);
  }

  // Get student by id
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/api/students/${id}`);
  }

  // Update student by id
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(
      `${this.baseUrl}/api/students/${id}`,
      student
    );
  }
}

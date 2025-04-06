import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css',
})
export class ListStudentComponent implements OnInit {
  students: Student[] = [];

  // Default attribttes
  loading: boolean = false;
  msg: string | null = null;

  constructor(
    private service: StudentService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.fetchStudents();
    this.messageService.message$.subscribe((message) => {
      this.msg = message;
    });
  }

  // Add to student
  addStudent(): void {
    this.router.navigate(['/add-student']);
  }

  // Fetch students list
  fetchStudents(): void {
    this.loading = true;
    this.service.getAllStudents().subscribe({
      next: (data) => {
        this.students = data;
        console.log('Students list data : ', data);
      },
      error: (err) => {
        console.log('Error to fetch students list : ', err);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  // Delete student
  deleteStudent(id: number | undefined) {
    if (id === undefined) {
      throw new Error('Student ID is required');
    }
    this.loading = true;
    this.service.deleteStudent(id).subscribe({
      next: () => {
        this.fetchStudents();
        this.messageService.setMessage(
          'The student has been deleted successfully'
        );
      },
      error: (err) => {
        console.log('Error to delete student : ', err);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  updateStudent(id: number | undefined) {
    if (id === undefined) {
      throw new Error('Student ID is required');
    }
    this.router.navigate(['/update-student', id]);
  }
}

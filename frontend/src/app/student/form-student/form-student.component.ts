import { Student } from './../student.model';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css'], // Fixed typo here
})
export class FormStudentComponent implements OnInit {
  constructor(
    private service: StudentService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private messageService: MessageService
  ) {}

  student: Student = {
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
  };

  studentId: number | null = null;
  loading: boolean = false;
  isEdit: boolean = false;

  ngOnInit(): void {
    this.studentId = this.activatedRouter.snapshot.params['id'];
    if (this.studentId) {
      this.isEdit = true;
      this.getStudent(this.studentId);
    }
  }

  // Create user API
  createStudent(req: Student): void {
    this.loading = true;
    this.service.createStudent(req).subscribe({
      next: (data) => {
        console.log(data);
        const fullName = `${data.firstName} ${data.lastName}`;
        this.messageService.setMessage(
          `Student ${fullName} created successfully with email ${data.email}`
        );
        this.router.navigate(['/students']);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  onSubmit(): void {
    if (this.isEdit && this.studentId !== null) {
      this.updateStudent(this.studentId, this.student);
    } else {
      this.createStudent(this.student);
    }
  }

  // Get student
  private getStudent(id: number): void {
    this.service.getStudent(id).subscribe({
      next: (data) => {
        console.log(data);
        this.student = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Finish');
      },
    });
  }

  // Update student
  updateStudent(id: number, req: Student): void {
    this.loading = true; // Set loading to true when the update process starts
    this.service.updateStudent(id, req).subscribe({
      next: (data) => {
        console.log(data);
        this.messageService.setMessage('Student updated successfully');
        this.router.navigate(['/students']);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}

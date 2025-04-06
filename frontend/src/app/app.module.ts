import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { StudentService } from './student/student.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormStudentComponent } from './student/form-student/form-student.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    FormStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAlertModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    // provideClientHydration()
    StudentService,
    HttpClient,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

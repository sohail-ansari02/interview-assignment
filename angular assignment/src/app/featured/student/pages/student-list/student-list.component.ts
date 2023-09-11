import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  cols: any[] = [];
  rowData: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.cols = [
      { field: 'firstName', header: 'first Name' },
      { field: 'lastName', header: 'last Name' },
      { field: 'email', header: 'email' },
      { field: 'phone', header: 'phone' },
      { field: 'address', header: 'address' },
      { field: 'birthday', header: 'birthday' },
      { field: 'gender', header: 'gender' },
    ];
    this.rowData = [
      {
        firstName: 'sohail',
        lastName: 'ansari',
        email: 'sohail@example.com',
        phone: '123321123',
        address: 'clr',
        gender: 'Male',
        birthday: '29/07/2002',
      },
      {
        firstName: 'sohail',
        lastName: 'ansari',
        email: 'sohail@example.com',
        phone: '123321123',
        address: 'clr',
        gender: 'Male',
        birthday: '29/07/2002',
      },
      {
        firstName: 'sohail',
        lastName: 'ansari',
        email: 'sohail@example.com',
        phone: '123321123',
        address: 'clr',
        gender: 'Male',
        birthday: '29/07/2002',
      },
      {
        firstName: 'sohail',
        lastName: 'ansari',
        email: 'sohail@example.com',
        phone: '123321123',
        address: 'clr',
        gender: 'Male',
        birthday: '29/07/2002',
      },
      {
        firstName: 'sohail',
        lastName: 'ansari',
        email: 'sohail@example.com',
        phone: '123321123',
        address: 'clr',
        gender: 'Male',
        birthday: '29/07/2002',
      },
      {
        firstName: 'sohail',
        lastName: 'ansari',
        email: 'sohail@example.com',
        phone: '123321123',
        address: 'clr',
        gender: 'Male',
        birthday: '29/07/2002',
      },
      {
        firstName: 'sohail',
        lastName: 'ansari',
        email: 'sohail@example.com',
        phone: '123321123',
        address: 'clr',
        gender: 'Male',
        birthday: '29/07/2002',
      },
      {
        firstName: 'sohail',
        lastName: 'ansari',
        email: 'sohail@example.com',
        phone: '123321123',
        address: 'clr',
        gender: 'Male',
        birthday: '29/07/2002',
      },
      {
        firstName: 'sohail',
        lastName: 'ansari',
        email: 'sohail@example.com',
        phone: '123321123',
        address: 'clr',
        gender: 'Male',
        birthday: '29/07/2002',
      },
      {
        firstName: 'sohail',
        lastName: 'ansari',
        email: 'sohail@example.com',
        phone: '123321123',
        address: 'clr',
        gender: 'Male',
        birthday: '29/07/2002',
      },

    ];
  }
}

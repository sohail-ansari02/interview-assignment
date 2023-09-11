import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  form!: FormGroup;
  hobbies: any[] = ['photography', 'dance', 'singing', 'coocking'];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.hobbies = this.hobbies.map((val: any) => {
      return {
        value: val,
        checked: false,
      };
    });
  }
  initForm(): void {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      hobbies: [[], [Validators.required]],
      specialization: this.fb.array([]),
    });
    this.addSpecialization(0);
    this.addTopic();
  }
  get specialization(): FormArray {
    return <FormArray>this.form.get('specialization');
  }
  getTopics(index: any): FormArray {
    return <FormArray>(
      (<FormArray>this.specialization).get(['' + index, 'topics'])
    );
  }
  addTopic(index: any = 0) {
    return <FormArray>this.form.get(['specialization', index + '']);
  }
  addSpecialization(index: any = 0) {
    this.specialization.push(
      this.fb.group({
        name: ['', [Validators.required]],
        topics: this.fb.array([]),
      })
    );
  }
  removeSpecialization(index: any) {
    this.specialization.removeAt(index);
  }
  setHobbies(ip: any) {
    this.hobbies.forEach((obj: any) => {
      if (ip.value == obj.value) {
        obj.checked = ip.checked;
      }
    });
    let data = this.hobbies
      .filter((val) => val.checked)
      .map((obj) => obj.value);
    this.form.get('hobbies')?.setValue(data);
  }
  submit(){
    console.log('form', this.form.value);

  }
}

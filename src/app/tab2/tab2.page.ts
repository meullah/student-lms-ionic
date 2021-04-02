import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  defaultDate = '2020-07-10';

  constructor(
    public formBuilder: FormBuilder,
    private dataServie: DataService
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          Validators.email,
        ],
      ],
      mobile: [
        '',
        [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{10}')],
      ],
      course: ['', [Validators.required, Validators.minLength(2)]],
      university: ['', [Validators.required, Validators.minLength(4)]],
      passingDate: this.defaultDate,
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }
  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('passingDate').setValue(date, {
      onlyself: true,
    });

    console.log(date);
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      console.log(this.ionicForm.value);
      this.dataServie.getData(this.ionicForm.value).subscribe((res) => {
        console.log('result from post request', res);
      });

      this.ionicForm.clearValidators();
      this.isSubmitted = false;
      this.ionicForm.reset();
    }
  }
}

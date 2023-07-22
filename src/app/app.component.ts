import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup , AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  initForm : FormGroup;

  data:any = '';

  constructor(private  fb: FormBuilder,){

    this.initForm = this.fb.group({
      title: new FormControl(''),
      description:  new FormControl(''),
      categories: this.fb.array([
        this.initCategory()
      ]),

    });

  }

  initCategory()
  {
    return this.fb.group({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    })
  }


  addCat() {

    const control = <FormArray>this.initForm.controls['categories'];
    control.push(this.initCategory());
  }

  get arrayCategory() {
    return (<FormArray>this.initForm.get('categories'));
  }

  onSave()
  {
    console.log(this.initForm.controls);

    this.data =  this.initForm.value;

  }



}

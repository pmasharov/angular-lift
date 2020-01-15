import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.sass']
})
export class CreateFormComponent implements OnInit {
  createForm: FormGroup

  @Input() setParameters: any

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createForm = this.fb.group({
      floorsCount: [null]
    });
  }

  onSubmit() {
    const controls = this.createForm.controls
    if (this.createForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    const { floorsCount: { value: floorsCount } } = controls
    if (Number.isInteger(floorsCount)) this.setParameters({ floorsCount: Math.round(floorsCount) })
  }

}

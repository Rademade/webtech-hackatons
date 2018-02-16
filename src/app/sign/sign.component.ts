import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignService } from './sign.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  public signForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private signService: SignService
  ) { }

  ngOnInit() {
    this.signForm = this.formBuilder.group({
      userEmail: new FormControl('max@rademade.com', [
        Validators.email,
        Validators.required
      ]),
      userPassword: new FormControl('rademade', [
        Validators.required
      ])
    });
  }
  onSubmit() {
    if (this.signForm.valid) {
      this.signService.signUser(this.signForm.value.userEmail, this.signForm.value.userPassword);
      this.signService.getCurrentUserToken();
    }
  }
}

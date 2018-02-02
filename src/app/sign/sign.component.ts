import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignService } from './sign.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  public formUserSign: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private signService: SignService
  ) { }
  ngOnInit() {
    this.formUserSign = this.formBuilder.group({
      userSignEmail: new FormControl('', [
        Validators.required
      ]),
      userSignPassword: new FormControl('', [
        Validators.required
      ])
    });
  }
  onSubmit() {
    this.signService.signUser(this.formUserSign.value.userSignEmail, this.formUserSign.value.userSignPassword);
    this.signService.getSignToken();
    console.log(this.signService.isAuthentificated());
  }
}

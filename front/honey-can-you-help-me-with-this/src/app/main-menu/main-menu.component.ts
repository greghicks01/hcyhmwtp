import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {
  parametersForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.parametersForm = this.fb.group({
      username: ['', Validators.required],
      notifications: ['', Validators.required]
    });
  }

  onSubmitParameters() {
    if (this.parametersForm.valid) {
      const parameters = this.parametersForm.value;
      console.log('Parameters saved:', parameters);
      // Here you can add code to save the parameters, e.g., send them to a server
    } else {
      console.log('Please fill in all fields.');
    }
  }
}
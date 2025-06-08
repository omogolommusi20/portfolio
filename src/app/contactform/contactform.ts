import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactform.html',
  styleUrls: ['./contactform.css']
})
export class Contactform implements OnInit {
  contactSaved = false;

  contactInfo = {
    phone: '',
    email: '',
    github: '',
    linkedin: ''
  };

  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitted = false;

  ngOnInit() {
    const saved = localStorage.getItem('contactInfo');
    if (saved) {
      this.contactInfo = JSON.parse(saved);
      this.contactSaved = true;
    }
  }

  saveContactInfo() {
    localStorage.setItem('contactInfo', JSON.stringify(this.contactInfo));
    this.contactSaved = true;
  }

  editContactInfo() {
    this.contactSaved = false;
  }

  submitForm() {
    console.log('Form submitted:', this.formData);
    this.isSubmitted = true;

    setTimeout(() => {
      this.formData = { name: '', email: '', message: '' };
      this.isSubmitted = false;
    }, 3000);
  }
}

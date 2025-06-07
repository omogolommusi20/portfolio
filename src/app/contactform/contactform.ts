import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactform.html',
  styleUrls: ['./contactform.css']
})
export class Contactform {
  // Your contact information
  contactInfo = {
    phone: '+1234567890',
    email: 'your.email@example.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile'
  };

  // Form data
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitted = false;

  submitForm() {
    // Here you would typically send the data to a backend
    console.log('Form submitted:', this.formData);
    this.isSubmitted = true;
    
    // Reset form after submission (in a real app, wait for success)
    setTimeout(() => {
      this.formData = { name: '', email: '', message: '' };
      this.isSubmitted = false;
    }, 3000);
  }
}
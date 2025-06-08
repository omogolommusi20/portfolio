import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './aboutme.html',
  styleUrls: ['./aboutme.css']
})
export class Aboutme implements OnInit {
  @Input() aboutText: string = '';
  @Output() aboutTextChange = new EventEmitter<string>();
  
  isEditing = false;
  editedText = '';

  ngOnInit() {
    const saved = localStorage.getItem('aboutText');
    if (saved) {
      this.aboutText = saved;
      this.aboutTextChange.emit(this.aboutText);
    }
  }

  scrollToAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  startEditing() {
    this.editedText = this.aboutText;
    this.isEditing = true;
  }

  saveChanges() {
    this.aboutText = this.editedText;
    this.aboutTextChange.emit(this.aboutText);
    localStorage.setItem('aboutText', this.aboutText);  // Save to localStorage here
    this.isEditing = false;
  }

  cancelEditing() {
    this.isEditing = false;
  }
}

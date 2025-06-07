import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add these imports
  templateUrl: './aboutme.html',
  styleUrls: ['./aboutme.css']
})
export class Aboutme {
  @Input() aboutText: string = '';
  @Output() aboutTextChange = new EventEmitter<string>();
  
  isEditing = false;
  editedText = '';

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
    this.isEditing = false;
  }

  cancelEditing() {
    this.isEditing = false;
  }
}
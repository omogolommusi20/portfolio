import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills implements OnInit {
  @Input() skills: string[] = [];
  @Output() skillsChange = new EventEmitter<string[]>();
  
  isEditing = false;
  newSkill = '';
  editedSkills: string[] = [];

  ngOnInit() {
    const savedSkills = localStorage.getItem('skills');
    if (savedSkills) {
      this.skills = JSON.parse(savedSkills);
      this.skillsChange.emit(this.skills);
    }
  }

  startEditing() {
    this.editedSkills = [...this.skills];
    this.isEditing = true;
  }

  addSkill() {
    if (this.newSkill.trim()) {
      this.editedSkills.push(this.newSkill.trim());
      this.newSkill = '';
    }
  }

  removeSkill(index: number) {
    this.editedSkills.splice(index, 1);
  }

  saveChanges() {
    this.skills = [...this.editedSkills];
    localStorage.setItem('skills', JSON.stringify(this.skills)); // Save here
    this.skillsChange.emit(this.skills);
    this.isEditing = false;
  }

  cancelEditing() {
    this.isEditing = false;
  }
}

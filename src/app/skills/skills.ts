import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills implements OnInit {
  skills: string[] = [];
  newSkill = '';
  isEditing = false;
  editedSkills: string[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {
    this.skillsService.getSkills().subscribe(data => {
      this.skills = data;
    });
  }

  startEditing() {
    this.editedSkills = [...this.skills];
    this.isEditing = true;
  }

  async addSkill() {
    if (this.newSkill.trim()) {
      await this.skillsService.addSkill(this.newSkill.trim());
      this.newSkill = '';
    }
  }

  removeSkill(index: number) {
    this.editedSkills.splice(index, 1);
  }

  saveChanges() {
    this.skills = [...this.editedSkills];
    this.isEditing = false;
  }

  cancelEditing() {
    this.isEditing = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects implements OnInit {
  projects: any[] = [];
  isAddingProject = false;
  newProject = {
    title: '',
    description: '',
    file: null as File | null,
    fileName: '',
    fileUrl: ''
  };

  ngOnInit() {
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) {
      this.projects = JSON.parse(savedProjects);
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.newProject.file = file;
      this.newProject.fileName = file.name;

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newProject.fileUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  addProject() {
    if (this.newProject.title && this.newProject.file) {
      this.projects.push({
        title: this.newProject.title,
        description: this.newProject.description,
        fileName: this.newProject.fileName,
        fileUrl: this.newProject.fileUrl
      });

      // Save updated projects to localStorage
      localStorage.setItem('projects', JSON.stringify(this.projects));

      // Reset form
      this.newProject = {
        title: '',
        description: '',
        file: null,
        fileName: '',
        fileUrl: ''
      };
      this.isAddingProject = false;
    }
  }

  removeProject(index: number) {
    this.projects.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }
}

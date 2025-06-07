import { Component } from '@angular/core';
import { Aboutme } from '../aboutme/aboutme';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Contactform } from '../contactform/contactform'; // Add this import
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    Aboutme, 
    Skills, 
    Projects,
    Contactform, // Add this to imports array
    FormsModule, 
    CommonModule
  ],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css']
})
export class Homepage {
  aboutText = 'This is my default about me text.';
  mySkills = ['Angular', 'Firebase', 'Flutter'];

  updateAboutText(newText: string) {
    this.aboutText = newText;
  }
}
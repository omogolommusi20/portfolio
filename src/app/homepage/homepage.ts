import { Component } from '@angular/core';
import { Aboutme } from '../aboutme/aboutme';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Contactform } from '../contactform/contactform';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    Aboutme, 
    Skills, 
    Projects, 
    Contactform,
    FormsModule, 
    CommonModule
  ],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css']
})
export class Homepage {
  aboutText = 'This is my default about me text.';

  updateAboutText(newText: string) {
    this.aboutText = newText;
  }
}

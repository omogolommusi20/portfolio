import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects implements OnInit {
  projects: any[] = [];
  loading: boolean = true; // ✅ This line fixes the error

  constructor(private firestore: Firestore) {}

  async ngOnInit() {
    try {
      const projectsRef = collection(this.firestore, 'projects');
      const snapshot = await getDocs(projectsRef);

      this.projects = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          description: data['DESCRIPTION'],
          fileUrl: data['file url'],
          fileName: this.extractFileName(data['file url'])
        };
      });
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      this.loading = false;
    }
  }

  extractFileName(url: string): string {
    try {
      const decodedUrl = decodeURIComponent(url);
      const matches = decodedUrl.match(/\/([^\/\?]+\.zip)/);
      return matches?.[1] || 'Download File';
    } catch {
      return 'Download File';
    }
  }
}

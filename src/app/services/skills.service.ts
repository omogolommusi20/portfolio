// src/app/services/skills.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillsCollection;

  constructor(private firestore: Firestore) {
    this.skillsCollection = collection(this.firestore, 'skills');
  }

  getSkills(): Observable<string[]> {
    return collectionData(this.skillsCollection, { idField: 'id' }).pipe(
      map((docs: any[]) => docs.map(doc => doc.name))
    );
  }

  addSkill(skill: string): Promise<void> {
    return addDoc(this.skillsCollection, { name: skill }).then(() => {});
  }
}

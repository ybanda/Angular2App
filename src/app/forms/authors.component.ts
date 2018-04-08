import { Component } from '@angular/core';
import { AuthorService } from './author.service';

@Component
    ({
        selector: 'authors',
        providers: [AuthorService],
        template: `<h2>Authors</h2>
    {{title}}
    <ul>
        <li *ngFor="let author of authors">{{author}}</li>
    </ul>
   `
    })
export class AuthorsComponent {
    title = 'Authors Content Here';
    authors;
    constructor(authorService: AuthorService) {
        // new CourseService();
        this.authors = authorService.getAuthors();
    }
}
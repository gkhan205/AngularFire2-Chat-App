import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Post } from './posts.model';

@Injectable()
export class PostsService {

  private post: Post[] = [];
	constructor(private http: Http) { }

	// Get all feeds from the API
	getAllPosts() {
		return this.http.get('https://jsonplaceholder.typicode.com/posts')
		.map(res => res.json());
	}
}

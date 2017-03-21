import { Component, OnInit } from '@angular/core';

import { PostsService } from './posts.service';

@Component({
	selector: 'posts',
	templateUrl: './posts.component.html',
})

export class PostsComponent implements OnInit {

	posts: any = [];

	constructor(private postsService: PostsService) { }

	ngOnInit(){
		// Retrieve posts from the API
	    this.postsService.getAllPosts().subscribe(posts => {
	      this.posts = posts;
	    });
	}
}
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/static/home.component';
import { AboutComponent } from './components/static/about.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';


const APP_ROUTES: Routes = [
	{path: 'posts', component: PostsComponent},
	{path: 'about', component: AboutComponent},
	{path: 'login', component: LoginPageComponent},
	{path: 'register', component: RegisterPageComponent},
	{path: '', component: HomeComponent, pathMatch: 'full'}	
]

export const routing = RouterModule.forRoot(APP_ROUTES);
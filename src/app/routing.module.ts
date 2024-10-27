import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes : Routes = [
    {path: '',component: HomeComponent},
    {path: 'Home',component: HomeComponent},
    {path: 'About',component: AboutComponent},
    {path: 'Contact',component: ContactComponent},
    {path: 'Courses',component: CoursesComponent},
    {path : 'Courses', children: [
      {path: 'Course/:id',component: CourseDetailComponent}
    ]},
    {path: '**',component: NotFoundComponent}
  ]

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports : [RouterModule]
})
export class RoutingModule{

}
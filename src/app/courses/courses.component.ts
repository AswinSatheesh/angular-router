import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  coursesService = inject(CourseService);
  AllCourses !: Course[];
  activeRoute : ActivatedRoute = inject(ActivatedRoute);
  searchString !: string;
  ngOnInit(){
    // this.searchString =  this.activeRoute.snapshot.queryParams['search'];//search is the key its value will store in searchString variable
    // this.searchString =  this.activeRoute.snapshot.queryParamMap.get('search')!; //search is the key its value will store in searchString variable
    // console.log(this.searchString);
    // this.activeRoute.queryParams.subscribe((data)=> {
      this.activeRoute.queryParamMap.subscribe((data)=> {
      this.searchString = data.get('search')!;
      console.log(this.searchString);

      if(this.searchString === undefined || this.searchString === '' || this.searchString === 'null'){
        this.AllCourses = this.coursesService.courses;;
      }else{
        this.AllCourses = this.coursesService.courses.filter(x => x.title.toLowerCase().includes(this.searchString.toLowerCase()));
      }      
    })

  }
}

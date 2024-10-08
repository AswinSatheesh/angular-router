import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit,OnDestroy{
  selectedCourse! : Course;
  courseId!: number;

  courseService : CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  paramMapObs : any;

  ngOnInit(){
    // this.courseId = this.activeRoute.snapshot.params['id'];
    // this.courseId = +(this.activeRoute.snapshot.paramMap.get('id') ?? 0);
    //observalble - paramMap
    // this.activeRoute.paramMap.subscribe((data)=>{
    //   this.courseId = +(data.get('id') || 0);
    //   this.selectedCourse = this.courseService.courses.find(course => course.id == this.courseId)!;

    // })

    //observalble - param
    
    this.paramMapObs = this.activeRoute.params.subscribe((data)=>{
      this.courseId = +data['id'];
      this.selectedCourse = this.courseService.courses.find(course => course.id == this.courseId)!;

    })
  }

  ngOnDestroy(){
    this.paramMapObs.unsubcribe();
  }

}

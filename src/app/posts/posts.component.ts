import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from  'rxjs';
import  { trigger , style, transition, animate, keyframes, query, stagger} from '@angular/animations';
 
 

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
//try
animations: [
  trigger('list', [
    transition('* <=> *' ,[
      query(':enter', 
      [
        style({ opacity: 0, transition:'translateY(-15)'}),
        stagger('200ms',
      animate('550ms ease-out',
    style({ opacity: 1, transition: 'translateY(0px)'})))

      ], { optional: true }),

      query(':leave', animate('500ms' , style({ opacity: 0})),
       { optional: true })
    ])

  ])
]

// endtry
})



export class PostsComponent implements OnInit {

  posts$: Object;

  constructor(private data: DataService) { }


  ngOnInit() {

    this.data.getPosts().subscribe(
      data => this.posts$ = data
    )

  }

}

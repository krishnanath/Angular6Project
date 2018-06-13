import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import  { trigger , style, transition, animate, keyframes, query, stagger} from '@angular/animations';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *' ,[
        query(':enter', 
        [
          style({ opacity: 0, transition:'translateY(-15)'}),
          stagger('300ms',
        animate('550ms ease-out',
      style({ opacity: 1, transition: 'translateY(0px)'})))

        ], { optional: true }),

        query(':leave', animate('500ms' , style({ opacity: 0})),
         { optional: true })
      ])

    ])
  ]
})
export class UsersComponent implements OnInit {
  users$: Object;
  constructor(private data: DataService) { }
  ngOnInit(){
this.data.getUsers().subscribe(
  data => this.users$ =data
)
  }
}

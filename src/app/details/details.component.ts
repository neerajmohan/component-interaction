import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() id: number;
  @Output() pageNumberClicked = new EventEmitter();
  contact:any;

  constructor( private service:UserService ) { }

  ngOnInit(): void {
  }

  ngOnChanges(id){
    if (id.id.currentValue) {
      this.service.getUser(id.id.currentValue).subscribe(
        res=>{
          this.contact=res;
        }
      );
    }
      
  }


  
}

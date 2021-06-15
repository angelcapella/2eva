import { AfterViewInit,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exfourth-view',
  templateUrl: './exfourth-view.component.html',
  styleUrls: ['./exfourth-view.component.css']
})
export class ExfourthViewComponent implements OnInit, AfterViewInit {

  title = 'Welcome to Web Development!';

  ngOnInit():void{
    console.log('OnInit:', this.title);
    this.title='Already in!';
  }

  ngAfterViewInit(): void{
    console.info('Change for exercise 3, done');
  }

}

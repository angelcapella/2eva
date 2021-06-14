import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-exbutton',
  templateUrl: './exbutton.component.html',
  styleUrls: ['./exbutton.component.css']
})
export class EXButtonComponent implements OnInit {
  @Input()label='';
  
   constructor(){}
 
   ngOnInit(){}
 
   justDolt(){
     console.info('justDolt:Exercise 5 done!');
   }
   callMe(){
    this.label='“Here button. I called you!”';
   }
 }

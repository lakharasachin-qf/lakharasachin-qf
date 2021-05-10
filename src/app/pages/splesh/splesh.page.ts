import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splesh',
  templateUrl: './splesh.page.html',
  styleUrls: ['./splesh.page.scss'],
})
export class SpleshPage implements OnInit {

  constructor(public router: Router) { 
    setTimeout(()=>{
      this.router.navigateByUrl('home');
    },4000);
  }

  ngOnInit() {
  }

}

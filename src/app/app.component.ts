import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Right-Game';
  eehkaisam:Number;
  selectedVal:string;
  left:string;
  right:string;
  middle:string;

   
  lo = "/assets/images/leftOpen.png";
  ro = "/assets/images/rightOpen.png";
  lcoin = "/assets/images/leftCoin.png";
  rcoin = "/assets/images/rightCoin.png";
  lc = "/assets/images/leftClosed.png";
  rc = "/assets/images/rightClosed.png";

  mc= "/assets/images/middleClosed.png";
  mo= "/assets/images/middleOpen.png";
  mcoin= "/assets/images/middleCoin.png";

  ngOnInit() {
    this.left = this.lc;
    this.right = this.rc;    
    this.play();
  }

  selected(input:Number) {
    if (input == this.eehkaisam) {
      this.selectedVal = "Ans is right.. well done"
    }
    else {
      this.selectedVal = "Sorry try again"
    }
  }

  play() {
    this.selectedVal = "";
    this.left = this.lc;
    this.right = this.rc;
    let result = Math.floor(Math.random() * 3);
    if (result == 0) {
      result++;  
    }  
    console.log(result)  
    return this.eehkaisam = result;
  }

  dispalyAnswer() {
    if (this.eehkaisam == 0) {
      this.left = this.lcoin;
      this.right = this.ro;
    }
    else {
      this.right = this.rcoin;
      this.left = this.lo;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
visibility:boolean=false;
lang:string="english";
  constructor(private ts:TranslateService) {
      this.ts.use(this.lang);
   }

  ngOnInit() {
  }

  change(){
    this.ts.use(this.lang);
  }

  showlogin(){
    this.visibility=this.visibility?false:true;
  }

}

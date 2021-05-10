import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.page.html',
  styleUrls: ['./work-order.page.scss'],
})
export class WorkOrderPage implements OnInit {
  partyName="";
  complain="";
  isChargeAble=false;
  amount="";
  data: any;
  radioVal="";
  constructor(  public router: Router,
    public rout: ActivatedRoute,
    public loadingController: LoadingController,
    private http: HTTP) { 
      this.rout.queryParams.subscribe(params => {
        if (params && params.special) {
          this.data = JSON.parse(params.special);
        }
        console.log('param', this.data);
  
        this.loadPreviousData();
  
      })  
    }

  ngOnInit() {
  }



  loadPreviousData(){
    this.partyName="Sachin";
    this.complain = this.data.COMPLAIN;
    this.amount = this.data.CALLEMP;

    if(this.data.ISCHARGABLE == '1'){
      this.radioVal="Yes";
    }else{
      this.radioVal="No";
    }
  }

}

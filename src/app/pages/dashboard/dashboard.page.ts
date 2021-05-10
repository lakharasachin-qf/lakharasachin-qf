import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  users = [];
  data: any;
  isEmpty: boolean = false;
  constructor(private router: Router, public loadingController:LoadingController, public http:HTTP) { 
   
  }

  ngOnInit() {
    this.register();
  }
   
  goNextActivity(data, index) {
    console.log(index);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(data)
      }
    }
    this.router.navigate(["work-order"], navigationExtras);
  }




  async register() {
    const loading = await this.loadingController.create({
      message: 'loading data please wait..',
      spinner: 'crescent'
    });
    loading.present().then(async () => {
     
      let data = {
        'empId': '60' 
    };
    let headers = {
        
    };

     
    this.http.post('http://192.168.43.172/saapl/callRegiByEmp', data, headers)
                .then((res) => {
                          var apiRes = JSON.parse(res.data);
                          this.users =apiRes;
                          if(this.users.length == 0){
                            this.isEmpty=false;
                          }else{
                            this.isEmpty=true;
                          }
                          console.log( this.users);

                          loading.dismiss();
                })
                .catch((error) => {
                    console.log(error);
                    loading.dismiss();
                });
   
      
    })
  }

}

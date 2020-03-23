import { Component, OnInit } from '@angular/core';
import { DocLoginService } from './doc-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-login',
  templateUrl: './doc-login.component.html',
  styleUrls: ['./doc-login.component.css']
})
export class DocLoginComponent implements OnInit {

  email:string = ""
  password:string = ""
  rememberme = false

  service : DocLoginService

  constructor(private router: Router,
    docservice : DocLoginService) {
    this.service = docservice
   }


   onLogin()
  {
    if(this.email.length == 0)
    {
        alert('email field can not be empty')
    }
    else if(this.password.length == 0)
    {
        alert('password can not be empty')
    }
    else
    {
      this.service.onLogin(this.email,this.password).subscribe((response)=>{
        alert('component onLogin')
        console.log(response)
        if(response['status']=='success')
        {
        
                localStorage['login_status'] = '1'
                localStorage['username'] = response['data'][0].username
                localStorage['id'] = response['data'][0].id
                localStorage['flag'] = '0'

            this.router.navigate(['/home'])
        }
        else if(response['status']=='error')
        {

            alert('invaild email or password')
        }
      })
    }
  }

  ngOnInit(): void {
  }

}

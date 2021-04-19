import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44321/api/auth"
  constructor(private httpClient:HttpClient) { }



  login(loginModel:LoginModel){
    let newPath=this.apiUrl+"/login";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,loginModel)

  }

  isAuthenticated(){
    //eger localStorage ta token varsa
    if(localStorage.getItem("token")){
      return true
    }
    else{
      return false;
    }
  }
}

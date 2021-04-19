//tek bir data gelecek sekilde, liste olarak degil 
//gelen token ile birlikte mesaj bilgisi de gelsin diye responseModel inherit ettik.
//login olunca postmanda de tek bir data geliyor liste degil

//GELEN DATA BİR => TOKENMODEL

import { ResponseModel } from "./responseModel";

export interface SingleResponseModel<T> extends ResponseModel{
    data:T
}
export class User {
    // id: number;
    // userId: number;
    // title: string;
    // body: string;
    UserLogin: string;
    UserPass: string;
    UserMail: string;
    token: string;
    Id: number;


    constructor(
        UserLogin: string,
        UserPass: string,
        UserMail: string,
        token: string,
        Id: number               
    ){
     this.UserLogin = UserLogin;
     this.UserPass = UserPass;
     this.UserMail = UserMail;
     this.token = token;
     this.Id = Id;
    }


}
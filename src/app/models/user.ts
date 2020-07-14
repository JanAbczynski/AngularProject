export class User {

    Id: number;
    UserLogin: string;
    UserPass: string;
    UserName: string;
    UserSureName: string;
    UserAddress: string;
    UserCity: string;
    UserZipCode: string;
    UserMail: string;
    UserPhoneNumber: string;
    UserPhoneNumber2: string;
    UserRole: string;
    token: string;
    

    constructor(
        Id: number,    
        UserLogin: string,
        UserPass: string,
        UserName: string,
        UserSureName: string,
        UserAddress: string,
        UserCity: string,
        UserZipCode: string,
        UserMail: string,
        UserPhoneNumber: string,
        UserPhoneNumber2: string,
        UserRole: string,
        token: string,
                   
    ){
     this.Id = Id;   
     this.UserLogin = UserLogin;
     this.UserPass = UserPass;
     this.UserName = UserName;
     this.UserSureName = UserSureName;
     this.UserAddress = UserAddress;
     this.UserCity = UserCity;
     this.UserZipCode = UserZipCode;
     this.UserMail = UserMail;
     this.UserPhoneNumber = UserPhoneNumber;
     this.UserPhoneNumber2 = UserPhoneNumber2;
     this.UserRole = UserRole;    
     this.token = token;
     
    }


}
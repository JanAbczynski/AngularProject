export class User {

    Id: number;
    userLogin: string;
    userPass: string;
    userName: string;
    userSureName: string;
    userAddress: string;
    userCity: string;
    userZipCode: string;
    userMail: string;
    userPhoneNumber: string;
    userPhoneNumber2: string;
    userRole: string;
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
     this.userLogin = UserLogin;
     this.userPass = UserPass;
     this.userName = UserName;
     this.userSureName = UserSureName;
     this.userAddress = UserAddress;
     this.userCity = UserCity;
     this.userZipCode = UserZipCode;
     this.userMail = UserMail;
     this.userPhoneNumber = UserPhoneNumber;
     this.userPhoneNumber2 = UserPhoneNumber2;
     this.userRole = UserRole;    
     this.token = token;
     
    }


}
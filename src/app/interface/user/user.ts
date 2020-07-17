interface Igeo{
  lat:string;
  lng:string;
}

interface Iaddress{
  street:string;
  suite:string;
  city:string;
  zipcode:string;
  geo:Igeo;
}

interface Icompany{
  name:string;
  catchphone:string;
  bs: string;
}

export interface IUser {
  $key?:string;
  id:number;
  name:string;
  username?:string;
  email:string;
  address?: Iaddress;
  phone?:string;
  website?:string;
  company?:Icompany;
}

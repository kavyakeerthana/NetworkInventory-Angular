export class Admin{
    id:any;
    name:string | undefined;
    surname:string | undefined;
    dob:string | undefined;
    gender:string | undefined;
    phone:string | undefined;
    aadhar:string | undefined;
    email:string | undefined;
    address:string | undefined;
    country:string | undefined;
    state:string | undefined;
    connectionType:string | undefined;
    connectionPlan:string | undefined;
    speed:string | undefined;
    data:string | undefined;
    rent:string | undefined;

    constructor(name:string,surname:string,dob:string,gender:string,phone:string,aadhar:string,email:string,
        address:string,country:string,state:string,connectionType:string,coonectionPlan:string,speed:string,
        data:string,rent:string){
        this.name=name;
        this.surname=surname;
        this.dob=dob;
        this.gender=gender;
        this.phone=phone;
        this.aadhar=aadhar;
        this.email=email;
        this.address=address;
        this.country=country;
        this.state=state;
        this.connectionType=connectionType;
        this.connectionPlan=coonectionPlan;
        this.speed=speed;
        this.data=data;
        this.rent=rent;
        
    }
}

export class Asset{

    assetId:any;
    assetmodelId:any;
    assetname:any;
    assetmodel:any;
    assetquantity:any;

    constructor(assetId:any,assetname:string,assetmodel:string,assetquantity:any){
        this.assetId=assetId;
        this.assetname=assetname;
        this.assetmodel=assetmodel;
        this.assetquantity=assetquantity;
    }
}

export class Search{
    assetname:any;
    constructor(assetname:any){
        this.assetname=assetname;
    }
}

export class Login{
    id:any;
    name:string | undefined;
    email:string | undefined;
    phone:string | undefined;
    password:string | undefined;
    constructor(name:string,email:string,phone:string,password:string){
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.password=password;
    }

    public get AdminId(){
        return this.id;
    }

    public set AdminId(id:any){
        this.id=id;
    }
    
}

export class Login1{
    email:string | undefined;
    password:string | undefined;
    constructor(email:string,password:string){
        this.email=email;
        this.password=password;
    }
    
}

export class AddToCart{
    cartId:any;
    customerId:any;
    assetmodelId:any;
    assetId:any;
    assetname:any;
    assetmodel:any;
    assetquantity:any;
    constructor(customerId:string,assetmodelId:string,assetId:string,assetname:any,assetmodel:any,assetquantity:any){
        this.customerId=customerId;
        this.assetmodelId=assetmodelId;
        this.assetId=assetId;
        this.assetname=assetname;
        this.assetmodel=assetmodel;
        this.assetquantity=assetquantity;
        
    }
}

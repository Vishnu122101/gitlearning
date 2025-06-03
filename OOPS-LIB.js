function Tofee(){
    this.name="Alphenlibe",
    this.price=20
}
Tofee.prototype.price=40;
var t1=new Tofee();
console.log(t1);

class Tofee2{
    constructor(name, price){
        this.name=name,
        this.price=price
        this.pricer=function(){
            return this.price;
        }
    }
    
}
Tofee.prototype.price=40;
var t2=new Tofee2("Candyman", 30);
console.log(t2);
console.log(t2.pricer());

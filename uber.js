class uberprice{
    constructor(distance){
        this.distance=distance;
    }
    getprice(){
        return(this.distance*20);
    }
}
let uber = new uberprice(10);
console.log(uber.getprice());
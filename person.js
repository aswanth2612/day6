class Person{
    constructor(name,heigth,weigth,age,nationality,qualification,city, state){
        this.name=name;
        this.heigth=heigth;
        this.weigth=weigth;
        this.age=age;
        this.nationality=nationality;
        this.qualification=qualification;
        this.city=city;
        this.state=state;
    }
    details(){
        console.log(`
        name:${this.name}
        height:${this.heigth}
        weight:${this.weigth}
        age:${this.age}
        nationality:${this.nationality}
        qualification:${this.qualification}
        city:${this.city}
        state:${this.state}`)
    }
}
let Person1=new Person("Aswanth","5.7","52","21","Indian","BE MECH","Ramnathapuram","Tamilnadu")
Person1.details()
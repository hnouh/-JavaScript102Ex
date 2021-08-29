class Vehicle{
    constructor(name,color,company,id){
        this.name = name;
        this.color = color;
        this.company = company;
        this.id = id;
    }  
}

class Car extends Vehicle{
    constructor(name,color,company,id,type){
        super(name,color,company,id);
        this.type = type;
    } 
}


class Plane extends Vehicle{
    constructor(name,color,company,id,type){
        super(name,color,company,id);
        this.type = type;
    } 
}

class Employee{
    constructor(name,dateOfBirth,id){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.id = id;
    } 
}

class Driver extends Employee{
    constructor(name,dateOfBirth,id,licenseID){
        super(name,dateOfBirth,id);
        this.licenseID = licenseID;
    }  
} 

class Pilot extends Employee{
    constructor(name,dateOfBirth,id,licenseID){
        super(name,dateOfBirth,id);
        this.licenseID = licenseID;
    } 
} 
//0 to 1000000
var rand=Math.floor(Math.random() * 1000001);
var d=new Date();
var m=d.getMilliseconds();
var ms=d.getMinutes();

class Reservation{
    constructor(reservationDate=m+ms,reservationID=rand,employeeId,vehiclesId,){
        this.reservationDate = reservationDate;
        this.reservationID = reservationDate+reservationID;
        this.employeeId = employeeId;
        this.vehiclesId = vehiclesId;
    }   
}

var carsArray=[];

var car1= new Car("Camry","white","Toyota",1,"electric"); 
var car2= new Car("Optima","Dark blue","Kia",2,"electric");
var car3= new Car("Mazda6","Black","Mazda",3,"electric");
carsArray.push(car1.id);
carsArray.push(car2.id);
carsArray.push(car3.id);

/////////////////////
var planesArray=[];

var plane1= new Plane("E01","white","Saudia",12,"gas");
var plane2= new Plane("E02","white","Nas",22,"gas");
planesArray.push(plane1.id);
planesArray.push(plane2.id);

/////////////////////
var pilotsArray=[];

var pilot1= new Pilot("Anas","12-1-1994",1234123412,12087);
pilotsArray.push(pilot1.id);

//////////////////
var driversArray=[];

var driver1= new Driver("Ahmad","15-2-1994",1234523415,14089);
driversArray.push(driver1.id);

//////////////////  
var reservationArray=[];

function checkMatch(employeeId,vehiclesId){
    var newReservation= new Reservation();

    if (pilotsArray.includes(employeeId)&&carsArray.includes(vehiclesId)||driversArray.includes(employeeId)&&planesArray.includes(vehiclesId)){
        console.log("This information doesn't match");
    }
    else{
        reservationArray.push(newReservation);
        console.log("Reservation complete and this reservation id: "+newReservation.reservationID);
    }
}

checkMatch(1234123412,1);
checkMatch(1234123412,12);
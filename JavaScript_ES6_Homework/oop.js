/*
Homework Assignment #12 
Object Oriented Programming
*/

//class vehical
function Vehical(make, model, year, weight) {
    this.Make = make;
    this.Model = model;
    this.Year = year;
    this.Weight = weight;
    this.NeedsMaintenance = false;
    this.TripsSinceMaintenance = 0;
}

Vehical.prototype.Repair = function () {
    this.TripsSinceMaintenance = 0;
    this.NeedsMaintenance = false;
}

//class car inherits from class vehicle
function Cars(make, model, year, weight) {
    Vehical.call(this, make, model, year, weight);
}

Cars.prototype = Object.create(Vehical.prototype);
Cars.prototype.constructor = Cars;
//Driving
Cars.prototype.Drive = function () {
    this.isDriving = true;
    this.TripsSinceMaintenance ++;
    if(this.TripsSinceMaintenance > 100) {
        this.NeedsMaintenance = true;
    }
};
//car stopped
Cars.prototype.Stop = function () {
    this.isDriving = false;
};

//print out their values for:
// Make, Model, Year, Weight, NeedsMaintenance, and TripsSinceMaintenance

//car1
console.log("car1: ");
const car1 = new Cars('A1', 'M1', 2010, 1577);
//new car details
console.log(
    'Make: '+ car1.Make 
    +'\nModel: '+ car1.Model 
    +'\nYear: '+ car1.Year
    +'\nWeight: '+ car1.Weight + 'KG'
    +'\nNeedsMaintenance: '+ car1.NeedsMaintenance
    +'\nTripSinceMaintenance: '+ car1.TripsSinceMaintenance
    );
//Driving the car
car1.Drive()
console.log('isDriving: '+ car1.isDriving);
for(let i =1; i <=100; i++){
    car1.Drive();
}
//Stop the car
car1.Stop();
console.log('isDriving: '+ car1.isDriving);
//stats before repair
console.log("TripsSinceMaintenance :" + car1.TripsSinceMaintenance);
console.log("NeedsMaintenance: " + car1.NeedsMaintenance);
//repair car if NeedsMaintenance
if(car1.NeedsMaintenance === true) {
    car1.Repair();
    console.log("car1 repaired");
    //results after repair
    console.log("TripsSinceMaintenance: " + car1.TripsSinceMaintenance);
    console.log("NeedsMaintenance: " + car1.NeedsMaintenance);
}

//car2
console.log("\ncar2: ");
const car2 = new Cars('A2', 'M2', 2009, 1350);
//new car details
console.log(
    'Make: '+ car2.Make 
    +'\nModel: '+ car2.Model 
    +'\nYear: '+ car2.Year
    +'\nWeight: '+ car2.Weight + 'KG'
    +'\nNeedsMaintenance: '+ car2.NeedsMaintenance
    +'\nTripSinceMaintenance: '+ car2.TripsSinceMaintenance
    );
//Driving the car
car2.Drive();
console.log('isDriving: '+ car2.isDriving);
for(let i =1; i <=90; i++){
    car2.Drive();
}
//Stop the car
car2.Stop();
console.log('isDriving: '+ car2.isDriving);
//stats before repair
console.log("TripsSinceMaintenance :" + car2.TripsSinceMaintenance);
console.log("NeedsMaintenance: " + car2.NeedsMaintenance);
//repair car if NeedsMaintenance
if(car2.NeedsMaintenance === true) {
    car2.Repair();
    console.log("car2 repaired");
    //result after repair
    console.log("TripsSinceMaintenance: " + car2.TripsSinceMaintenance);
    console.log("NeedsMaintenance: " + car2.NeedsMaintenance);
}

//car3
console.log("\ncar3: ");
const car3 = new Cars('A3', 'M3', 2012, 1850);
//new car details
console.log(
    'Make: '+ car3.Make 
    +'\nModel: '+ car3.Model 
    +'\nYear: '+ car3.Year
    +'\nWeight: '+ car3.Weight + 'KG'
    +'\nNeedsMaintenance: '+ car3.NeedsMaintenance
    +'\nTripSinceMaintenance: '+ car3.TripsSinceMaintenance
    );
//Driving the car
car3.Drive();
console.log('isDriving: '+ car3.isDriving);
for(let i =1; i <=120; i++){
    car3.Drive();
}
//Stop the car
car3.Stop();
console.log('isDriving: '+ car3.isDriving);
//stats before repair
console.log("TripsSinceMaintenance :" + car3.TripsSinceMaintenance);
console.log("NeedsMaintenance: " + car3.NeedsMaintenance);
//repair car if NeedsMaintenance
if(car3.NeedsMaintenance === true) {
    car3.Repair();
    console.log("car3 repaired");
    //result after repair
    console.log("TripsSinceMaintenance: " + car3.TripsSinceMaintenance);
    console.log("NeedsMaintenance: " + car3.NeedsMaintenance);
}


//class planes inherits from class vehicle
function Planes(make, model, year, weight) {
    Vehical.call(this, make, model, year, weight);
}
Planes.prototype = Object.create(Vehical.prototype);
Planes.prototype.constructor = Planes;

//flying
Planes.prototype.Flying = function() {
    this.isFlying = true;
    if(this.TripsSinceMaintenance < 100) { 
        this.TripsSinceMaintenance ++;   
    } else {
        console.log("\nPlane can't fly until it's repaired");
        return false;
    }
    if(this.TripsSinceMaintenance === 100) {
        this.NeedsMaintenance = true;
    }  

}
//landing
Planes.prototype.Landing = function() {
    this.isFlying = false;
}


//plane1
console.log("\nplane1:");
const plane1 = new Planes('P1', 'PM1', 1998, 41080);
//new plane details
console.log(
    'Make: '+ plane1.Make 
    +'\nModel: '+ plane1.Model 
    +'\nYear: '+ plane1.Year
    +'\nWeight: '+ plane1.Weight + 'KG'
    +'\nNeedsMaintenance: '+ plane1.NeedsMaintenance
    +'\nTripSinceMaintenance: '+ plane1.TripsSinceMaintenance
    +'\n');
//flying the plane
plane1.Flying();
console.log('isFlying: '+ plane1.isFlying);
for(let i =1; i <=99; i++){
    plane1.Flying();
}
//landing the plane
plane1.Landing();
console.log('isFlying: '+ plane1.isFlying);
//stats before repair
console.log("TripsSinceMaintenance :" + plane1.TripsSinceMaintenance);
console.log("NeedsMaintenance: " + plane1.NeedsMaintenance);

//see if we can fly the plane after NeedMaintenance is true
plane1.Flying();

//repair plane if NeedsMaintenance
if(plane1.NeedsMaintenance === true) {
    plane1.Repair();
    console.log("\nPlane1 repaired");
    //result after repair
    console.log("TripsSinceMaintenance: " + plane1.TripsSinceMaintenance);
    console.log("NeedsMaintenance: " + plane1.NeedsMaintenance);
    console.log("Plane is ready to fly");
}


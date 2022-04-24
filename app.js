"use strict";

//create a constructor
let all_Employees=[];
function Employees(EmployeeID, FullName, Department, level, ImageURL, Salary){
this.EmployeeID= EmployeeID;
this.FullName=FullName ;
this.Department=Department ;
this.level=level ;
this.ImageURL=ImageURL ;
this.Salary=Salary ;
all_Employees.push(this)
}

//Generate a random salary
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

let Ghazi_salary=(getRndInteger(1500,2000));
let Safi_salary=(getRndInteger(1000,1500));
let Rana_salary=(getRndInteger(500,1000));

let employee1= new Employees("1000","Ghazi Samer","Administration","Senior","./pics/E2.png",Ghazi_salary);
let employee2= new Employees("1003","Safi Walid","Administration","Mid-Senior","./pics/E1.jpg",Safi_salary);
let employee3= new Employees("1005","Rana Saleh", "Development","Junior","./pics/E1.jpg",Rana_salary);

//create render function
Employees.prototype.render=function(){
     document.write(`<p><b>Employee Name:</b> ${this.FullName},  <b>Employee Salay: </b> ${this.Salary} </p>`);
    
   
}

employee1.render();
employee2.render();
employee3.render();




console.log(all_Employees);
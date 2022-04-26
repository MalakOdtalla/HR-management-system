"use strict";
 let table=document.getElementById("ID1");
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

let Senior_salary=(getRndInteger(1500,2000));
let Mid_Senior_salary=(getRndInteger(1000,1500));
let Junior_salary=(getRndInteger(500,1000));

let employee1= new Employees("1000","Ghazi Samer","Administration","Senior","./pics/E2.png",Senior_salary);
let employee2= new Employees("1001","Lana Ali","Finance","Senior","./pics/E1.jpg",Senior_salary);
let employee3= new Employees("1002","Tamara Ayoub", "Marketing","Senior","./pics/E1.jpg",Senior_salary);
let employee4= new Employees("1003","Safi Walid","Administration","Mid-Senior","./pics/E2.png",Mid_Senior_salary);
let employee5= new Employees("1004","Omar Zaid","Development","Senior","./pics/E2.png",Senior_salary);
let employee6= new Employees("1005","Rana Saleh","Development","Junior","./pics/E2.png",Junior_salary);
let employee7= new Employees("1006","Hadi Ahmad","Finance","Mid-Senior","./pics/E2.png",Mid_Senior_salary);



Employees.prototype.renderTable=function(){

}



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

  Employees.prototype.randomSalary=function(min, max){
    this.Salary=getRndInteger(min, max);
  }



let employee1= new Employees("1000","Ghazi Samer","Administration","Senior","./pics/E2.png",renderAll());
let employee2= new Employees("1001","Lana Ali","Finance","Senior","./pics/E1.jpg",renderAll());
let employee3= new Employees("1002","Tamara Ayoub	", "Marketing","Senior","./pics/E1.jpg",renderAll());
let employee4= new Employees("1003","Safi Walid","Administration","Mid-Senior","./pics/E2.png",renderAll());
let employee5= new Employees("1004","Omar Zaid","Development","Senior","./pics/E2.png",renderAll());
let employee6= new Employees("1005","Rana Saleh","Development","Junior","./pics/E2.png",renderAll());
let employee7= new Employees("1006","Hadi Ahmad","Finance","Mid-Senior","./pics/E2.png",renderAll());



function renderAll(){
  for(let i=0; i<all_Employees.length; i++){
    if(all_Employees[i].level=='Senior'){
      all_Employees[i].randomSalary(1500,2000);
    }else if(all_Employees[i].level=='Mid-Senior'){
      all_Employees[i].randomSalary(1000,1500);

    }else{
      all_Employees[i].randomSalary(500,1000);

    }
  }
}
renderAll();

function netSalary(){
  for(let i=0; i<all_Employees.length; i++){

    let tax=(((all_Employees[i].Salary)* 7.5)/100);
    //console.log(tax);
    let net_salary=(all_Employees[i].Salary)-tax;
    console.log(net_salary);
  }
}
netSalary();

//create render function
Employees.prototype.render=function(){
  document.write(`<p><b>Employee Name:</b> ${this.FullName},  <b>Employee Salay: </b> ${this.Salary} </p>`);
 
}

for(let i=0; i<all_Employees.length; i++){
  all_Employees[i].render();
}
/* employee1.render();
employee2.render();
employee3.render();
employee4.render();
employee5.render();
employee6.render();
employee7.render(); */





//console.log(all_Employees);
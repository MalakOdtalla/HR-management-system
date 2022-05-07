"use strict";

//create a constructor
let all_Employees=[];
function Employees(FullName, Department, level, ImageURL){
//this.EmployeeID= EmployeeID;
this.FullName=FullName ;
this.Department=Department ;
this.level=level ;
this.ImageURL=ImageURL ;
//this.Salary=Salary ;
all_Employees.push(this)
}

let EmployeeDiv=document.getElementById("Employees");

let Form=document.getElementById("form");




let employee1= new Employees("Ghazi Samer","Administration","Senior","assets/Ghazi.jpg");
let employee2= new Employees("Lana Ali","Finance","Senior","assets/Lana.jpg");
let employee3= new Employees("Tamara Ayoub	", "Marketing","Senior","assets/Tamara.jpg");
let employee4= new Employees("Safi Walid","Administration","Mid-Senior","assets/Safi.jpg");
let employee5= new Employees("Omar Zaid","Development","Senior","assets/Omar.jpg");
let employee6= new Employees("Rana Saleh","Development","Junior","assets/Rana.jpg");
let employee7= new Employees("Hadi Ahmad","Finance","Mid-Senior","assets/Hadi.jpg");



Employees.prototype.renderAll=function(){
 // for(let i=0; i<all_Employees.length; i++){
    if(this.level=='Senior'){
     // all_Employees[i].randomSalary(1500,2000);
      return Math.floor(Math.random() * (2000 - 1500)) + 1500;
      
    }else if(this.level=='Mid-Senior'){
     // all_Employees[i].randomSalary(1000,1500);
     return Math.floor(Math.random() * (1500 - 1000)) + 1000;

    }else{
     // all_Employees[i].randomSalary(500,1000);
     return Math.floor(Math.random() * (1000 - 500)) + 500;

    }
  }
//}



Employees.prototype.renderId=function(){
 // for(let i=0; i<all_Employees.length; i++){
    if(this.Department=='Finance'){
     return  Math.floor(1000 + Math.random() * 100);

      
    }else if(this.Department=='Development'){
      return  Math.floor(2000 + Math.random() * 100);


    }else if(this.Department=='Administration'){
      return  Math.floor(3000 + Math.random() * 100);

    }else{
      return  Math.floor(4000 + Math.random() * 100);

    }
  }
//}


//create render function
Employees.prototype.render=function(){
 let card=document.createElement('div');
  card.setAttribute('class','card');
  EmployeeDiv.appendChild(card);
 

     

  let image=document.createElement('img');
  image.setAttribute('src',this.ImageURL)
  card.appendChild(image);
  image.style.width='100px';
  image.style.height='100px';


   let Name=document.createElement('p');
   Name.textContent=`Employee Name: ${this.FullName} - ID ${this.renderId()} `;
   //Name.style.fontSize="20px";
   card.appendChild(Name);
   let Department=document.createElement('p');
   Department.textContent=`Department: ${this.Department} - level ${this.level} `;
   card.appendChild(Department);
   let salary=document.createElement('p');
   salary.textContent=`Salary: ${this.renderAll()}`;
   card.appendChild(salary);
    


}

for(let i=0; i<all_Employees.length; i++){
  all_Employees[i].render();
}

Form.addEventListener("submit", handelSubmit);

function handelSubmit(event){
event.preventDefault();
//console.log(event);
let fullName=event.target.fname.value;
let Department=event.target.Departments.value;


let level=event.target.Levels.value;

let Image=event.target.image.value;

let newEmp=new Employees (fullName,Department,level,Image);
newEmp.render();
saveData(all_Employees);
}

function saveData(Data){
let stringObj=JSON.stringify(Data);
localStorage.setItem("Employees",stringObj);
 
}

function getData(){
  let retriveData=localStorage.getItem("Employees");
  let arrayData=JSON.parse(retriveData);
  console.log(arrayData);

  for(let i=0;i<arrayData.length;i++){
    var element=new Employees(
      arrayData[i].fullName,
      arrayData[i].Department,
      arrayData[i].level,
      arrayData[i].Image
  
    );
  }
  element.render();
}

getData();
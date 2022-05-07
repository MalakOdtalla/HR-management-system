"use strict";

 let table=document.getElementById("table1");
 //console.log(table);


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







let employee1= new Employees("Ghazi Samer","Administration","Senior","assets/Ghazi.jpg");
let employee2= new Employees("Lana Ali","Finance","Senior","assets/Lana.jpg");
let employee3= new Employees("Tamara Ayoub	", "Marketing","Senior","assets/Tamara.jpg");
let employee4= new Employees("Safi Walid","Administration","Mid-Senior","assets/Safi.jpg");
let employee5= new Employees("Omar Zaid","Development","Senior","assets/Omar.jpg");
let employee6= new Employees("Rana Saleh","Development","Junior","assets/Rana.jpg");
let employee7= new Employees("Hadi Ahmad","Finance","Mid-Senior","assets/Hadi.jpg");




//Generate a salary
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


//Generate Id
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


Employees.prototype.renderTable=function(){
  
  let tr1=document.createElement('tr');
  table.appendChild(tr1);


let td1=document.createElement('td');
  tr1.appendChild(td1);
  td1.textContent=this.Department; 

/*   for(let i=0; i<all_Employees.length; i++){
    all_Employees[i]
  }
 */
     let td2=document.createElement('td');
  tr1.appendChild(td2);
  td2.textContent=this.FullName; 

} 
function renderFun(){
  for(let i=0; i<all_Employees.length; i++){
//  console.log('hello')
    all_Employees[i].renderTable();
   
  }
}
renderFun();

//for (let grade of all_Employees.renderAll())
  //  avg = (grade / all_Employees.renderAll().length) * all_Employees.renderAll().length
//console.log(renderAll())



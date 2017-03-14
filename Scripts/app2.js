function getEmployeedetailsbyObj()
{
    var secondDate =  new Date(1993,07,21); 
    var EmpDet = {name:"Abhishek",Age:24,DateOfBirth:secondDate,PlaceOfBirth:"Gwalior"}

    console.log("Employee Name:"+EmpDet.name + "\n" + "Age: "+EmpDet.Age + "\n" + "DateOfBirth: "+EmpDet.DateOfBirth
     + "\n" +"PlaceOfBirth: "+ EmpDet.PlaceOfBirth );
}
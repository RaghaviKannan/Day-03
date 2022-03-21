//First question
var obj=[
    {
      "name":"Raghavi",
      "age":"25",
      "gender":"female",
    },
    {
      "name":"Priya",
      "age":"24",
      "gender":"female",
    },
    {
      "name":"Nivetha",
      "age":"26",
      "gender":"female",
    }]

//•	FOR

for ( let i=0;i<obj.length;i++){
  console.log(obj[i].name)
}

//•	FOR IN

for ( let i in obj){
  console.log(obj[i].name)
}

//•	FOR OF

for ( let i of obj){
  console.log(i.name)
}

//•	Foreach

obj.forEach(myfunction)

function myfunction(item){
  console.log(item.name)
}

//Second question - Resume as JSON

var resume=  {
    "name":"Raghavi",
    "age":"25",
    "DOB":"09/11/1996",
    "gender":"female",
    "contact number":"123456890",
    "email id":"abc@gmail.com",
    "highest qualification":"B.Sc. Electronics",
    "year passed out":"2018",
    "current company":"Infosys limited",
    "current CTC":"4 lakhs per annum",
    "expected CTC":"8 lakhs per annum",
    "current designation":"Systems engineer",
    "notice period":"3 months"
  }
    

  
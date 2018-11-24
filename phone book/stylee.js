var formContainer = document.getElementById("form-container");
var btnToggle = document.getElementById("btntoggle");

function toggleform()
{
    
    if(formContainer.style.display=="none")
    {
        
    formContainer.style.display="block";
        btnToggle.innerHTML ='hide<i class="fas fa-arrow-alt-circle-up"></i>'
    }
    else{
        formContainer.style.display="none";
        btnToggle.innerHTML='show<i class="fas fa-arrow-alt-circle-down"></i>'
    }
}
var userName = document.getElementById("uname");
var usePhone = document.getElementById("uphone");
var userMail = document.getElementById("umail");
var userLocation = document.getElementById("ulocation");

function validatename()

{
    var r = /^[A-Z]/
     console.log( r.test(uname.value));
    }      
function validatephone()
{
  var r = /^[1-9]/
  console.log( r.test(uphone.value))

}
                     

var allData=[]
function addrecord()
{
    validatephone()
    validatename()
    var record = {name:userName.value,phone:usePhone.value,mail:userMail.value,location:userLocation.value,}
    
    allData.push(record)
    displayData()
}
function displayData ()
{
var rows = "";
for(var i=0; i<allData.length;i++)
{
    rows +="<tr><td>"+allData[i].name+"</td><td>"+allData[i].phone+"</td><td>"+allData[i].mail+"</td><td>"+allData[i].location+"</td></tr>"
}
document.getElementById("output").innerHTML=rows
}



































$("#options-container i").click(function(){

$(".options").toggle()

})

var lis = $(".options ul li")

lis.eq(0).css("backgroundColor","tan")
lis.eq(1).css("backgroundColor","teal")
lis.eq(2).css("backgroundColor","orange")
lis.eq(3).css("backgroundColor","#09c")
lis.eq(4).css("backgroundColor","red")

lis.click(function(){


    var bgcolor =$(this).css("backgroundColor")
    
    $("*").css("color",bgcolor)
})









var UPB_Tripulantes=[]
console.log(UPB_Tripulantes)

//var a={"User":"reyner","pass":"123"}
//UPB_Tripulantes.push(a)
//console.log(UPB_Tripulantes)
function agregarRegistro(){
var nombre=document.getElementById('txt_user').value
var pass=document.getElementById('txt_Password').value
var Edad=document.getElementById('txt_Edad').value

var Persona={"User": nombre,"Pass":pass,"Edad":Edad}

UPB_Tripulantes.push(Persona)
console.log(UPB_Tripulantes)
document.getElementById('txt_user').value=""
document.getElementById('txt_Password').value=""
document.getElementById('txt_Edad').value=""

UPB_Tripulantes.forEach(function(x){
    console.log(x)
    console.log(x.User)

})

}

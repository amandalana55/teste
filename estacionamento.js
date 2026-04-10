function funcaocalcular(){
let veiculo= document.getElementById("inputVEICULO").checked;
let cliente= document.getElementById("inputCLIENTE").checked;
let horas= parseFloat(document.getElementById("inputC").value)
let horasinicial= 5;
let horaadd= 2.50;
let tarifa= horasinicial + ((horas -1)* horaadd)

if (veiculo){
  tarifa= tarifa * 1.25;
} 

if (cliente){
   tarifa= tarifa * 0.95;
}

document.getElementById("resp").innerHTML= tarifa;
}
function lancV(){
    var Vi = parseInt(document.getElementById('n1').value);
    var ts;
    var Hmax;
    ts=Vi/10; 
    Hmax=(Vi*Vi)/20;
	document.getElementById("ts").innerHTML = `Tempo de subida ${ts}`;
    document.getElementById("Hmax").innerHTML = `Altura Máxima ${Hmax}`;
}

function pontomaximominimo(){
    var a = parseInt(document.getElementById("n2").value);
    var b = parseInt(document.getElementById("n3").value);
    var c = parseInt(document.getElementById("n4").value);
    var Xv = parseInt(document.getElementById("Xv").value);
    Xv=(-b)/2*a; 
    Yv=(b*b)-(4*a*c)
	document.getElementById("Xv").innerHTML = `X do Vértice ${Xv}`;
    document.getElementById("Yv").innerHTML = `Y do Vértice ${Yv}`;
}
function main()
{
 var num = parseInt(document.getElementById("num").value);
 var resp = document.getElementById("resposta");
 
 if(document.getElementById("CtoF").checked==true)
  resp.innerHTML = ctof(num);
 if(document.getElementById("FtoC").checked==true)
  resp.innerHTML = ftoc(num);
}
function ctof(x)
{
 return (1.8*x + 32);
}

function ftoc(x)
{

 return ( (x-32)*5/9 );
}

function consumoenergia()
{
    var quantidade = parseInt(document.getElementById('quantidade').value);
    var valorunitário = parseInt(document.getElementById('valorunitario').value);
    var valor = quantidade*valorunitário;
    if(quantidade<200 && quantidade>100)
    {
        document.getElementById('consumo').innerHTML += ': '+ valor*1.25;
    }
    else if(quantidade>200){
        document.getElementById('consumo').innerHTML += ': '+ valor*1.5;
        
    }
    else{
        document.getElementById('consumo').innerHTML += ': '+ valor;
    }
            
    //document.getElementById('consumo').innerHTML += 'O consumo é' + total;
    //alert(valor);
}
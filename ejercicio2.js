var edad =17;

if(edad>=18){ 
    console.log("Vas al antro");
}else{
        console.log("vuelve cuando seas mayor");
    };

    var a = 1;
    switch(a) {
        case a=1:
        console.log("Option1");
        break;
        case a=2:
        console.log("Option2");
        break;
        case a=3:
        console.log("Option3");
        break;
        default:
            console.log("Fuera de rango");
        break;
    }

    //bucle

    for(var a=0;a<10; a++){
        console.log(a+1);
    }

    function antro(edad){
        if(edad>=18){
            return "Vamonos al antro";
        }else{
            return "Vamos a la iglesia"
        }
            
    }

    console.log(antro(17));
    console.log(antro(19));
    console.log(antro(15));
    console.log(antro(20));
    console.log(antro(16));

    for(var x=2;x<=10; x){
        console.log(x*1)
    }
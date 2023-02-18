document.getElementById("konv").onclick = function(){

    let temp;

    if(document.getElementById("kon1").checked){
        temp =document.getElementById("vrednost").value;
        temp = Number(temp);
        temp = CmvoIn(temp);
        document.getElementById("rez").innerHTML = " = " + temp + " in " ;
    }

    else if(document.getElementById("kon2").checked){
        temp =document.getElementById("vrednost").value;
        temp = Number(temp);
        temp = InvoCm(temp);
        document.getElementById("rez").innerHTML = " = " + temp + " cm " ;

    }

    else if(document.getElementById("kon3").checked){
        temp =document.getElementById("vrednost").value;
        temp = Number(temp);
        temp = KmvoMi(temp);
        document.getElementById("rez").innerHTML = " = " + temp + " milji " ;

    }

    else if(document.getElementById("kon4").checked){
        temp =document.getElementById("vrednost").value;
        temp = Number(temp);
        temp = MivoKm(temp);
        document.getElementById("rez").innerHTML = " = " + temp + " km "; 

    }

    else if(document.getElementById("kon5").checked){
        temp =document.getElementById("vrednost").value;
        temp = Number(temp);
        temp = KgvoLbs(temp);
        document.getElementById("rez").innerHTML = " = " + temp + " lbs " ;

    }

    else if(document.getElementById("kon6").checked){
        temp =document.getElementById("vrednost").value;
        temp = Number(temp);
        temp = LbsvoKg(temp);
        document.getElementById("rez").innerHTML = " = " + temp + " kg " 

    }

    else{
        document.getElementById("rez").innerHTML = " Odberete merni edinici !";
    }
}


function CmvoIn(temp){
    return temp/2.54;
}

function InvoCm(temp){
    return temp*2.54;
}

function KmvoMi(temp){
    return temp*0.621;
}

function MivoKm(temp){
    return temp*1.609;
}

function KgvoLbs(temp){
    return temp*2.2;
}

function LbsvoKg(temp){
    return temp*0.453;
}
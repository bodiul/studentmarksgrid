function handlechage(){
    let input = document.getElementById('input-val').value;
    if((input >= 80) && (input <= 100)){
        greeting ='Student marks grid :' + " A+ "
    }
    else if((input >= 70) && (input <= 79)){
        greeting ='Student marks grid :' + " A "
    }
    else if((input >= 60) && (input <= 69)){
        greeting ='Student marks grid :' + " A- "
    }
    else if((input >= 50) && (input <= 59)){
        greeting ='Student marks grid :' + " B "
    }
    else if((input >= 40) && (input <= 49)){
        greeting ='Student marks grid :' + " C "
    }
    else if((input >= 33) && (input <= 39)){
        greeting ='Student marks grid :' + " D "
    }
    else if((input >= 0) && (input <= 32)){
        greeting ='Student marks grid :' + " F "
    }
    else{
        greeting ='Student marks grid :' + " SYSTEM ERROR"
    }
   
    document.getElementById("demo").innerHTML = greeting;
}



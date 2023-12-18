function check(){
    var v1,v2,v3;
    v1 = Number(document.getElementById("t1").value); 
    v2 = Number(document.getElementById("t2").value); 
    v3 = Number(document.getElementById("t3").value); 


    if (v1 > v2 && v1 > v3){
        document.getElementById('p1').innerHTML= v1 +  " " + "is the largest number";
    }
    else if (v2 > v3 && v2 > v1){
        document.getElementById('p1').innerHTML= v2 +  " " + "is the largest number";
    }
    else if (v3 > v2 && v3 > v1){
        document.getElementById('p1').innerHTML= v3 + " " + "is the largest number";
    }
    
}
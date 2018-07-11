

var timer; 

function cbf(){
    var x= document.getElementById("y");
    var y=document.getElementById('needle_length_user');
    var z=document.getElementById("needle_angle_user");
    w=Number.isInteger(+x.value)
    //e=if(+x.value>0){};
    if(w){
        if(+x.value>0){
            
        user_input(x,y,z);
            
        }
        else
            alert("INVALID NUMBER OF NEEDLES");
    }
    else 
        alert("(@_@) Enter POSITIVE INTEGERS ONLY");   

}

function Animate(){
   timer= d3.interval(cbf,500);
    
    
}

//timer.stop();

//timer.restart(callback, 200);  will start timer function
//timer.stop();                  will stop timer function

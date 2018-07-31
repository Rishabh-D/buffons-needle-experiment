var number_of_needle=0;
var length_of_needle=0;
var angle_of_needle="";
var total_needle=0;
var needle_array=[];
var pi=0;
var num_needles_array = [];
var pi_value_array = [];  
//localStorage.setItem("w",o);

function fun_manual(){
    var card_body=document.getElementById("card_body");
    card_body.innerHTML="No. of needles : "+"<input id='needle_numbers' type='text'>";
    
}

function fun_auto(){
    var card_body=document.getElementById("card_body");
    card_body.innerHTML="No. of needles per 0.5 sec "+"<input id='needle_numbers' type='text'>"
    
    +"<br><br>"+"<button id='btnR' onclick='Animate()' class='btn btn-info btn-outline-primary' > START </button>"
    +"<button id='btnS' onclick='timer.stop()' class='btn btn-info btn-outline-primary'> STOP </button>";
    
    
    
    
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
 ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev) {
    ev.preventDefault();
    var x= document.getElementById("needle_numbers");
    var y=document.getElementById('input_length');
    var z=document.getElementById("input_angle");
    w=Number.isInteger(+x.value)
    //e=if(+x.value>0){};
    if(w){
        if(+x.value>0){
            
              user_input(x,y,z);
            
          
        }
        else
            alert("INVALID NUMBER OF NEEDLES . Length cannot exceed 100");
    }
    else 
        alert("(@_@) Enter POSITIVE INTEGERS ONLY");   
}

function user_input(x,y,z){
    number_of_needle=+x.value;
    length_of_needle=+y.value;
    
    if(z.value=="")
    angle_of_needle="random";
    else
    angle_of_needle=z.value;
    setup();
    
    total_needle=total_needle+number_of_needle;
    total_intersection=is_intersecting(needle_array);
    var ratio=total_intersection/total_needle;
    pi=2*length_of_needle/(100*ratio)
    
    num_needles_array.push(total_needle);
    pi_value_array.push(pi);
    result();
}

function setup(){
    create_needles();
    canvas.render_needles();
}

function result(){
    var tn=document.getElementById("ratioN");
    var tm=document.getElementById("ratioD");
    tn.innerHTML=total_intersection;
    tm.innerHTML=total_needle;
    
    tn=document.getElementById("pii");
    tn.innerHTML="PI = "+pi;
    second_plot();
    updatePlot();
}


// const insert = document.getElementById('insert');

// window.addEventListener('keydown', (e) => {
//     if (e.keyCode === 13) { 
//         insert.innerHTML = `
//         <div class="color">
//         <table style="width:200%">
//             <tr id="row1">
//                 <th id="b1">hi</th>
//                 <th id="b2">hi</th>
//                 <th id="b3">hi</th>
//             </tr>
//             <tr id="row2">
//                 <th id="b4">hi</th>
//                 <th id="b5">hi</th>
//                 <th id="b6">hi</th>
//             </tr>
//             <tr id="row3">
//                 <th id="b7">hi</th>
//                 <th id="b8">hi</th>
//                 <th id="b9">hi</th>
//             </tr>
//         </table>
//         </div>
//         `;
//     }
// });



function myfunc(){
    let b1,b2,b3,b4,b5,b,b6,b7,b8,b9
    let but1,but2,but3,but4,but5,but6,but7,but8,but9

    b1=document.getElementById("b1").value
    b2=document.getElementById("b2").value
    b3=document.getElementById("b3").value
    b4=document.getElementById("b4").value
    b5=document.getElementById("b5").value
    b6=document.getElementById("b6").value
    b7=document.getElementById("b7").value
    b8=document.getElementById("b8").value
    b9=document.getElementById("b9").value

    but1=document.getElementById("b1")
    but2=document.getElementById("b2")
    but3=document.getElementById("b3")
    but4=document.getElementById("b4")
    but5=document.getElementById("b5")
    but6=document.getElementById("b6")
    but7=document.getElementById("b7")
    but8=document.getElementById("b8")
    but9=document.getElementById("b9")

    if( (b1 === 'x' || b1 === 'X' ) && (b2 === 'x' || b2 === 'X' ) && (b3 === 'x' || b3 === 'X' )){
        document.getElementById('print').innerHTML="Player X Won"
        document.getElementById('print').style.color = 'red'
        but4.disabled=true
        but5.disabled=true
        but6.disabled=true
        but7.disabled=true
        but8.disabled=true
        but9.disabled=true

        but1.style.color='red'
        but2.style.color='red'
        but3.style.color='red' 
    }
    else if((b1 === 'x' || b1 === 'X' ) && (b4 === 'x' || b4 === 'X' ) && (b7 === 'x' || b7 === 'X' )){
        document.getElementById('print').innerHTML="Player X Won"
        document.getElementById('print').style.color = 'red'
        but2.disabled=true
        but5.disabled=true
        but6.disabled=true
        but3.disabled=true
        but8.disabled=true
        but9.disabled=true

        but1.style.color='red'
        but4.style.color='red'
        but7.style.color='red' 
    }
    else if((b7 === 'x' || b7 === 'X' ) && (b8 === 'x' || b8 === 'X' ) && (b9 === 'x' || b9  === 'X' )){
        document.getElementById('print').innerHTML="Player X Won"
        document.getElementById('print').style.color = 'red'
        but2.disabled=true
        but5.disabled=true
        but6.disabled=true
        but3.disabled=true
        but4.disabled=true
        but1.disabled=true

        but7.style.color='red'
        but8.style.color='red'
        but9.style.color='red' 
    }
    else if((b3 === 'x' || b3 === 'X' ) && (b6 === 'x' || b6 === 'X' ) && (b9 === 'x' || b9 === 'X' )){
        document.getElementById('print').innerHTML="Player X Won"
        document.getElementById('print').style.color = 'red'
        but2.disabled=true
        but5.disabled=true
        but1.disabled=true
        but4.disabled=true
        but8.disabled=true
        but7.disabled=true

        but3.style.color='red'
        but6.style.color='red'
        but9.style.color='red' 
    }
    else if((b4 === 'x' || b4 === 'X' ) && (b5 === 'x' || b5 === 'X' ) && (b6 === 'x' || b6 === 'X' )){
        document.getElementById('print').innerHTML="Player X Won"
        document.getElementById('print').style.color = 'red'
        but1.disabled=true
        but2.disabled=true
        but3.disabled=true
        but7.disabled=true
        but8.disabled=true
        but9.disabled=true

        but4.style.color='red'
        but5.style.color='red'
        but6.style.color='red' 
    }
    else if((b1 === 'x' || b1 === 'X' ) && (b5 === 'x' || b5 === 'X' ) && (b9 === 'x' || b9 === 'X' )){
        document.getElementById('print').innerHTML="Player X Won"
        document.getElementById('print').style.color = 'red'
        but2.disabled=true
        but3.disabled=true
        but4.disabled=true
        but6.disabled=true
        but7.disabled=true
        but8.disabled=true

        but1.style.color='red'
        but5.style.color='red'
        but9.style.color='red' 
    }
    else if((b3 === 'x' || b3 === 'X' ) && (b5 === 'x' || b5 === 'X' ) && (b7 === 'x' || b7 === 'X' )){
        document.getElementById('print').innerHTML="Player X Won"
        document.getElementById('print').style.color = 'red'
        but1.disabled=true
        but2.disabled=true
        but4.disabled=true
        but6.disabled=true
        but8.disabled=true
        but9.disabled=true

        but3.style.color='red'
        but5.style.color='red'
        but7.style.color='red' 
    }
    else if((b2 === 'x' || b2 === 'X' ) && (b5 === 'x' || b5 === 'X' ) && (b8 === 'x' || b8 === 'X' )){
        document.getElementById('print').innerHTML="Player 0 Won"
        document.getElementById('print').style.color = 'red'
        but1.disabled=true
        but3.disabled=true
        but4.disabled=true
        but6.disabled=true
        but7.disabled=true
        but9.disabled=true

        but2.style.color='red'
        but5.style.color='red'
        but8.style.color='red' 
    }
    else if( (b1 === '0' || b1 === '0' ) && (b2 === '0' || b2 === '0' ) && (b3 === '0' || b3 === '0' )){
        document.getElementById('print').innerHTML="Player 0 Won"
        document.getElementById('print').style.color = 'red'
        but4.disabled=true
        but5.disabled=true
        but6.disabled=true
        but7.disabled=true
        but8.disabled=true
        but9.disabled=true

        but1.style.color='red'
        but2.style.color='red'
        but3.style.color='red' 
    }
    else if((b1 === '0' || b1 === '0' ) && (b4 === '0' || b4 === '0' ) && (b7 === '0' || b7 === '0' )){
        document.getElementById('print').innerHTML="Player 0 Won"
        document.getElementById('print').style.color = 'red'
        but2.disabled=true
        but5.disabled=true
        but6.disabled=true
        but3.disabled=true
        but8.disabled=true
        but9.disabled=true

        but1.style.color='red'
        but4.style.color='red'
        but7.style.color='red' 
    }
    else if((b7 === '0' || b7 === '0' ) && (b8 === '0' || b8 === '0' ) && (b9 === '0' || b9  === '0' )){
        document.getElementById('print').innerHTML="Player 0 Won"
        document.getElementById('print').style.color = 'red'
        but2.disabled=true
        but5.disabled=true
        but6.disabled=true
        but3.disabled=true
        but4.disabled=true
        but1.disabled=true

        but7.style.color='red'
        but8.style.color='red'
        but9.style.color='red' 
    }
    else if((b3 === '0' || b3 === '0' ) && (b6 === '0' || b6 === '0' ) && (b9 === '0' || b9 === '0' )){
        document.getElementById('print').innerHTML="Player 0 Won"
        document.getElementById('print').style.color = 'red'
        but2.disabled=true
        but5.disabled=true
        but1.disabled=true
        but4.disabled=true
        but8.disabled=true
        but7.disabled=true

        but3.style.color='red'
        but6.style.color='red'
        but9.style.color='red' 
    }
    else if((b4 === '0' || b4 === '0' ) && (b5 === '0' || b5 === '0' ) && (b6 === '0' || b6 === '0' )){
        document.getElementById('print').innerHTML="Player 0 Won"
        document.getElementById('print').style.color = 'red'
        but1.disabled=true
        but2.disabled=true
        but3.disabled=true
        but7.disabled=true
        but8.disabled=true
        but9.disabled=true

        but4.style.color='red'
        but5.style.color='red'
        but6.style.color='red' 
    }
    else if((b1 === '0' || b1 === '0' ) && (b5 === '0' || b5 === '0' ) && (b9 === '0' || b9 === '0' )){
        document.getElementById('print').innerHTML="Player 0 Won"
        document.getElementById('print').style.color = 'red'
        but2.disabled=true
        but3.disabled=true
        but4.disabled=true
        but6.disabled=true
        but7.disabled=true
        but8.disabled=true

        but1.style.color='red'
        but5.style.color='red'
        but9.style.color='red' 
    }
    else if((b3 === '0' || b3 === '0' ) && (b5 === '0' || b5 === '0' ) && (b7 === '0' || b7 === '0' )){
        document.getElementById('print').innerHTML="Player 0 Won"
        document.getElementById('print').style.color = 'red'
        but1.disabled=true
        but2.disabled=true
        but4.disabled=true
        but6.disabled=true
        but8.disabled=true
        but9.disabled=true

        but3.style.color='red'
        but5.style.color='red'
        but7.style.color='red' 
    }
    else if((b2 === '0' || b2 === '0' ) && (b5 === '0' || b5 === '0' ) && (b8 === '0' || b8 === '0' )){
        document.getElementById('print').innerHTML="Player 0 Won"
        document.getElementById('print').style.color = 'red'
        but1.disabled=true
        but3.disabled=true
        but4.disabled=true
        but6.disabled=true
        but7.disabled=true
        but9.disabled=true

        but2.style.color='red'
        but5.style.color='red'
        but8.style.color='red' 
    }
    else if((b1 === 'X' || b1 === '0' ) && (b2 === 'X' || b2 === '0' ) && (b3 === 'X' || b3 === '0' ) &&
            (b4 === 'X' || b4 === '0' ) && (b5 === 'X' || b5 === '0' ) && (b6 === 'X' || b6 === '0' ) &&
            (b7 === 'X' || b7 === '0' ) && (b8 === 'X' || b8 === '0' ) && (b9 === 'X' || b9 === '0' )){
        document.getElementById('print').innerHTML="Match Tie"
        document.getElementById('print').style.color = 'red'
        but1.disabled=true
        but2.disabled=true
        but4.disabled=true
        but6.disabled=true
        but8.disabled=true
        but9.disabled=true

        but3.disabled=true
        but5.disabled=true
        but7.disabled=true
    }
    else{
        if(flag==1){
            document.getElementById('print').innerHTML="Print X Turn"
        }
        else{
            document.getElementById('print').innerHTML="Print 0 Turn"
        }
    }
}

let flag=1
function myfunc_3(){
    if(flag ==1){
        document.getElementById("b1").value="X"
        document.getElementById("b1").disabled=true
        flag=0
    }
    else{
        document.getElementById("b1").value="0"
        document.getElementById("b1").disabled=true
        flag=1
    }
}
function myfunc_4(){
    if(flag ==1){
        document.getElementById("b2").value="X"
        document.getElementById("b2").disabled=true
        flag=0
    }
    else{
        document.getElementById("b2").value="0"
        document.getElementById("b2").disabled=true
        flag=1
    }
}
function myfunc_5(){
    if(flag ==1){
        document.getElementById("b3").value="X"
        document.getElementById("b3").disabled=true
        flag=0
    }
    else{
        document.getElementById("b3").value="0"
        document.getElementById("b3").disabled=true
        flag=1
    }
}
function myfunc_6(){
    if(flag ==1){
        document.getElementById("b4").value="X"
        document.getElementById("b4").disabled=true
        flag=0
    }
    else{
        document.getElementById("b4").value="0"
        document.getElementById("b4").disabled=true
        flag=1
    }
}
function myfunc_7(){
    if(flag ==1){
        document.getElementById("b5").value="X"
        document.getElementById("b5").disabled=true
        flag=0
    }
    else{
        document.getElementById("b5").value="0"
        document.getElementById("b5").disabled=true
        flag=1
    }
}
function myfunc_8(){
    if(flag ==1){
        document.getElementById("b6").value="X"
        document.getElementById("b6").disabled=true
        flag=0
    }
    else{
        document.getElementById("b6").value="0"
        document.getElementById("b6").disabled=true
        flag=1
    }
}
function myfunc_9(){
    if(flag ==1){
        document.getElementById("b7").value="X"
        document.getElementById("b7").disabled=true
        flag=0
    }
    else{
        document.getElementById("b7").value="0"
        document.getElementById("b7").disabled=true
        flag=1
    }
}
function myfunc_10(){
    if(flag ==1){
        document.getElementById("b8").value="X"
        document.getElementById("b8").disabled=true
        flag=0
    }
    else{
        document.getElementById("b8").value="0"
        document.getElementById("b8").disabled=true
        flag=1
    }
}
function myfunc_11(){
    if(flag ==1){
        document.getElementById("b9").value="X"
        document.getElementById("b9").disabled=true
        flag=0
    }
    else{
        document.getElementById("b9").value="0"
        document.getElementById("b9").disabled=true
        flag=1
    }
}
function myfunc_2(){
    location.reload()
    b1=b2=b3=b4=b5=b6=b7=b8=b9=''
}
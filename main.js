function hisob() {

    var aSon = document.getElementById("sonA").value;
    var bSon = document.getElementById("sonB").value;   
    var oper = document.getElementById("amal").value;


    if( aSon !== "" && bSon !== "" ) {
        //code
        aSon = parseFloat(aSon);
        bSon = parseFloat(bSon);

        var result = 0;
        switch(oper) {
            case "+": result = aSon + bSon; break;
            case "-": result = aSon - bSon; break;
            case "*": result = aSon * bSon; break;
            case "/": result = aSon / bSon; break;
            default: result = 0;
        }

        document.getElementById("display").innerText = result;


    } else{
        alert("A va B sonlarni kiriting!")
    }
}




var ARR = []

var draw = function () {

    var userName = document.getElementById("fish").value;
    var match = document.getElementById("uchrashuv").value;
    var paySum = document.getElementById("pay").value;
    var date = new Date().getDate()+"." + ( new Date().getMonth()+ 1 ) + "."+ new Date().getFullYear()


    if( userName !== "" && paySum !== "" ) {
        //code

        var obj = {
            userName,
            match,
            paySum,
            date,
        }
        ARR.push(obj);
        inner();
        document.getElementById("fish").value = "";
        document.getElementById("pay").value = "";
    } else{
        document.getElementById("text-p").innerText = "Ma'lumotlarni to'liq kiriting!"
        
    }
}

function inner() {

    var tr = "";
    var i = 0;

    for( td of ARR ) {
        i++;
        
        tr+= "<tr>"+

        "<td>"+i+"</td>"+
        "<td>"+td.userName+"</td>"+
        "<td>"+td.paySum+"</td>"+
        "<td>"+td.match+"</td>"+
        "<td>"+td.date+"</td>"+

        "</tr>"

        document.getElementById("tbody").innerHTML = tr;
    }
}


function getNumber(num){

var result = document.getElementById("result")
result.value += num;
}

function clearValue(){
    var result = document.getElementById("result")
result.value = "";
}

function resultvalue(){
    var result = document.getElementById("result")

result.value = eval(result.value)

}

function clrtvalue(){
    var result = document.getElementById("result")

result.value = result.value.slice(0,-1)

}




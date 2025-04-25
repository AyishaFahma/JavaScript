function displayr(num){
    result.value = result.value + num
}


function clearAll(){
    result.value = ""
}

function back(){
    result.value = result.value.slice(0,-1)
}

function equals(){
    try{
        result.value = eval(result.value)

    }
    catch(error){
        result.value = 'Error'
        setTimeout( () => {
            result.value = ""
        },2000)

    }
}


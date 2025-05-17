

    function checkage() {
        console.log(age.value);
        const content = document.getElementById('display')

    if(age.value){

        if(age.value >=18){
            content.innerHTML = 'Eligible to Vote'
            content.style.color = 'green'

        }
        else if(age.value < 18){
            content.innerHTML = 'Not Eligible to Vote'
            content.style.color = 'red'
        }
        else{
            content.innerHTML = 'Invalid Input'
            content.style.color = 'orange'
        }
    }
    else{
            content.innerHTML = 'Please Enter a Value'
            content.style.color = 'blue'
        }

            
    }




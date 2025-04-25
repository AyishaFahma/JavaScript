function getTime(){
    const time = new Date()
    console.log(time);


    const hr = time.getHours()
    console.log(hr);

    const min = time.getMinutes()
    console.log(min);

    const sec = time.getSeconds()
    console.log(sec);


    clockresult.innerHTML = `${hr} : ${min} : ${sec}  ${hr>=12? 'PM' : 'AM'}`


    setTimeout( ()=>{
        getTime()
    },1000)
      
}
getTime()
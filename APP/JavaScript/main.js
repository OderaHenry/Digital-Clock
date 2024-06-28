function getTime() {
    const time = new Date();

    const hours = time.getHours();
    const min = time.getMinutes();
    const seconds = time.getSeconds(); 
    const day = time.getDay();
    const month= time.getMonth();
    const year = time.getFullYear();


     const currentTime=`${hours}:${min}:${seconds}`;
     const currentDay=`${day}/${month}/${year}`;


     const timeArea= document.getElementById('clock');
     const dateArea= document.getElementById('date');

     timeArea.textContent=currentTime;
     dateArea.textContent=currentDay;

    }
    setInterval(getTime, 1000);


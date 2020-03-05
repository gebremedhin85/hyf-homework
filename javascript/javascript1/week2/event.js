//Even application
const days= ["Sunday", "Monday", "Tuesday", "Wensday", "Thruesday", "Friday", "Saturday"];
let d=new Date(); // today's date
const today=days[d.getDay()]; // determines wchich week day is today
//'n' stands for the number of days remaining for the event to be held.
function findDay(n){
    if((d.getDay()+n)%7==0){// 7 stands for 'number of days in a week'.
        return days[0];
    }else if ((d.getDay()+n)%7==1){
        return days[1];
    }else if ((d.getDay()+n)%7==2){
        return days[2];
    }else if ((d.getDay()+n)%7==3){
        return days[3];
    }else if ((d.getDay()+n)%7==4){
        return days[4];
    }else if ((d.getDay()+n)%7==5){
        return days[5];
    }else{
        return days[6];
    }
} 
const result=findDay(6);
console.log("The event is held on: "+"\""+result+"\"");

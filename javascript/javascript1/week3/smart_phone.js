const activities=[];
//Adding activities
function addActivity(date, activity, duration){
    if(typeof(date)==="string" && typeof(activity)==="string" && typeof(duration)==="number"){
        const newActivity={};
        newActivity.date=date;
        newActivity.activity=activity;
        newActivity.duration=duration;
        activities.push(newActivity);
    }
}
addActivity(18, 'Youtube', 30);//this activity is not added as value of date is not string
addActivity("23/7-18", "Facebook", 40);
addActivity("23/7-18", "Game", 10);
console.log(activities);

//Showing ones status
function showStatus(activities){
    let timeUsed=0;
    for(let i=0; i<activities.length; i++){
        timeUsed+=activities[i].duration;
    }
    if(activities.length>0){
        console.log("\""+"You have added "+activities.length+" activities. They amount to "+
        timeUsed+" min. of usage"+"\"");
    }else{
        console.log("\""+"Add some activities before calling showStatus"+"\"");
    }
}
showStatus(activities);

//Usage limit
const maxUsage=100;
function limitUsage(activities){
    let timeUsed=0;
    for(let i=0; i<activities.length; i++){
        timeUsed+=activities[i].duration;
    };
    if(timeUsed>=maxUsage){
    console.log("\""+"You have reached your limit, no more smartphoning for you!"+"\"");
}
}
limitUsage(activities);
addActivity("23/7-18", "TV2", 20)
addActivity("27/7-18", "twitter", 50);
showStatus(activities);
limitUsage(activities);
 

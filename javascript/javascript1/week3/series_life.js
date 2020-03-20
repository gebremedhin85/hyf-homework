const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Sopranos',
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: 'The Wire',
      days: 2,
      hours: 12,
      minutes: 0,
    }
  ];
  
  const myFavoriteSeries={
      title: "Two and half men",
      days: 5,
      hours: 11,
      minutes:0,
  };
seriesDurations.push(myFavoriteSeries);// my favorite series added
  
  //avarge life spane taken as 80 years
const lifespanInMinutes=42048000;//All durations are calculated in to minutes
//to calculate totatl duration in minutes per each series
function getTotalMinutesPerSeries(seriesDurations){
    const totalMinutesPerSeries=seriesDurations.days*24*60+seriesDurations.hours*60+seriesDurations.minutes;
    return totalMinutesPerSeries;
}
//to calculate percentage of life spane wasted on single series 
function getPercentageOfLifeSpanePerSeries(MinutesPerSeries, lifespanInMinutes){
    const percentageOfLifeSpanePerSeries=(MinutesPerSeries/lifespanInMinutes)*100;
    return percentageOfLifeSpanePerSeries;
}
let totalSeriesPercentage=0;
//for loop to calculte the total serieses percentage of duration
for(let i=0; i<seriesDurations.length; i++){
  percentage=getPercentageOfLifeSpanePerSeries(getTotalMinutesPerSeries(seriesDurations[i]), lifespanInMinutes);
  totalSeriesPercentage+=percentage;
  console.log(seriesDurations[i].title+" took "+percentage.toFixed(3)+"%"+" of my life");
}
console.log("In total that is "+totalSeriesPercentage.toFixed(2)+"%"+" of my life");
 
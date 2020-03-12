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
   
 
  // calculating: for each series time spent percentage of an average lifespan of 80 years
  const lifespanInHours=700800;//All are in days and hours so all durations are calculated in to hours
  
  console.log(seriesDurations[0].title+" took "+((seriesDurations[0].days*24+seriesDurations[0].hours)
      *100/lifespanInHours).toFixed(2)+"%"+" of my life");
  for(let i=1; i<seriesDurations.length; i++){
      console.log(seriesDurations[i].title+" took "+((seriesDurations[i].days*24+seriesDurations[i].hours)
      *100/lifespanInHours).toFixed(3)+"%"+" of my life");
  }
  // for total serieses
  let totalSeries=0;
  for(let n=0; n<seriesDurations.length; n++){
      totalSeries+=(seriesDurations[n].days*24+seriesDurations[n].hours)
      *100/lifespanInHours;
       }
    totalSeries.toFixed(2);
    console.log("In total that is "+totalSeries.toFixed(2)+"%"+" of my life")
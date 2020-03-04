//Startup names generator
const firstWords=["Smart", "Ontime", "Fast", "Cool", "Sharp", "Smooth", "Speedy", "Elegant", "Elite", "Legend"];
const secondWords=["Service", "Porduct", "Corporation", "Plc", "Partner", "Mark", "Market", "Start", "Ap", "Ways"];

const randomNumber = Math.floor(Math.random() * 10) + 0;//generate random number for first-word
const random=Math.floor(Math.random() * 10)+0;//generate random number for second-word
const startupName=firstWords[randomNumber]+" " +secondWords[random];//generates names for the startup
console.log("\""+"The startup: "+"\""+ startupName+"\" "+ "contains " + startupName.length+" characters"+"\"");
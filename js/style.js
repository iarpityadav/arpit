
// Function for date and time ==START==>
function myfunction(){
    document.getElementById("memo").innerHTML=Date();
};
// Function for date and time ==END==>

// Switch Function  ==START==>
function getUserDetails(name,role){
    switch(role){
        case "admin" :
            return `${name} has all the admin access`;
        case "user" :
            return `${name} has all the user access`;
        case "tresp" :
            return `${name} has all the tresp access`;
        default:
            return "Kya karne aaya hai tu yaha par! " 
    }
     
}
var details = getUserDetails("Anda","admin");
var detail = getUserDetails("Megha","user");
console.log(details);
console.log(detail);
// Switch Function  ==END==>
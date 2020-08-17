/* -- set app title --*/
const AppTitle = " ";

/* -- set app mode -- */
const AppMode = ["development"];

/* -- set API URLs --*/
const development = "https://raw.githubusercontent.com/vishnu-vijayasankar/pit-solutions-assignment/master/dummyResponse.json";


/* -- API URL Configuration --*/
var ApiUrl;
switch(AppMode[0]){
    case "development":
        ApiUrl = development;
        break;
    default:
        ApiUrl = "https://raw.githubusercontent.com/vishnu-vijayasankar/pit-solutions-assignment/master/dummyResponse.json"
}

export {
    AppTitle,
    ApiUrl,
    AppMode
}
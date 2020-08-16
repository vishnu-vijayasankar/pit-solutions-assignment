/* -- set app title --*/
const AppTitle = " ";

/* -- set app mode -- */
const AppMode = ["development"];

/* -- set API URLs --*/
const development = "http://localhost:4000";


/* -- API URL Configuration --*/
var ApiUrl;
switch(AppMode[0]){
    case "development":
        ApiUrl = development;
        break;
    default:
        ApiUrl = "http://localhost:4000"
}

export {
    AppTitle,
    ApiUrl,
    AppMode
}
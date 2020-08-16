

/* -- checks if response is error -- */
const isError = function (obj) {
    if (obj.code === 400 || obj.code === 500 || obj.code === 409 || obj.code === 401 | obj.code === 404) {
        return true;
    } else {
        return false;
    }
}
const frameAlert = function (obj) {
    if (obj.code === 500 || obj.code === 400 || obj.code === 409 || obj.code === 401 || obj.code === 404) {
        return "" + obj.message;
    } else if (obj.code === 200 || obj.code === 201) {
        return "" + obj.message;
    } else {
        return "Some error occured";
    }
}

const serverOffError = function () {
    return "Request could not be completed. Please make sure you are connected to the server.";
}
const isObjEmpty = function (obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
}

export {
    isError,
    frameAlert,
    serverOffError,
    isObjEmpty
}
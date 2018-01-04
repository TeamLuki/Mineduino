/*
switch(process.argv[0]){
    case "start":
        break;
    case "help":
    default:
        console.log("")
        console.log("")
        process.exit("");
}
if (parseInt(process.argv[1]) == NaN) {
    console.log("error: requires a serial port")
}*/
var serial = require("serialport");
var ard = new serial("COM3")
var robot = require("robotjs");
var _ = require("./lib/globals");

ard.on("data",function(bw){
    dataAnalyzer(bw)
});
var containsFlag = function(number, flag) {
    return (number & flag) === flag;
}
function dataAnalyzer(binteger){
    binteger
}
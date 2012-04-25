// JavaScript Document
function Event(name,code,time)
{
	this.name = name;
	this.code = code;
    this.time = time;
	}

function strToEve(str)
{
    var info = str.split("@");
    
    
    var event = new Event(info[0],info[1],info[2]);
    
    return event;
    
}
function capturePicture(){
    
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 1});
    
}
function captureSuccess(file){
}
function captureError(error){
    var msg = 'An error occurred during capture: ' + error.code; 
    navigator.notification.alert(msg, null, 'Uh oh!'); 
    
}
function add(){
    var curusr = window.localStorage.getItem("curUser");
    var eventname= $("#name").val();
    var eventcode= $("#code").val();
    var time = new Date();
    var event= eventname+"@"+eventcode+"@"+time.getHours()+":"+time.getMinutes();
    var eventlist = window.localStorage.getItem(curusr);
    if(eventlist==null){
        eventlist="blank@1@1,blank@1@2";
    }
    eventlist= eventlist.split(",");
    eventlist.push(event);
    window.localStorage.setItem(curusr,eventlist);
    $("#name").val("");
    $("#code").val("");
    location.href="Event.html";
}
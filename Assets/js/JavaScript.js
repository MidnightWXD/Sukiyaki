// id=currentday show current day
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
var container = $(".container");
var inputGroupTitle = $('<p>');


function setTime() {
    var time = moment().format("h");
    var timeArray = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
    for (var i = 0; i < timeArray.length; i++) {
        if(inputGroupTitle.text().include("AM")){
            if(timeArray[i] < time){
                inputGroupTitle.addClass("past");
            }else if(timeArray[i] === time){
                inputGroupTitle.addClass("present");
            }
            else{
                inputGroupTitle.addClass("future");
            }
        }else{
            if(timeArray[i] < time){
                inputGroupTitle.addClass("past");
            }else if(timeArray[i] === time){
                inputGroupTitle.addClass("present");
            }
            else{
                inputGroupTitle.addClass("future");
            }
        }
    }
}


function setInputGroup() {
    var timeArray = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
    for (var i = 0; i < timeArray.length; i++) {                  
        var currentTime = timeArray[i];
        var inputGroup = $('<div>');
        inputGroup.addClass("input-group"); 
        var inputGroupTitle = $('<p>');       
        inputGroupTitle.addClass("input-group-text");
        inputGroupTitle.attr("id", "basic-addon1"); 
        if(timeArray[i] <= 12) {
            inputGroupTitle.text(currentTime + "AM");
        } else {
            inputGroupTitle.text(currentTime + "PM");
        }      
        var inputGroupInput = $('<input>');
        //
        inputGroupInput.addClass(function(){
            var time = timeArray[i];
            return "form-control " + time;
        });
        inputGroupInput.attr("type", "text");
        inputGroupInput.attr("aria-label","Recipient's username");
        inputGroupInput.attr("aria-describedby","basic-addon2");
        var inputGroupButton = $('<div>');
        inputGroupButton.addClass("input-group-append");
        var inputGroupButtonButton = $('<button>');
        inputGroupButtonButton.addClass("btn btn-outline-secondary");
        inputGroupButtonButton.attr("type", "button");
        inputGroupButtonButton.attr("id", "button-addon2");
        inputGroupButtonButton.text("Save");
        container.append(inputGroup);
        inputGroup.append(inputGroupTitle);
        inputGroup.append(inputGroupInput);
        inputGroup.append(inputGroupButton);
        inputGroupButton.append(inputGroupButtonButton);

    }
}




setInputGroup();
setTime();
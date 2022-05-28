//show current day
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
var container = $(".container");
//set time for each input
var timeArray = [
    ["9","AM"],
    ["10","AM"],
    ["11","AM"],
    ["12","PM"],
    ["1","PM"],
    ["2","PM"],
    ["3","PM"],
    ["4","PM"],
    ["5","PM"]
];
//function to set input bar on the page
function setInputGroup() {
    for (var i = 0; i < timeArray.length; i++) {                  
        var setTagTime = timeArray[i][0] + timeArray[i][1];
        var inputGroup = $('<div>');
        inputGroup.addClass("input-group"); 
        var inputGroupTitle = $('<p>');       
        inputGroupTitle.addClass("input-group-text");
        inputGroupTitle.attr("id", "basic-addon1"); 
        inputGroupTitle.text(setTagTime);    
        var inputGroupInput = $('<input>');
        //class for targetting saved text
        inputGroupInput.addClass(function(){
            var time = timeArray[i][0];
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
        var icon = $('<i>');
        icon.addClass("fas fa-save");
        container.append(inputGroup);
        inputGroup.append(inputGroupTitle);       
        inputGroup.append(inputGroupButton);
        inputGroupButton.append(inputGroupInput);
        inputGroupButton.append(inputGroupButtonButton);
        inputGroupButtonButton.append(icon);
        // if statement to set color of input bar
        var currentHour = parseInt(moment().format("H"));
        if(timeArray[i][0] > 5){
            if(timeArray[i][0] == currentHour){
                inputGroupInput.addClass("present");
            }else if(timeArray[i][0] > currentHour){
                inputGroupInput.addClass("future");
            }else{
                inputGroupInput.addClass("past");
                console.log(timeArray[i][0] + " " + currentHour);            
            }
        }else{
            const transferTime = parseInt(timeArray[i][0]) + 12;
            if(transferTime == currentHour){
                inputGroupInput.addClass("present");
            }else if(transferTime < currentHour){
                inputGroupInput.addClass("past");
            }else{
                inputGroupInput.addClass("future");
            }                        
        }
        //load text from local storage
        loadText();        
    }
}

setInputGroup();

//jquery to save text to local storage
$(".btn").on("click", function(event){
    event.preventDefault();
    var text = $(this).siblings("input").val();
    var inputClass = $(this).siblings("input").attr("class");
    var array = inputClass.split(" ");
    var time = array[1];
    localStorage.setItem(time, text);
});
//function to load text from local storage
function loadText(){
    for (var i = 0; i < timeArray.length; i++) {
        var time = timeArray[i][0];
        var text = localStorage.getItem(time);
        if(text){
            $(".form-control." + time).val(text);
        }
    }
}

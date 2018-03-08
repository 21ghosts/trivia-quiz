var inputAnswer;
var qCorrect = 0;
var qIncorrect = 0;
var remainingTime = 30;
var counter;
var score;

$("document").ready(() => 
{    
    //create way for quize to start
    $(".startBtn").on("click",() => 
    {
        $(".startBtn").addClass("hidden");//hide start

        $(".allQ").removeClass("hidden");//reveal quiz
        
//desplay timer with function cant be arrow function
        function displayCount() 
        {
            if (remainingTime > 0) 
            {
                remainingTime--;
                $(".displayTime").html(remainingTime + " Seconds.");
            }
        };
        timeIntervals = setInterval(displayCount, 1000);

        var times = () => 
        {
            alert("TIME");
            results();
            inputResult();
            
        };

        counter = setTimeout(() =>
        { times() }, 30000);
    });

//use a loop to go through q and inputAnswer make simple
    var inputResult = () => 
    {
        for (j = 0; j < 5; j++) 
        {
            inputAnswer = document.querySelector('input[name="answer' + j + '"]:checked').value;
            if (inputAnswer == "false") 
            {
                qIncorrect = qIncorrect + 1;
            } 
            else if (inputAnswer == "true") 
            {
                qCorrect = qCorrect + 1;
            }
        }
    };

//clear timer and desply result where time was or at least in jumbotron div when check answers is clicked
    var results = () => 
    {
        clearInterval(counter);
        remainingTime = 0;
        //display results on page with .html
        $(".displayTime").html("<p> You got " + qCorrect + " correct.</p>" + "<p> You got " + qIncorrect + " incorrect.</p>");
    };    
    $(".quizResultsBtn").on("click", () => 
    {
        results();
        inputResult();
        
        $(".quizResultsBtn").addClass("hidden");
    });
});

/*helpful resources:
Stack Overflow
W3schools
Timmer activies*/

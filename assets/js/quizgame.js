$(document).ready(function () {

    var questions = [

        // Caveman Spongebob
        q1 = {
            url: "https://media1.tenor.com/images/70b49427051315baeddfd2a7c963126a/tenor.gif?itemid=7390773",
            value: 3,
            answer: "Caveman Spongebob",
            sequence: 1

        },

        //Trash Dove
        q2 = {
            url: "https://media.giphy.com/media/d3mm5LTOhOiI4im4/giphy.gif",
            value: 1,
            answer: "Trash Dove",
            sequence: 2,
        },

        //Forever Alone
        q3 = {
            url: "https://orig00.deviantart.net/c698/f/2012/048/e/3/forever_alone_dance_xd_by_frecitha98-d4q2cqv.gif",
            value: 2,
            answer: "Forever Alone",
            sequence: 3
        },

        // Ancient Aliens
        q4 = {
            url: "http://img17.laughinggif.com/pic/HTTP2Nkbi5mYW5zaWRlZC5jb20vd3AtY29udGVudC9ibG9ncy5kaXIvMjc2L2ZpbGVzLzIwMTQvMDEvQWxpZW5zLmdpZgloglog.gif",
            value: 2,
            answer: "Ancient Aliens",
            sequence: 4,

        },
        // Doge
        q5 = {
            url: "https://media.giphy.com/media/KlrledabOrLi/giphy.gif",
            value: 1,
            answer: "Doge",
            sequence: 5

        },

        // Dat Boi
        q6 = {
            url: "https://media.giphy.com/media/yDTWAecZcB2Jq/giphy.gif",
            value: 3,
            answer: "Dat Boi",
            sequence: 6
        },

        // Grumpy Cat
        q7 = {
            url: "https://media.giphy.com/media/vPN3zK9dNL236/giphy.gif",
            value: 4,
            answer: "Grumpy Cat",
            sequence: 7
        },

        // Nyan Cat
        q8 = {
            url: "https://m.popkey.co/f84008/04Rl5.gif",
            value: 1,
            answer: "Nyan Cat",
            sequence: 8
        },

        // Overly attached girlfriend
        q9 = {
            url: "https://media.tenor.com/images/88d2b91e090662edfc836608bd204404/tenor.gif",
            value: 3,
            answer: "Overly Attached Girlfriend",
            sequence: 9
        },

        // Peanut Butter Jelly Time
        q10 = {
            url: "https://vignette.wikia.nocookie.net/epicrapbattlesofhistory/images/c/c2/Peanut-butter-jelly-time.gif/revision/latest?cb=20141129150614",
            value: 4,
            answer: "Peanut Butter Jelly Time",
            sequence: 10

        }

    ]

    var correctAnswerCount = 0;
    var wrongAnswerCount = 0;
    var sequence = 1;

    var number = 10;
    var intervalId;
    
        
    // Timer
    
        function run() {
          intervalId = setInterval(decrement, 1000);
        };
    
        //  The decrement function.
        function decrement() {
    
          //  Decrease number by one.
          number--;
    
          //  Show the number in the #show-number tag.
          $("#timer").text(number);
    
    
          //  Once number hits zero...
          if (number === 0) {
    
            //  ...run the stop function.
            stop();

            showAnswerWrong(sequence);
            sequence++;
            number = 10;
    
          }
        };
    
        function stop() {
          clearInterval(intervalId);
          number = 10;
        };
// Load image and buttons start timer
    function loadQuestion(x) {
        $(".q" + [x]).css("visibility", "visible");
        var val = questions[x - 1].value;
        $("#quizImage").attr("src", questions[x - 1].url);
        $("#next").css("visibility", "hidden");
        run();
    };
// Show correct answer  if person is right
    function showAnswerCorrect(x) {
        $("h2").text("Yes, the answer is " + questions[x - 1].answer + "!");
        $("h2").css("visibility", "visible");
        $("#next").css("visibility", "visible");
        $(".q" + [x]).css("visibility", "hidden");
        correctAnswerCount++;

    };
// Show correct answer if person is wrong
    function showAnswerWrong(x) {
        $("h2").text("No, the answer is " + questions[x - 1].answer + "!");
        $("h2").css("visibility", "visible");
        $("#next").css("visibility", "visible");
        $(".q" + [x]).css("visibility", "hidden");
        wrongAnswerCount++;

    };


// Final screen with score
    function endpage() {
        $("#quizImage").attr("src", "https://s-media-cache-ak0.pinimg.com/originals/16/79/d5/1679d54578da83b15cc67aa6a5e086b0.gif");
        $("h2").html("Well, look at that!"+ "<br><br>"+"Correct: "+ correctAnswerCount + "<br>" + "Incorrect: " + wrongAnswerCount);
        $("h2").css("visibility", "visible");
        $("#timer").css("visibility", "hidden");
        $("#finish").css("visibility", "hidden");
        $(".start").css("visibility", "visible");
        wrongAnswerCount = 0;
        correctAnswerCount = 0;
    };

// On click for each set of question buttons-- compares values, stops timer, runs right/wrong funcs, and adds to sequence
  // On click for start button
  
   
$(".q1").click(function () {
        stop();
        if ($(this).val() == questions[0].value) {
            showAnswerCorrect(1);
        } else {
            showAnswerWrong(1);
        }
        sequence++;
    });
    $(".q2").click(function () {
        stop();
        if ($(this).val() == questions[1].value) {
            showAnswerCorrect(2);
        } else {
            showAnswerWrong(2);
        }
        sequence++;
    });
    $(".q3").click(function () {
        stop();
        if ($(this).val() == questions[2].value) {
            showAnswerCorrect(3);
        } else {
            showAnswerWrong(3);
        }
        sequence++;
    });
    $(".q4").click(function () {
        stop();
        if ($(this).val() == questions[3].value) {
            showAnswerCorrect(4);
        } else {
            showAnswerWrong(4);
        }
        sequence++;
    });
    $(".q5").click(function () {
        stop();
        if ($(this).val() == questions[4].value) {
            showAnswerCorrect(5);
        } else {
            showAnswerWrong(5);
        }
        sequence++;
    });
    $(".q6").click(function () {
        stop();
        if ($(this).val() == questions[5].value) {
            showAnswerCorrect(6);
        } else {
            showAnswerWrong(6);
        }
        sequence++;
    });
    $(".q7").click(function () {
        stop();
        if ($(this).val() == questions[6].value) {
            showAnswerCorrect(7);
        } else {
            showAnswerWrong(7);
        }
        sequence++;
    });
    $(".q8").click(function () {
        stop();
        if ($(this).val() == questions[7].value) {
            showAnswerCorrect(8);
        } else {
            showAnswerWrong(8);
        }
        sequence++;
    });
    $(".q9").click(function () {
        stop();
        if ($(this).val() == questions[8].value) {
            showAnswerCorrect(9);
        } else {
            showAnswerWrong(9);
        }
        sequence++;
    });
    $(".q10").click(function () {
        stop();
        if ($(this).val() == questions[9].value) {
            showAnswerCorrect(10);

        } else {
            showAnswerWrong(10);
        }
        sequence++;
        $("#next").text("Finish");
        

    });

// On click for next button

    $("#next").click(function () {
        stop();
        if (sequence <= 10) {
            loadQuestion(sequence);
        } else {
            endpage();
            $(this).css("visibility", "hidden");
            $(this).text("Next");
            
        }

    });
    $(".start").click(function () {
        if (sequence <= 2) {
            loadQuestion(1);
            $(this).css("visibility", "hidden");
            $("h2").css("visibility", "hidden");
        } else {
            window.location.reload();
        }
        
    
    });
});

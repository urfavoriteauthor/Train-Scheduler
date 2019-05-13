$(document).ready(function () {
    // var moment = require('moment');



    
    var submitButton = $("#submitButton");
    var newTrain = $("#trainName");
    var trainTime = $("#trainFreq");
    var trainDestination = $("#trainDestination");
    var trainArrival = $("#trainArrival");
    var makeTrain = $("<tr></tr>");
    var trainRow = $("<tr>");

    submitButton.on("click", function () {
        event.preventDefault();
        var train = $(newTrain.val());
        var time = $(trainTime.val());
        var arrival = $(trainArrival.val());
        var destination = $(trainDestination.val());
        console.log("New Train added")
        console.log(train, destination, arrival, time)
        trainRow();
        $("tbody").append((
                ("<td>" + train.text + "</td><td>" +
                    destination.text + "</td><td>" +
                    arrival.text + "</td><td>" +
                    time.text + "</td><td>"
                ))

        )
        captureEvents();
    })
})
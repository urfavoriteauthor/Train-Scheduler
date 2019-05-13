$(document).ready(function () {
    // var moment = require('moment');

    var config = {
        apiKey: "AIzaSyCs3K5zwuOuS0odq89IpPLC7HnXTOcDqgI",
        authDomain: "recent-user-with-all-use-e8e76.firebaseapp.com",
        databaseURL: "https://recent-user-with-all-use-e8e76.firebaseio.com",
        projectId: "recent-user-with-all-use-e8e76",
        storageBucket: ""
      };
  
      firebase.initializeApp(config);
  
      var dataRef = firebase.database();
    // moment().format();
    var submitButton = $("#submitButton");
    var newTrain = $("#trainName");
    var trainTime = $("#trainFreq");
    var trainDestination = $("#trainDestination");
    var trainArrival = $("#trainArrival");
    var makeTrain = $("<tr></tr>");
    var trainRow = $("tr");

    submitButton.on("click", function () {
            var train = $(newTrain.val());
            var time = $(trainTime.val());
            var arrival = $("td") + $(trainArrival.val()) + $("td");
            var destination = $(trainDestination.val());
            console.log("New Train added")
            console.log(train, destination, arrival, time)
            $("tbody").append((
                ("<td>" + train + "</td><td>" +
                destination + "</td><td>" +
                arrival + "</td><td>" +
                time + "</td><td>"
                ))
                dataRef.ref().push({

                                train: train,
                                time: time,
                                arrival: arrival,
                                destination: destination,
                                dateAdded: firebase.database.ServerValue.TIMESTAMP
                            });
            );


//         dataRef.ref().push({

//             train: train,
//             time: time,
//             arrival: arrival,
//             destination: destination,
//             dateAdded: firebase.database.ServerValue.TIMESTAMP
//         });
//     });

// // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
// dataRef.ref().on("child_added", function (childSnapshot) {

//     // Log everything that's coming out of snapshot


//     // full list of items to the well
//     $("#full-member-list").append("<div class='well'><span class='member-name'> " +
//         childSnapshot.val().name +
//         " </span><span class='member-email'> " + childSnapshot.val().email +
//         " </span><span class='member-age'> " + childSnapshot.val().age +
//         " </span><span class='member-comment'> " + childSnapshot.val().comment +
//         " </span></div>");

//     // Handle the errors
// }, function (errorObject) {
//     console.log("Errors handled: " + errorObject.code);
// });

// dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function (snapshot) {
//     // Change the HTML to reflect
//     $("#name-display").text(snapshot.val().name);
//     $("#email-display").text(snapshot.val().email);
//     $("#age-display").text(snapshot.val().age);
//     $("#comment-display").text(snapshot.val().comment);
// });
})
})
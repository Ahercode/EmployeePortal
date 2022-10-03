var xValues = ["January", "February ", "March", "April", "May", "June", "Jully", "August", "September", "October", "November"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    // options: {... }
});

new Chart("myChart1", {
    type: "pie",
    data: {
        // labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Total Leaves"
        }
    }
});
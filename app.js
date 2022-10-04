var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var yValues = [100, 90, 80, 55, 49, 75, 24, 15, 68, 30, 93, 85];
var barColors = ["red", "green", "blue", "orange", "brown", "pink", "lightgreen", "#f2f2f2", "#F8B400", "#125B50", "#FAF5E4", "#0F3460"];

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
    type: "doughnut",
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
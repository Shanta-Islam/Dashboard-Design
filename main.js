
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Nov 1",
          "Nov 4",
          "Nov 8",
          "Nov 12",
          "Nov 16",
          "Nov 24",
          "Nov 28",
          "Nov 30",
        ],
        datasets: [
          {
            label: "Expense",
            data: [8, 10, 7, 12, 8, 10, 14, 8, 20],
            backgroundColor: "rgb(30, 39, 114, 0.8)",
          },
        ],
      },
    });
    
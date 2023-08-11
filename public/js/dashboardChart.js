
// Get the values from the paragraphs

var employeeCount = parseInt(document.getElementById('employeeCount').textContent);

var officeMayor = parseInt(document.getElementById('officeMayor').textContent);
var officeCivil = parseInt(document.getElementById('officeCivil').textContent);
var officeSangguniang = parseInt(document.getElementById('officeSangguniang').textContent);
var officeSB = parseInt(document.getElementById('officeSB').textContent);
var officeHuman = parseInt(document.getElementById('officeHuman').textContent);
var officeMPDC = parseInt(document.getElementById('officeMPDC').textContent);
var officeLCR = parseInt(document.getElementById('officeLCR').textContent);
var officeBudget = parseInt(document.getElementById('officeBudget').textContent);
var officeAccountant = parseInt(document.getElementById('officeAccountant').textContent);
var officeTreasurer = parseInt(document.getElementById('officeTreasurer').textContent);
var officeAssessor = parseInt(document.getElementById('officeAssessor').textContent);
var officeAuditing = parseInt(document.getElementById('officeAuditing').textContent);
var officeLegal = parseInt(document.getElementById('officeLegal').textContent);
var officeMPOC = parseInt(document.getElementById('officeMPOC').textContent);
var officeHigh = parseInt(document.getElementById('officeHigh').textContent);
var officeManpower = parseInt(document.getElementById('officeManpower').textContent);
var officeHealth = parseInt(document.getElementById('officeHealth').textContent);
var officeDSWD = parseInt(document.getElementById('officeDSWD').textContent);
var officeAgriculture = parseInt(document.getElementById('officeAgriculture').textContent);
var officeEngineering = parseInt(document.getElementById('officeEngineering').textContent);
var officeOperation = parseInt(document.getElementById('officeOperation').textContent);
var officeLGSEF = parseInt(document.getElementById('officeLGSEF').textContent);
var officeSpecial = parseInt(document.getElementById('officeSpecial').textContent);
var officeBugetary = parseInt(document.getElementById('officeBugetary').textContent);

// Create the data object
var data = {
  labels: ['Office of the Civil Security',
 'Office of the Sangguniang Bayan',
 'Office of the SB Secretary',
 "Human Resource Dev't Office",
 'Office of the MPDC',
 'Office of the LCR',
 'Office of Gen. Services',
 'Office of the Budget',
 'Office of the Municipal Accountant',
 'Office of the Municipal Treasurer',
 'Office of the Municipal Assessor',
 'Municipal Auditing Office',
 'Legal Office',
 'Office of the MPOC',
 'Municipal High School',
 'Office of the Manpower Development',
 'Municipal Health Office',
 'Office of the DSWD',
 'Office of the Agriculture',
 "Municipal Engineering Office",
 'Operation Of Market',
 "LGSEF - Local Gov't Service Equalization Fund",
 'Special Purpose Appropriations',
 'Bugetary Reserve (Calamity Fund)',],
  datasets: [{
    label: 'Employee Count',
    data: [  officeMayor, officeCivil, officeSangguniang, officeSB, officeHuman, officeMPDC, 
        officeLCR, officeGen, officeBudget, officeAccountant, officeTreasurer, officeAssessor, 
        officeAuditing, officeLegal, officeMPOC, officeHigh, officeManpower, 
        officeHealth, officeDSWD, officeAgriculture, officeEngineering, officeOperation, 
        officeLGSEF, officeSpecial, officeBugetary],
    backgroundColor: [
    'rgba(63, 116, 96, 0.7)',   // Greenish Blue
    'rgba(87, 129, 123, 0.7)',   // Teal
    'rgba(117, 105, 128, 0.7)',  // Purple
    'rgba(160, 108, 86, 0.7)',   // Burnt Sienna
    'rgba(111, 133, 109, 0.7)',  // Olive Green
    'rgba(116, 115, 138, 0.7)',  // Slate Blue
    'rgba(150, 153, 107, 0.7)',  // Olive Drab
    'rgba(157, 130, 110, 0.7)',  // Tan
    'rgba(138, 150, 109, 0.7)',  // Moss Green
    'rgba(119, 130, 107, 0.7)',  // Forest Green
    'rgba(183, 78, 77, 0.7)',    // Maroonish
    'rgba(75, 97, 146, 0.7)',    // Blueish
    'rgba(147, 143, 60, 0.7)',   // Olive
    'rgba(60, 147, 123, 0.7)',   // Tealish Green
    'rgba(92, 98, 124, 0.7)',    // Slate Gray
    'rgba(160, 91, 52, 0.7)',    // Rust
    'rgba(76, 89, 93, 0.7)',     // Dark Gray
    'rgba(79, 110, 112, 0.7)',   // Bluish Gray
    'rgba(122, 64, 46, 0.7)',    // Dark Reddish Brown
    'rgba(46, 57, 80, 0.7)',     // Dark Blue
    'rgba(125, 57, 124, 0.7)',   // Dark Purple
    'rgba(46, 80, 62, 0.7)',     // Dark Green
    'rgba(112, 62, 62, 0.7)',    // Dark Brown
    'rgba(75, 98, 75, 0.7)',     // Greenish Gray
    'rgba(96, 55, 75, 0.7)'      // Dark Pink
    ],
    borderColor: [
    'rgba(63, 116, 96, 1)',    // Greenish Blue
    'rgba(87, 129, 123, 1)',    // Teal
    'rgba(117, 105, 128, 1)',   // Purple
    'rgba(160, 108, 86, 1)',    // Burnt Sienna
    'rgba(111, 133, 109, 1)',   // Olive Green
    'rgba(116, 115, 138, 1)',   // Slate Blue
    'rgba(150, 153, 107, 1)',   // Olive Drab
    'rgba(157, 130, 110, 1)',   // Tan
    'rgba(138, 150, 109, 1)',   // Moss Green
    'rgba(119, 130, 107, 1)',   // Forest Green
    'rgba(183, 78, 77, 1)',     // Maroonish
    'rgba(75, 97, 146, 1)',     // Blueish
    'rgba(147, 143, 60, 1)',    // Olive
    'rgba(60, 147, 123, 1)',    // Tealish Green
    'rgba(92, 98, 124, 1)',     // Slate Gray
    'rgba(160, 91, 52, 1)',     // Rust
    'rgba(76, 89, 93, 1)',      // Dark Gray
    'rgba(79, 110, 112, 1)',    // Bluish Gray
    'rgba(122, 64, 46, 1)',     // Dark Reddish Brown
    'rgba(46, 57, 80, 1)',      // Dark Blue
    'rgba(125, 57, 124, 1)',    // Dark Purple
    'rgba(46, 80, 62, 1)',      // Dark Green
    'rgba(112, 62, 62, 1)',     // Dark Brown
    'rgba(75, 98, 75, 1)',      // Greenish Gray
    'rgba(96, 55, 75, 1)'       // Dark Pink
    ],
    borderWidth: 2
  }]
};

// Get the canvas element
var ctx = document.getElementById('myChart').getContext('2d');
// Create the chart
var myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
      // Chart options
      offset: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: false,
          grid: {
            display: true,
          },
        },
        y: {
          grid: {
            display: false,
          },
          display: true, // Hide y-axis labels
          ticks: {
            display: true,
            padding: 3,
            font: {
              size: 10,
            },
          },
        },
      },
      plugins: {
        tooltip: {
          enabled: true, 
        },
        legend: {
          display: false, // Hide the legend
        },
      },
        elements: {
          point: {
            radius: 0, // Set the point radius to 0 to hide the points
            hoverRadius: 7 // Set the hover point radius to 0 to hide the points on hover
         }
       }
      }
});


var jobCount = parseInt(document.getElementById('jobCount').textContent);
var casualCount = parseInt(document.getElementById('casualCount').textContent);
var regularCount = parseInt(document.getElementById('regularCount').textContent);

var datapos = {
    labels: ['Job Order', 'Casual', 'Regular'],
    datasets: [{
        label: 'Position Count',
        data: [jobCount, casualCount, regularCount],
        backgroundColor: [
            'rgba(54, 162, 235, 0.2)', // Background color for the first data point
            'rgba(255, 99, 132, 0.2)', // Background color for the second data point
            'rgba(75, 192, 92, 0.2)'  // Background color for the third data point
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)', // Border color for the first data point
            'rgba(255, 99, 132, 1)', // Border color for the second data point
            'rgba(75, 192, 192, 1)'  // Border color for the third data point
        ],
        borderWidth: 1,
    }]
    
}

var pos = document.getElementById('myChartPosition').getContext('2d');
var posChart = new Chart(pos, {
    type: 'bar',
    data: datapos,
    options: {
        // Chart options
        indexAxis: 'y',
        offset: true,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: false,
            grid: {
              display: true,
            },
          },
          y: {
            grid: {
              display: false,
            },
            display: true, // Hide y-axis labels
            ticks: {
              display: true,
              padding: 0,
              font: {
                size: 10,
              },
            },
          },
        },
        plugins: {
          tooltip: {
            enabled: true, 
          },
          legend: {
            display: false, // Hide the legend
          },
        },
          elements: {
            point: {
              radius: 0, // Set the point radius to 0 to hide the points
              hoverRadius: 7 // Set the hover point radius to 0 to hide the points on hover
           }
         }
        }
  });



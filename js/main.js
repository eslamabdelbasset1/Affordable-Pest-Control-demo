$('#nav-toggle').click(()=> {
    $('#logo-small').toggleClass("d-none");
    $('#main-menu').toggleClass("d-none");
    $('#support-menu').toggleClass("d-none");


});

// $(function() {
//     $('.dates #usr1').datepicker({
//         'format': '27 Jun - 6 Jul 2020',
//         'autoclose': true
//     });
// });

var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

var checkin = $('#dpd1').datepicker({
    onRender: function(date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
    }
}).on('changeDate', function(ev) {
    if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date)
        newDate.setDate(newDate.getDate() + 1);
        checkout.setValue(newDate);
    }
    checkin.hide();
    $('#dpd2')[0].focus();
}).data('datepicker');
var checkout = $('#dpd2').datepicker({
    onRender: function(date) {
        return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
    }
}).on('changeDate', function(ev) {
    checkout.hide();
}).data('datepicker');
$('.datepicker').datepicker()

//====================== Profit ==========================
var radiusPlus = 4;
Chart.elements.Rectangle.prototype.draw = function() {
    var ctx = this._chart.ctx;
    var vm = this._view;
    var left, right, top, bottom, signX, signY, borderSkipped;
    var borderWidth = vm.borderWidth;

    if (!vm.horizontal) {
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
    } else {
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
    }

    // if (borderWidth) {
    //     var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    //     borderWidth = borderWidth > barSize? barSize: borderWidth;
    //     var halfStroke = borderWidth / 2;
    //     var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
    //     var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
    //     var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
    //     var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
    //
    //     if (borderLeft !== borderRight) {
    //         top = borderTop;
    //         bottom = borderBottom;
    //     }
    //     if (borderTop !== borderBottom) {
    //         left = borderLeft;
    //         right = borderRight;
    //     }
    // }

    var barWidth = Math.abs(left - right);
    var roundness = this._chart.config.options.barRoundness || 0.5;
    var radius = barWidth * roundness * 0.5;

    var prevTop = top;

    top = prevTop + radius;
    var barRadius = top - prevTop;

    ctx.beginPath();
    ctx.fillStyle = vm.backgroundColor;
    ctx.strokeStyle = vm.borderColor;
    ctx.lineWidth = borderWidth;

    // draw the chart
    var profit= left, y = (top - barRadius + 1), width = barWidth, height = bottom - prevTop, radius = barRadius + radiusPlus;

    ctx.moveTo(profit + radius, y);
    ctx.lineTo(profit + width - radius, y);
    ctx.quadraticCurveTo(profit + width, y, profit + width, y + radius);
    ctx.lineTo(profit + width, y + height);
    ctx.lineTo(profit, y + height);
    ctx.lineTo(profit, y + radius);
    ctx.quadraticCurveTo(profit, y, profit + radius, y);
    ctx.closePath();

    ctx.fill();
    if (borderWidth) {
        ctx.stroke();
    }
    top = prevTop;
}


var ctx = document.getElementById("profit").getContext("2d");

var background_1 = ctx.createLinearGradient(0, 0, 0, 400);
background_1.addColorStop(1, '#FFCC29');
background_1.addColorStop(0, '#81B214');

var background_2 = ctx.createLinearGradient(0, 0, 0, 400);
background_2.addColorStop(1, '#FFCC29');
background_2.addColorStop(0, '#81B214');

var background_3 = ctx.createLinearGradient(0, 0, 0, 400);
background_3.addColorStop(1, '#FFCC29');
background_3.addColorStop(0, '#81B214');

var background_4 = ctx.createLinearGradient(0, 0, 0, 500);
background_4.addColorStop(0, '#FFCC29');
background_4.addColorStop(1, '#FFCC29');

var profit = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['JAN','FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'SEP', 'OCT', 'NOV'],
        datasets: [{
            label: false,
            borderWidth: 0,
            backgroundColor: [

                background_1, background_2, background_3, background_4,background_4,background_4,background_4,background_4,background_4,background_4],
            data: [47, 29, 68, 78, 97, 144,111, 164 , 104, 78],
        }]
    },
    options: {
        scales: {
            xAxes: [{
                barThickness: 20,
                gridLines: {
                    offsetGridLines: false,
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 25,
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }]
        },
        legend: {
            display: false,
        }

    }
});


//---------------- Total Job ------------------------
var TotalJob = document.getElementById("TotalJob");
var myJob = new Chart(TotalJob, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR"],
        datasets: [{
            label: '# of Value',
            data: [ 2, 10, 7, 29],
            backgroundColor: [
                'rgba(162, 207, 0, 0.2)',
                'rgba(162, 207, 0, 0.4)',
                'rgba(162, 207, 0, 0.6)',
                'rgba(162, 207, 0, 0.8)',
                'rgba(162, 207, 0, 0.9)',

            ],
            borderColor: [
                'rgba(255, 204, 41, 0.9)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
            display: false,
        }
    }
});
//---------------- Total Job ------------------------

//----------------------- Total Earning -------------
var totalEarning = document.getElementById("totalEarning");
var mytotalEarning = new Chart(totalEarning, {
    type: 'bar',
    data: {
        labels: ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
        datasets: [{
            label: false,
            borderWidth: 0,
            backgroundColor: [
                background_1, background_2, background_3, background_4,background_4,background_4,background_4],
            data: [47, 29, 68, 78, 97, 144,111, 164 , 104, 78],
        }]
    },
    options: {
        scales: {
            xAxes: [{
                barThickness: 20,
                gridLines: {
                    offsetGridLines: false,
                    display: false
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 25,
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }]
        },
        legend: {
            display: false,
        }

    }
});
//----------------------- Total Earning -------------


//---------------- Total Job ------------------------
var totalUnpaidJobs = document.getElementById("totalUnpaidJobs");
var mytotalUnpaidJobs = new Chart(totalUnpaidJobs, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR"],
        datasets: [{
            label: '# of Value',
            data: [ 10,5, 20, 13, 25],
            backgroundColor: [
                'rgba(255, 204, 41, 0.2)',
                'rgba(255, 204, 41, 0.4)',
                'rgba(255, 204, 41, 0.6)',
                'rgba(255, 204, 41, 0.8)',
                'rgba(255, 204, 41, 0.9)',

            ],
            borderColor: [
                'rgba(255, 204, 41, 0.9)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
            display: false,
        }
    }
});
//---------------- Total Job ------------------------

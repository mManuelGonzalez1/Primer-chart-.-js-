
const ctx = document.getElementById('my-Chart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label:"Diary expenses ($USD) ",
            data: [17.45, 39.41,52.36,31.07,23.39,43.28,25.48],
            backgroundColor:[
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'rgba(75, 192, 192, 1)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)'
            ], 
            borderColor: 'white',
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            tooltip:{
                backgroundColor:' hsl(25, 47%, 15%)',
                bodyColor: 'hsl(26, 66%, 93%)',
                borderColor: 'hsl(25, 47%, 15%)',
                borderWidth: 1,
                cornerRadius: 5,
                padding: 10
                

            }
        },
        scales: {
            y: {
                beginAtZero: true,
                display:false
            },
            x:{
                display:false

            }
            
        }
    }
});
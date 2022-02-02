document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.querySelector('#polar-graph')
    let polarchart = new Chart(
        canvas,  {
            type: 'polarArea',
            data: {
                labels: ["Q1", "Q2", "Q3", "Q4"],
                datasets: [{
                    data: [1200, 1400, 400, 300],
                    backgroundColor: ["rgba(255, 0, 0, 0.5)", "rgba(100, 255, 0, 0.5)", "rgba(200, 50, 255, 0.5)", "rgba(0, 100, 255, 0.5)"]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                // aspectRatio: 3,
                title: {
                    display: true,
                    text: 'Pets Per Quarter'
                }
            }
        }
    )

    // document.onclick = () => {
    //    polarchart.data.datasets[0].data[3] += 1000;

    //    polarchart.update()
    // }
});

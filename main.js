let count = parseInt(prompt('Input start time: '));

function countDown() {
    return new Promise((resolve) => {
        setInterval(() => {
            if (count >= 0){
                document.getElementById('timer').innerHTML = count;
                if (count === 0){
                    resolve()
                }
                count--;
            }
        }, 1000);
    });
}

function report() {
    document.getElementById('report').innerHTML = "counter finished";
}
countDown().then(report)
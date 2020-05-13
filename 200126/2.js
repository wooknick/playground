var start = Date.now();

var foo = () => {
    playingTime = parseInt((Date.now() - start) / 1000);
    if (playingTime > 5) {
        clearInterval(jobId);
    } else {
        console.log(playingTime);
    }
};

var jobId = setInterval(foo, 1000);

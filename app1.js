new Vue({
    el: "#app1",
    data: {
        time: 0,
        timerInterval: null,
        setTime:null,
        currentTime: '',
        buttonClickTime: null,
        startTime: null,
        timerStarted: false,
        stopTime:null,
    },
    computed: {
        minutes: function () {
            return Math.floor(this.time / 60);
        },
        seconds: function () {
            return this.time % 60;
        },
        currentTimer() {
            if (this.startTime ) {
                console.log(this.startTime.toLocaleTimeString());
                return this.startTime.toLocaleTimeString();
            } else {
                const now = new Date();
                return now.toLocaleTimeString();
            }
        }


    },
    methods: {
        startTimer: function () {
            this.startTime = new Date();
            this.timerStarted = true;
            this.timerInterval = setInterval(() => {
                console.log(this.time);
                this.time++;
            }, 1000);
        },
        stopTimer: function () {
            clearInterval(this.timerInterval);
            const timeParts = this.time.toString().split(':');
            const hours = parseInt(timeParts[0]);
            const minutes = parseInt(timeParts[1]); // extract minutes as an integer
            const seconds = parseInt(timeParts[2]); // extract seconds as an integer
            this.startTime.setHours(this.startTime.getHours() + hours)
            this.startTime.setMinutes(this.startTime.getMinutes() + minutes);
            this.startTime.setSeconds(this.startTime.getSeconds() + seconds);
            console.log(typeof this.startTime);
            console.log(this.startTime.toLocaleTimeString());

        },
        updateTime() {
            const now = new Date();
            if (!this.buttonClickTime) {
                this.currentTime = now.toLocaleTimeString();
            } else {
                this.currentTime = this.buttonClickTime.toLocaleTimeString();
            }
            setTimeout(() => {
                this.updateTime();
            }, 1000);
        },
        storeTime() {
            this.startTime = new Date();
            this.buttonClickTime = true;
        }

    }
});
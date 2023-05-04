new Vue({
    el: "#app2",
    data: {
        time: 0,
        timerInterval: null,
        setTime:null,
        buttonClickTime: null,
        timestored: '',
        startTime: null,
        timerStarted: false,
        stopTime:null,
        amount:'',
        typeMilk:'',
        isHidden: false,
        endTime: null,
    },
    mounted() {
        setInterval(() => {
            if (this.timerStarted) {
                this.time++;
            }
        }, 1000);

    },
    computed: {
        minutes: function () {
            return Math.floor(this.time / 60);
        },
        seconds: function () {
            return this.time % 60;
        },
        currentTime: function () {
            if (this.timerStarted) {
                return this.startTime.toLocaleTimeString();
            } else {
                return '';
            }
        },
        currentTimer: function () {
            if (this.endTime) {
                return this.endTime.toLocaleTimeString();
            } else {
                return '';
            }
        }

    },
    methods: {
        startTimer: function () {
            this.startTime = new Date();
            this.timerStarted = true;
            this.isHidden = true;
        },
        stopTimer: function () {
            this.endTime = new Date();
            this.timerStarted = false;
            this.isHidden = false;
        }
        },




});



new Vue({
    el: "#app2",
    data: {
        time: 0,
        timerInterval: null,
        setTime:null,
        currentTime: '',
        buttonClickTime: null,
        timestored: '',
        startTime: null,
        timerStarted: false,
        stopTime:null,

    },
    mounted() {
        this.updateTime();


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
                this.time++;
            }, 1000);
        },
        stopTimer: function () {
            clearInterval(this.timerInterval);
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
        },
        handleEnterKey() {
            if (this.startTime ) {
                return this.startTime.toLocaleTimeString();
            } else {
                const now = new Date();
                return now.toLocaleTimeString();
            }
        }


    },
});


const myNumberInput = document.getElementById("myNumberInput");
const text1 = document.getElementById("text1");

myNumberInput.addEventListener("input", function() {
    text1.value = this.value;
});
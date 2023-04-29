Vue.component('plan-picker', {
    template: '#plan-picker-template',
    data() {
        return {
            plans: ['Sleep', 'Feeding', 'Solids', 'Potty', 'Activity']
        }
    }
});

Vue.component('plan', {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            required: true
        }
    }
});

new Vue({

    el: '#app',
    data:{
        time: 0,
        timerInterval: null,
        setTime:null,
        currentTime: '',
        buttonClickTime: null,
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
        currentTime() {
            if (this.startTime) {
                return this.startTime.toLocaleTimeString();
            } else {
                const now = new Date();
                return now.toLocaleTimeString();
            }
        }

    },
    methods:{
        startTimer: function () {
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
            this.buttonClicked = true;
        }
    }

});




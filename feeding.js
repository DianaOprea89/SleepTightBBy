new Vue({
    el: "#app2",
    data: {
        time: 0,
        timerInterval: null,
        setTime: null,
        buttonClickTime: null,
        timestored: '',
        startTime: null,
        timerStarted: false,
        stopTime: null,
        amount: '',
        typeMilk: '',
        isHidden: false,
        endTime: null,
        foodsEaten: [],
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
        },

        addFood() {
            if (!this.typeMilk || !this.amount) {
                return;
            }
            const existingFoodItem = this.foodsEaten.find(item => item.startsWith(`${this.typeMilk} `));
            if (existingFoodItem) {
                // update the existing food item
                const existingAmount = existingFoodItem.split(' ')[1];
                const newAmount = parseInt(existingAmount) + parseInt(this.amount);
                const newFoodItem = `${this.typeMilk} ${newAmount} ml`;
                const existingItemIndex = this.foodsEaten.indexOf(existingFoodItem);
                this.foodsEaten.splice(existingItemIndex, 1, newFoodItem);
            } else {
                // add a new food item
                const newFoodItem = `${this.typeMilk} ${this.amount} ml`;
                this.foodsEaten.push(newFoodItem);
            }
            this.typeMilk = '';
            this.amount = '';


        },
    }

});



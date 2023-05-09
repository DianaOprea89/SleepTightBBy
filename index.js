

// wrapper component
Vue.component('plan-picker', {
    template: '#plan-picker-template',
    data() {
        return {

            plans: [
                {
                    planName: 'sleep',
                    url: 'sleep.html',
                    image: {
                        src: './icons/sleep.png',
                        alt: "sleep"
                    }
                },
                {
                    planName: 'feeding',
                    url: 'feeding.html',
                    image: {
                        src: './icons/feeding.png',
                        alt: "feeding"
                    }

                },
                {
                    planName: 'Solids',
                    url: 'solids.html',
                    image: {
                        src: './icons/solids.png',
                        alt: "solids",
                    }

                }
            ]
        }
    }
});

// each plan component
Vue.component('plan', {
    template: '#plan-template',
    props: {
        plan: {
            type: Object,
            required: true
        },

    }
});

new Vue({

    el: '#app',
    data:{

    },
    methods:{

    },



});




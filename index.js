// wrapper component
Vue.component('plan-picker', {
    template: '#plan-picker-template',
    data() {
        return {

            plans: [
                {
                    planName: 'sleep',
                    url: 'sleep.html'
                },
                {
                    planName: 'feeding',
                    url: 'feeding.html'
                },
                {
                    planName: 'Solids',
                    url: 'solids.html'
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
        }
    }
});

new Vue({

    el: '#app',
    data:{

    },
    methods:{

    }

});




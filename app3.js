Vue.component('modal', {
    template: '#modal-picker-template',
    data() {
        return {
            showModal: false,
            modalTitle: '',
            modalBody: '',
        };
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        saveModal() {

            this.showModal = false;
        },
    }
});

Vue.component('modal', {
    template: '#modal-template',
    props: {
        showModal: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '',
        },
        body: {
            type: String,
            default: '',
        },
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        saveModal() {
            this.$emit('save');
        },
    },
});
    new Vue({
    el: "#app3",
    data: {
        names: ['avocado', 'banana', 'apple', 'rice cereal', 'sweet potato', 'oatmeal', 'spinach', 'chicken', 'peas', 'pear', 'yogurt', 'carrot', 'broccolli', 'prune', 'green beans', 'mango', 'egg', 'strawberry', 'pasta', 'blueberry'],
        showInput: false,
    },

    methods:{

}
});
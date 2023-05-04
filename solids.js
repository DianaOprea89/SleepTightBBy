
new Vue({
    el: "#app3",
    data: {
        names: ['avocado', 'banana', 'apple', 'rice cereal', 'sweet potato', 'oatmeal', 'spinach', 'chicken', 'peas', 'pear', 'yogurt', 'carrot', 'broccolli', 'prune', 'green beans', 'mango', 'egg', 'strawberry', 'pasta', 'blueberry'],
        showInput: false,
        searchQuery: '',
        suggestions: [],
        foodsEaten:[],
        newFoodName: '',
        amount:'',
        selectedItem:'',
        showFoodForm: false,

    },

    watch: {
        searchQuery() {
            this.suggest();
        },
    },
    methods: {
        suggest() {
            this.suggestions = this.names.filter((name) =>
                name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );

        },
        addSelectedAliment(index) {
            if (index !== undefined) {
                let itemsCopy = JSON.parse(JSON.stringify(this.names))
                for (let i = 0; i < itemsCopy.length; i++) {
                    if (index === i) {
                        return this.foodsEaten.push(this.names[index]);
                    }
                }
            } else {
                this.foodsEaten.push(this.searchQuery);
            }
        },
        addCustomFood() {
            if (this.newFoodName.trim() !== '') {
                this.foodsEaten.push(this.newFoodName);
                this.newFoodName = '';
                this.showInput = false;
            }
        },
        addPopularFood(name) {
            if (this.names.includes(this.searchQuery)) {
                this.foodsEaten.push(this.searchQuery);
            }
        },
        showForm: function() {
            this.showFoodForm = true;
        },


        },


});
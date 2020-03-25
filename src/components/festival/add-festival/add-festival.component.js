import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css'

export default {
    name: "AddFestival",
    components: {DatePick},

    data() {
        return {
            name: '',
            date: ''
        }
    },

    methods: {
        addFestival(e) {
            e.preventDefault();
            const newFestival = {
                name: this.name,
                date: this.date
            }

            this.$emit('add-festival', newFestival);
            this.name = '';
        }
    }
}

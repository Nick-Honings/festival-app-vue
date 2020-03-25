import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css'
import EditFestival from './edit-festival/EditFestival'

import moment from 'moment';

export default {
    name: "FestivalItem",
    props: {
        festival: Object,
        canEdit: false
    },
    components: {
        EditFestival,
        DatePick,
        moment
    },

    data() {
        return {

            name: '',
            date: '',
            price: '',
        }
    },

    methods: {

        getTimeString(value){
            return moment(String(value)).format('MM/DD/YYYY');
        },

        beginEdit(){
            this.canEdit = true;
        },

        endEdit(e) {
            const editEvent = {
                name: e.name,
                date: e.date
            };

            this.$log.debug('editevent:', editEvent);
            //this.$emit('edit-event', editEvent, e.id);
            this.$log.info('endedit is called');
            this.canEdit = false;
            //this.canEdit = false;
        }
    }
}

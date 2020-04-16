import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css'
import EditFestival from './edit-festival/EditFestival'
import festivalApi from '../../../api/festival';
import areaApi from '../../../api/area'


import EditDialog from "./test-edit-festival/EditDialog";
import Area from "../../area/Area"
import moment from 'moment';

export default {
    name: "FestivalItem",
    props: {
        festival: Object,
       //canEdit: false
    },
    components: {
        EditFestival,
        DatePick,
        moment,
        festivalApi,
        areaApi,
        EditDialog,
        Area
    },

    data() {
        return {
            areas: [],
            expanded: false,
        }
    },

    mounted() {
        areaApi.getById(this.festival.id)
            .then(response => {
                this.$log.debug("Areas loaded: ", response.data);
                this.areas = response.data
                this.$log.debug("the areas: " , this.areas);
                this.$log.debug("the type: ", typeof this.areas)
            })
            .catch(error => {
                this.$log.debug(error);
            })
    },


    computed: {
        canExpand(){
            this.$log.debug('canexpand is called');
            if(this.expanded){
                return "Show More";
            }
            return "Show less"
        },

    },

    methods: {

        filter(count){
            return this.areas.slice(0, count);
        },

        getTimeString(value){
            return moment(String(value)).format('MM/DD/YYYY');
        },


        endEdit(event) {

            this.$log.debug('editevent:', event);
            //this.$emit('edit-event', editEvent, e.id);
            this.$log.info('endedit is called');
            festivalApi.update(event).then((response) => {
                this.$log.info(response);
                if(response.status == 200){
                    this.$vs.notify({
                        color:'success',
                        title:'Event saved',
                    })
                }
            })
        },

        deleteEvent(id){
            this.$emit('delete-event', id);
        }


    }
}

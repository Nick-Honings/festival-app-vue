import api from '../../api/festival';
import FestivalItem from "../../components/festival/festival-item/FestivalItem";
import AddFestival2 from "../../components/festival/add/AddFestival2";


const FestivalPage = {
    name: 'FestivalPage',
    components: {
        FestivalItem,
        AddFestival2
    },

    data: function () {
        return{
            componentKey: 0,
            festivals: [],
            newFestival: '',
            editedFestival: null,
            visibility: 'all',
            // Loading handler
            loading: true,
            // Error handler
            error: null
        }
    },

    // Load all
    mounted() {
        return api.getAllByUserId(19)
            .then(response => {
                this.$log.debug("Data loaded: ", response.data)
                this.festivals = response.data
            })
            .catch(error => {
                this.$log.debug(error)
                this.error = "Failed to load festivals"
            })
            .finally(() => this.loading = false)
    },

    // Todo: add computed filters for price(ascending, descending)

    methods: {

        add(festivalItem) {
            this.$log.info("Trying to add new event...");

            return api.createNew(festivalItem).then((response) => {
                this.$log.debug("New event created: ", response);
                this.festivals = [...this.festivals, festivalItem];
                this.$router.push('/events');
            }).catch((error) => {
                this.$log.debug(error);
                this.error = "Failed to add festival";
            })
        },


        deleteEvent(id){
            api.removeForId(id).then((response) =>{
                this.$log.info(response);
                if(response.status === 200){
                    this.$vs.notify({
                        color:'success',
                        title:'Event deleted successfully!',
                    })
                    this.festivals = this.festivals.filter(v => v.id !== id);
                }
                else{
                    this.$vs.notify({
                        color: 'danger',
                        title: 'Whoops, something went wrong!',
                        text: 'Please try again'
                    })
                }
                //this.$emit('delete-event');
            })
        },


    },

    directives: {
        'festival-focus': function (el, binding) {
            if(binding.value){
                el.focus();
            }
        }
    }
};

export  default FestivalPage;

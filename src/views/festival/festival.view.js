import api from '../../api/festival';
import FestivalItem from "../../components/festival/festival-item/FestivalItem";
import AddFestival from "../../components/festival/add-festival/AddFestival";

const FestivalPage = {
    name: 'festival.vue',
    components: {
        FestivalItem,
        AddFestival
    },

    data: function () {
        return{
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
        api.getAll()
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

        testMethod: function(message){
            console.log("This is called: ", message)
        },

        add(festivalItem) {
            this.$log.info("Trying to add new event...");

            api.createNew(festivalItem).then( (response) => {
                this.$log.debug("New event created: ", response);
                this.festivals = [...this.festivals, festivalItem];
                // this.festivals.push({
                //   id: response.data.id,
                //   name: festivalItem.name
                // })
            }).catch((error) => {
                this.$log.debug(error);
                this.error = "Failed to add festival";
            })
        },


        removeFestival: function (festival) {
            api.removeForId(festival.id).then(() => {
                this.$log.debug("Festival removed: ", festival);
                this.festivals.splice(this.todos.indexOf(festival), 1);
            }).catch((error) => {
                this.$log.debug(error);
                this.error = "Failed to remove festival"
            });
        },

        edit(event) {
            return event;
        },

        editFestival: function (festival) {
            this.beforeEditCache = festival.name;
            this.editedFestival = festival
        },

        doneEdit: function (festival) {
            if(!this.editedFestival){
                return;
            }
            this.$log.info("Festival updated", festival);

            api.updateForId(festival.id, festival.name.trim(), festival.price).then((response) =>{
                this.$log.info("Festival updated: ", response.data);
                this.editedFestival = null;
                festival.name = festival.name.trim();
            }).catch((error) => {
                this.$log.debug(error);
                this.cancelEdit(festival);
                this.error = "Failed to update festival";
            });

            if(!festival.name){
                this.removeFestival(festival);
            }
        },

        cancelEdit: function (festival) {
            this.editedFestival = null
            festival.title = this.beforeEditCache
        },

        // removeCompleted: function () {
        //   this.festival = filters.active(this.festival)
        // },

        handleErrorClick: function () {
            this.error = null;
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

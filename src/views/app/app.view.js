import EditFestival from '../../components/festival/festival-item/edit-festival/EditFestival';

import Festivals from '../../views/festival/festival.vue';
import Header from "../../components/layout/header/Header";
import {USER_REQUEST} from "../../auth/actions/user";
import Navigationbar from "../../components/navigationbar/NavigationBar";
import VxSidebar from "../../components/sidebar/Vx-Sidebar";
import {mapGetters} from "vuex";

const app = {


    name: 'app',
    components: {
        VxSidebar,
        Header,
        EditFestival,
        Festivals,
        Navigationbar,
    },


    created() {
        if(this.$store.getters.isAuthenticated) {
            this.$store.dispatch(USER_REQUEST).then(() => {
                //this.$router.push("/dashboard");
            })
        }
    },

    computed: {
        ...mapGetters(["isAuthenticated", "authStatus"]),

    }
};

export default app;

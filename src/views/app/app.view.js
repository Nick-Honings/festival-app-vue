import EditFestival from '../../components/festival/festival-item/edit-festival/EditFestival';

import Festivals from '../../views/festival/festival.vue';
import Header from "../../components/layout/header/Header";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import {USER_REQUEST} from "../../auth/actions/user";
import Navigationbar from "../../components/navigationbar/NavigationBar";


const app = {
    name: 'app',
    components: {
        Sidebar,
        Header,
        EditFestival,
        Festivals,
        Navigationbar
    },
    created() {
        if(this.$store.getters.isAuthenticated) {
            this.$store.dispatch(USER_REQUEST);
        }
    },
};

export default app;

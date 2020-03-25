import AddFestival from '../../components/festival/add-festival/AddFestival';
import EditFestival from '../../components/festival/festival-item/edit-festival/EditFestival';

import Festivals from '../../views/festival/festival.vue';
import Header from "../../components/layout/header/Header";
import Sidebar from "../../components/layout/sidebar/Sidebar";


const app = {
    name: 'app',
    components: {
        Sidebar,
        Header,
        AddFestival,
        EditFestival,
        Festivals,
    },

    data: () => {
        return{

        }
    }
}

export default app;
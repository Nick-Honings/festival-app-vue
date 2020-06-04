import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
const mock = new MockAdapter(axios);

import {createLocalVue, mount, shallowMount} from "@vue/test-utils";
import FestivalPage from "../../src/views/festival/festival.view";
import FestivalItem from "../../src/components/festival/festival-item/FestivalItem"
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(FestivalItem);




describe('FestivalPage', () => {

    afterAll(() =>{
        mock.restore();
    });
    beforeEach(() => {
        mock.reset();
    });

    const wrapper = mount(FestivalPage, {
        localVue,

    })


    it('loads festivals', async () => {
        mock
            .onGet('http://localhost:9000/festival/add')
            .reply(200, [{name: 'Defqon'}, {name: 'Pinkpop'}]);




        const festivalItems = wrapper.findAllComponents(FestivalItem);
        expect(festivalItems).toHaveLength(2);
    })
})

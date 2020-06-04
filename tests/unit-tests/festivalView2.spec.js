import { shallowMount} from "@vue/test-utils";
import FestivalPage from "../../src/views/festival/festival.view";

import axios from 'axios';
const MockAdapter = require('axios-mock-adapter');

describe('FestivalPage', () => {
    let wrapper;
    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios);
        wrapper = shallowMount(FestivalPage);
    });

    afterEach(() => {
        mock.restore();
    });

    it('calls axios', async () => {

        const festival = {
            name: 'Defqon',
            price: 53
        };

        const fakeData = { result: "OK"};
        mock
            .onPost('http://localhost:9000/festival/add', festival)
            .reply(200, fakeData);


    })
})

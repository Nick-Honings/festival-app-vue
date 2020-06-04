import { mount } from '@vue/test-utils';
import RegisterForm from '../../src/components/register/RegisterForm';



// Tests

describe('RegisterForm', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(RegisterForm);
        expect(wrapper.isVueInstance()).toBeTruthy();
    })
})


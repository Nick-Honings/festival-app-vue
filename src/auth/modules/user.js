import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from "../actions/user";
import Vue from "vue";
import { AUTH_LOGOUT } from "../actions/auth";
import axios from 'axios'
import { SERVER_URL} from "../../api/request-config";


const state = { status: "", profile: {} };

const getters = {
    getProfile: state => state.profile,
    isProfileLoaded: state => !state.profile.name
};

const actions = {
    // eslint-disable-next-line no-unused-vars
    [USER_REQUEST]: ({ commit, dispatch }) => {
        commit(USER_REQUEST);

        const instance = axios.create({
            baseURL: SERVER_URL,
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : localStorage.getItem('user-token')
            }
        });

        console.log("trying to get current user...")
        console.log('current token: ', localStorage.getItem('user-token'));
        instance.get("/users/me" )
            .then(resp => {
                commit(USER_SUCCESS, resp.data);
                console.log("the response user: ", resp.data);
            })
            .catch((error) => {
                commit(USER_ERROR);
                console.log("Error getting user", error);
                // if resp is unauthorized, logout, to
                dispatch(AUTH_LOGOUT);
            });
    }
};

const mutations = {
    [USER_REQUEST]: state => {
        state.status = "loading";
    },
    [USER_SUCCESS]: (state, resp) => {
        state.status = "success";
        Vue.set(state, "profile", resp);
        console.log("profile set: ", resp);
    },
    [USER_ERROR]: state => {
        state.status = "error";
    },
    [AUTH_LOGOUT]: state => {
        state.profile = {};
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};

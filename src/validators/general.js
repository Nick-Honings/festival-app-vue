export default{

    isNullOrEmpty(input){
        return input === null || input.length === 0 || !input.replace(/\s/g, '').length;

    },

    isValidPassword(input) {
        // let the user pick a password with 6-20 char, at least one number
        //one lowercase, one uppercase
        let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if(input.match(regexPass)){
            console.log("good password");
            return true;
        }
        return false;

    },

    isValidModel(model) {
        let propValues = Object.values(model);
        console.log(propValues);

        for (let i = 0; i < propValues.length; i++) {
            if(typeof propValues[i] !== "boolean" || propValues.includes(false)) {
                return false;
            }
        }
        return true;
    },

    isValidEmail(input) {
        //let regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        // simple regex expression that checks whether there is an at-sign,
        // a period and stuff before/after/between them, no line breaks.
        let regexEmail = /^.+@.+\..+$/;
        if(input.match(regexEmail)){
            console.log("good email");
            return true;
        }
        return false;
    },

    passWordsMatch(expected, input){

        if(expected === input){
            console.log("Passwords match");
            return true;
        }
        console.log("Passwords do not match");
        return false;
    }
}

export default{

    isNullOrEmpty(input){
        if(input === null){
            return true;
        }
       else if(input.length === 0){
            return true;
        }
        return false;
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
        if(propValues.includes(false)) {
            return false;
        }
        return true;
    }
}

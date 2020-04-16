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
}

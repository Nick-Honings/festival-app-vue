export default {

    getCurrentDate() {
        let today = new Date();
        let dd = today.getDate();

        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();
        if(dd<10)
        {
            dd='0'+dd;
        }

        if(mm<10)
        {
            mm='0'+mm;
        }
        return today = mm+'-'+dd+'-'+yyyy;
    },

    isInThePast(date){
        let today = new Date();
        let toCompare = new Date(date);
        return today <= toCompare;

    },

    filterOnCurrentDate(festivals){
        return festivals.filter((festival) => {
            if(this.isInThePast(festival.date)) {
                return festival;
            }
        })
    }


}

import axios from "axios";

export default {
    getStudents: function(id) {
        return axios.get("/api/users/" + id) ;
    }
}
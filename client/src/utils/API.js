import axios from "axios";

export default {
    getStudents: function(id) {
        return axios.get("http://localhost:5000/api/students/" + id) ;
    }
}

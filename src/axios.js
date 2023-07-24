// import axios from "axios";

// axios.defaults.baseURL = "http://localhost:8082/api/v1"

// axios.defaults.headers.common['Authorization']='Bearer' + localStorage.getItem('token')

// export default axios




import axios from "axios";

axios.defaults.baseURL="http://127.0.0.1:8082/api/v1"

axios.defaults.headers.common['Authorization']='Bearer'+localStorage.getItem('token')
export default axios


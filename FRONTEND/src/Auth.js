import axios from "axios";

const Auth = {
    login: (admin) => {
        localStorage.setItem("admin", JSON.stringify(admin));
        axios.defaults.headers.common["Authorization"] = admin.accessToken;
    },
    init: () => {
        let admin = JSON.parse(localStorage.getItem("admin"));
        axios.defaults.headers.common["Authorization"] =
            admin !== null ? admin.accessToken : "";
    },
    auth() {
        return !!localStorage.getItem('admin');
    },
    guest() {
        return !localStorage.getItem('admin');
    },
    logOut: () => {
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("admin");
    },
};

export default Auth;
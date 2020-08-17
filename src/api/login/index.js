export const login = function (data) {
    this.$http
        .post("/api/userSignin", {
            data
        })
        .then(res => {
            localStorage.setItem("91website_token", res.token);
            return res.data.name
        });
}
export const signup = function (data) {
    this.$http
        .post("/api/signup", {
            data: data
        })
        .then(res => {
            return res
        });
}
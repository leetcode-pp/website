export const queryRankings = function () {
    this.$http.get("/api/ranks").then(res => {
        return res
    });
}
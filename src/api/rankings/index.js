export const queryRankings = function () {
    this.$http.get("/api/ranks").then(res => {
        res.forEach((cur, idx) => {
            cur.rank = idx + 1
        })
        return res
    });
}
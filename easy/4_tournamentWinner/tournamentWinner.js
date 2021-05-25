// Time: O(n), Space: O(k)
var HOME_TEAM_WON = 1;
var tournamentWinner = function (competitions, results) {
    var _a;
    var currentBestTeam = "";
    var scores = (_a = {}, _a[currentBestTeam] = 0, _a);
    for (var i = 0; i < competitions.length; i++) {
        var result = results[i];
        var _b = competitions[i], homeTeam = _b[0], awayTeam = _b[1];
        var winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
        updateScores(winningTeam, 3, scores);
        if (scores[winningTeam] > scores[currentBestTeam]) {
            currentBestTeam = winningTeam;
        }
    }
    return currentBestTeam;
};
var updateScores = function (team, point, scores) {
    if (!(team in scores))
        scores[team] = 0;
    scores[team] += point;
};
console.log(tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
], [0, 0, 1]));

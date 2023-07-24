export function saveScore(time, turns) {

    let score = {
        turns: turns,
        time: time
    }

    let best_score = JSON.parse(localStorage.best_score)

    if (!best_score) {
        localStorage.best_score = JSON.stringify(score)
        return 0;
    }

    if(score.turns > best_score.turns) {
        localStorage.best_score = JSON.stringify(score)
    }
}
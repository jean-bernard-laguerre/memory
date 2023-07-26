export function saveScore(time, turns) {

    let score = {
        turns: turns,
        time: time
    }

    if (!localStorage.best_score) {
        localStorage.best_score = JSON.stringify(score)
        return 0;
    }
    
    let best_score = JSON.parse(localStorage.best_score)
    if(score.turns > best_score.turns) {
        localStorage.best_score = JSON.stringify(score)
    }
}
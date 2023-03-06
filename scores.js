function loadScores() {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
        scores = JSON.parse(scoresText);
    } //not sure I understand what this is doing

    const tableBodyEl = document.querySelector('#scores');

    if (scores.length) {
        for (const [i, score] of scores.entries()){
            const positionTdEL = document.createElement('td');
            const nameTdEL = document.createElement('td');
            const scoreTdEl = document.createElement('td');
            const dateTdEl = document.createElement('td');

            positionTdEL.textContent = i + 1;
            nameTdEL.textContent = score.name;
            scoreTdEL.textContent = score.score;
            dateTdEl.textContent = score.date;

            const rowEL = document.createElement('tr');
            rowEL.appendChild(positionTdEL);
            rowEL.appendChild(nameTdEL);
            rowEL.appendChild(scoreTdEl);

            tableBodyEl.appendChild(rowEL);
        }
    } else {
        tableBodyEl.innerHTML = '<tr><td colSpan = 4> Be the first to score</td></tr>'
    }
}

loadScores();
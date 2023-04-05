const people = [
    { name: "Jane", pic: "images/patrick.png", score: 300 },
    { name: "Brenda", pic: "images/spongebob.png", score: 10} ,
    { name: "Wanda", pic: "images/spongebob.png", score: 960 },
    { name: "Maria", pic: "images/patrick.png", score: 980 },
    { name: "Jasper", pic: "images/spongebob.png", score: 600 },
    { name: "Malik", pic: "images/patrick.png", score: 40 }
];

function pointForWanda () {
    people[2].score +=10;
    showWinner ();
}

function pointForMaria () {
    people[3].score +=10;
    showWinner ();
}

function showWinner() {

    let i=0;
    while (i<people.length) {
        if (people[2].score == people[3].score) {
            document.querySelector(".players").innerHTML = "it's a tie";
        }

        let template = `
            <div class="card">
                <div>
                    <img src="${people[i].pic}">
                    <p>${people[i].name} scored ${people[i].score} points</p>
                </div>
            </div>
        `;
        document.querySelector(".players").innerHTML += template;
        ++i;
    }
}

var hostChoice;
var playerChoice;
var secondChoice;
var changeChoice = false;
var chosen = false;

const first = document.getElementById('door1');
const second = document.getElementById('door2');
const third = document.getElementById('door3');
const switchButton = document.getElementById('switch');
const stayButton = document.getElementById('stay');
const newGameButton = document.getElementById('new');

function RNG(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var rng = RNG(1, 3)

first.onclick = function () {
    if (chosen == false) {
        playerChoice = 1;
        first.style.color = 'green';
        first.innerText = '> Door 1'
        chosen = true;
        handleChoices();
        host();
    }
}
second.onclick = function () {
    if (chosen == false) {
        playerChoice = 2;
        second.style.color = 'green';
        second.innerText = '> Door 2'
        chosen = true;
        handleChoices();
        host();
    }
}

third.onclick = function () {
    if (chosen == false) {
        playerChoice = 3;
        third.style.color = 'green';
        third.innerText = '> Door 3'
        chosen = true;
        handleChoices();
        host();
    }
}

switchButton.addEventListener('click', function () {
    changeChoice = true;

    player();
    finish();

});

stayButton.addEventListener('click', function () {
    changeChoice = false;

    finish();
});

newGameButton.addEventListener('click', function () {
    location.reload();
})

function handleChoices() {

    var door1 = 0;
    var door2 = 0;
    var door3 = 0;

    if (playerChoice == 1) {

        if (rng == 1) {

            door1 = 1;
            hostChoice = 2;
            secondChoice = 3;

        } else if (rng == 2) {

            door2 = 1;
            hostChoice = 3;
            secondChoice = 2;

        } else if (rng == 3) {

            door3 = 1;
            hostChoice = 2;
            secondChoice = 3;

        }

    } else if (playerChoice == 2) {

        if (rng == 1) {

            door1 = 1;
            hostChoice = 3;
            secondChoice = 1;

        } else if (rng == 2) {

            door2 = 1;
            hostChoice = 3;
            secondChoice = 1;

        } else if (rng == 3) {

            door3 = 1;
            hostChoice = 1;
            secondChoice = 3;

        }

    } else if (playerChoice == 3) {

        if (rng == 1) {

            door1 = 1;
            hostChoice = 2;
            secondChoice = 1;

        } else if (rng == 2) {

            door2 = 1;
            hostChoice = 1;
            secondChoice = 2;

        } else if (rng == 3) {

            door3 = 1;
            hostChoice = 1;
            secondChoice = 2;

        }

    }

}

function host() {
    if (hostChoice == 1) {
        first.style.color = 'tomato';
        first.innerText = 'Empty'
    } else if (hostChoice == 2) {
        second.style.color = 'tomato';
        second.innerText = 'Empty'
    } else if (hostChoice == 3) {
        third.style.color = 'tomato';
        third.innerText = 'Empty'
    }
}

function player() {
    if (changeChoice == true) {

        var tester = secondChoice

    } else {
        var tester = playerChoice
    }
    if (secondChoice == 1) {
        first.style.color = 'green';
        first.innerText = '> Door 1';

        if (playerChoice == 2) {
            second.style.color = 'white';
            second.innerText = 'Door 2';
        }
        if (playerChoice == 3) {
            third.style.color = 'white';
            third.innerText = 'Door 3';
        }
    } else if (secondChoice == 2) {
        second.style.color = 'green';
        second.innerText = '> Door 2';

        if (playerChoice == 1) {
            first.style.color = 'white';
            first.innerText = 'Door 1';
        }
        if (playerChoice == 3) {
            third.style.color = 'white';
            third.innerText = 'Door 3';
        }
    } else if (secondChoice == 3) {
        third.style.color = 'green';
        third.innerText = '> Door 3';

        if (playerChoice == 1) {
            first.style.color = 'white';
            first.innerText = 'Door 1';
        }
        if (playerChoice == 2) {
            second.style.color = 'white';
            second.innerText = 'Door 2';
        }
    }
}

function finish() {
    if (changeChoice == true) {
        var tester = secondChoice
    } else {
        var tester = playerChoice
    }

    if (tester == 1) {
        if (rng == 1) {
            first.style.color = 'gold';
            first.innerText = '> Winner';

            second.style.color = 'tomato';
            second.innerText = 'Empty';
            third.style.color = 'tomato';
            third.innerText = 'Empty';
        } else if (rng == 2) {
            first.style.color = 'tomato';
            first.innerText = '> Empty';

            second.style.color = 'gold';
            second.innerText = 'Winner';

            third.style.color = 'tomato';
            third.innerText = 'Empty';
        } else if (rng == 3) {
            first.style.color = 'tomato';
            first.innerText = '> Empty';
            second.style.color = 'tomato';
            second.innerText = 'Empty';

            third.style.color = 'gold';
            third.innerText = 'Winner';
        }
    } else if (tester == 2) {
        if (rng == 1) {
            first.style.color = 'gold';
            first.innerText = 'Winner';

            second.style.color = 'tomato';
            second.innerText = '> Empty';

            third.style.color = 'tomato';
            third.innerText = 'Empty';
        } else if (rng == 2) {
            first.style.color = 'tomato';
            first.innerText = 'Empty';

            second.style.color = 'gold';
            second.innerText = '> Winner';

            third.style.color = 'tomato';
            third.innerText = 'Empty';
        } else if (rng == 3) {
            first.style.color = 'tomato';
            first.innerText = 'Empty';

            second.style.color = 'tomato';
            second.innerText = '> Empty';

            third.style.color = 'Gold';
            third.innerText = 'Winner';
        }
    } else if (tester == 3) {
        if (rng == 1) {
            first.style.color = 'gold';
            first.innerText = 'Winner';

            second.style.color = 'tomato';
            second.innerText = 'Empty';

            third.style.color = 'tomato';
            third.innerText = '> Empty';
        } else if (rng == 2) {
            first.style.color = 'tomato';
            first.innerText = 'Empty';

            second.style.color = 'gold';
            second.innerText = 'Winner';

            third.style.color = 'tomato';
            third.innerText = '> Empty';
        } else if (rng == 3) {
            first.style.color = 'tomato';
            first.innerText = 'Empty';

            second.style.color = 'tomato';
            second.innerText = 'Empty';

            third.style.color = 'Gold';
            third.innerText = '> Winner';
        }
    }

}

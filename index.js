const container = document.getElementById('container')
const red = document.getElementById('red')
const orange = document.getElementById('orange')
const yellowOrange = document.getElementById('yellowOrange')
const peach = document.getElementById('peach')
const yellow = document.getElementById('yellow')
const lightGreen = document.getElementById('lightGreen')
const darkGreen = document.getElementById('darkGreen')
const hello = document.getElementById('hello');

function fadeRed() {
    red.style.backgroundColor = 'black';
    red.style.border = 'none'
}

function fadeOrange() {
    orange.style.backgroundColor = 'black';
    orange.style.border = 'none'
}

function fadeYellowOrange() {
    yellowOrange.style.backgroundColor = 'black';
    yellowOrange.style.border = 'none'
}

function fadeOrange() {
    orange.style.backgroundColor = 'black';
    orange.style.border = 'none'
}

function fadePeach() {
    peach.style.backgroundColor = 'black';
    peach.style.border = 'none'
}

function fadeYellow() {
    yellow.style.backgroundColor = 'black';
    yellow.style.border = 'none'
}

function fadeLightGreen() {
    lightGreen.style.backgroundColor = 'black';
    lightGreen.style.border = 'none'
}

function fadeDarkGreen() {
    darkGreen.style.backgroundColor = 'black';
    darkGreen.style.border = 'none'
}

function goodByeWorld() {
    hello.innerText = 'Goodbye World :('
}

function completeFade() {
    container.style.display = 'none', 250
}

function fadeOut() {
    setTimeout(fadeRed, 150);
    setTimeout(fadeOrange, 300)
    setTimeout(fadeYellowOrange, 450)
    setTimeout(fadePeach, 600)
    setTimeout(fadeYellow, 750)
    setTimeout(fadeLightGreen, 900)
    setTimeout(fadeDarkGreen, 1050)
    setTimeout(goodByeWorld, 1200)
    setTimeout(completeFade, 2000)
}

hello.addEventListener('click', fadeOut)
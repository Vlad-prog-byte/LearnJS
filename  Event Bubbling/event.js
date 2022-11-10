const colors = ["blue", "yellow", "green", "black", "grey", 'pink'];

const div_1 = document.getElementsByClassName('DIV1');
div_1[0].addEventListener('click', (event) => {console.log(event.currentTarget.className)});

const div_2 = document.getElementsByClassName('DIV2');
div_2[0].addEventListener('click', (event) => {console.log(event.currentTarget.className)});

const div_3 = document.getElementsByClassName('DIV3');
div_3[0].addEventListener('click', (event) => {console.log(event.currentTarget.className)});

const div_4 = document.getElementsByClassName('DIV4');
div_4[0].addEventListener('click', (event) => {console.log(event.currentTarget.className)});

const div_5 = document.getElementsByClassName('DIV5');
div_5[0].addEventListener('click', (event) => {console.log(event.currentTarget.className);}, true);



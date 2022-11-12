const table = document.getElementsByTagName('table');

table[0].addEventListener('click', changeColor);

let clickedData = undefined;

function changeColor(event)
{
    let target = event.target;

    while (target != this)
    {
        if (target.tagName == "TD") break;
        target = target.parentNode;
    }

    if (target.tagName !== 'TD') return;
    else{
        if (clickedData){
            clickedData.classList.remove('highlight');
        }
        clickedData = target;
        clickedData.classList.add('highlight');
        console.log(444);
    }
}
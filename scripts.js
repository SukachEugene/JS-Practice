
// --------------------- Filter mechanic ---------------------


let filters = document.getElementsByClassName('button');

createFilters();

function createFilters() {

    for (i = 0; i < filters.length; i++) {
        filters[i].addEventListener('click', getFilter);
    }
}

let elements = document.getElementsByClassName("element");

function getFilter(event) {

   if (event.target.classList.contains('all')) {

    for (i = 0; i < elements.length; i++) {
        elements[i].style.display = 'flex';
    }

   } else {

    let currentFilter = event.target.className.split(" ");

    for (i = 0; i < elements.length; i++) {
        for (j =0; j < currentFilter.length; j++) {

            if (elements[i].classList.contains(currentFilter[j])) {
                elements[i].style.display = 'flex';
            } else {
                elements[i].style.display = 'none';
            }
        }
    }

   } 
}




// --------------------- Just change active button's style ---------------------

changeButtonStyle();

function changeButtonStyle() {
    for (i = 0; i < filters.length; i++) {
        filters[i].addEventListener('click', function () {

            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        })
    }
}




// --------------------- Element's pop-up mechanic ---------------------

function createPopupOpens() {
    for (i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', popupOpen);
    }
}

createPopupOpens();

function popupOpen(event) {

     // check correct target element
    let element;
    if (event.target.classList.contains('element')) {
        element = event.target
    } else {
        element = event.target.parentElement;
    }

    let popup = document.getElementsByClassName('popup');
    popup[0].style.display = 'flex';

    let titles = element.getElementsByClassName('element-title');
    title = titles[0].textContent;

    let popupTitle = document.getElementsByClassName('popup-title');
    popupTitle[0].innerHTML = title;

    let descriptions = element.getElementsByClassName('element-description');
    description= descriptions[0].textContent;

    let popupDescription = document.getElementsByClassName('popup-description');
    popupDescription[0].innerHTML = description;


    // change popup's color
    color = window.getComputedStyle(element).getPropertyValue('background-color'); 
    popup[0].style.backgroundColor = color;
   

    // get faded background of popup element
    document.getElementById('fade').style.display = 'block';
}


let close = document.getElementsByClassName("popup-close");

function createPopupCloses() {
    for (i = 0; i < close.length; i++) {
        close[i].addEventListener('click', closePopup);
    }
}


function closePopup() {
    let popup = document.getElementsByClassName('popup');
    popup[0].style.display = 'none';
    
    document.getElementById('fade').style.display = 'none';
}


createPopupCloses();

function closePopupByFade(event) {
    let area = document.getElementById('fade')
    area.addEventListener('click',closePopup)
}

closePopupByFade();

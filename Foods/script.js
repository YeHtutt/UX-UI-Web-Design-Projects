/**
 * Adds a click event listener to the '.menu' element. On click, toggles the 'change' class
 * for all elements with the '.target' class.
 *
 * @function
 * @name toggleChangeClass
 * @returns {void}
 */
document.querySelector('.menu').addEventListener('click', ()=> {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change');
    })
})


/**
 * Rotates through a collection of icons within '.section-1-icons' by adding and removing
 * the 'change' class at regular intervals.
 *
 * @function
 * @name rotateIcons
 * @returns {void}
 */
const icons = document.querySelectorAll('.section-1-icons i');
let i = 1;

setInterval(() => {
    i++;

    const icon = document.querySelector('.section-1-icons .change');

    icon.classList.remove('change');

    if(i > icons.length) {
        icons[0].classList.add('change');
        i = 1;
    }else {
        icon.nextElementSibling.classList.add('change');
    }
},4000)
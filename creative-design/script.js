let storyButton = document.querySelectorAll('.story-btn');
storyButton.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change');
        btn.nextElementSibling.classList.toggle('change');
    })
})
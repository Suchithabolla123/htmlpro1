const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box');
const searchBox = document.querySelector('#search');

// Search product by text input
searchBox.addEventListener('keyup', (e) => {
    let searchText = e.target.value.toLowerCase().trim();
    boxes.forEach((box) => {
        let data = box.dataset.item.toLowerCase();
        if (data.includes(searchText)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });

    buttons.forEach((button) => {
        button.classList.remove('btn-clicked');
    });
    buttons[0].classList.add('btn-clicked');
});

// Filter by category buttons
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveBtn(e);
        const btnFilter = e.target.dataset.filter.toLowerCase();
        boxes.forEach((box) => {
            const boxFilter = box.dataset.item.toLowerCase();
            if (btnFilter === 'all' || btnFilter === boxFilter) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});

function setActiveBtn(e) {
    buttons.forEach((button) => {
        button.classList.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked');
}
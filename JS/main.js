const addButton = document.querySelector(".add");
var addValue = document.querySelector('.input');
const container = document.querySelector(".container");

class Item {
    constructor(itemName) {
        // create the item div
        this.createDiv(itemName);

    }

    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item-input');
        input.type = 'text';

        let itemBox = document.createElement('div');
        itemBox.classList.add('items');

        let edit = document.createElement('button');
        edit.innerHTML = 'Edit';
        edit.classList.add('edit');

        let remove = document.createElement('button');
        remove.innerHTML = 'Remove';
        remove.classList.add('remove');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

        edit.addEventListener('click', () => this.edit(input));

        remove.addEventListener('click', () => this.remove(itemBox));
    }

    edit(input) {
        input.disabled = !input.disabled;
    }

    remove(items) {
        container.removeChild(items);
    }

}


function check() {
    if (!addValue.value) alert('please Add Your Task First!');

    if (addValue.value != "") {
        new Item(addValue.value);
        addValue.value = "";
    }
}

addButton.addEventListener('click', check);
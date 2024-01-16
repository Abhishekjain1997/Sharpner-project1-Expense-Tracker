document.addEventListener('DOMContentLoaded', () => {
    loadStoredData();
});


function savetolocal(event) {
    event.preventDefault();
    const amount = event.target.amount.value;
    const description = event.target.description.value;
    const select = event.target.select.value;

    const obj = {
        amount,
        description,
        select
    };

    localStorage.setItem(obj.description, JSON.stringify(obj));
    showuseronscreen(obj);
}

function showuseronscreen(obj) {
    const parentElem = document.getElementById('listofitem');
    const childelem = document.createElement('li');
    childelem.textContent = obj.amount + '-' + obj.description + '-' + obj.select;

    const deletebutton = document.createElement('input');
    deletebutton.type = "button";
    deletebutton.value = 'Delete';
    deletebutton.onclick = () => {
        localStorage.removeItem(obj.description);
        parentElem.removeChild(childelem);
    };
    childelem.appendChild(deletebutton);

    const editbutton = document.createElement('input');
    editbutton.type = "button";
    editbutton.value = 'Edit';
    editbutton.onclick = () => {
        localStorage.removeItem(obj.description);
        parentElem.removeChild(childelem);
        document.getElementById('expenseamount').value = obj.amount;
        document.getElementById('description').value = obj.description;
        document.getElementById('selected').value = obj.select;
    };
    childelem.appendChild(editbutton);

    parentElem.appendChild(childelem);
}

function loadStoredData() {
    const keys = Object.keys(localStorage);
    for (const key of keys) {
        const obj = JSON.parse(localStorage.getItem(key));
        showuseronscreen(obj);
    }
}

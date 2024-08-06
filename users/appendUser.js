export function appendUser(usersTable, user) {
    const newRow = usersTable.insertRow();
    const firstNameCell = newRow.insertCell();
    firstNameCell.classList.add('data');
    firstNameCell.textContent = user.name.split(' ')[0];

    const lastNameCell = newRow.insertCell();
    lastNameCell.classList.add('data');
    lastNameCell.textContent = user.name.split(' ')[1]; 
    
    const emailCell = newRow.insertCell();
    emailCell.classList.add('data');
    emailCell.textContent = user.email;

    const actionCell = newRow.insertCell();
    actionCell.classList.add('data');
    actionCell.classList.add('action');
    const updateBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const viewBtn = document.createElement('button');
    
    updateBtn.classList.add('actionBtn');
    updateBtn.id = 'updateBtn';
    updateBtn.textContent = 'Update';

    deleteBtn.classList.add('actionBtn');
    deleteBtn.id = 'deleteBtn';
    deleteBtn.textContent = 'Delete';

    viewBtn.classList.add('actionBtn');
    viewBtn.id = 'viewBtn';
    viewBtn.textContent = 'View';

    actionCell.appendChild(updateBtn);
    actionCell.appendChild(deleteBtn);
    actionCell.appendChild(viewBtn);
}

const html = `
        <tr>
            <td class="data">Ramesh</td>
            <td class="data">Fadatare</td>
            <td class="data">ram@gmail.com</td>
            <td class="data">
                <button type="button" id="updateBtn" class="actionBtn">Update</button>
                <button type="button" id="deleteBtn" class="actionBtn">Delete</button>
                <button type="button" id="viewBtn" class="actionBtn">View</button>
            </td>
        </tr>
    `
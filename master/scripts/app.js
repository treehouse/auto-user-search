const userData = [
    {
        uid: 1,
        name: 'Shawna McLaughlin',
        email: 'smchlaughlin@myteam.com',
        image: './assets/users/shawna.png', 
    },
    {
        uid: 2,
        name: 'Samual King',
        email: 'sking@myteam.com',
        image: './assets/users/samual.png', 
    },
    {
        uid: 3,
        name: 'Sameer Johnson',
        email: 'sjones@myteam.com',
        image: './assets/users/sameer.png', 
    },
    {
        uid: 4,
        name: 'Samantha Taylor',
        email: 'staylor@myteam.com',
        image: './assets/users/samantha.png',
    },
    {
        uid: 5,
        name: 'Karen Sanders',
        email: 'ksanders@myteam.com',
        image: './assets/users/karen.png',
        },
    {
        uid: 6,
        name: 'Kathy Williams',
        email: 'kwilliams@myteam.com',
        image: './assets/users/kathy.png',
        },
    {
        uid: 7,
        name: 'Chase Smith',
        email: 'csmith@myteam.com',
        image: './assets/users/chase.png',
        },
    {
        uid: 8,
        name: 'Chad Jones',
        email: 'cjones@myteam.com',
        image: './assets/users/chad.png',
        },
    {
        uid: 9,
        name: 'Ashley Davis',
        email: 'adavis@myteam.com',
        image: './assets/users/ashley.png', 
    },
    {
        uid: 10,
        name: 'Amy Miller',
        email: 'amiller@myteam.com',
        image: './assets/users/amy.png', 
    },
    {
        uid: 11,
        name: 'Kenan Smith',
        email: 'ksmith@myteam.com',
        image: './assets/users/kenan.png',
        }
];

const form = document.querySelector('form');
const dropdownMenu = document.getElementById('dropdownMenu');
const userList = document.getElementById('userList');
const userSearch = document.getElementById('userSearch');
const selectedUsers = document.getElementById('selectedUsers');
const userMessageFieldset = document.getElementById('messageUser');
const textarea = document.querySelector('textarea');
const submitBtn = document.querySelector('form button');

function addUserToList(user) {
    userList.innerHTML += `
    <li>
        <img src="${user.image}" alt="image of ${user.name}">
        <div class="user-info">
            <span class="name">${user.name}</span>
            <span class="email">${user.email}</span>
        </div>
    </li>
    `
}

function addUserToSelected(user) {
    selectedUsers.innerHTML += `
    <li>
        ${user} <img src="./assets/close-icon.png">
    </li>
    `

    resetForm();
}

function resetForm() {
    userSearch.value = '';
    dropdownMenu.classList.remove('show');
    userMessageFieldset.classList.add('show');
}





userData.forEach(user => addUserToList(user));


form.addEventListener('submit', e => {
    e.preventDefault();
});


userSearch.addEventListener('keyup', e => {
    dropdownMenu.classList.add('show');
    if (e.target.value === '') {
        dropdownMenu.classList.toggle('show');
    }
    let names = document.querySelectorAll('.name');
    let value = e.target.value.toLowerCase();

    names.forEach(name => {
        if (name.textContent.toLowerCase().includes(value)) {
            name.parentNode.parentNode.style.display = 'flex';
        } else {
            name.parentNode.parentNode.style.display = 'none';
        }
    });
});

textarea.addEventListener('keyup', e => {
    if (e.target.value !== '') {
        submitBtn.classList.remove('disabled');
    } else {
        submitBtn.classList.add('disabled');
    }
})


let users = userList.querySelectorAll('li');
users.forEach(user => {
    user.addEventListener('click', e => {
        let username = user.querySelector('.name').textContent;
        addUserToSelected(username);
    })
})
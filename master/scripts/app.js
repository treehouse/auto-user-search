const userData = [
    {
        uid: 1,
        name: 'Shawna McLaughlin',
        email: 'smchlaughlin@myteam.com',
        image: './images/users/shawna.png', 
    },
    {
        uid: 2,
        name: 'Samual King',
        email: 'sking@myteam.com',
        image: './images/users/samual.png', 
    },
    {
        uid: 3,
        name: 'Sameer Johnson',
        email: 'sjones@myteam.com',
        image: './images/users/sameer.png', 
    },
    {
        uid: 4,
        name: 'Samantha Taylor',
        email: 'staylor@myteam.com',
        image: './images/users/samantha.png',
    },
    {
        uid: 5,
        name: 'Karen Sanders',
        email: 'ksanders@myteam.com',
        image: './images/users/karen.png',
        },
    {
        uid: 6,
        name: 'Kathy Williams',
        email: 'kwilliams@myteam.com',
        image: './images/users/kathy.png',
        },
    {
        uid: 7,
        name: 'Chase Smith',
        email: 'csmith@myteam.com',
        image: './images/users/chase.png',
        },
    {
        uid: 8,
        name: 'Chad Jones',
        email: 'cjones@myteam.com',
        image: './images/users/chad.png',
        },
    {
        uid: 9,
        name: 'Ashley Davis',
        email: 'adavis@myteam.com',
        image: './images/users/ashley.png', 
    },
    {
        uid: 10,
        name: 'Amy Miller',
        email: 'amiller@myteam.com',
        image: './images/users/amy.png', 
    },
    {
        uid: 11,
        name: 'Kenan Smith',
        email: 'ksmith@myteam.com',
        image: './images/users/kenan.png',
        }
];

const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');

const dropdownContainer = document.getElementById('dropdownContainer');
const dropdown = document.getElementById('dropdown');

searchInput.addEventListener('keyup', e => {
    let value = e.target.value.toLowerCase();
    if (value !== '') {
        searchContainer.classList.add('expanded');
        dropdownContainer.classList.add('show');
        dropdown.innerHTML = '';
        userData.forEach(user => {
            if (user.name.toLowerCase().includes(value)) {
                dropdown.innerHTML += 
                `
                <li>
                    <img class="user-image" src="${user.image}" alt="Picture of ${user.name}">
                    <div class="group">
                        <p>${user.name}</p>
                        <p>${user.email}</p>
                    </div>
                </li>
                `
            }
        })
    } else {
        searchContainer.classList.remove('expanded');
        dropdownContainer.classList.remove('show');
    }
});

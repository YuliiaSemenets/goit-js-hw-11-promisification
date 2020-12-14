const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (users, userName) => {

    return new Promise(resolve => {
        for (const user of users) {
            if (user.name === userName) {
                user.active = !user.active;
            }
            resolve(users);
        }
    })
};

const logger = data => console.table(data);


toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
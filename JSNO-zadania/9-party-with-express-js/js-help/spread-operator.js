const user = { name: 'Michał' };

const user2 = { lastName: 'Trenerski' }


console.log({
    user,
    user2
})

const combinedUser = { ...user, ...user2, ...{}, ...{}, ...{isAdmin: true} }

console.log(combinedUser)

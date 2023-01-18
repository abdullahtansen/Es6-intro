const users = [
    {
        id:1,
        name: 'Abul',
        job: 'Doctor'
    }
];
console.log(users[0].name);
const data = {
    count : 5000,
    data: [
        {id: 1, name: 'babul', job:'leader'}
    ]
}
const firstJob = data.data[0].name;
console.log(firstJob);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {first:'35/A Kochukhet lane',
                second: 'Third Floor'            
    },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
}
// console.log(user);
console.log(user.address.street.first);
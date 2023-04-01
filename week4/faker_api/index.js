const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');
const createUser = () => {
    const newFakeUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.random.numeric()
    };
    return newFakeUser;
};

const createCompany = () => {
    const newFakeCompany = {
        _id: faker.random.numeric(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zip: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newFakeCompany;
};

const createBoth = () => {
    const newUser = createUser();
    const newCompany = createCompany();
    return [newUser, newCompany];
}


app.get("/api/users/new", (req, res) => {
    res.json( createUser() );
});

app.get("/api/companies/new", (req, res) => {
    res.json( createCompany() );
});

app.get("/api/user/company", (req, res) => {
    res.json( createBoth() );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );
const MoltinGateway = require('@moltin/sdk').gateway;

const Moltin = MoltinGateway({
    client_id: 'Vky5wIWJJ4qPMR6j0km9J0lSkYX7OdPRwkMwqG6LhF'
});

const products = Moltin.Products.All().then(prod => {
    console.log(prod);
});

const cart = Moltin.Cart().Items();
console.log(cart);
const address = {
    first_name: 'John',
    last_name: 'Doe',
    line_1: '123 Sunny Street',
    line_2: 'Sunnycreek',
    county: 'California',
    postcode: 'CA94040',
    country: 'US'
}
const customer = {
    email: 'john@doe.co',
    name: 'John Doe'
};

// Moltin.Cart().Checkout(customer, address);

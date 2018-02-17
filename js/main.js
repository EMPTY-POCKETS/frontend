const MoltinGateway = require('@moltin/sdk').gateway;

const Moltin = MoltinGateway({
    client_id: 'xmLi8JlbIHx1HdDOCl2c08Scpl7u4xcFOrNKxT4fmb'
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

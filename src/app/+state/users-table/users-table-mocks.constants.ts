import { UserModel } from "src/app/models/user.model";

export const USERS_TABLE_MOCKDATA: UserModel[] = [
    {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@example.com',
      address: {
        street: '123 Main St',
        suite: 'Apt 4',
        city: 'Anytown',
        zipcode: '12345',
        geo: {
          lat: '40.7128',
          lng: '-74.0060',
        },
      },
      phone: '555-555-5555',
      website: 'johndoe.com',
      company: {
        name: 'Acme Inc',
        catchPhrase: 'Making the world a better place',
        bs: 'Innovative solutions',
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: 'janesmith',
      email: 'janesmith@example.com',
      address: {
        street: '456 Elm St',
        suite: 'Apt 2B',
        city: 'Smallville',
        zipcode: '67890',
        geo: {
          lat: '39.9526',
          lng: '-75.1652',
        },
      },
      phone: '555-555-1234',
      website: 'janesmith.com',
      company: {
        name: 'XYZ Corp',
        catchPhrase: 'Innovative solutions for a changing world',
        bs: 'Cutting-edge technology',
      },
    },

    {
      id: 3,
      name: 'Bob Johnson',
      username: 'bobjohnson',
      email: 'bobjohnson@example.com',
      address: {
        street: '789 Oak St',
        suite: 'Suite 100',
        city: 'Big City',
        zipcode: '54321',
        geo: {
          lat: '37.7749',
          lng: '-122.4194',
        },
      },
      phone: '555-555-5678',
      website: 'bobjohnson.com',
      company: {
        name: 'ABC Inc',
        catchPhrase: 'Quality products for a better life',
        bs: 'Customer satisfaction',
      },
    },
  ];
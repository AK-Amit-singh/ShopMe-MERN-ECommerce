import bcrypt from 'bcrypt';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'rahul',
    email: 'rahul@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'mohit',
    email: 'mohit@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;

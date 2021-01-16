import { PaymentMethod, User } from '../utils/types';

export const users: User[] = [
  {
    id: '1',
    name: 'a',
    email: 'a@a.com',
    age: 25,
  },
  {
    id: '2',
    name: 'b',
    email: 'b@b.com',
    age: 23,
  },
  {
    id: '3',
    name: 'c',
    email: 'c@c.com',
    age: 23,
  },
  {
    id: '4',
    name: 'd',
    email: 'd@d.com',
    age: 23,
  },
];

export const paymentMethods: PaymentMethod[] = [
  {
    id: '1',
    expMonth: 2,
    expYear: 2022,
    last4: '2222',
    userId: '1',
  },
  {
    id: '2',
    expMonth: 3,
    expYear: 2022,
    last4: '2222',
    userId: '2',
  },
  {
    id: '3',
    expMonth: 5,
    expYear: 2022,
    last4: '2222',
    userId: '4',
  },
  {
    id: '4',
    expMonth: 4,
    expYear: 2022,
    last4: '2222',
    userId: '3',
  },
];

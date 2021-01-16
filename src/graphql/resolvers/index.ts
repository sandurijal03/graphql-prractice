import { paymentMethods, users } from '../../data/index';
import { User, UserArgs, PaymentMethodArgs } from '../../utils/types';

export const resolvers = {
  Query: {
    hello: () => 'Hello World',
    getUsers: () => users,
    getUserById: (parent: string, args: UserArgs) => {
      const { id } = args;
      return users.find((user) => user.id === id);
    },
  },
  User: {
    paymentMethod: (parent: User) => {
      return paymentMethods.filter((payment) => payment.userId === parent.id);
    },
  },
  Mutation: {
    createUser: (parent: string, args: UserArgs) => {
      const { id, name, email, age } = args;
      const newUser = { id, name, email, age };
      users.push(newUser);
      return newUser;
    },
    createPaymentMethod: (parent: any, args: PaymentMethodArgs) => {
      paymentMethods.push(args);
      return args;
    },
  },
};

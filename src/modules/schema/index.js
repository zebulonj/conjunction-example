import {
  Schema,
  ObjectType,
  StringType
} from '@tedconf/conjunction';

import { request } from 'lib/request';

import { User } from './User';

export const Query = ObjectType({
  name: 'Query',
  fields: {
    user: {
      type: User,
      args: {
        username: StringType
      },
      resolve: ( root, args ) => request( `https://api.github.com/users/${ args.username }` )
        .then( ({ body }) => body )
    }
  }
});

export const schema = Schema({
  query: Query
});

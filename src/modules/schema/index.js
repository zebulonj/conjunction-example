import {
  Schema,
  ObjectType
} from '@tedconf/conjunction';

import { request } from 'lib/request';

export const Query = ObjectType({
  name: 'Query',
  fields: {

  }
});

export const schema = Schema({
  query: Query
});

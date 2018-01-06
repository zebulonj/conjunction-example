import {
  ObjectType,
  GUIDType,
  StringType
} from '@tedconf/conjunction';

export const User = ObjectType({
  name: 'User',
  fields: {
    id: {
      type: GUIDType( 'UserSession' )
    },
    username: {
      type: StringType
    },
    name: {
      type: StringType
    },
    email: {
      type: StringType
    }
  }
});

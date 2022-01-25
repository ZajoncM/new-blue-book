import Faker from 'faker';

import { User } from '../../users/entities/user.entity';
import { define } from 'typeorm-seeding';

define(User, (faker: typeof Faker) => {
  const user = new User();

  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  user.firstName = firstName;
  user.lastName = lastName;
  user.email = `${firstName}.${lastName}@example.com`;
  user.registrationDate = faker.date.recent().toString();
  user.phoneNumber = parseInt(faker.helpers.replaceSymbols('#########'));
  user.role = faker.random.number(3);
  user.permission = faker.random.number(3);
  user.username = faker.random.word();
  user.password = faker.random.word();
  user.registrationStatus = faker.random.number(1);
  return user;
});

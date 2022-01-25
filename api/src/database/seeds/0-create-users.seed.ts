import { User } from '../../users/entities/user.entity';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory) {
    factory(User)().createMany(25);
  }
}

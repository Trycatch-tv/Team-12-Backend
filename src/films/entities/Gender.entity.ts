import { AbstractEntity } from '@app/common/entities/AbstractEntity.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Film } from '@app/films/entities/Film.entity';
@Entity('genders')
export class Gender extends AbstractEntity {
  static fieldsForQuery = ['name'];
  @Column({ length: 100 })
  name: string;

  @OneToMany((_) => Film, (film) => film.gender)
  films: Film[];
}

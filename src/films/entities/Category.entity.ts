import { AbstractEntity } from '@app/common/entities/AbstractEntity.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Film } from './Film.entity';

@Entity('categories')
export class Category extends AbstractEntity {
  static fieldsForQuery = ['name'];
  @Column({ length: 100 })
  name: string;

  @OneToMany((_) => Film, (film) => film.category)
  films: Film[];
}

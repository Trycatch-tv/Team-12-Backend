import { AbstractEntity } from '@app/common/entities/AbstractEntity.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Film } from '@app/films/entities/Film.entity';
import { User } from '@app/auth/entities/User.entity';

@Entity('ratings')
export class Rating extends AbstractEntity {
  static fieldsForQuery = ['comment'];
  @Column({ type: 'decimal' })
  rating: number;
  @Column({ type: 'text', nullable: true })
  comment: string;

  @JoinColumn()
  @ManyToOne((_) => Film, (film) => film.ratings, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  film: Film;
  @JoinColumn()
  @ManyToOne((_) => User, (user) => user.ratings, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  user: User;
}

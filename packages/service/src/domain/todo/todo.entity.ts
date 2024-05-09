import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'todo',
})
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    comment: '제목',
    length: 20,
  })
  title: string;

  @Column({
    nullable: true,
    comment: '내용',
    length: 100,
  })
  content: string;

  @Column()
  complete: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

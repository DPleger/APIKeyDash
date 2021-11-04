import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class site_user extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column('text')
    email!: string;

    @Column('text')
    password!: string;

    @Column('text')
    registered_on!: string;

    @Column('text')
    admin!: string;

}
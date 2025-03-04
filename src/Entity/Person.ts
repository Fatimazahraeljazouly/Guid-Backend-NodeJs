import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";
export enum Role{
    Admin="Admin",
    Tourist="Tourist",
}
@Entity()
export class Person{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;
    
    @Column()
    lastname: string;
    @Column()
    email:string
    @Column()
    username:string;
    @Column()
    password:string;
    @Column({
        type:"enum",
        enum:Role,
        default:Role.Tourist
    })
    role: Role;
}
import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";
@Entity()
export  class Ville{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nomVille:string;
    @Column()
    region:string;
    @Column()
    codePostal:string;
    @Column()
    description:string,

}

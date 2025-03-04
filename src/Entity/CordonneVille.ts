import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class CordonneVille {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("decimal",{precision:10,scale:6})
    latitude:number;
    @Column("decimal",{precision:10,scale:6})
    longitude:number
}
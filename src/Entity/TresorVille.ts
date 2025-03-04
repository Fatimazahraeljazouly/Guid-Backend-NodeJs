import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";
import { CordonneTresor } from "./CordonneTresor";
@Entity()
export class TresorVille{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    libille:string
    @Column()
    description:string;
    @Column()
    localisation:string
    
}
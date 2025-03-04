import {
     Entity,
     Column,
     PrimaryGeneratedColumn,
     ManyToMany
     
    } from "typeorm";
import { Ville } from "./Ville";
@Entity()
export class Tourist{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    country:string
    @ManyToMany(()=>Ville,(ville)=>ville.tourists)
    villes:Ville[]
}
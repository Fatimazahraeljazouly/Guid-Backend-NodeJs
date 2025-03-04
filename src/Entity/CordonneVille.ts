import { Entity,PrimaryGeneratedColumn,Column,OneToOne,JoinColumn } from "typeorm";
import { Ville } from "./Ville";
@Entity()
export class CordonneVille {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("decimal",{precision:10,scale:6})
    latitude:number;
    @Column("decimal",{precision:10,scale:6})
    longitude:number
    @OneToOne(()=>Ville,(ville)=>ville.cordonneVille)
    @JoinColumn({name:'cordonneVille_id'})
    ville:CordonneVille
}
import { Entity,PrimaryGeneratedColumn,Column ,OneToOne,JoinColumn} from "typeorm";
import {TresorVille } from './TresorVille'
@Entity()
export class CordonneTresor {
    @PrimaryGeneratedColumn()
    id: number;
   
    @Column("decimal",{precision:10,scale:6})
    latitude:number;
   
    @Column("decimal",{precision:10,scale:6})
    longitude:number
   
    @OneToOne(()=>TresorVille,(tresorVille)=>tresorVille.cordonneTresor)
    @JoinColumn({name:'tresorVille_id'})
    tresorVille:TresorVille
}
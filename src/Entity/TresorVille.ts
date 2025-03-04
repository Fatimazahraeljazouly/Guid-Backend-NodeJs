import { Entity,PrimaryGeneratedColumn,Column ,OneToOne,ManyToOne,JoinColumn} from "typeorm";
import { CordonneTresor } from "./CordonneTresor";
import { Ville } from "./Ville";
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
    
    @OneToOne(()=>CordonneTresor,(cordonneTresor)=>cordonneTresor.tresorVille)
    cordonneTresor:CordonneTresor
    
    @ManyToOne(()=>Ville,(ville)=>ville.tresorsVille,{cascade:true})
    @JoinColumn({name:"ville_id"})
    ville:Ville
}
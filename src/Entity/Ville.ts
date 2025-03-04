import { 
    Entity,
    PrimaryGeneratedColumn,
    Column ,
    OneToOne,
    OneToMany,
    ManyToMany
} from "typeorm";
import { CordonneVille } from "./CordonneVille";
import { TresorVille } from "./TresorVille";
import {Tourist} from './Tourist'
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
    description:string;
    
    @OneToOne(()=>CordonneVille,(cordonneVille)=>cordonneVille.ville)
    cordonneVille:CordonneVille
    
    @OneToMany(()=>TresorVille,(tresorVille)=>tresorVille.ville)
    tresorsVille:TresorVille[]

    @ManyToMany(()=>Tourist,(tourist)=>tourist.villes,{cascade:true})
    tourists:Tourist





}

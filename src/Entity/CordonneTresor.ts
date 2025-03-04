import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";
import {TresorVille } from './TresorVille'
@Entity()
export class CordonneTresor {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("decimal",{precision:10,scale:6})
    latitude:number;
    @Column("decimal",{precision:10,scale:6})
    longitude:number
}
import { DataSource } from "typeorm";
const AppDataSource=new DataSource({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database:'db',
    entities:["Entity/*.ts"],
})
AppDataSource.initialize()
    .then(()=>{
        console.log('Data Source has been initialized successfully');
    })
    .catch((e)=>{
        console.log('Error while initializing Data Source',e);
    })

export default AppDataSource
import { Report } from "src/reports/report.entity";
import { AfterInsert, AfterRemove, AfterUpdate, BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Report, (report) => report.user)
    reports: Report[];

    @BeforeInsert()
    logBeforeInsert(){
        console.log('something wit before inserttt', this?.id);
    }

    @AfterInsert()
    logInsert(){
        console.log('Inserted user with id', this.id);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Updated user with id', this.id);
    }


    @AfterRemove()
    logRemove(){
        console.log('Remove user with id', this.id);
    }
}
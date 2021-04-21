import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';
// import {} from "uuid";

@Entity("settings")
class Setting {
    @PrimaryColumn()
    id!: string;

    @Column()
    username!: string;

    @Column()
    chat!: boolean;

    @UpdateDateColumn()
    update_at!: Date;

    @UpdateDateColumn()
    created_at!: Date;
}

export { Setting }
import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {

    @Field(() => Number)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column({
        unique: true
    })
    username!: string;
 
    @Field(() => String)
    @Column()
    password!: string;
    
    @Field(() => String)
    @Column()
    firstName!: string;
    
    @Field(() => String)
    @Column()
    lastName!: string;

    @Field(() => String)
    @CreateDateColumn()
    createdAt!: Date;
    
    @Field(() => String)
    @UpdateDateColumn()
    updatedAt!: Date;
    
    // @Field(() => String)
    // @Column()
    // country!: string;
    
    // @Field(() => String)
    // @Column({
    //     unique: true
    // })
    // email!: string;

    // @Field(() => String)
    // @Column({
    //     unique: true,
    //     length: 10
    // })
    // creditCardNumber?: string

    // @Field(() => Boolean)
    // @Column()
    // isPremium!: Boolean

    // @Field(() => [Number])
    // @Column({
    //     type: 'simple-array'
    // })
    // luckyNumbers?: number[]

}
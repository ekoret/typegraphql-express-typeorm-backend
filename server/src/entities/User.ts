import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn({
        
    })
    id!: number;
    
    @Field(() => String)
    @Column()
    firstName!: string;
    
    @Field(() => String)
    @Column()
    lastName!: string;
    
    @Field(() => String)
    @Column()
    country!: string;
    
    @Field(() => String)
    @Column({
        unique: true
    })
    email!: string;

    @Field(() => String)
    @Column({
        unique: true,
        length: 10
    })
    creditCardNumber?: string

    @Field(() => Boolean)
    @Column()
    isPremium!: Boolean

}
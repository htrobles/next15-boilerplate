import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export default class Recipe {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(() => [String])
  ingredients: string[];
}

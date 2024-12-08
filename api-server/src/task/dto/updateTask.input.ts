import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateTaskInput {
  @Field(() => Int)
  id: number;

  @Field()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @Field({ nullable: true })
  description?: string;
}

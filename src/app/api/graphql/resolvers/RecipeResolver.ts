import { Arg, Query, Resolver } from 'type-graphql';
import Recipe from '../types/Recipe';

@Resolver(Recipe)
export default class RecipeResolver {
  // constructor(private recipeService: RecipeService) {}

  @Query(() => Recipe)
  async recipe(@Arg('id') id: string) {
    // const recipe = await this.recipeService.findById(id);
    // if (recipe === undefined) {
    //   throw new RecipeNotFoundError(id);
    // }

    const recipe: Recipe = {
      id,
      title: 'Recipe 1',
      description: 'This is a recipe',
      creationDate: new Date(),
      ingredients: ['ingredient 1', 'ingredient 2'],
    };

    return recipe;
  }

  @Query(() => [Recipe])
  recipes(/*@Args() { skip, take }: PaginationArgs*/): Recipe[] {
    // return this.recipeService.findAll({ skip, take });
    const recipes: Recipe[] = [
      {
        id: '1',
        title: 'Recipe 1',
        description: 'This is a recipe',
        creationDate: new Date(),
        ingredients: ['ingredient 1', 'ingredient 2'],
      },
      {
        id: '2',
        title: 'Recipe 2',
        description: 'This is another recipe',
        creationDate: new Date(),
        ingredients: ['ingredient 3', 'ingredient 4'],
      },
    ];

    return recipes;
  }

  // @Mutation(returns => Recipe)
  // @Authorized()
  // addRecipe(
  //   @Arg("newRecipeData") newRecipeData: NewRecipeInput,
  //   @Ctx("user") user: User,
  // ): Promise<Recipe> {
  //   return this.recipeService.addNew({ data: newRecipeData, user });
  // }

  // @Mutation(returns => Boolean)
  // @Authorized(Roles.Admin)
  // async removeRecipe(@Arg("id") id: string) {
  //   try {
  //     await this.recipeService.removeById(id);
  //     return true;
  //   } catch {
  //     return false;
  //   }
  // }
}

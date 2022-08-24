import { inject, injectable } from 'tsyringe';

import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface ICreateCategoryDTO {
  name: string;
  description: string;
  admin: boolean;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: CategoriesRepository
  ) {}

  async execute({
    name,
    description,
    admin,
  }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description, admin });
  }
}

export { CreateCategoryUseCase };

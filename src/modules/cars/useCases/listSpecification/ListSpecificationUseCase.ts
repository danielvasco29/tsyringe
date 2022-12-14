import { Specification } from '../../entities/Specification';
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';

class ListSpecificationUseCase {
  constructor(private specificationRepository: SpecificationRepository) {}

  execute(): Specification[] {
    const specifications = this.specificationRepository.list();
    return specifications;
  }
}

export { ListSpecificationUseCase };

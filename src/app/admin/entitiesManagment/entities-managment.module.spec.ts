import { EntitiesManagmentModule } from './entities-managment.module';

describe('EntitiesManagmentModule', () => {
  let entitiesManagmentModule: EntitiesManagmentModule;

  beforeEach(() => {
    entitiesManagmentModule = new EntitiesManagmentModule();
  });

  it('should create an instance', () => {
    expect(entitiesManagmentModule).toBeTruthy();
  });
});

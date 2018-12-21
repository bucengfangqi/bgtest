import { BasicUiModule } from './basic-ui.module';

describe('BasicUiModule', () => {
  let basicUiModule: BasicUiModule;

  beforeEach(() => {
    basicUiModule = new BasicUiModule();
  });

  it('should create an instance', () => {
    expect(basicUiModule).toBeTruthy();
  });
});

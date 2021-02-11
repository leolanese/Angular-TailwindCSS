import { AngularTailwindPage } from './app.po';

describe('angular-tailwind App', function() {
  let page: AngularTailwindPage;

  beforeEach(() => {
    page = new AngularTailwindPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

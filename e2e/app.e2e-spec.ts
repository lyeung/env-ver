import { EnvVerPage } from './app.po';

describe('env-ver App', () => {
  let page: EnvVerPage;

  beforeEach(() => {
    page = new EnvVerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

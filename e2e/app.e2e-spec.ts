import { NotifierPage } from './app.po';

describe('notifier App', function() {
  let page: NotifierPage;

  beforeEach(() => {
    page = new NotifierPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular2 Notifier');
  });
});

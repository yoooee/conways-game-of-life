import { browser, $, $$ } from 'protractor';

describe('homepage', () => {
  it('shows header', async () => {
    browser.get('/');

    const h1 = await $('h1');
    expect(h1.getText()).toEqual('Conways Game of Life');
  });
});

import { Auth2Module } from './auth2.module';

describe('Auth2Module', () => {
  let auth2Module: Auth2Module;

  beforeEach(() => {
    auth2Module = new Auth2Module();
  });

  it('should create an instance', () => {
    expect(auth2Module).toBeTruthy();
  });
});

/* eslint-disable no-undef */
import getDate from 'dateGeneratop';

describe('helpers mthods', () => {
  let creation = new Date();
  creation = `${creation.getDate()}/${
    creation.getMonth() + 1
  }/${creation.getFullYear()}`;

  it('date generator', () => {
    expect(typeof getDate() === 'string').toBeTruthy();
  });
  it('date generator', () => {
    expect(getDate()).toEqual(creation);
  });

  it('pipe duration', () => {});

  it('search course', () => {});

  it('utils', () => {});
});

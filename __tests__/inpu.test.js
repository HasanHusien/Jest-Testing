/*
[1] if name is defind will returned unknown
[2] if found space it will removed
[3] returned  at highlest 10 letters
[4] if found underScore it will removed
*/

let filterName = require('../input');

describe('is name valid', () => {
  it('for check', ()=> {
    expect(filterName()).toBe('UnKnown')
  })

  it('for space is removed', () => {
    expect(filterName('hassan ')).toBe('hassan')
  })

    it('for name.length < 10', () => {
      expect(filterName('hassan-hussien-hassan')).toBe('hassan-hus')
  })

    it('for remove under score', () => {
      expect(filterName('_hassan')).toBe('hassan')
  })
})
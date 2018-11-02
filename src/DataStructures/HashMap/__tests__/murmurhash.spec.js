import murmurhash from '../murmurhash'

// test cases from https://stackoverflow.com/a/31929528/3220303

describe('MurmurHash tests', () => {
  it('Outputs the right values', () => {
    const testCases = [
      { seed: 0, key: 'abc', output: 0xb3dd93fa },
      {
        seed: 0,
        key: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        output: 0xee925b90
      },
      {
        seed: 0x9747b28c,
        key: 'The quick brown fox jumps over the lazy dog',
        output: 0x2fa826cd
      }
    ]
    testCases.forEach(({ seed, key, output }) => {
      expect(murmurhash(seed)(key)).toEqual(output)
    })
  })
})

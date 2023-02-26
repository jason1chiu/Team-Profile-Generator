// test for engineer
const Engineer = require('../lib/engineer');

describe('Engineer', () => {
  it('gets all info on Engineer', () => {
    const engineer = new Engineer('Jason', 20, 'engineer_test@test.com', 'github');

    expect(engineer.name).toEqual('Jason');
    expect(engineer.getName()).toEqual('Jason');

    expect(engineer.id).toEqual(20);
    expect(engineer.getId()).toEqual(20);

    expect(engineer.email).toEqual('engineer_test@test.com');
    expect(engineer.getEmail()).toEqual('engineer_test@test.com');

    expect(engineer.github).toEqual('github')
    expect(engineer.getGithub()).toEqual('github');

    expect(engineer.getRole()).toEqual('Engineer');
  });
});
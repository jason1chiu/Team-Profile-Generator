const Intern = require('../lib/intern');

describe('Intern', () => {
  it('gets all info on Intern', () => {
    const intern = new Intern('Jason', 20, 'intern_test@test.com', 'U of T');

    expect(intern.name).toEqual('Jason');
    expect(intern.getName()).toEqual('Jason');

    expect(intern.id).toEqual(20);
    expect(intern.getId()).toEqual(20);

    expect(intern.email).toEqual('intern_test@test.com');
    expect(intern.getEmail()).toEqual('intern_test@test.com');

    expect(intern.school).toEqual('U of T')
    expect(intern.getSchool()).toEqual('U of T');

    expect(intern.getRole()).toEqual('Intern');
  });
});
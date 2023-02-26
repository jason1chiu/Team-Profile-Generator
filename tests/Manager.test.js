// test for manager
const Manager = require('../lib/manager');

describe('Manager', () => {
  it('gets all info on Manager', () => {
    const manager = new Manager('Jason', 20, 'manager_test@test.com', 21);

    expect(manager.name).toEqual('Jason');
    expect(manager.getName()).toEqual('Jason');

    expect(manager.id).toEqual(20);
    expect(manager.getId()).toEqual(20);

    expect(manager.email).toEqual('manager_test@test.com');
    expect(manager.getEmail()).toEqual('manager_test@test.com');

    expect(manager.officeNumber).toEqual(21);
    
    expect(manager.getRole()).toEqual('Manager');
  });
});
const Employee = require('../lib/employee');

describe('Employee', () => {
  it('gets all info on employee', () => {
    const employee = new Employee('Jason', 20, 'employee_test@test.com');

    expect(employee.name).toEqual('Jason');
    expect(employee.getName()).toEqual('Jason');

    expect(employee.id).toEqual(20);
    expect(employee.getId()).toEqual(20);

    expect(employee.email).toEqual('employee_test@test.com');
    expect(employee.getEmail()).toEqual('employee_test@test.com');

    expect(employee.getRole()).toEqual('Employee');
  });
});

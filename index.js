// Write your solution in this file!
const employee = {
    name: "Leslie",
    streetAddress: "100 Chicago",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmpl = {...employee};
    newEmpl[key] = value;
    return newEmpl;

    const newEmplo = updateEmployeeWithKeyAndValue(employee, "name", "Sam");
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;

    const destNewEmpl = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
};

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;

    delete newEmployee.name;

};

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value;
    return obj;

    delete employee.name;

}
class Developer {
    constructor(name) {
        this.name = name;
        this.type = "Developer";
    }
}


class Tester {
    constructor(name) {
        this.name = name;
        this.type = "Tester";
    }
}


// Employees are created and assigned a role 
// Role is determined based on the case
class EmployeeFactory {
    create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name);
                break;
        
            case 2:
                return new Tester(name)
                break;
        }
    }
}

const say = function()  {
    console.log(`Hi! I am ${this.name} and I am a ${this.type}`);
}

const employeeFactory = new EmployeeFactory()
const employees = [];

employees.push(employeeFactory.create("Adam", 1))
employees.push(employeeFactory.create("Buu", 2))
employees.push(employeeFactory.create("Toosie", 1))
employees.push(employeeFactory.create("Kiki", 2))

employees.forEach(e => {
    // Call this function on each employee;
    say.call(e)
})



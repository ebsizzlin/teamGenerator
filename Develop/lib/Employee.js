// TODO: Write code to define and export the Employee class

//format help from tutor 11/16
class Employee  {
    constructor(name, id, email)    {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee'
    };
    getName()   {
        return this.name
    };
    getId()   {
        return this.id
    };
    getEmail()   {
        return this.email
    };
    getRole()   {
        return this.role
    }
}

module.exports = Employee;
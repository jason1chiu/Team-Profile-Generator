const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");

employees = [];

const employee = [
  {
    type: 'confirm',
    message: 'Is there a new employee?',
    name: 'newEmployee'
  }
]

const general = [
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
    validate: name => {
      if (name) {
        return true;
      } else {
        console.log('What is your name?!');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'What is your ID number?',
    name: 'id',
    validate: id => {
      if (!isNaN(id)) {
        return true;
      } else {
        console.log('\n What is your ID number?!');
        return false;
      }
    }
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    validate: email => {
      if (email) {
        return true;
      } else {
        console.log('What is your email address?!');
        return false;
      }
    }
  },
  {
    type: 'list',
    message: 'What is your role?',
    name: 'role',
    choices:["Manager", "Engineer", "Intern"],
    validate: role => {
      if (role) {
        return true;
      } else {
        console.log('What is your role?!');
        return false;
      }
    }
  }
]

const manager = [
  {
    type: 'input',
    message: 'What is your office number?',
    name: 'officeNumber',
    validate: officeNumber => {
      if (!isNaN(officeNumber)) {
        return true;
      } else {
        console.log(`\n What is your office number?!`);
        return false;
      }
    }
  }
]

const engineer = [
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
    validate: github => {
      if (github) {
        return true;
      } else {
        console.log('What is your GitHub username?!');
        return false;
      }
    }
  }
]

const intern = [
  {
    type: 'input',
    message: 'Which school do you attend?',
    name: 'school',
    validate: school => {
      if (school) {
        return true;
      } else {
        console.log('Which school do you attend?!');
        return false;
      }
    }
  }
]

init();

function init() {
  inquirer.prompt(employee)
    .then((response) => {
      if (response.newEmployee) {
        inquirer.prompt(general)
        .then((answers) => {
          if (answers.role === 'Engineer') {
            inquirer.prompt(engineer)
            .then((engineerAnswers) => {
              const engineer = new Engineer(answers.name, answers.id, answers.email, engineerAnswers.github);
              employees.push(engineer);
              init();
            });
          } else if (answers.role === 'Manager') {
            inquirer.prompt(manager)
            .then((managerAnswers) => {
              const manager = new Manager(answers.name, answers.id, answers.email, managerAnswers.officeNumber);
              employees.push(manager);
              init();
            }) 
          } else {
            inquirer.prompt(intern)
            .then((internAnswers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, internAnswers.school);
            employees.push(intern);
            init();
          })
        }
      })
    } else {
      console.log('All employees added!');
    }
  })
}
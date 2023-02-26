const managerCard = function (manager) {
  return `
  <div class="col-12 col-md-3">
    <div class="card shadow">
      <div class="card-body bg-primary">
        <h2 class="card-title">${manager.name}</h2>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>
  </div>
  `;
}

const engineerCard = function (engineer) {
  return `
  <div class="col-12 col-md-3">
    <div class="card shadow">
      <div class="card-body bg-secondary">
        <h2 class="card-title">${engineer.name}</h2>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</li>
      </ul>
    </div>
  </div>
  `;
}

const internCard = function (intern) {
  return `
  <div class="col-12 col-md-3">
    <div class="card shadow">
      <div class="card-body bg-success">
        <h2 class="card-title">${intern.name}</h2>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
      </ul>
    </div>
  </div>
  `;
}

// push array to page 
generateHTML = (data) => {

    // array for cards 
    managerArray = []; 
    engineerArray = [];
    internArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managers = managerCard(employee);

            managerArray.push(managers);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineers = engineerCard(employee);

            engineerArray.push(engineers);
        }

        // call intern function 
        if (role === 'Intern') {
            const interns = internCard(employee);

            internArray.push(interns);
        }
        
    }

    // joining strings 
    const managerCards = managerArray.join('');
    const engineerCards = engineerArray.join('');
    const internCards = internArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(managerCards, engineerCards, internCards); 
    return generateTeam;
}

// generate html page 
const generateTeamPage = function (managerCards, engineerCards, internCards) {   

  return`
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header class="jumbotron text-center bg-info p-3">
      <h1>Team Profile</h1>
    </header>

    <main>
      <div class="container-fluid">
        <div class="row justify-content-center text-center">
          <h3 class="p-3">Managers</h3>
          ${managerCards}
        </div>
        <div class="row justify-content-center text-center">
          <h3 class="p-3">Engineers</h3>
          ${engineerCards}
        </div>
        <div class="row justify-content-center text-center">
          <h3 class="p-3">Interns</h3>
          ${internCards}
      </div>
    </main>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </body>
</html>
`;
}

// export to index
module.exports = generateHTML; 

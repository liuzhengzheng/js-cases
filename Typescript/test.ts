interface Person {
  firstName: string;
  lastName: number;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: 1 };

document.body.innerHTML = greeter(user);
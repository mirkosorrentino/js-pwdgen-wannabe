// info request
const userName = prompt("Ciao! Benvenuto in pwd generatore. Come ti chiami?");
console.log(userName, typeof userName);

const userLastName = prompt(`Perfetto ${userName}, ho bisogno solo di poche altre informazioni. Qual è il tuo cognome?`);
console.log(userLastName, typeof userLastName);

const userFavouriteColor = prompt("Un'ultima informazione: qual è il tuo colore preferito?");
console.log(userFavouriteColor, typeof userFavouriteColor);

// elaboration
const password = (`${userName}${userLastName}${userFavouriteColor}21`);
console.log(password);

// output
document.getElementById("name").innerHTML = `${userName}`;
document.getElementById("last-name").innerHTML = `${userLastName}`;
document.getElementById("favourite-color").innerHTML = `${userFavouriteColor}`
document.getElementById("password").innerHTML = `${password}`;

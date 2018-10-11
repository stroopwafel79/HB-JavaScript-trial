/////////////////////////////////////////////////////////
// PART 1

/////////////////////////////////////////////////////////
// Show Profile Info


// Add function to prnt profile info

function showProfile (name, catchPhrase, location) {
	console.log(`PROFILE:\n Name: ${name}\n Catchphrase: ${catchPhrase}\n Location: ${location}`);
}


/////////////////////////////////////////////////////////
// Display Likes
const interests = [
  'being annoying',
  'seeds',
  'staring at human food'
];

function showLikes(interests) {
	console.log('THINGS I LIKE: ');
	for (let interest of interests) { 
			console.log(`${interest}`);
	}
}




/////////////////////////////////////////////////////////
// Display Favorites
const favorites = {
  'food': 'pebbles',
  'tree': 'palm',
  'quote': 'Bock bock bock'
};

function showFavorites(favorites) {

	console.log('Favorites:')
	for (let [key, value] of Object.entries(favorites)) {
		console.log(`${key}: ${value}`);
	}
}



/////////////////////////////////////////////////////////
// PART 2

/////////////////////////////////////////////////////////
// Add Transactions

// Add function to add transaction
function addTransactions(date, amount, transactions) {
	transactions[date]= amount;
	console.log(` ${transactions}`);
}

// Create object to hold transactions
const transactions = {}
// Add transactions to object
addTransactions('may2', -500, transactions);
addTransactions('may13', +1200, transactions);
addTransactions('may15', -100, transactions);
addTransactions('may21', -359, transactions);
addTransactions('may29', +2200, transactions);



/////////////////////////////////////////////////////////
// Get Balance Status

// Add function to calculate balance status
function getBalanceStatus(balance) {

	if (balance < 0) {
		return ("YOU ARE OVERDRAWN");
		
	}
	else if (balance > 0 & balance < 20) {
		return ("Warning! Your balance is almost 0");
	}
	else if (balance > 20) {
		return ("normal"); 
	}
}
/////////////////////////////////////////////////////////
// Calculate Current Balance

// Add function to calculate and return current balance

function getCurrentBalance(current_balance, transactions) {
	let balance = current_balance;

	for (let value of Object.values(transactions)) {
		balance += value;

		if (balance < 0) {
			balance - 25; 
		}

	}

	return balance
}

/////////////////////////////////////////////////////////
// Show Account Activity

// Add function to print account activity
function showAcctActivity (current_balance, transactions) {
	console.log("Transactions:");
	
	for (let [key, value] of Object.entries(transactions)) {
		console.log(`${key}: ${value}`);
	}
	const balance = getCurrentBalance(current_balance, transactions);
	console.log(`CURRENT BALANCE: ${balance}`);

	console.log(`CURRENT STATUS: ${getBalanceStatus(balance)}`);
}


/////////////////////////////////////////////////////////
// Creating a User Object

// Add user object

// Add function to print user dashboard



/////////////////////////////////////////////////////////
// PART 3

// Add object that keeps track of premium members

// Add function to return emails of premium members



/////////////////////////////////////////////////////////
// PART 4

// Add function to assign interns to workdays

// Add a function to generate customer support hours


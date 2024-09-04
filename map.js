// Create a Map to store contact information (name, age, email, location) and implement a function to retrieve contact details by name.


// Create a Map to store contact information
const contacts = new Map();

// Add contacts to the Map
contacts.set('Sachin', { age: 30, email: 'sachin.15@example.com', location: 'Greater noida' });
contacts.set('Rohan', { age: 25, email: 'rohan_a16@example.com', location: 'delhi' });
contacts.set('Pushkar', { age: 28, email: 'pushkar_05@example.com', location: 'faridabad' });

// Function to retrieve contact details by name
function getContactDetails(name) {
    if (contacts.has(name)) {
        return contacts.get(name);
    } else {
        return 'Contact not found';
    }
}

console.log(getContactDetails('Pushkar')); 

console.log(getContactDetails('Ritesh')); 
// Output: 'Contact not found'

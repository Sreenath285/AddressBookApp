let addressBookList;

window.addEventListener("DOMContentLoaded", (event) => {
    addressBookList = getAddressBookDataFromStorage();
    document.querySelector(".person-count").textContent = addressBookList.length;
    createInnerHtml();
});

const getAddressBookDataFromStorage = () => {
    return localStorage.getItem('ContactList') ? JSON.parse(localStorage.getItem('ContactList')) : [];
}

const createInnerHtml = () => {
  if (addressBookList.length == 0) return;
  const headerHtml = "<th>Full Name</th><th>Address</th><th>City</th><th>State</th>" + 
                     "<th>Zip Code</th><th>Phone Number</th><th>Actions</th>"
  let innerHtml = `${headerHtml}`;  
//   let addressBookList = createAddressBookJSON();
  for (const addressBookData of addressBookList) {
    innerHtml = 
    `${innerHtml}
     <tr>
         <td>${addressBookData._name}</td>
         <td>${addressBookData._address}</td>
         <td>${addressBookData._city}</td>
         <td>${addressBookData._state}</td>
         <td>${addressBookData._zip}</td>
         <td>${addressBookData._phoneNumber}</td>
         <td>
             <img name="${addressBookData._id}" onclick="remove(this)" src="..\assets\icons\delete-black-18dp.svg" alt="delete">
             <img name="${addressBookData._id}" onclick="update(this)" src="..\assets\icons\create-black-18dp.svg" alt="edit">
         </td>
    </tr>`;
  }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createAddressBookJSON = () => {
    let addressBookListLocal = [
        {
            _name: 'Sreenath',
            _address: 'Adoni',
            _city: 'Kurnool',
            _state: 'Andhra Pradesh',
            _zipCode: '518301',
            _phoneNumber: '91 7075743215'
        },
        {
            _name: 'Yashwanth',
            _address: 'Marathahalli',
            _city: 'Banglore',
            _state: 'Karnataka',
            _zipCode: '560063',
            _phoneNumber: '91 7075743123'
        }
    ];
    return addressBookListLocal;
}

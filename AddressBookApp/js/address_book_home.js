window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
  const headerHtml = "<th>Full Name</th><th>Address</th><th>City</th><th>State</th>" + 
                     "<th>Zip Code</th><th>Phone Number</th><th>Actions</th>"
  let addressBookData = createAddressBookJSON()[1];
  const innerHtml = 
   `${headerHtml}
    <tr>
        <td>${addressBookData._name}</td>
        <td>${addressBookData._address}</td>
        <td>${addressBookData._city}</td>
        <td>${addressBookData._state}</td>
        <td>${addressBookData._zipCode}</td>
        <td>${addressBookData._phoneNumber}</td>
        <td>
            <img name="${addressBookData._id}" src="..\assets\icons\delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
            <img name="${addressBookData._id}" src="..\assets\icons\create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
        </td>
   </tr>`;
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
            _name: 'Rahul',
            _address: 'Adoni',
            _city: 'Kurnool',
            _state: 'Andhra Pradesh',
            _zipCode: '518301',
            _phoneNumber: '91 7075743215'
        }
    ];
    return addressBookListLocal;
}

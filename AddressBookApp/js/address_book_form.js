let isUpdate = false;
let addressBookObj = {};

window.addEventListener("DOMContentLoaded", (event) => {
  validateName();
  validatePhoneNumber();
  validateAddress();
  validateZipcode();
  checkForUpdate();
});

const validateName = () => {
  const name = document.querySelector("#name");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      setTextValue(".name-error", "");
      return;
    }
    try {
      new Contact().name = name.value;
      setTextValue(".name-error", "");
    } catch (error) {
      setTextValue(".name-error", error);
    }
  });
};

const validatePhoneNumber = () => {
  const phoneNumber = document.querySelector("#phoneNumber");
  phoneNumber.addEventListener("input", function () {
    if (phoneNumber.value.length == 0) {
      setTextValue(".tel-error", "");
      return;
    }
    try {
      new Contact().phoneNumber = phoneNumber.value;
      setTextValue(".tel-error", "");
    } catch (error) {
      setTextValue(".tel-error", error);
    }
  });
};

const validateAddress = () => {
  const address = document.querySelector("#address");
  address.addEventListener("input", function () {
    if (address.value.length == 0) {
      setTextValue(".address-error", "");
      return;
    }
    try {
      new Contact().address = address.value;
      setTextValue(".address-error", "");
    } catch (error) {
      setTextValue(".address-error", error);
    }
  });
};

const validateZipcode = () => {
  const zip = document.querySelector("#zip");
  zip.addEventListener("input", function () {
    if (zip.value.length == 0) {
      setTextValue(".zip-error", "");
      return;
    }
    try {
      new Contact().zip = zip.value;
      setTextValue(".zip-error", "");
    } catch (error) {
      setTextValue(".zip-error", error);
    }
  });
};

const checkForUpdate = () => {
  const addressBookJSON = localStorage.getItem('editAddressBook');
  isUpdate = addressBookJSON ? true : false;
  if (!isUpdate) return;
  addressBookObj = JSON.parse(addressBookJSON);
  setForm();
}

const setForm = () => {
  setTextValue('#name', addressBookObj._name);
  setTextValue('#address', addressBookObj._address);
  setTextValue('#city', addressBookObj._city);
  setTextValue('#state', addressBookObj._state);
  setTextValue('#zip', addressBookObj._zip);
  setTextValue('#phoneNumber', addressBookObj._phoneNumber);
}

const save = (event) => {
  event.preventDefault();
  event.stopPropogation(); 
  try {
    setAddressBookObject();
    createAndUpdateStorage();
    resetForm();
    window.location.replace(site_properties.home_page);
  }
  catch (e) {
    return;
  }
}  

const setEmployeePayrollObject = () => {
  addressBookObj._name = getInputValueById('#name');
  addressBookObj._address = getInputValueById('#address');
  addressBookObj._city = getInputValueById('#city');
  addressBookObj._state = getInputValueById('#state');
  addressBookObj._zip = getInputValueById('#zip');
  addressBookObj._phoneNumber = getInputValueById('#phoneNumber');
}

const createAndUpdateStorage = (contact) => {
  let contactList = JSON.parse(localStorage.getItem("ContactList"));
  if (contactList) {
    let addressBookData = contactList.find(contact => contact._id == addressBookObj._id);
    if (!addressBookData) {
      contactList.push(createAddressBookData());
    } else {
      const index = contactList.map(contact => contact._id)
                               .indexOf(addressBookData._id);
      contactList.splice(index, 1, createAddressBookData(addressBookData._id));
    }
  } else {
    contactList = [createAddressBookData()]
  }
  localStorage.setItem("ContactList", JSON.stringify(contactList));
}

const createAddressBookData = (id) => {
  let contact = new Contact();
  if (!id) contact.id = createNewEmployeeID();
  else contact.id = id;
  setAddressBookData(contact);
  return contact;
}

const setAddressBookData = (contact) => {
  try {
    contact.name = addressBookObj._name;
  } catch(e) {
    setTextValue('.name-error', e);
    throw e;
  }
  contact.address = addressBookObj._address;
  contact.city = addressBookObj._city;
  contact.state = addressBookObj._state;
  contact.zip = addressBookObj._zip;
  contact.phoneNumber = addressBookObj._phoneNumber;
  alert(contact.toString());
}

const createNewEmployeeID = () => {
  let contactID = localStorage.getItem("ContactID");
  contactID = !contactID ? 1 : (parseInt(contactID) + 1).toString();
  localStorage.setItem("ContactID", contactID);
  return contactID;
}

const createContact = () => {
  let contact = new Contact();
  contact.id = new Date().getTime();

  try {
    contact.name = getInputValueById("#name");
  } catch (error) {
    setTextValue(".name-error", error);
    throw error;
  }

  try {
    contact.phoneNumber = getInputValueById("#phoneNumber");
  } catch (error) {
    setTextValue(".tel-error", error);
    throw error;
  }

  try {
    contact.address = getInputValueById("#address");
  } catch (error) {
    setTextValue(".address-error", error);
    throw error;
  }

  let city = getInputValueById("#city");
  if (city != "Select City") {
    contact.city = city;
  } else {
    throw "Please select city";
  }

  let state = getInputValueById("#state");
  if (state != "Select State") {
    contact.state = state;
  } else {
    throw "Please select state";
  }

  try {
    contact.zip = getInputValueById("#zip");
  } catch (error) {
    setTextValue(".zip-error", error);
    throw error;
  }

  alert(contact.toString());
  return contact;
}

const resetForm = () => {
  setTextValue('#name', '');
  setTextValue('#address', '');
  setIndexValue('#city', 0);
  setIndexValue('#state', 0);
  setTextValue('#zip', '');
  setTextValue('#phoneNumber', '');
  setTextValue(".name-error", "");
  setTextValue(".tel-error", "");
  setTextValue(".address-error", "");
  setTextValue(".zip-error", "");
}

const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
};

const getInputValueById = (property) => {
  let value = document.querySelector(property).value;
  return value;
};

const setIndexValue = (id, value) => {
  const element = document.querySelector(id);
  element.selectedIndex = value;
}
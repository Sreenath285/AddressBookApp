window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector("#name");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      setTextValue(".name_error", "");
      return;
    }
    try {
      new Contact().name = name.value;
      setTextValue(".name_error", "");
    } catch (error) {
      setTextValue(".name_error", error);
    }
  });

  const phoneNumber = document.querySelector("#phoneNumber");
  phoneNumber.addEventListener("input", function () {
    if (phoneNumber.value.length == 0) {
      setTextValue(".tel_error", "");
      return;
    }
    try {
      new Contact().phoneNumber = phoneNumber.value;
      setTextValue(".tel_error", "");
    } catch (error) {
      setTextValue(".tel_error", error);
    }
  });

  const address = document.querySelector("#address");
  address.addEventListener("input", function () {
    if (address.value.length == 0) {
      setTextValue(".address_error", "");
      return;
    }
    try {
      new Contact().address = address.value;
      setTextValue(".address_error", "");
    } catch (error) {
      setTextValue(".address_error", error);
    }
  });

  const zip = document.querySelector("#zip");
  zip.addEventListener("input", function () {
    if (zip.value.length == 0) {
      setTextValue(".zip_error", "");
      return;
    }
    try {
      new Contact().zip = zip.value;
      setTextValue(".zip_error", "");
    } catch (error) {
      setTextValue(".zip_error", error);
    }
  });
});

const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
};

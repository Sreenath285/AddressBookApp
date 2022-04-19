window.addEventListener("DOMContentLoaded", (event) => {});
const createInnerHtml = () => {
  const innerHtml = 
  `<tr>
        <th>Full Name</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zip Code</th>
        <th>Phone Number</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td>Sreenath</td>
        <td>Hanuman Nagar, Adoni</td>
        <td>Kurnool</td>
        <td>Andhra Pradesh</td>
        <td>518301</td>
        <td>91 7075321456</td>
        <td>
            <img src="..\assets\icons\delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
            <img src="..\assets\icons\create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
        </td>
   </tr>`;
   document.querySelector('#table-display').innerHTML = innerHtml;
};

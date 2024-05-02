document.getElementById("fillup-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  const amount = document.getElementById("amount").value;

  const row = `
                <tr>
                    <td>${description}</td>
                    <td>${date}</td>
                    <td>${amount}</td>
                    <td><button type="button" class="delete-btn"><img src="delete.svg" alt=""></button></td>
                </tr>
            `;

  document
    .querySelector("#expense-table tbody")
    .insertAdjacentHTML("beforeend", row);

  // Clear form fields
  document.getElementById("description").value = "";
  document.getElementById("date").value = "";
  document.getElementById("amount").value = "";

  // Attach event listener to delete button
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.parentNode.parentNode.remove();
    });
  });
});

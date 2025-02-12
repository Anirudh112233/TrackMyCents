document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  // Toggle sidebar visibility
  menuToggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
      document.body.classList.toggle("menu-open");
  });

  // Close sidebar when clicking outside
  document.addEventListener("click", function (event) {
      if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
          sidebar.classList.remove("open");
          document.body.classList.remove("menu-open");
      }
  });
});


const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const dummyTransactions = [
  { id: 1, text: "Grocery", amount: -450 },
  { id: 2, text: "Travel", amount: 40 },
  { id: 3, text: "Salary", amount: 8000 },
  { id: 4, text: "Lunch", amount: -180 },
];
let Transaction = dummyTransactions;

function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("Li");

  item.classList.add(transaction.amount < 0 ? "minus" : "plus");
  item.innerHTML = `
    ${transaction.text}<span>${sign}${Math.abs(
    transaction.amount
    )}</span>
    <button class="delete-btn" onclick="">x</button>
    `;
    list.appendChild(items);
    
}

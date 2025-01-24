import { ManageAccount } from "./firebaseconnect.js";

const logoutButton = document.querySelector(".btn-exit-system")

logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    const account = new ManageAccount();
    account.signOut();
});
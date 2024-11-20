// Function to handle the hover effect on "Add to Bag" button
function hoverAddToBag(button) {
    button.innerHTML = "Add to Shopping Cart";
    button.style.backgroundColor = "gray";
}

// Reset the hover effect
function resetAddToBag(button) {
    button.innerHTML = "Add to Bag";
    button.style.backgroundColor = "#f1c40f";
}

// Function to open the modal
function openModal() {
    document.getElementById('modal').style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById('modal').style.display = "none";
}

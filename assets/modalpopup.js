// document.addEventListener('DOMContentLoaded', function() {
//   // Get the modal
//   var modal = document.getElementById("shipping-info-modal");

//   // Get the button that opens the modal
//   var btn = document.getElementById("shipping-info-link");

//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];

//   // When the user clicks the button, open the modal 
//   btn.onclick = function(event) {
//     event.preventDefault();
//     modal.style.display = "block";
//   }

//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//     modal.style.display = "none";
//   }

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }
// });

document.addEventListener('DOMContentLoaded', function() {
    // Create the popup container
    var popup = document.createElement('div');
    popup.id = 'shipping-info-popup';
    popup.style.display = 'none';
    popup.style.position = 'fixed';
    popup.style.left = '50%';
    popup.style.top = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = '#fff';
    popup.style.padding = '20px';
    popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    popup.style.zIndex = '1000';
    // Create the popup content container
    var popupContent = document.createElement('div');
    popupContent.id = 'popup-shipping-info-content';
    popupContent.innerHTML = document.getElementById('shipping-info-content').innerHTML;
    // Create the close button
    var closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.style.marginTop = '10px';
    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
    popup.appendChild(popupContent);
    popup.appendChild(closeButton);
    document.body.appendChild(popup);
    // Add event listener to the link
    document.getElementById('shipping-info-link').addEventListener('click', function(event) {
        event.preventDefault();
        popup.style.display = 'block';
    });
});

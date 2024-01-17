
        function addToCart(itemName, price) {
            alert(`Added ${itemName} to cart. Total price: $${price}`);
        }

        function toggleReservationForm() {
            const reservationForm = document.querySelector('.reservation-form');
            reservationForm.style.display = reservationForm.style.display === 'none' ? 'block' : 'none';
        }

        function submitReservation() {
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            alert(`Reservation confirmed for ${name} on ${date} at ${time}.`);
        }
   
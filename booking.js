
        document.addEventListener('DOMContentLoaded', function() {
            let selectedVehicle = '';
            let ratePerHour = 0;
            let hours = 1;
            
            // Vehicle selection
            document.querySelectorAll('.select-vehicle').forEach(button => {
                button.addEventListener('click', function() {
                    selectedVehicle = this.getAttribute('data-vehicle');
                    ratePerHour = parseInt(this.getAttribute('data-rate'));
                    
                    // Update booking form
                    document.getElementById('vehicle-type').value = this.parentElement.querySelector('.card-title').textContent;
                    document.getElementById('summary-vehicle').textContent = this.parentElement.querySelector('.card-title').textContent;
                    document.getElementById('summary-rate').textContent = ratePerHour;
                    updateTotal();
                    
                    // Show booking form
                    document.getElementById('vehicle-selection').style.display = 'none';
                    document.getElementById('booking-form').style.display = 'block';
                });
            });
            
            // Hours change
            document.getElementById('hours').addEventListener('change', function() {
                hours = parseInt(this.value);
                document.getElementById('summary-hours').textContent = hours;
                updateTotal();
            });
            
            // Proceed to payment
            document.getElementById('proceed-to-payment').addEventListener('click', function() {
                if(document.getElementById('bookingDetails').checkValidity()) {
                    // Update payment summary
                    document.getElementById('payment-vehicle').textContent = document.getElementById('vehicle-type').value;
                    document.getElementById('payment-date').textContent = document.getElementById('date').value;
                    document.getElementById('payment-location').textContent = document.getElementById('location').value;
                    document.getElementById('payment-hours').textContent = hours;
                    document.getElementById('payment-total').textContent = ratePerHour * hours;
                    
                    // Show payment section
                    document.getElementById('booking-form').style.display = 'none';
                    document.getElementById('payment-section').style.display = 'block';
                } else {
                    alert('Please fill all required fields');
                }
            });
            
            // Confirm payment
            document.getElementById('confirm-payment').addEventListener('click', function() {
                if(document.getElementById('paymentForm').checkValidity()) {
                    // Update confirmation details
                    document.getElementById('confirm-vehicle').textContent = document.getElementById('vehicle-type').value;
                    document.getElementById('confirm-total').textContent = ratePerHour * hours;
                    
                    // Generate random transaction ID
                    const transactionId = 'KS' + Math.floor(Math.random() * 1000000000);
                    document.getElementById('transaction-id').textContent = transactionId;
                    
                    // Calculate arrival time (1-3 hours from now)
                    const now = new Date();
                    const arrivalTime = new Date(now.getTime() + (2 * 60 * 60 * 1000)); // 2 hours from now
                    document.getElementById('arrival-time').textContent = arrivalTime.toLocaleTimeString() + ' today';
                    
                    // Show confirmation
                    document.getElementById('payment-section').style.display = 'none';
                    document.getElementById('confirmation-section').style.display = 'block';
                } else {
                    alert('Please fill all payment details correctly');
                }
            });
            
            // New booking
            document.getElementById('new-booking').addEventListener('click', function() {
                // Reset form
                document.getElementById('bookingDetails').reset();
                document.getElementById('paymentForm').reset();
                
                // Show vehicle selection
                document.getElementById('confirmation-section').style.display = 'none';
                document.getElementById('vehicle-selection').style.display = 'block';
                
                // Reset values
                selectedVehicle = '';
                ratePerHour = 0;
                hours = 1;
            });
            
            function updateTotal() {
                const total = ratePerHour * hours;
                document.getElementById('summary-total').textContent = total;
            }
        });
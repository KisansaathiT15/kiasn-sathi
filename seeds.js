const productsGrid = document.getElementById('products-grid');
        const tabs = document.querySelectorAll('.tab');
        const cartIcon = document.getElementById('cart-icon');
        const cartModal = document.getElementById('cart-modal');
        const closeCart = document.getElementById('close-cart');
        const overlay = document.getElementById('overlay');
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');
        const cartCountElement = document.querySelector('.cart-count');
        
        // Product data (simplified)
        const products = {
            1: { name: "Hybrid Tomato Seeds", category: "Vegetable Seeds", price: 120, originalPrice: 150, image: "tomatoseeds.jpeg" },
            2: { name: "Basmati Rice Seeds", category: "Grain Seeds", price: 180, originalPrice: 220, image:"basmathirice.jpeg" },
            3: { name: "BT Cotton Seeds", category: "Fiber Seeds", price: 750, originalPrice: 850, image: "cottonseeds.jpeg" },
            4: { name: "Hybrid Chilli Seeds", category: "Vegetable Seeds", price: 150, originalPrice: 180, image: "chilliseeds.jpeg" },
            5: { name: "NPK 19:19:19 Fertilizer", category: "Complex Fertilizer", price: 1200, originalPrice: 1350, image: "NPK.jpeg" },
            6: { name: "DAP Fertilizer", category: "Phosphatic Fertilizer", price: 1100, originalPrice: 1250, image: "DAP.jpeg" },
            7: { name: "Organic Vermicompost", category: "Organic Fertilizer", price: 400, originalPrice: 500, image: "vermicompost.jpeg" },
            8: { name: "Urea Fertilizer", category: "Nitrogenous Fertilizer", price: 300, originalPrice: 350, image: "urea.jpeg" }
        };
        
        // Cart state
        let cart = [];
        
        // Initialize the page
        function init() {
            setupEventListeners();
        }
        
        // Setup event listeners
        function setupEventListeners() {
            // Tab switching
            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    // Show/hide products based on category
                    const category = tab.dataset.category;
                    document.querySelectorAll('.product-card').forEach(card => {
                        if (card.dataset.category === category) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
            
            // Add to cart buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', addToCart);
            });
            
            // Cart icon click
            cartIcon.addEventListener('click', toggleCart);
            
            // Close cart
            closeCart.addEventListener('click', toggleCart);
            
            // Overlay click
            overlay.addEventListener('click', toggleCart);
        }
        
        // Toggle cart visibility
        function toggleCart() {
            cartModal.classList.toggle('open');
            overlay.classList.toggle('active');
            
            if (cartModal.classList.contains('open')) {
                renderCart();
            }
        }
        
        // Add to cart function
        function addToCart(e) {
            const productId = parseInt(e.target.dataset.id);
            const product = products[productId];
            
            if (!product) return;
            
            // Check if product already in cart
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    id: productId,
                    quantity: 1
                });
            }
            
            updateCartCount();
            showAddToCartFeedback();
        }
        
        // Update cart count in the header
        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            cartCountElement.textContent = count;
        }
        
        // Show feedback when item is added to cart
        function showAddToCartFeedback() {
            const feedback = document.createElement('div');
            feedback.className = 'add-to-cart-feedback';
            feedback.textContent = 'Item added to cart!';
            feedback.style.position = 'fixed';
            feedback.style.bottom = '20px';
            feedback.style.right = '20px';
            feedback.style.backgroundColor = 'var(--primary-color)';
            feedback.style.color = 'white';
            feedback.style.padding = '10px 20px';
            feedback.style.borderRadius = '4px';
            feedback.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
            feedback.style.zIndex = '1000';
            feedback.style.animation = 'slideIn 0.3s ease';
            
            document.body.appendChild(feedback);
            
            setTimeout(() => {
                feedback.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    document.body.removeChild(feedback);
                }, 300);
            }, 2000);
            
            // Add CSS for animations
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Render cart items
        function renderCart() {
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<div class="empty-cart-message">Your cart is empty</div>';
                cartTotalElement.textContent = '₹0.00';
                return;
            }
            
            cartItemsContainer.innerHTML = '';
            
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                            <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        </div>
                        <div class="remove-item" data-id="${item.id}">Remove</div>
                    </div>
                `;
                
                cartItemsContainer.appendChild(cartItem);
            });
            
            // Add event listeners to quantity buttons
            document.querySelectorAll('.quantity-btn').forEach(button => {
                button.addEventListener('click', handleQuantityChange);
            });
            
            // Add event listeners to quantity inputs
            document.querySelectorAll('.quantity-input').forEach(input => {
                input.addEventListener('change', handleQuantityInputChange);
            });
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', removeFromCart);
            });
            
            // Update total
            updateCartTotal();
        }
        
        // Handle quantity change
        function handleQuantityChange(e) {
            const productId = parseInt(e.target.dataset.id);
            const item = cart.find(item => item.id === productId);
            
            if (!item) return;
            
            if (e.target.classList.contains('increase')) {
                item.quantity += 1;
            } else if (e.target.classList.contains('decrease')) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    // If quantity would be 0, remove the item
                    cart = cart.filter(item => item.id !== productId);
                }
            }
            
            updateCartCount();
            renderCart();
        }
        
        // Handle quantity input change
        function handleQuantityInputChange(e) {
            const productId = parseInt(e.target.dataset.id);
            const item = cart.find(item => item.id === productId);
            const newQuantity = parseInt(e.target.value);
            
            if (!item || isNaN(newQuantity) || newQuantity < 1) return;
            
            item.quantity = newQuantity;
            updateCartCount();
            updateCartTotal();
        }
        
        // Remove from cart
        function removeFromCart(e) {
            const productId = parseInt(e.target.dataset.id);
            cart = cart.filter(item => item.id !== productId);
            
            updateCartCount();
            renderCart();
        }
        
        // Update cart total
        function updateCartTotal() {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotalElement.textContent = `₹${total.toFixed(2)}`;
        }
        
        // Initialize the page

        
        init();
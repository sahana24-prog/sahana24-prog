$(document).ready(function() {
    function fetchProducts() {
        $.ajax({
            url: 'products.json', 
            type: 'GET',
            dataType: 'json',
            success: function(products) {
                displayProducts(products);
            },
            error: function(xhr, status, error) {
                console.error('Error fetching products:', error);
            }
        });
    }
    function displayProducts(products) {
        var productsContainer = $('#products');
        productsContainer.empty(); 

        $.each(products, function(index, product) {
            var productElement = $('<div class="product">');
            productElement.append('<img src="' + product.image + '" alt="' + product.name + '">');
            productElement.append('<h2>' + product.name + '</h2>');
            productElement.append('<p>' + product.description + '</p>');
            productElement.append('<p>Price: $' + product.price + '</p>');
            productElement.append('<button class="add-to-cart" data-id="' + product.id + '">Add to Cart</button>');
            productsContainer.append(productElement);
        });
    }

    $(document).on('click', '.add-to-cart', function() {
        var productId = $(this).data('id');
        addToCart(productId);
    });

    function addToCart(productId) {
        console.log('Product added to cart with ID:', productId);
        var cartTotal = parseFloat($('#cart-total').text());
        $('#cart-total').text((cartTotal + 10).toFixed(2)); 
    }

    fetchProducts();
});

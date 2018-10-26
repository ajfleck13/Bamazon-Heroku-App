const productcontainer = $("#productContainer");

const loadProducts = function() {
    productcontainer.empty();

    $.ajax({
        url: '/api/products',
        method: 'GET'
    }).then(function(response) {
        for(let i = 0; i < response.length; i++)
        {
            productcontainer.append(createProductCard(response[i]));
        }
    })
}

const createProductCard = function(product) {
    $(`<div class="col-sm-3">
        <div class="card" style="width: 12rem;">
            <div class="card-body">
            <h5 class="card-title">${product_name}</h5>
            <p class="card-text">
                Price: ${product.price}
                <br>
                Quantity: ${product.stock_quantity}
            </p>
            <a href="#" class="btn btn-primary">Purchase</a>
            </div>
        </div>
    </div>`);
}
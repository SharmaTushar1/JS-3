const par = document.getElementsByClassName('product-container')[0];

fetch('https://fakestoreapi.com/products')
.then((response) => response.json())
.then((data) => {
    let products = data;

    rating.addEventListener('change', () => {
        par.innerHTML = '';
        const category = document.getElementById('category');
        const category_value = category.value;
        const rating = document.getElementById('rating');
        const rating_value = rating.value;
        products.map((val) => {
            create(val, rating_value, category_value);
        })
    });

    category.addEventListener('change', () => {
        par.innerHTML = '';
        const category = document.getElementById('category');
        const category_value = category.value;
        const rating = document.getElementById('rating');
        const rating_value = rating.value;
        products.map((val) => {
            create(val, rating_value, category_value);
        })
    });

    function create(val, rating, category) {
        if (val.rating.rate >= rating && (val.category == category || category=='all')) {
            const element = document.createElement('div');
            const title = document.createElement('div');
            const price = document.createElement('div');
            const img = document.createElement('img');
            const rating = document.createElement('div');
            img.src = val.image;
            title.textContent = val.title;
            price.textContent = val.price;
            rating.textContent = val.rating.rate;
            element.appendChild(title);
            element.appendChild(img);
            element.appendChild(price);
            element.appendChild(rating);
            element.classList.add('element');
            par.appendChild(element);
        }
    }

    // for searching

    const input = document.getElementById('keyword')

    input.addEventListener('input', () => {
        const input_value = input.value.toLowerCase();
        const element = document.getElementsByClassName('element');
        for (let i = 0; i<element.length; i++) {
            if (!element[i].innerHTML.toLowerCase().includes(input_value)) {
                element[i].style.display="none";
            } else {
                element[i].style.display="visible";
            }
        }
    })
});

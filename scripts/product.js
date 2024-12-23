const detailEl = document.querySelector(".detail");
const BASE_URL = "https://dummyjson.com";

async function fetchData() {
  let params = new URLSearchParams(window.location.search);
  const response = await fetch(`${BASE_URL}/products/${params.get("id")}`);
  response.json().then((res) => {
    createDetailPage(res);
  });
}

window.onload = () => {
  fetchData();
};

function createDetailPage(data) {
  detailEl.innerHTML = `
        <div class="detail1">
            <img src=${data.images[0]} alt="">
              <div class="free">🚚 FREE SHIPPING</div>
            </div>
            <div>
            <h1 class="title">${data?.title}</h1>
            <p class="desc">${data?.description}</p>
            <div class="btn__price">
            <p class="price">${data?.price}$</p>
            <button class="product__btn">+Add to cart</button>
            </div>
            </div>
    `;
}

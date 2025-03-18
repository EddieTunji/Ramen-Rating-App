const ramens = [
    {
      id: 1,
      name: "Gyukotsu Ramen",
      restaurant: "Gataki",
      image: "images/gyukotsu.jpg",
      rating: 6,
      comment: "Delicious!"
    },
    {
      id: 2,
      name: "Kojiro Ramen",
      restaurant: "Menya",
      image: "images/img_4288.jpg",
      rating: 4,
      comment: "Very salty!"
    },
    {
      id: 3,
      name: "Naruto Ramen",
      restaurant: "Kawasaki",
      image: "images/naruto.jpg",
      rating: 8.7,
      comment: "Unique beefy flavor!"
    },
    {
      id: 4,
      name: "Nirvana Ramen",
      restaurant: "Vanirii",
      image: "images/nirvana.jpg",
      rating: 3,
      comment: "Creamy and salty broth"
    },
    {
      id: 5,
      name: "Shoyu Ramen",
      restaurant: "Ichiran",
      image: "images/shoyu.jpg",
      rating: 10,
      comment: "Heaven in a bowl"
    }
  ];
  

function  displayRamens(ramens) {
    const menu = document.getElementById("ramen-menu");
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;

        img.addEventListener("click", () => handleClick(ramen));
        menu.appendChild(img);

    });

if(ramens.length > 0) {
    handleClick(ramens[0]);
 }
}

function handleClick(ramen) {
    document.getElementById("detail-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("rating").textContent = ramen.rating || "N/A";
    document.getElementById("comment").textContent = ramen.comment || "No comment";
}

function addSubmitListener() {
    const form = document.getElementById("new-ramen");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const newRamen = {
            name: form.name.value,
            restaurant: form.restaurant.value,
            image: form.image.value,
            rating: form.rating.value,
            comment: form.comment.value
        };

        ramens.push(newRamen);
        displayRamens(ramens);
        form.reset();

        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;

        img.addEventListener("click", () => handleClick(newRamen));
        document.getElementById("ramen-menu").appendChild(img);

    });
}

document.addEventListener("DOMContentLoaded", () => {
    const detailImage = document.querySelector("#ramen-details img");

    if (detailImage) {
      detailImage.style.width = "100%";
      detailImage.style.maxWidth = "500px";
      detailImage.style.height = "auto";
      detailImage.style.objectFit = "cover";
    }

    displayRamens(ramens);
    addSubmitListener();
});



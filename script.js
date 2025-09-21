    // Outfit Data
const outfits = {
  beach: [
    { id: 1, name: "Beach Breeze", category: "Beach", img: "image/outfit1.png", quote: "Feel the ocean breeze 🌊", desc: "Light summer dress with flip-flops.", accessories: ["Hat", "Sunglasses", "Beach Bag"] },
    { id: 2, name: "Tropical Vibe", category: "Beach", img: "image/outfit2.png", quote: "Live the island life 🏝️", desc: "Floral shirt with comfy shorts.", accessories: ["Sandals", "Beach Towel", "Sunscreen"] }
  ],
  party: [
    { id: 3, name: "Glam Night", category: "Party", img: "image/party1.jpg", quote: "Shine under the lights ✨", desc: "Glitter dress with high heels.", accessories: ["Clutch", "Necklace", "Perfume"] },
    { id: 5, name: "Cocktail Chic", category: "Party", img: "image/party2.jpg", quote: "Cheers to tonight 🥂", desc: "Red cocktail dress with pumps.", accessories: ["Clutch", "Earrings", "Bracelet"] },
    { id: 7, name: "Elegant Evening", category: "Party", img: "image/party3.jpg", quote: "Grace and style 🌟", desc: "Long black gown with heels.", accessories: ["Clutch", "Ring", "Watch"] },   
  ],
  work: [
    { id: 8, name: "Business Casual", category: "Work", img: "image/work2.jpg", quote: "Comfort meets professionalism 🖋️", desc: "Button-up shirt with chinos.", accessories: ["Messenger Bag", "Belt", "Watch"] },
    { id: 4, name: "Office Classic", category: "Work", img: "image/casual1.jpg", quote: "Dress smart, work smarter 💼", desc: "Blazer with pencil skirt.", accessories: ["Laptop Bag", "Watch", "Subtle Earrings"] }, 
    { id: 10, name: "Executive Style", category: "Work", img: "image/work4.jpg", quote: "Power dressing 🔑", desc: "Suit jacket with skirt.", accessories: ["Briefcase", "Heels", "Watch"] }
  ],
  sunny: [
    { id: 11, name: "Sunny Stroll", category: "Sunny", img: "image/sunny1.jpg", quote: "Bright days ahead ☀️", desc: "Light sundress with sandals.", accessories: ["Sunglasses", "Straw Hat", "Bag"] },
    { id: 14, name: "Casual Bright", category: "Sunny", img: "image/sunny4.jpg", quote: "Feel the warmth 🌞", desc: "Crop top with skirt.", accessories: ["Hat", "Bag", "Sandals"] },
    { id: 13, name: "City Sunshine", category: "Sunny", img: "image/sunny3.jpg", quote: "Walking in sunlight 🏙️", desc: "T-shirt with jeans and sneakers.", accessories: ["Sunglasses", "Crossbody Bag", "Cap"] },
  ],
  cold: [
    { id: 15, name: "Winter Cozy", category: "Cold", img: "image/cold1.jpg", quote: "Warm and stylish ❄️", desc: "Wool sweater with jeans.", accessories: ["Scarf", "Beanie", "Boots"] },
    { id: 16, name: "Frosty Walk", category: "Cold", img: "image/cold2.jpg", quote: "Chilly days call for layers 🧣", desc: "Puffer jacket with leggings.", accessories: ["Gloves", "Hat", "Boots"] },
    { id: 17, name: "Autumn Layers", category: "Cold", img: "image/cold3.jpg", quote: "Layer up 🍂", desc: "Cardigan with scarf and jeans.", accessories: ["Bag", "Boots", "Hat"] },
    { id: 18, name: "Snow Ready", category: "Cold", img: "image/cold4.jpg", quote: "Snowy adventures ⛄", desc: "Winter coat with snow boots.", accessories: ["Gloves", "Beanie", "Sunglasses"] }
  ],
  freestyle: [
    
    { id: 20, name: "Urban Cool", category: "Free Style", img: "image/free2.jpg", quote: "City life vibes 🌆", desc: "Hoodie with joggers.", accessories: ["Sneakers", "Crossbody Bag", "Beanie"] },
    { id: 19, name: "Street Vibes", category: "Free Style", img: "image/free1.jpg", quote: "Express yourself 🎨", desc: "Graphic tee with ripped jeans.", accessories: ["Sneakers", "Cap", "Backpack"] },
    { id: 21, name: "Skater Style", category: "Free Style", img: "image/free3.jpg", quote: "Ride with style 🛹", desc: "T-shirt with cargo pants.", accessories: ["Skateboard", "Sneakers", "Cap"] },
    { id: 22, name: "Casual Cool", category: "Free Style", img: "image/free4.jpg", quote: "Keep it casual 😎", desc: "Denim jacket with jeans.", accessories: ["Sneakers", "Backpack", "Watch"] }
  ],
  cute: [
    { id: 23, name: "Sweet Pastels", category: "Cute", img: "image/cute1.jpg", quote: "Soft and charming 🌸", desc: "Pastel dress with flats.", accessories: ["Headband", "Bag", "Bracelet"] },
    { id: 24, name: "Kawaii Style", category: "Cute", img: "image/cute2.jpg", quote: "Adorable vibes 🐰", desc: "Skirt with blouse.", accessories: ["Bag", "Bow", "Shoes"] },
    { id: 25, name: "Playful Look", category: "Cute", img: "image/cute3.jpg", quote: "Fun and flirty 💖", desc: "Top with skirt and sneakers.", accessories: ["Bag", "Hat", "Bracelet"] },
    { id: 26, name: "Charming Outfit", category: "Cute", img: "image/cute4.jpg", quote: "Pretty & sweet 🍬", desc: "Dress with cardigan.", accessories: ["Necklace", "Bag", "Shoes"] }
  ]
};


    function getAllOutfits() {
      return Object.values(outfits).flat();
    }

    const gallery = document.getElementById("gallery");
    const tabs = document.querySelectorAll(".tab");

    function displayOutfits(filteredOutfits) {
      gallery.innerHTML = "";

      filteredOutfits.forEach(outfit => {
        const card = document.createElement("div");
        card.classList.add("gallery-card");

        card.innerHTML = `
          <div class="card-image">
            <span class="badge">${outfit.category}</span>
            <button class="heart-btn">
              <i class="fa-regular fa-heart heart-icon"></i>
            </button>
            <img src="${outfit.img}" alt="${outfit.name}">
          </div>
          <div class="card-info">${outfit.name}</div>
        `;
        gallery.appendChild(card);

        const heartBtn = card.querySelector(".heart-btn");
        const icon = heartBtn.querySelector(".heart-icon");

        // Card click navigation
        card.addEventListener("click", () => {
          localStorage.setItem("selectedOutfit", JSON.stringify(outfit));
          window.location.href = "showcase.html";
        });

        // Heart click
        heartBtn.addEventListener("click", e => {
          e.stopPropagation(); // prevent card navigation

          icon.classList.toggle("fa-regular");
          icon.classList.toggle("fa-solid");
          icon.style.color = icon.classList.contains("fa-solid") ? "#e63946" : "#888";

          // Save liked outfits
          let likedOutfits = JSON.parse(localStorage.getItem("likedOutfits")) || [];
          if (icon.classList.contains("fa-solid")) {
            if (!likedOutfits.includes(outfit.id)) likedOutfits.push(outfit.id);
          } else {
            likedOutfits = likedOutfits.filter(id => id !== outfit.id);
          }
          localStorage.setItem("likedOutfits", JSON.stringify(likedOutfits));
        });
      });

      if (filteredOutfits.length === 0) {
        gallery.innerHTML = `<p class="no-results">No outfits found for this category.</p>`;
      }
    }

    // Tab filtering
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        document.querySelector(".tab.active").classList.remove("active");
        tab.classList.add("active");

        const theme = tab.dataset.theme;
        displayOutfits(theme === "all" ? getAllOutfits() : outfits[theme] || []);
      });
    });

    // Initial load
    displayOutfits(getAllOutfits());


const outfits = [
  {
    image: "image/outfit1.png",
    badge: "Casual",
    quote: "Stay comfy, stay confident — simplicity is key.",
    details: [
      { emoji: "👕", name: "White Shirt" },
      { emoji: "👖", name: "Blue Jeans" },
      { emoji: "👜", name: "Tote Bag" },
      { emoji: "👟", name: "Sneakers" }
    ],
    accessories: [
      { emoji: "🕶️", name: "Sunglasses" },
      { emoji: "🎒", name: "Backpack" },
      { emoji: "⌚", name: "Watch" }
    ]
  },
  {
    image: "image/outfit2.png",
    badge: "Cozy",
    quote: "Comfort is the ultimate fashion statement.",
    details: [
      { emoji: "🧥", name: "Warm Hoodie" },
      { emoji: "👖", name: "Leggings" },
      { emoji: "👟", name: "Running Shoes" }
    ],
    accessories: [
      { emoji: "🧢", name: "Cap" },
      { emoji: "🎧", name: "Headphones" },
      { emoji: "👜", name: "Messenger Bag" }
    ]
  },
  {
    image: "image/outfit3.png",
    badge: "Formal",
    quote: "Dress well, work well — confidence starts here.",
    details: [
      { emoji: "👔", name: "Sharp Shirt" },
      { emoji: "👖", name: "Tailored Trousers" },
      { emoji: "🥿", name: "Loafers" }
    ],
    accessories: [
      { emoji: "⌚", name: "Classic Watch" },
      { emoji: "💼", name: "Briefcase" },
      { emoji: "👓", name: "Glasses" }
    ]
  },
   {
    image: "image/beach2.jpg",
    badge: "Beach",
    quote: "Sun, sand, and style — enjoy the waves in comfort.",
    details: [
      { emoji: "👙", name: "Swimsuit" },
      { emoji: "🩴", name: "Flip Flops" },
      { emoji: "🕶️", name: "Sunglasses" }
    ],
    accessories: [
      { emoji: "🏖️", name: "Beach Bag" },
      { emoji: "☀️", name: "Sun Hat" },
      { emoji: "🧴", name: "Sunscreen" }
    ]
  },
  {
    image: "image/date1.jpg",
    badge: "Date Night",
    quote: "Look stunning and confident for that special evening.",
    details: [
      { emoji: "👗", name: "Dress" },
      { emoji: "👠", name: "Heels" },
      { emoji: "👜", name: "Clutch Bag" }
    ],
    accessories: [
      { emoji: "💍", name: "Ring" },
      { emoji: "📿", name: "Necklace" },
      { emoji: "💄", name: "Lipstick" }
    ]
  },
  {
    image: "image/party1.jpg",
    badge: "Party",
    quote: "Shine bright and dance all night in style.",
    details: [
      { emoji: "👚", name: "Sequin Top" },
      { emoji: "👖", name: "Slim Pants" },
      { emoji: "👠", name: "Stilettos" }
    ],
    accessories: [
      { emoji: "🎒", name: "Mini Backpack" },
      { emoji: "💎", name: "Earrings" },
      { emoji: "⌚", name: "Watch" }
    ]
  },
  {
    image: "image/outwear1.jpg",
    badge: "Outwear",
    quote: "Layer up smartly without losing your style.",
    details: [
      { emoji: "🧥", name: "Trench Coat" },
      { emoji: "👖", name: "Jeans" },
      { emoji: "👢", name: "Boots" }
    ],
    accessories: [
      { emoji: "🧣", name: "Scarf" },
      { emoji: "👜", name: "Leather Bag" },
      { emoji: "🕶️", name: "Sunglasses" }
    ]
  },
  {
    image: "image/casual1.jpg",
    badge: "Casual",
    quote: "Keep it simple, keep it fresh — perfect for daily outings.",
    details: [
      { emoji: "👕", name: "T-Shirt" },
      { emoji: "👖", name: "Jeans" },
      { emoji: "👟", name: "Sneakers" }
    ],
    accessories: [
      { emoji: "🧢", name: "Cap" },
      { emoji: "🎒", name: "Backpack" },
      { emoji: "⌚", name: "Watch" }
    ]
  },
  {
    image: "image/sport1.jpg",
    badge: "Sports",
    quote: "Active looks, stylish and functional for every move.",
    details: [
      { emoji: "👕", name: "Sports Tee" },
      { emoji: "🩳", name: "Shorts" },
      { emoji: "👟", name: "Running Shoes" }
    ],
    accessories: [
      { emoji: "🧢", name: "Cap" },
      { emoji: "🎧", name: "Earphones" },
      { emoji: "⌚", name: "Fitness Tracker" }
    ]
  },
  {
    image: "image/evening1.jpg",
    badge: "Evening",
    quote: "Elegant vibes for dinners and night outs.",
    details: [
      { emoji: "👔", name: "Dress Shirt" },
      { emoji: "👖", name: "Slim Trousers" },
      { emoji: "👞", name: "Dress Shoes" }
    ],
    accessories: [
      { emoji: "⌚", name: "Classic Watch" },
      { emoji: "💼", name: "Leather Briefcase" },
      { emoji: "🕶️", name: "Stylish Glasses" }
    ]
  }
];

let currentIndex = 0;

const outfitImage = document.getElementById('outfit-image');
const badge = document.getElementById('badge');
let loveBtn = document.getElementById('love-btn');
const outfitQuote = document.getElementById('outfit-quote');
const outfitDetails = document.getElementById('outfit-details');
const accessoryDetails = document.getElementById('accessory-details');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');

// Update UI
function displayOutfit(index) {
  const outfit = outfits[index];

  // Center content
  outfitImage.src = outfit.image;
  badge.textContent = outfit.badge;
  outfitQuote.textContent = outfit.quote;

  // Left - Outfit Details
  outfitDetails.innerHTML = outfit.details
    .map(item => `<li><span>${item.emoji}</span> ${item.name}</li>`)
    .join('');

  // Right - Accessories
  accessoryDetails.innerHTML = outfit.accessories
    .map(item => `<li><span>${item.emoji}</span> ${item.name}</li>`)
    .join('');

  // Reset love button
  loveBtn.classList.remove('active');
}

 loveBtn = document.getElementById('love-btn');
loveIcon = loveBtn.querySelector('i');

loveBtn.addEventListener('click', () => {
  // Toggle button active state
  loveBtn.classList.toggle('active');

  // Toggle between empty heart and filled heart
  if (loveIcon.classList.contains('far')) {
    loveIcon.classList.remove('far');
    loveIcon.classList.add('fas');  // solid heart
  } else {
    loveIcon.classList.remove('fas');
    loveIcon.classList.add('far');  // outline heart
  }
});


// Navigation
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % outfits.length;
  displayOutfit(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + outfits.length) % outfits.length;
  displayOutfit(currentIndex);
});

// Back button
backBtn.addEventListener('click', () => {
  window.location.href = "index.html";
});

// Initialize
displayOutfit(currentIndex);

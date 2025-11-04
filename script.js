// ---------- CAR DATA WITH MULTIPLE IMAGES ----------
const cars = [
  {name:'BMW X5', brand:'BMW', price:'$55,000', imgs:[
    'X5.jpeg',
    'BMW X5 FRONT.jpeg',
    'X5 BACK.jpeg'
  ], desc:'Luxury SUV with top performance.'},

  {name:'Toyota Corolla', brand:'Toyota', price:'$70,000', imgs:[
    'Toyota Corolla.jpeg',
    'https://source.unsplash.com/featured/?tesla,interior',
    'https://source.unsplash.com/featured/?tesla,electric'
  ], desc:'Electric sedan with autopilot.'},

   {name:'Toyota Rav 4', brand:'Toyota', price:'$70,000', imgs:[
    'untitled folder/WhatsApp Image 2025-11-04 at 20.26.00.jpeg',
    'untitled folder/WhatsApp Image 2025-11-04 at 20.26.01.jpeg',
    'https://source.unsplash.com/featured/?tesla,electric'
  ], desc:'Electric sedan with autopilot.'},

   {name:'Toyota Camry', brand:'Toyota', price:'$70,000', imgs:[
    'https://source.unsplash.com/featured/?tesla,model-s',
    'https://source.unsplash.com/featured/?tesla,interior',
    'https://source.unsplash.com/featured/?tesla,electric'
  ], desc:'Electric sedan with autopilot.'},

   {name:'Mercedes', brand:'Mercedes Benz', price:'$70,000', imgs:[
    'https://source.unsplash.com/featured/?tesla,model-s',
    'https://source.unsplash.com/featured/?tesla,interior',
    'https://source.unsplash.com/featured/?tesla,electric'
  ], desc:'Electric sedan with autopilot.'},

   {name:'Toyota Hillux', brand:'Toyota', price:'$70,000', imgs:[
    'untitled folder/WhatsApp Image 2025-05-13 at 12.57.26.jpeg',
    'untitled folder/WhatsApp Image 2025-05-13 at 12.57.26 (1).jpeg',
    'untitled folder/WhatsApp Image 2025-05-13 at 13.06.40.jpeg'
  ], desc:'Electric sedan with autopilot.'},

  {name:'Toyota Corolla', brand:'Toyota', price:'$20,000', imgs:[
    'https://source.unsplash.com/featured/?toyota,corolla',
    'https://source.unsplash.com/featured/?toyota,interior',
    'https://source.unsplash.com/featured/?toyota,car'
  ], desc:'Reliable compact sedan.'},

  {name:'Mercedes E-Class', brand:'Mercedes', price:'$65,000', imgs:[
    'Mercedes E class.jpeg',
    'https://source.unsplash.com/featured/?mercedes,interior',
    'https://source.unsplash.com/featured/?mercedes,luxury'
  ], desc:'Luxury sedan with comfort.'},

  // ... add rest of cars similarly
];

// ---------- GENERATE CAR CARDS ----------
const carList = document.getElementById('carList');
function displayCars(carsArray) {
  carList.innerHTML = '';
  carsArray.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.setAttribute('data-name', car.name);
    card.innerHTML = `
      <img src="${car.imgs[0]}" alt="${car.name}">
      <div class="details">
        <h3>${car.name}</h3>
        <p>${car.price}</p>
        <button class="viewBtn">View Details</button>
      </div>
    `;
    carList.appendChild(card);

    const button = card.querySelector('.viewBtn');
    button.addEventListener('click', () => openModal(car));
  });
}
displayCars(cars);

// ---------- SEARCH FUNCTIONALITY ----------
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
  const value = this.value.toLowerCase();
  const filtered = cars.filter(car => car.name.toLowerCase().includes(value) || car.brand.toLowerCase().includes(value));
  displayCars(filtered);
});

// ---------- MODAL ----------
const modal = document.getElementById('carModal');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalBrand = document.getElementById('modalBrand');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.querySelector('.close');

const prevBtn = document.createElement('button');
prevBtn.textContent = '<';
prevBtn.className = 'slideBtn prev';
const nextBtn = document.createElement('button');
nextBtn.textContent = '>';
nextBtn.className = 'slideBtn next';

document.querySelector('.modal-content').appendChild(prevBtn);
document.querySelector('.modal-content').appendChild(nextBtn);

let currentImages = [];
let currentIndex = 0;

function openModal(car) {
  modal.style.display = 'block';
  modalName.textContent = car.name;
  modalBrand.textContent = 'Brand: ' + car.brand;
  modalPrice.textContent = 'Price: ' + car.price;
  modalDesc.textContent = car.desc;
  currentImages = car.imgs;
  currentIndex = 0;
  modalImg.src = currentImages[currentIndex];
}

// ---------- SLIDE BUTTONS ----------
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  modalImg.src = currentImages[currentIndex];
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  modalImg.src = currentImages[currentIndex];
});

// ---------- CLOSE MODAL ----------
closeBtn.onclick = () => { modal.style.display = 'none'; }
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }

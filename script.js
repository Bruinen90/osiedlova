const toggleMenu = () => {
    const menuToggler = document.querySelector('.menuBar__menuToggler');
    menuToggler.classList.toggle('menuBar__menuToggler--clicked');

    const listContainer = document.querySelector('.menuBar__listContainer');
    listContainer.classList.toggle('menuBar__listContainer--hidden');

    const cover = document.querySelector('.cover');
    cover.classList.toggle('cover--hidden');
}

const toggleDishesList = (categoryName) => {
    const category = document.querySelector(`#${categoryName}`);
    const header = category.querySelector('.menuPage__categoryHeader');
    const dishesList= category.querySelector('.menuPage__dishesContainer');
    const toggler = category.querySelector('.menuPage__expandIcon');
    const background = category.querySelector('.menuPage__categoryHeaderBck')
    header.classList.toggle('menuPage__categoryHeader--active');
    dishesList.classList.toggle('menuPage__dishesContainer--hidden');
    toggler.classList.toggle('menuPage__expandIcon--rotated');
    background.classList.toggle('menuPage__categoryHeaderBck--show')
}

const allDishes = {
    pizza: [
        {
            name: 'capriciosa',
            desription: 'Sos pomidorowy, mozzarella, szynka, pieczarki',
            price: 21,
        },
        {
            name: 'serowa uczta',
            desription: 'Sos pomidorowy, mozzarella, ser feta, camembert, ser kozi',
            price: 30,
        },
        {
            name: 'pepperoni',
            desription: 'Sos pomidorowy, mozzarella, kiełbasa pepperoni',
            price: 24,
        },
        {
            name: 'margherita',
            desription: 'Sos pomidorowy, mozzarella',
            price: 18,
        }
    ],
    pierogi: [
        {
            name: 'ruskie',
            desription: 'Nadzienie z sera białego i ziemniaków doprawionych podsmażaną cebulką, pieprzem i autorką mieszanką przypraw',
            price: 12,
        },
        {
            name: 'z serem',
            desription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero delectus aliquid tenetur, debitis accusamus fugiat?',
            price: 10,
        },
        {
            name: 'z mięsem',
            desription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero delectus aliquid tenetur, debitis accusamus fugiat?',
            price: 14,
        }
    ],
    snacks: [
        {
            name: 'calzone',
            desription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sunt aspernatur quas magnam, reprehenderit, soluta rem blanditiis nesciunt cupiditate fugiat.',
            price: 15,
        },
        {
            name: 'trancini',
            desription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sunt aspernatur quas magnam, reprehenderit, soluta rem blanditiis nesciunt cupiditate fugiat.',
            price: 15,
        },
        {
            name: 'grande mix',
            desription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sunt aspernatur quas magnam, reprehenderit, soluta rem blanditiis nesciunt cupiditate fugiat.',
            price: 15,
        },
        {
            name: 'panuzzo',
            desription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sunt aspernatur quas magnam, reprehenderit, soluta rem blanditiis nesciunt cupiditate fugiat.',
            price: 15
        },
        {
            name: 'piadina',
            desription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sunt aspernatur quas magnam, reprehenderit, soluta rem blanditiis nesciunt cupiditate fugiat.',
            price: 15,
        },
    ],
    beverages: [
        {
            name: 'piwo jasne',
            desription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint assumenda suscipit consequuntur, totam deserunt aliquam harum.',
            price: 9,
        },
        {
            name: 'piwo pszeniczne',
            desription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint assumenda suscipit consequuntur, totam deserunt aliquam harum.',
            price: 12,
        },
        {
            name: 'piwo ciemne',
            desription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint assumenda suscipit consequuntur, totam deserunt aliquam harum.',
            price: 10,
        },
        {
            name: 'domowa lemoniada',
            desription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint assumenda suscipit consequuntur, totam deserunt aliquam harum.',
            price: 10,
        },
        {
            name: 'mojito virgin',
            desription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint assumenda suscipit consequuntur, totam deserunt aliquam harum.',
            price: 12,
        },
        {
            name: 'woda mineralna',
            desription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint assumenda suscipit consequuntur, totam deserunt aliquam harum.',
            price: 5,
        },
    ],
}

const dishesCategories = document.querySelectorAll('.menuPage__categoryContainer');
dishesCategories.forEach(category => {
    let dishesContainer = category.querySelector('.menuPage__dishesContainer');
    let outputHTML = [];
    let sortedDishes = allDishes[category.id].sort((a, b) => a.price - b.price);
    for(let dish of sortedDishes) {
        let price = category.id==='pizza' ?
            `<div class="menuPage__pizzaPrices">
                <ion-icon name="person" class="ionicIcon ionicIcon--menuIcon"></ion-icon>
                <span class="menuPage__dishPrice menuPage__dishPrice--pizza">${dish.price}zł</span>
                <ion-icon name="people" class="ionicIcon ionicIcon--menuIcon"></ion-icon>
                <span class="menuPage__dishPrice menuPage__dishPrice--pizza">${dish.price+12}zł</span>
            </div>` :
            `<h4 class="menuPage__dishPrice">${dish.price}zł</h4>`;
        outputHTML.push(
            `<div class="menuPage__dishContainer">
                <div class="menuPage__dishNameContainer">
                    <h4 class="menuPage__dishName">${dish.name}</h4>
                    ${price}
                </div>
                <div class="menuPage__dishDescription">
                    ${dish.desription}
                </div>
            </div>`
        )
    }
    dishesContainer.innerHTML = outputHTML.join('');
})

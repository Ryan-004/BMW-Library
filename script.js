//catalog
const carListItem = document.getElementById("car-list-item");
const catalogLink = document.getElementById("catalog-link");

//specific car info
const carModelInfo = document.getElementById("car-model-info");


const allCars = [
    {
        id: 0,
        title: "BMW F80 M3",
        video: '<iframe width="1920" height="1080" src="https://www.youtube.com/embed/llCO7zqz1n4" title="Redz SINGLE TURBO F80 M3 |  ( 4K )" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        engine: "The M3 F80 has a 3.0 liter, inline 6-cylinder engine with a twin-turbocharger that produces 431 horsepower and 550 Newton meters of torque.",
        performance: "The M3 F80 can accelerate from 0 to 60 mph in 4.1 seconds and has a top speed of 155 mph.",
        body: "The M3 F80 has a larger body style than previous models, with a bonnet bulge, flared arches, and deep spoilers.",
    },
    {
        id: 1,
        title: "BMW E92 M3",
        video: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/9PwKvftyhyY" title="BMW M3 E92 | Midnight Run | 4K" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        engine: "The M3 F80 has a 3.0 liter, inline 6-cylinder engine with a twin-turbocharger that produces 431 horsepower and 550 Newton meters of torque.",
        performance: "The M3 F80 can accelerate from 0 to 60 mph in 4.1 seconds and has a top speed of 155 mph.",
        body: "The M3 F80 has a larger body style than previous models, with a bonnet bulge, flared arches, and deep spoilers.",
    },
    {
        id: 2,
        title: "BMW E30 M3",
        video: '<iframe width="1280" height="720" src="https://www.youtube.com/embed/OjyWpCJukAg" title="CarAudioSecurity&#39;s BMW M3 (E30) on Air Suspension – #LifeOnAir" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        engine: "The M3 F80 has a 3.0 liter, inline 6-cylinder engine with a twin-turbocharger that produces 431 horsepower and 550 Newton meters of torque.",
        performance: "The M3 F80 can accelerate from 0 to 60 mph in 4.1 seconds and has a top speed of 155 mph.",
        body: "The M3 F80 has a larger body style than previous models, with a bonnet bulge, flared arches, and deep spoilers.",
    }
];

let userData = {
    cars: [...allCars],
    currentCar: null,
};

// render catalog of all cars
const renderCars = (array) => {
    const carsHTML = array.map((car) => {
        return `
        <li id="car-${car.id}" class="car-item">
            <div class="image-flex">
                <img src="images/${car.title}.jpeg" alt="${car.title}" />
                <p><a class="select-car" href="#car-model-info" onclick="getCurrentCar(${car.id})">${car.title}</a></p>
            </div>
        </li>`
    }).join("");
// href="CarModel.html" target="_blank"
    carListItem.innerHTML = carsHTML;

    console.log("success");
};
catalogLink.addEventListener('click', renderCars(userData?.cars));
// renderCars(userData?.cars);

// get selected cars index and display that specific car's information
const selectCar = document.getElementById("select-car");

displayCarInfo = (car) => {
    carModelInfo.innerHTML = 
        `<li id="car-${car.id}" class="car-item">
            <section>
                <span><h1 id="carName">${car.title}</h1></span>
                <span><h2>Video featuring the ${car.title}</h2></span>
                <span><div class="car-video">${car.video}</div></span>
                <span><h2>${car.title} Features</h2></span>
                <span><p>Engine: ${car.engine}</p></span>
                <span><p>Performance: ${car.performance}</p></span>
                <span><p>Body: ${car.body}</p></span>
            </section>
        </li>`;
};

const getCurrentCar = (id) => {
    const car = userData?.cars.find((car) => car.id === id);

    userData.currentCar = car;
    console.log(car);
    displayCarInfo(car);
};

getSelectedCarIndex = () => userData?.cars.indexOf(userData?.currentCar);

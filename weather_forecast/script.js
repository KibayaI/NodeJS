const key = "0e15ab4d22bafa851154886cd30a7403";
const input = document.querySelector("#city");
const city_today = document.querySelector(".description .place");
const temp_today = document.querySelector(".description .temp");
const description = document.querySelector(".description .status");
const img_today = document.querySelector("#img_today");

const first_temp = document.querySelector("#one");
const img_one = document.querySelector("#img_one");
const day_one = document.querySelector("#day_one");

const second_temp = document.querySelector("#two");
const img_two = document.querySelector("#img_two");
const day_two = document.querySelector("#day_two");

const third_temp = document.querySelector("#three");
const img_three = document.querySelector("#img_three");
const day_three = document.querySelector("#day_three");

const fourth_temp = document.querySelector("#four");
const img_four = document.querySelector("#img_four");
const day_four = document.querySelector("#day_four");

populate();

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    populate();
  }
});
img_today.addEventListener("click", function (event) {
  theirs();
});

async function populate() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=${key}`
    )
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          alert(
            `No such place as "${input.value}", Please check your spelling`
          );
        }
      })
      .then((res) => res.json());

    function getHour() {
      for (let i = 21; i >= 0; i -= 3) {
        let current = new Date();

        if (current.getHours() >= i) {
          const dates = response.list.filter((date) => {
            let data_date = new Date(date.dt_txt);
            return data_date.getHours() == i;
          });

          return dates;
        }
      }
    }
    const weather_output = getHour();
    const deg = "\u{00B0}";

    //Today's weather
    city_today.textContent = response.city.name;
    temp_today.textContent = `${(
      weather_output[0].main.temp - 273
    ).toFixed()}${deg}`;
    description.textContent = weather_output[0].weather[0].description;

    //predictions weather
    day_one.textContent = getDays(new Date(weather_output[1].dt_txt).getDay());
    day_two.textContent = getDays(new Date(weather_output[2].dt_txt).getDay());
    day_three.textContent = getDays(
      new Date(weather_output[3].dt_txt).getDay()
    );
    day_four.textContent = getDays(new Date(weather_output[4].dt_txt).getDay());

    const img1 = weather_output[0].weather[0].icon;
    const img2 = weather_output[1].weather[0].icon;
    const img3 = weather_output[2].weather[0].icon;
    const img4 = weather_output[3].weather[0].icon;
    const img5 = weather_output[4].weather[0].icon;

    img_today.src = `./img/${img1}.png`;
    img_one.src = `./img/${img2}.png`;
    img_two.src = `./img/${img3}.png`;
    img_three.src = `./img/${img4}.png`;
    img_four.src = `./img/${img5}.png`;

    //gets the name of the day of the week
    function getDays(index) {
      if (index === 0) {
        return "Sunday";
      } else if (index === 1) {
        return "Monday";
      } else if (index === 2) {
        return "Tuesday";
      } else if (index === 3) {
        return "Wednesday";
      } else if (index === 4) {
        return "Thursday";
      } else if (index === 5) {
        return "Friday";
      } else if (index === 6) {
        return "Saturday";
      }
    }

    //predictions for the next four days
    first_temp.textContent = `${(
      weather_output[0].main.temp - 273
    ).toFixed()}${deg}`;
    second_temp.textContent = `${(
      weather_output[1].main.temp - 273
    ).toFixed()}${deg}`;
    third_temp.textContent = `${(
      weather_output[2].main.temp - 273
    ).toFixed()}${deg}`;
    fourth_temp.textContent = `${(
      weather_output[3].main.temp - 273
    ).toFixed()}${deg}`;
  } catch (err) {
    alert("Please check your internet connection\n" + err);
  }
}

//if you want to use the OpenWeatherApi's icon call this function instead
async function useOpenWeatherIcons() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=${key}`
    )
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          alert(
            `No such place as "${input.value}", Please check your spelling`
          );
        }
      })
      .then((res) => res.json());

    function getHour() {
      for (let i = 21; i >= 0; i -= 3) {
        let current = new Date();

        if (current.getHours() >= i) {
          const dates = response.list.filter((date) => {
            let data_date = new Date(date.dt_txt);
            return data_date.getHours() == i;
          });

          return dates;
        }
      }
    }
    const weather_output = getHour();
    console.log(weather_output);
    const deg = "\u{00B0}";

    //Today's weather
    city_today.textContent = response.city.name;
    temp_today.textContent = `${(
      weather_output[0].main.temp - 273
    ).toFixed()}${deg}`;
    description.textContent = weather_output[0].weather[0].description;

    const img1 = weather_output[0].weather[0].icon;
    const img2 = weather_output[1].weather[0].icon;
    const img3 = weather_output[2].weather[0].icon;
    const img4 = weather_output[3].weather[0].icon;
    const img5 = weather_output[4].weather[0].icon;

    img_today.src = `https://openweathermap.org/img/wn/${img1}@4x.png`;
    img_one.src = `https://openweathermap.org/img/wn/${img2}@4x.png`;
    img_two.src = `https://openweathermap.org/img/wn/${img3}@4x.png`;
    img_three.src = `https://openweathermap.org/img/wn/${img4}@4x.png`;
    img_four.src = `https://openweathermap.org/img/wn/${img5}@4x.png`;

    //predictions for the next four days
    first_temp.textContent = `${(
      weather_output[0].main.temp - 273
    ).toFixed()}${deg}`;
    second_temp.textContent = `${(
      weather_output[1].main.temp - 273
    ).toFixed()}${deg}`;
    third_temp.textContent = `${(
      weather_output[2].main.temp - 273
    ).toFixed()}${deg}`;
    fourth_temp.textContent = `${(
      weather_output[3].main.temp - 273
    ).toFixed()}${deg}`;
  } catch (err) {
    alert("Please check your internet connection\n" + err);
  }
}

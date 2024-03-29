//get the container of each time frame using element Id
//fetch data from json file
//insert the data gotten from the json file into index.html

let day = document.querySelector("#daily");
let week = document.querySelector("#weekly");
let month = document.querySelector("#monthly");

async function data() {
  try {
    const request = await fetch("data.json");
    const response = await request.json();

    return response;
  } catch (error) {
    console.log("error");
  }
}

data().then((res) => {
  res.forEach(({ title, timeframes }) => {
    let past = "Yesterday";
    let wk = "Last week";
    let mnth = "Last month";
    day.innerHTML += html(
      title,
      timeframes.daily.current,
      timeframes.daily.previous,
      past
    );
    past = "Last week";
    week.innerHTML += html(
      title,
      timeframes.weekly.current,
      timeframes.weekly.previous,
      wk
    );
    month.innerHTML += html(
      title,
      timeframes.monthly.current,
      timeframes.monthly.previous,
      mnth
    );
  });
});
//html format for each activity 

const html = (title, current, previous, past) => {
  let template = ` <section class="activity">

        <div class="imgwork ${title}">
        </div>
        <div class="detailss">
          <div class="con flex">
            <h3 class="title">${title}</h3>
            <img src="images/icon-ellipsis.svg" alt=""class="ell" />
          </div>
          <div class="rate flex">
         <p class="curr">${current}hrs</p>

            <p class="prev">${past}-${previous}hrs</p>

          </div>
        </div>
      </sec>`;
  return template;
};
//  To display one timeframe at a time
//select all timeframe container 
//set them to display none
//remove the display none from the first container to show visiblity
//create  a function that shows selected dashboard when daily or weekly or monthly link is clicked

const showTimeframe = document.querySelectorAll(".tm-con");

const hiddenTimeFrame = () => {
  showTimeframe.forEach((timeframe) => timeframe.classList.add("display"));
};

hiddenTimeFrame();

showTimeframe[0].classList.remove("display");

const ul = document.querySelector("ul");

const links = document.querySelectorAll(".nav");

const active = () => {
  links.forEach((link) => link.classList.remove("active"));
};

links[0].classList.add("active");


function display(link, time) {

  active();
  link.classList.add("active");

  showTimeframe.forEach((timeframe) => {
    if (timeframe.children[0].id === time) {
      showTimeframe[0].classList.add("display");
      timeframe.classList.remove("display");
    } else if (timeframe.children[0].id !== time) {
      timeframe.classList.add("display");
    }
  });
}

function showTime(e) {
  const link = e.target;

  if (link.classList.contains("daily")) {
    const time = "daily";
    display(link,time)
 
  } else if (link.classList.contains("weekly")) {
  const time = "weekly";
      display(link, time);
   
  } else if (link.classList.contains("monthly")) {
    const time ="monthly"
      display(link, time);
  
  }
}

ul.addEventListener("click", (e) => {
  showTime(e);
});

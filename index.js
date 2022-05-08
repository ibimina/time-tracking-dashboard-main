

let day = document.querySelector(".daily");
let week = document.querySelector(".weekly");
let month = document.querySelector(".monthly");
let main = document.querySelector("main");
let mains = document.querySelector("aside");

async function data() {
  try {
    const request = await fetch("data.json");
    const response = await request.json();

    daily(response);
    weekly(response);
    monthly(response);
  } catch (error) {
    console.log("error");
  }
}
data();

//daily inner html

const structure = (element) => {
  let sample = ` <section class="work same">
        <div class="imgwork samee">
          <img src="images/icon-work.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt=""class="som" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.daily.current}hrs</p>

            <p class="prev">last week-${element.timeframes.daily.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};

const structureOne = (element) => {
  let sample = ` <section class="worka same">
        <div class="imgplay samee">
          <img src="images/icon-play.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.daily.current}hrs</p>

            <p class="prev">last week-${element.timeframes.daily.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};

const structureTwo = (element) => {
  let sample = ` <section class="workb same">
        <div class="imgstudy samee">
          <img src="images/icon-study.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.daily.current}hrs</p>

            <p class="prev">last week-${element.timeframes.daily.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};
const structureThree = (element) => {
  let sample = ` <section class="workc same">
        <div class="imgexe samee">
          <img src="images/icon-exercise.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.daily.current}hrs</p>

            <p class="prev">last week-${element.timeframes.daily.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};
const structureFour = (element) => {
  let sample = ` <section class="workd same">
        <div class="imgsocial samee">
          <img src="images/icon-social.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.daily.current}hrs</p>

            <p class="prev">last week-${element.timeframes.daily.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};
const structureFive = (element) => {
  let sample = ` <section class="worke same">
        <div class="imgself samee">
          <img src="images/icon-self-care.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.daily.current}hrs</p>

            <p class="prev">last week-${element.timeframes.daily.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};

const daily = (response) => {
  day.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target) {
      console.log("b");
      response.map((element) => {
        if (element.title === "Work") {
          console.log(element);
          console.log(structure(element));
          mains.innerHTML = structure(element);
        }
        if (element.title === "Play") {
          console.log(element);
          console.log(structureOne(element));
          mains.innerHTML += structureOne(element);
        }
        if (element.title === "Study") {
          mains.innerHTML += structureTwo(element);
        }
        if (element.title === "Exercise") {
          mains.innerHTML += structureThree(element);
        }
        if (element.title === "Social") {
          mains.innerHTML += structureFour(element);
        }
        if (element.title === "Self Care") {
          mains.innerHTML += structureFive(element);
        }
      });
    }
  });
};

//weekly html
const structureWeekly = (element) => {
  let sample = ` <section class="work same">
        <div class="imgwork samee">
          <img src="images/icon-work.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.weekly.current}hrs</p>

            <p class="prev">last week-${element.timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};

const structureWeeklyOne = (element) => {
  let sample = ` <section class="worka same">
        <div class="imgplay samee">
          <img src="images/icon-play.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.weekly.current}hrs</p>

          <p class="prev">last week-${element.timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};

const structureWeeklyTwo = (element) => {
  let sample = ` <section class="workb same">
        <div class="imgstudy samee">
          <img src="images/icon-study.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.weekly.current}hrs</p>

            <p class="prev">last week-${element.timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};
const structureWeeklyThree = (element) => {
  let sample = ` <section class="workc same">
        <div class="imgexe samee">
          <img src="images/icon-exercise.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.weekly.current}hrs</p>

            <p class="prev">last week-${element.timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};
const structureWeeklyFour = (element) => {
  let sample = ` <section class="workd same">
        <div class="imgsocial samee">
          <img src="images/icon-social.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.weekly.current}hrs</p>

            <p class="prev">last week-${element.timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};
const structureWeeklyFive = (element) => {
  let sample = ` <section class="worke same">
        <div class="imgself samee">
          <img src="images/icon-self-care.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.weekly.current}hrs</p>

            <p class="prev">last week-${element.timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};

const weekly = (response) => {
  week.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target) {
      console.log("b");

      response.map((element) => {
        if (element.title === "Work") {
          //     console.log(element)
          //   console.log(structure(element))
          mains.innerHTML = structureWeekly(element);
        }
        if (element.title === "Play") {
          //     console.log(element)
          //   console.log(structureOne(element))
          mains.innerHTML += structureWeeklyOne(element);
        }
        if (element.title === "Study") {
          mains.innerHTML += structureWeeklyTwo(element);
        }
        if (element.title === "Exercise") {
          mains.innerHTML += structureWeeklyThree(element);
        }
        if (element.title === "Social") {
          mains.innerHTML += structureWeeklyFour(element);
        }
        if (element.title === "Self Care") {
          mains.innerHTML += structureWeeklyFive(element);
        }
      });
    }
  });
};
//month html
const structureMonth = (element) => {
  let sample = ` <section class="work same">
        <div class="imgwork samee">
          <img src="images/icon-work.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.monthly.current}hrs</p>

            <p class="prev">last week-${element.timeframes.monthly.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};

const structureMonthOne = (element) => {
  let sample = ` <section class="worka same">
        <div class="imgplay samee">
          <img src="images/icon-play.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.weekly.current}hrs</p>

            <p class="prev">last week-${element.timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};

const structureMonthTwo = (element) => {
  let sample = ` <section class="workb same">
        <div class="imgstudy samee">
          <img src="images/icon-study.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.weekly.current}hrs</p>

            <p class="prev">last week-${element.timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};
const structureMonthThree = (element) => {
  let sample = ` <section class="workc same">
        <div class="imgexe samee">
          <img src="images/icon-exercise.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.monthly.current}hrs</p>

            <p class="prev">last week-${element.timeframes.monthly.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};
const structureMonthFour = (element) => {
  let sample = ` <section class="workd same">
        <div class="imgsocial samee">
          <img src="images/icon-social.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.monthly.current}hrs</p>

            <p class="prev">last week-${element.timeframes.monthly.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};
const structureMonthFive = (element) => {
  let sample = ` <section class="worke same">
        <div class="imgself samee">
          <img src="images/icon-self-care.svg" alt="" />
        </div>

        <div class="detailss">
          <div class="title">
            <h3>${element.title}</h3>

            <div class="dot"><img src="images/icon-ellipsis.svg" alt="" /></div>
          </div>
          <div class="rate">
            <p class="curr">${element.timeframes.monthly.current}hrs</p>

            <p class="prev">last week-${element.timeframes.monthly.previous}hrs</p>
          </div>
        </div>
      </sec`;
  return sample;
};

const monthly = (response) => {
  month.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target) {
      console.log("b");
      response.map((element) => {
        if (element.title === "Work") {
          mains.innerHTML = structureMonth(element);
        }
        if (element.title === "Play") {
          mains.innerHTML += structureMonthOne(element);
        }
        if (element.title === "Study") {
          mains.innerHTML += structureMonthTwo(element);
        }
        if (element.title === "Exercise") {
          mains.innerHTML += structureMonthThree(element);
        }
        if (element.title === "Social") {
          mains.innerHTML += structureMonthFour(element);
        }
        if (element.title === "Self Care") {
          mains.innerHTML += structureMonthFive(element);
        }
      });
    }
  });
};

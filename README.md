# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![mobile](inde.html(NestHubMax)c.png)
![desktop](inde.html(iPhone6_7_8)c.png)

### Links
- Solution URL: (https://github.com/ibimina/time-tracking-dashboard-main)
- Live Site URL:(https://ibimina.github.io/time-tracking-dashboard-main/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### Proud of this

Function to hide or display daily or weekly or monthly dashboard
```js

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
```
html format for each activity 
```js
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
```
## Author
Ibimina Hart
 Frontend Mentor - (https://www.frontendmentor.io/profile/ibimina)
- Twitter - (https://www.twitter.com/ibiminaaH)


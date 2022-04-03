# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

An advice generator webpage built with html, css and javascript. For the generator, [Advice Slip API](https://api.adviceslip.com) was used using promises in javascript

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [Add solution URL here](https://github.com/naura1835/Advice-generator)
- Live Site URL: [Add live site URL here](https://naura1835.github.io/Advice-generator/)

## My process

i used a mobile first approach. So far after setting up my project files, i started with the basic html, then proceed to add styles, then set up my function to fetch data from the API. lastly i made it responsive for larger screens and also added hover effects.

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- Mobile-first workflow

### What I learned

Fetching data from an API and rendering it on the page.

```js
const getAdviceQuote = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(
        ".heading__h4"
      ).innerHTML = `Advice #${data.slip.id}`;

      document.querySelector(
        ".advice__quote"
      ).innerHTML = `"${data.slip.advice}"`;
    })
    .catch((e) => console.log(e));
```

### Continued development

I want to focus more on getting a deeper knowledge of promises, async and await.

### Useful resources

- [Box Shadow](https://getcssscan.com/css-box-shadow-examples) - This helped me for box shadow hover effect. They have many examples you can choose from.

## Author

- Website - [Khadija Gwarzo](https://www.khadijagwarzo.com/)
- Frontend Mentor - [@naura1835](https://www.frontendmentor.io/profile/naura1835)
- Twitter - [@NauraCodes](https://www.twitter.com/NauraCodes)

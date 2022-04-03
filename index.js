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
      //   dice.style.transform = "rotate(180deg)";
    })
    .catch((e) => console.log(e));
};

window.addEventListener("load", getAdviceQuote);

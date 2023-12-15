const inputSubscribe = document.querySelector(".inputSubscribe");
const buttonSubscribe = document.querySelector(".buttonSubscribe");
const wrong = document.querySelector(".wrong");
const tru = document.querySelector(".true");

buttonSubscribe.addEventListener("click", () => {
  let inputValue = inputSubscribe.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(inputValue)) {
    console.log("Valid email address:", inputValue);
    wrong.classList.add("secure");
    tru.classList.remove("secure");
    inputSubscribe.value = "";
  } else {
    console.log("Invalid email address:", inputValue);
    wrong.classList.remove("secure");
    tru.classList.add("secure");
  }
});

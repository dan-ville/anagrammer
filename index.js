const resultsDiv = document.querySelector("#results");
const input = document.querySelector("#text");
const counter = document.querySelector("#counter");
const submitButton = document.querySelector("#submit");
const clearButton = document.querySelector("#clear");
const ol = document.createElement("ol");

const shuffle = (array) => {
  let currentIndex = array.length;
  while (0 !== currentIndex) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    let temporary = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporary;
  }
  return array;
};

const clearAnagrams = () => {
  ol.innerHTML = "";
};
const createAnagram = () => {
  const { value } = input;
  const letters = value.toUpperCase().split("");
  return shuffle(letters).join("");
};

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const anagrams = [];
  let i = 0;
  while (i !== parseFloat(counter.value)) {
    const anagram = createAnagram();
    anagrams.push(anagram);
    i++;
  }
  renderAnagrams(anagrams);
});

clearButton.addEventListener("click", (event) => {
  event.preventDefault();
  clearAnagrams();
});

function renderAnagrams(anagrams) {
  anagrams.forEach((anagram) => {
    const li = document.createElement("li");
    li.innerText = anagram;
    ol.appendChild(li);
  });
  resultsDiv.appendChild(ol);
}

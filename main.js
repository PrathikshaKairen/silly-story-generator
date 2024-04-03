// Variables and Functions
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const texts = {
  temperature: 'It was 94 fahrenheit outside, so ',
  location: ' went for a walk. When they got to ',
  action: ', they stared in horror for a few moments, then ',
  character: '. Bob saw the whole thing, but was not surprised — ',
  weight: ' weighs 300 pounds, and it was a hot day.',
};

const locations = ['the soup kitchen', 'Disneyland', 'the White House'];
const actions = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// Event Listeners
randomize.addEventListener('click', result);

// Functions
function result() {
  if (customName.value !== '') {
    const name = customName.value;
    const weight = Math.round(300);
    const temperature = Math.round(94);

    if (document.getElementById("uk").checked) {
      story.textContent = texts.temperature + name + texts.location + randomValueFromArray(locations) + texts.action + randomValueFromArray(actions) + name + texts.character + weight + texts.weight;
    }

    story.style.visibility = 'visible';
  }
}

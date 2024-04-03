// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. :nameStory:';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

let nameStory = 'Bob';

function result() {
  if (customName.value !== '') {
    nameStory = customName.value;
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14);
    const temperature = Math.round((94 - 32) * 5 / 9);

    story.textContent = storyText
      .replace(':insertx:', randomValueFromArray(insertX))
      .replace(':inserty:', randomValueFromArray(insertY))
      .replace(':insertz:', randomValueFromArray(insertZ))
      .replace(':nameStory:', nameStory)
      .replace('94 fahrenheit', temperature + ' centigrade')
      .replace('300 pounds', weight + ' stone');
  } else {
    story.textContent = storyText
      .replace(':insertx:', randomValueFromArray(insertX))
      .replace(':inserty:', randomValueFromArray(insertY))
      .replace(':insertz:', randomValueFromArray(insertZ))
      .replace(':nameStory:', nameStory);
  }

  story

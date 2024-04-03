function result() {
  if (customName.value) {
    nameStory = customName.value;
  } else {
    nameStory = 'Bob';
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 2.20462); // convert pounds to stones
    const temperature = Math.round((94 - 32) * 5 / 9); // convert fahrenheit to celsius

    story.textContent = storyText
      .replace(':insertx:', randomValueFromArray(insertX))
      .replace(':inserty:', randomValueFromArray(insertY))
      .replace(':insertz:', randomValueFromArray(insertZ))
      .replace(':nameStory:', nameStory)
      .replace('300 pounds', weight + ' stone')
      .replace('94 fahrenheit', temperature + ' degrees celsius');
  } else {
    story.textContent = storyText
      .replace(':insertx:', randomValueFromArray(insertX))
      .replace(':inserty:', randomValueFromArray(insertY))
      .replace(':insertz:', randomValueFromArray(insertZ))
      .replace(':nameStory:', nameStory);
  }

  story.style.visibility = 'visible';
}

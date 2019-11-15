const fetchJSON = url => {
  return fetch(url).then(response => response.json());
};

// get List of dogs
fetchJSON("https://dog.ceo/api/breeds/list/all").then(data => {
  console.log(data);
  console.log(Object.keys(data.message));
  // make select list
  const dogList = Object.keys(data.message)
    .map(dog => {
      return `<option value="${dog}">${dog}</option>`;
    })
    .join("");

  //console.log(dogList);

  document.getElementById("dog-list").innerHTML = dogList;
});

// Get selected dog breed images
document.getElementById("find-dog").addEventListener("click", () => {
  const selectedDog = document.getElementById("dog-list").value;

  console.log(selectedDog);

  fetchJSON(`https://dog.ceo/api/breed/${selectedDog}/images`).then(data => {
    console.log(data);
    const dogImages = data.message.map(image => {
      console.log(image);
      return `<img src="${image}" />`;
    });
    document.getElementById("app").innerHTML = dogImages;
  });
});

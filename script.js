const data = [
  {
    Section: "68",
    Title: "Cash Credits",
    Text: "Where any sum is found credited in the books of an assessee..."
  },
  {
    Section: "147",
    Title: "Income Escaping Assessment",
    Text: "If the Assessing Officer has reason to believe..."
  }
];

document.getElementById("search").addEventListener("input", function () {
  let value = this.value.trim();
  let output = "";

  data.forEach(item => {
    if (item.Section.includes(value)) {
      output += `
        <h4>Section ${item.Section} – ${item.Title}</h4>
        <p>${item.Text}</p>
        <hr>
      `;
    }
  });

  document.getElementById("result").innerHTML = output;
});
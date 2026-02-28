fetch("data.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("search").addEventListener("input", function () {
      let value = this.value.trim();
      let output = "";

      data.forEach(item => {
        if (item.section.includes(value)) {
          output += `
            <h4>Section ${item.section} – ${item.title}</h4>
            <p>${item.text}</p>
            <hr>
          `;
        }
      });

      document.getElementById("result").innerHTML = output;
    });
  });

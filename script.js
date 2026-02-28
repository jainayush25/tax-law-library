fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const searchBox = document.getElementById("search");
    const resultDiv = document.getElementById("result");

    searchBox.addEventListener("input", function () {
      let value = this.value.trim();
      let output = "";

      data.forEach(item => {
        if (item.section.includes(value)) {
          output += `
            <h4>Section ${item.section} – ${item.title}</h4>
            <p>${item.text}</p>
          `;

          if (item.cases && item.cases.length > 0) {
            output += `<h5>Case Laws:</h5><ul>`;
            item.cases.forEach(c => {
              output += `
                <li>
                  <strong>${c.name}</strong> (${c.court}, ${c.year})<br>
                  <em>${c.relevant_para}</em>
                </li>
              `;
            });
            output += `</ul>`;
          }

          output += `<hr>`;
        }
      });

      resultDiv.innerHTML = output;
    });
  });

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const searchBox = document.getElementById("search");
    const resultDiv = document.getElementById("result");

    searchBox.addEventListener("input", function () {
      let value = this.value.trim();
      let output = "";

      data.forEach((item, index) => {
        if (item.section.includes(value)) {
          const caseId = `cases-${index}`;

          output += `
            <h4>Section ${item.section} – ${item.title}</h4>
            <p>${item.text}</p>
          `;

          if (item.cases && item.cases.length > 0) {
            output += `
              <button onclick="toggleCases('${caseId}')">
                Show / Hide Case Laws
              </button>
              <div id="${caseId}" style="display:none; margin-top:8px;">
                <ul>
            `;

            item.cases.forEach(c => {
              output += `
                <li style="margin-bottom:8px;">
                  <strong>${c.name}</strong> (${c.court}, ${c.year})<br>
                  <em>${c.relevant_para}</em>
                </li>
              `;
            });

            output += `
                </ul>
              </div>
            `;
          }

          output += `<hr>`;
        }
      });

      resultDiv.innerHTML = output;
    });
  });

function toggleCases(id) {
  const el = document.getElementById(id);
  if (el.style.display === "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const searchBox = document.getElementById("search");
    const resultDiv = document.getElementById("result");

    searchBox.addEventListener("input", function () {
      let value = this.value.trim();
      resultDiv.innerHTML = "";

      data.forEach((item, index) => {
        if (item.section.includes(value)) {

          const sectionDiv = document.createElement("div");

          sectionDiv.innerHTML = `
            <h4>Section ${item.section} – ${item.title}</h4>
            <p>${item.text}</p>
          `;

          if (item.cases && item.cases.length > 0) {
            const btn = document.createElement("button");
            btn.textContent = "Show / Hide Case Laws";
            btn.style.marginBottom = "6px";

            const caseDiv = document.createElement("div");
            caseDiv.style.display = "none";

            const ul = document.createElement("ul");

            item.cases.forEach(c => {
              const li = document.createElement("li");
              li.style.marginBottom = "8px";
              li.innerHTML = `
                <strong>${c.name}</strong> (${c.court}, ${c.year})<br>
                <em>${c.relevant_para}</em>
              `;
              ul.appendChild(li);
            });

            caseDiv.appendChild(ul);

            btn.addEventListener("click", () => {
              caseDiv.style.display =
                caseDiv.style.display === "none" ? "block" : "none";
            });

            sectionDiv.appendChild(btn);
            sectionDiv.appendChild(caseDiv);
          }

          sectionDiv.appendChild(document.createElement("hr"));
          resultDiv.appendChild(sectionDiv);
        }
      });
    });
  });

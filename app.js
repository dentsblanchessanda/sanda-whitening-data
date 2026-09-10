const datasets = {
  front: [
    { label: "0段階", value: 14 },
    { label: "1段階", value: 2 },
    { label: "2段階", value: 61 },
    { label: "4段階", value: 66 },
    { label: "6段階", value: 36 },
    { label: "8以上", value: 12 },
    { label: "その他", value: 2 }
  ],
  canine: [
    { label: "0段階", value: 16 },
    { label: "1段階", value: 2 },
    { label: "2段階", value: 74 },
    { label: "4段階", value: 61 },
    { label: "6段階", value: 23 },
    { label: "8以上", value: 15 },
    { label: "その他", value: 2 }
  ]
};

const chart = document.querySelector("#chart");
const tabs = document.querySelectorAll(".tab");

function renderChart(key) {
  const data = datasets[key];
  const max = Math.max(...data.map(item => item.value));
  chart.innerHTML = data.map(item => `
    <div class="bar-row">
      <span class="bar-label">${item.label}</span>
      <div class="bar-track" aria-hidden="true"><div class="bar-fill" style="width:${(item.value / max) * 100}%"></div></div>
      <span class="bar-value">${item.value}件</span>
    </div>
  `).join("");
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderChart(tab.dataset.target);
  });
});

renderChart("front");

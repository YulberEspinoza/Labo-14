"use strict";

let canvasElem = document.getElementById("chart");

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */

function renderChart() {
  const state = new AppState();

  state.loadItems();

  const productsName = [];
  const productTimesClicked = [];
  const productTimesShown = [];

  for (let i = 0; i < state.allProducts.length; i++) {
    const product = state.allProducts[i];
    productsName.push(product.name);
    productTimesClicked.push(product.timesClicked);
    productTimesShown.push(product.timesShown);
  }

  let chartObj = {
    type: "bar",
    data: {
      labels: productsName,
      datasets: [
        {
          label: "#of votes",
          data: productTimesClicked,
          borderwidth: 1,
          backgroundcolor: ["#FF006E"],
        },
        {
          label: "#of views",
          data: productTimesShown,
          borderwidth: 1,
          backgroundcolor: ["#8BC2F6"],
        },
      ],
    },
  };
  new Chart(canvasElem, chartObj);
}

renderChart();

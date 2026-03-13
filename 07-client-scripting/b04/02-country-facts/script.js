document.addEventListener("DOMContentLoaded", async () => {
  let data = [];
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,translations,region,subregion,capital,population,languages,currencies,tld,flags",
    );

    if (response.ok) {
      data = await response.json();
    }
  } catch (e) {
    console.error(e.message);
  }
  // console.log(data);

  const tree = {};
  data.forEach((facts) => {
    if (!(facts.region in tree)) {
      tree[facts.region] = {};
    }
    if (!(facts.subregion in tree[facts.region])) {
      tree[facts.region][facts.subregion] = {};
    }
    tree[facts.region][facts.subregion][facts.name.common] = facts;
  });
  // console.log(tree);

  const updateRegions = () => {
    const regions = Object.keys(tree).sort();
    // const regions = data
    //   .map((c) => c.region)
    //   .filter((r, i, arr) => r && arr.indexOf(r) === i)
    //   .sort();

    document.querySelector("#regions").replaceChildren();
    regions.forEach((r) => {
      const option = document.createElement("option");
      option.value = r;
      option.textContent = r;
      document.querySelector("#regions").appendChild(option);
    });

    updateSubregions();
  };

  const updateSubregions = () => {
    const region = document.querySelector("#regions").value;

    const subregions = Object.keys(tree[region]).sort();
    // const subregions = data
    //   .filter((c) => c.region === region)
    //   .map((c) => c.subregion)
    //   .filter((r, i, arr) => r && arr.indexOf(r) === i)
    //   .sort();

    document.querySelector("#subregions").replaceChildren();
    subregions.forEach((r) => {
      const option = document.createElement("option");
      option.value = r;
      option.textContent = r;
      document.querySelector("#subregions").appendChild(option);
    });

    updateCountries();
  };

  const updateCountries = () => {
    const region = document.querySelector("#regions").value;
    const subregion = document.querySelector("#subregions").value;

    const countries = Object.values(tree[region][subregion]).sort((a, b) =>
      a.name.common.localeCompare(b.name.common),
    );
    // const countries = data
    //   .filter((c) => c.region === region && c.subregion === subregion)
    //   .sort((a, b) => a.name.common.localeCompare(b.name.common));

    document.querySelector("#countries").replaceChildren();
    countries.forEach((c) => {
      const option = document.createElement("option");
      option.value = c.name.common;
      option.textContent = c.name.common;
      document.querySelector("#countries").appendChild(option);
    });

    updateFacts();
  };

  const updateFacts = () => {
    const country = document.querySelector("#countries").value;

    const table = document.querySelector("#facts");
    const facts = data.find((c) => c.name.common === country);
    // console.log(country);

    table.innerHTML = `
    <h2>Facts about ${facts.name.common}</h2>
    <div id="country-flag">
      <img src="${facts.flags.png}" alt="${facts.name.common} flag" /></div>
    <table>
      <tbody>
        <tr><th scope="row">Official Name</th><td>${facts.name.official}</td></tr>
        <tr><th scope="row">Capital</th><td>${facts.capital}</td></tr>
        <tr><th scope="row">Population</th><td>${facts.population.toLocaleString()}</td></tr>
        <tr><th scope="row">Languages</th><td>${Object.values(facts.languages).join(", ")}</td></tr>
        <tr><th scope="row">Currencies</th><td>${Object.values(facts.currencies)
          .map((c) => c.name)
          .join(", ")}</td></tr>
        <tr><th scope="row">TLD</th><td>${facts.tld.join(", ")}</td></tr>
      </tbody>
    </table>
  `;
  };

  updateRegions();

  document
    .querySelector("#regions")
    .addEventListener("change", updateSubregions);

  document
    .querySelector("#subregions")
    .addEventListener("change", updateCountries);

  document.querySelector("#countries").addEventListener("change", updateFacts);

  // fetch("")
  // .then()
  // .then()
  // .catch()
  // .finally()

  // let data = [];
  // if (response.ok) {
  //   data =  response.json();
  // }
});

// place the order
// receive an order number
// call order number
// get the order

// orderNumber = placeOrder(callback)
// // order ready
// callback(orderNumber)

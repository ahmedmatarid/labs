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

  const tree = {};
  data.forEach((c) => {
    if (!tree[c.region]) {
      tree[c.region] = {};
    }
    if (!tree[c.region][c.subregion]) {
      tree[c.region][c.subregion] = {};
    }
    tree[c.region][c.subregion][c.name.common] = c;
  });

  const regionSelect = document.querySelector("#regions");
  const subregionSelect = document.querySelector("#subregions");
  const countrySelect = document.querySelector("#countries");
  const factTable = document.querySelector("#facts");

  // const regions = data
  //   .map((c) => c.region)
  //   .filter((r, i, arr) => arr.indexOf(r) === i)
  //   .sort();
  const regions = Object.keys(tree).sort();

  const updateRegions = () => {
    regions.forEach((r) => {
      const option = document.createElement("option");
      option.value = r;
      option.textContent = r;
      regionSelect.appendChild(option);
    });

    updateSubregions();
  };

  const updateSubregions = () => {
    const region = regionSelect.value;
    // const subregions = data
    //   .filter((c) => c.region === region)
    //   .map((c) => c.subregion)
    //   .filter((r, i, arr) => arr.indexOf(r) === i)
    //   .sort();
    const subregions = Object.keys(tree[region]).sort();

    subregionSelect.replaceChildren();
    subregions.forEach((r) => {
      const option = document.createElement("option");
      option.value = r;
      option.textContent = r;
      subregionSelect.appendChild(option);
    });

    updateCountries();
  };

  const updateCountries = () => {
    const region = regionSelect.value;
    const subregion = subregionSelect.value;
    // const countries = data
    //   .filter((c) => c.region === region && c.subregion === subregion)
    //   .map((c) => c.name.common)
    //   .sort();
    const countries = Object.keys(tree[region][subregion]).sort();

    countrySelect.replaceChildren();
    countries.forEach((c) => {
      const option = document.createElement("option");
      option.value = c;
      option.textContent = c;
      countrySelect.appendChild(option);
    });

    updateFacts();
  };

  const updateFacts = () => {
    const region = regionSelect.value;
    const subregion = subregionSelect.value;
    const country = countrySelect.value;

    // const facts = data.find((c) => c.name.common === country);
    const facts = tree[region][subregion][country];
    factTable.innerHTML = `
  <h2>${facts.name.common}</h2>
  <div id="country-flag">
    <img src="${facts.flags.svg}" alt="Flag of ${facts.name.common}" />
  </div>
  <table>
  <tbody>
      <tr>
      <th>Official Name</th>
      <td>${facts.name.official}</td>
    </tr>
    <tr>
      <th>Capital</th>
      <td>${facts.capital}</td>
    </tr>
    <tr>
      <th>Population</th>
      <td>${facts.population.toLocaleString()}</td>
    </tr>
    <tr>
      <th>Languages</th>
      <td>${Object.values(facts.languages).join(", ")}</td>
    </tr>
    <tr>
      <th>Currencies</th>
      <td>${Object.values(facts.currencies)
        .map((c) => c.name)
        .join(", ")}</td>
    </tr>
    <tr>
      <th>TLD</th>
      <td>${facts.tld.join(", ")}</td>
    </tr>
    </tbody>
    </table>
  `;
  };

  updateRegions();

  regionSelect.addEventListener("change", updateSubregions);
  subregionSelect.addEventListener("change", updateCountries);
  countrySelect.addEventListener("change", updateFacts);

  // fetch().then().then().catch()

  // console.log(response);
  // let data = [];
  // if (res.ok) {
  //   data =  res.json();
  // }
});

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,translations,region,subregion,capital,population,languages,currencies,tld,flags",
  );

  let data = [];
  if (response.ok) {
    data = await response.json();
  }

  // const hierarchy = {
  //   Africa: {
  //     "Eastern Africa": {
  //       "British Indian Ocean Territory": {},
  //       Burundi: {},
  //     },
  //   },
  //   Asia: {},
  // };

  const tree = {};

  data.forEach((item) => {
    if (!(item.region in tree)) {
      tree[item.region] = {};
    }

    if (!(item.subregion in tree[item.region])) {
      tree[item.region][item.subregion] = {};
    }

    tree[item.region][item.subregion][item.name.common] = item;
  });

  const regionSelect = document.querySelector("#regions");
  const subregionSelect = document.querySelector("#subregions");
  const countrySelect = document.querySelector("#countries");

  function updateRegions() {
    // const regions = data
    //   .map((item) => item.region)
    //   .filter((x, i, a) => a.indexOf(x) === i)
    //   .sort();
    const regions = Object.keys(tree).sort();

    regionSelect.replaceChildren();
    regions.forEach((region) => {
      const regionElement = document.createElement("option");
      regionElement.value = region;
      regionElement.innerText = region;

      regionSelect.appendChild(regionElement);
    });

    updateSubregions();
  }

  function updateSubregions() {
    // const subregions = data
    //   .filter((item) => item.region === regionSelect.value)
    //   .map((item) => item.subregion)
    //   .filter((x, i, a) => a.indexOf(x) === i)
    //   .sort();

    const subregions = Object.keys(tree[regionSelect.value]).sort();

    subregionSelect.replaceChildren();
    subregions.forEach((subregion) => {
      const subregionElement = document.createElement("option");
      subregionElement.value = subregion;
      subregionElement.innerText = subregion;

      subregionSelect.appendChild(subregionElement);
    });

    updateCountries();
  }

  function updateCountries() {
    const countries = Object.keys(
      tree[regionSelect.value][subregionSelect.value],
    ).sort();

    countrySelect.replaceChildren();
    countries.forEach((country) => {
      const countryElement = document.createElement("option");

      countryElement.value = country;
      countryElement.innerText = country;

      countrySelect.appendChild(countryElement);
    });

    updateFacts();
  }

  function updateFacts() {
    const factsSection = document.querySelector("#facts");
    const facts =
      tree[regionSelect.value][subregionSelect.value][countrySelect.value];

    // const factsTitle = document.createElement("h2");
    // factsTitle.innerText = `Facts about ${facts.name.common}`;

    // factsSection.replaceChildren();
    // factsSection.appendChild(factsTitle);

    factsSection.innerHTML = `<h2>Facts about ${facts.name.common}</h2>
        <div id="country-flag">
          <img src="${facts.flags.svg}" alt="Flag of ${facts.name.common}" />
        </div>
        <table>
          <tbody>
            <tr>
              <th scope="row">Official Name</th>
              <td>${facts.name.official}</td>
            </tr>
            <tr>
              <th scope="row">Capital City</th>
              <td>${facts.capital}</td>
            </tr>
            <tr>
              <th scope="row">Population</th>
              <td>${facts.population.toLocaleString()}</td>
            </tr>
            <tr>
              <th scope="row">Languages</th>
              <td>${Object.values(facts.languages).join(", ")}</td>
            </tr>
            <tr>
              <th scope="row">Currencies</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">TLD</th>
              <td>${facts.tld}</td>
            </tr>
          </tbody>
        </table>`;
  }

  regionSelect.addEventListener("change", updateSubregions);
  subregionSelect.addEventListener("change", updateCountries);
  countrySelect.addEventListener("change", updateFacts);

  // document.addEventListener("DOMContentLoaded", updateRegions);
  updateRegions();

  // fetch(
  //   "https://restcountries.com/v3.1/all?fields=name,translations,region,subregion,capital,population,languages,currencies,tld,flags",
  // )
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  // use the data
});

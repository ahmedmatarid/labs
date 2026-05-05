// components/Country.jsx — SERVER COMPONENT
export default function Country({ country }) {
  return (
    <li className="border rounded p-3">
      <div className="flex justify-between">
        <div>
          <strong>{country.name}</strong>
          <span className="ml-2 text-gray-500">{country.population} pax</span>
          <span className="ml-2 text-gray-500">{country.area} km²</span>
        </div>
      </div>
      <ul className="mt-2 space-y-1">
        {country.cities.map((city) => (
          <li key={city.id} className="flex justify-between text-sm">
            <span className={city.capital ? "font-bold" : ""}>
              {city.name} ({city.population} pax)
            </span>
            <span className="text-gray-400">
              {city.visited ? "Visited" : "Not Visited"}
            </span>
          </li>
        ))}
      </ul>
    </li>
  );
}
import Country from "@/components/Country";

export default function Countries({ countries }) {
  return (
    <ul className="space-y-2">
      {countries.map((country) => (
        <Country key={country.id} country={country} />
      ))}
    </ul>
  );
}
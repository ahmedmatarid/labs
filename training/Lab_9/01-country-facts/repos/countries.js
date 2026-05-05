export async function read() {
  const countries = await Bun.file("repos/data/countries.json").json();
  return countries;
}
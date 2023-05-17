export async function getFlowers() {
  const flowers = await fetch(`http://localhost:1337/api/flowers?populate=thumbnail`)
    .then((res) => res.json())
    .then((res) => res.data.attributes);
  return flowers;
}

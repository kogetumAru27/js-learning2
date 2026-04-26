import Link from "next/link"
const planets = [
  { id: 1, name: "水星", distance: "5791万km" },
  { id: 2, name: "金星", distance: "1億820万km" },
  { id: 3, name: "地球", distance: "1億4960万km" },
];
export default function Planets(){
  return(
    <div>
    {planets.map(planet => (
      <div key={planet.id}>
      <Link href={`/planets/${planet.id}`}>{planet.name}</Link>
      </div>
    ))}
    </div>
  )
}

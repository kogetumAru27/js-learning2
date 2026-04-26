const planets = [
    { id: 1, name: "水星", distance: "5791万km" },
    { id: 2, name: "金星", distance: "1億820万km" },
    { id: 3, name: "地球", distance: "1億4960万km" },
  ];
  export default async function PlanetDetail({ params }:{params:Promise<{id:string}>}){
    const {id} = await params
    const planet = planets.find(p => p.id === Number(id))
    if(!planet)return <p>見つかりませんでした</p>
    return (
      <div>
        <h1>{planet.name}</h1>
        <p>距離: {planet.distance}</p>
      </div>
    );
  }
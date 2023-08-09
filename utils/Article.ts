export function getArticleSource(id: string) {
  const hashMap: { [id: string]: string } = {
    JO: "Jamaica Observer",
    NW: "NationWide Radio",
    JL: "Jamaica Loop",
    JS: "Jamaica Star",
    RJ: "RadioNews Jamaica",
  };
  return hashMap[id];
}

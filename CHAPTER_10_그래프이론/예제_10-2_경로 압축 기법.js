const findParent = (parent, x) => {
  if (parent[x] === x) return parent[x];
  return (parent[x] = findParent(parent, parent[x]));
};

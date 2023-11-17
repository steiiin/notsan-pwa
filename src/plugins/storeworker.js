export function pascalToKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

export function kebabToPascalCase(str) {
  return str
    .split('-')
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
}

export function mapStoreDataToListItem (state, items) {
    return items.map((item) => {
      let obj = null;
      let objKey = "";
      let objRoute = "";
      if (item.content) {
        objKey = item.content;
        obj = state.content[objKey];
        objRoute = "/content/" + objKey;
      } else if (item.list) {
        objKey = item.list;
        obj = state.submenu[objKey];
        objRoute = "/submenu/" + objKey;
      }

      if (obj) {
        return obj
          ? {
              key: objKey,
              title: obj.title,
              subtitle: obj.subtitle,
              category:
                state.category[obj.category ?? ""]?.title ?? "Andere",
              route: objRoute,
            }
          : null;
      }
      return null;
    });
  }
  export function groupListItems(items, groupProp, sortProp, onlyFirstLetter) {
    // group by groupProp
    const grouped = items.reduce((group, item) => {
      const groupname = onlyFirstLetter
        ? item[groupProp][0].toUpperCase()
        : item[groupProp];
      group[groupname] = group[groupname] || [];
      group[groupname].push(item);
      return group;
    }, {});

    // create new array with headers
    return Object.keys(grouped)
      .sort((a, b) => a.localeCompare(b))
      .flatMap((groupname) => [
        { header: groupname },
        ...grouped[groupname].sort((a, b) => a[sortProp].localeCompare(b[sortProp])),
      ]);
  }
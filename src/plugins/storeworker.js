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

export function mapStoreDataToListItem (state, items, fillSubtitle = false) {
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
        let itemCategory = state.category[obj.category ?? ""]?.title ?? "Andere";
        let listItem = {
          key: objKey,
          title: obj.title,
          subtitle: obj.subtitle ?? (fillSubtitle ? itemCategory : null),
          category: itemCategory,
          route: objRoute,
        };
        if (item.accuracy) { listItem.accuracy = item.accuracy; }
        return listItem;
      }
      return null;
    });
  }
  export function groupListItems(items, groupProp, sortProp, onlyFirstLetter, sortGroup) {
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
    let groups = Object.keys(grouped);
    if (sortGroup) { groups.sort((a, b) => a.localeCompare(b)); }

    return groups
      .flatMap((groupname) => [
        { header: groupname },
        ...grouped[groupname].sort((a, b) => (typeof a[sortProp] === 'string') ? a[sortProp].localeCompare(b[sortProp]) : b[sortProp] - a[sortProp]),
      ]
    );
  }
  export function sortListItems(items, sortProp) {
    items.sort((a, b) => (typeof a[sortProp] === 'string') ? a[sortProp].localeCompare(b[sortProp]) : b[sortProp] - a[sortProp])
    return items;
  }
export function pascalToKebabCase (str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
}

export function kebabToPascalCase (str) {
  return str
    .split('-')
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('')
}

export function mapStoreDataToListItem (state, items) {
  return items.map((item) => {
    let obj = null
    let objKey = ''
    let objRoute = ''
    if (item.content) {
      objKey = item.content
      obj = state.content[objKey]
      objRoute = '/content/' + objKey
    } else if (item.list) {
      objKey = item.list
      obj = state.submenu[objKey]
      objRoute = '/submenu/' + objKey
    }

    if (obj) {
      const itemCategory = state.category[obj.category ?? '']?.title ?? 'Andere'
      const listItem = {
        key: objKey,
        title: obj.title,
        subtitle: obj.subtitle,
        category: itemCategory,
        route: objRoute
      }
      if (item.accuracy) { listItem.accuracy = item.accuracy }
      return listItem
    }
    return null
  })
}

export function groupListItems (items, instruction) {
  /*
  {
    group: { prop: String, sort: Boolean, onlyFirst: Boolen },
    items: { sort: Boolean, prop: String }
  }
  */

  const groupProp = instruction.group.prop
  const itemsSortProp = instruction.items.prop

  // group by groupProp
  const grouped = items.reduce((group, item) => {
    const groupname = (instruction.group.onlyFirst ?? false)
      ? item[groupProp][0].toUpperCase()
      : item[groupProp]
    group[groupname] = group[groupname] || []
    group[groupname].push(item)
    return group
  }, {})

  // create new array with headers
  const groups = Object.keys(grouped)
  if (instruction.group.sort) { groups.sort((a, b) => a.localeCompare(b)) }

  // sort result
  if (instruction.items.sort) {
    return groups
      .flatMap((groupname) => [
        { header: groupname },
        ...this.sortListItems(grouped[groupname], itemsSortProp)
      ]
      )
  } else {
    return groups
      .flatMap((groupname) => [
        { header: groupname },
        ...grouped[groupname]
      ]
      )
  }
}
export function sortListItems (items, sortProp) {
  items.sort((a, b) => (typeof a[sortProp] === 'string') ? a[sortProp].localeCompare(b[sortProp]) : b[sortProp] - a[sortProp])
  return items
}

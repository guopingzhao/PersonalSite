const loadedModules = {}

export async function load(modules) {
  const entries = await Promise.all(
    Object.entries(modules).map(async ([k, importFn]) => {
      if (!loadedModules[k]) {
        loadedModules[k] = (await importFn()).default
      }
      return [k, loadedModules[k]]
    }),
  )
  return entries.reduce((obj, [k, mod]) => {
    obj[k] = mod
    return obj
  }, {})
}

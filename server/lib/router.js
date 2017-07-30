module.exports = function () {
  const router = {
    getRoute: new Map(),
    postRoute: new Map(),
    deleteRoute: new Map(),
    putRoute: new Map(),
    get: function (path, func) {
      router.getRoute.set(path, func)
    },
    post: function (path, func) {
      router.postRoute.set(path, func)
    },
    delete: function () {
      router.deleteRoute.set(path, func)
    },
    put: function () {
      router.putRoute.set(path, func)
    }
  }
  return router
}

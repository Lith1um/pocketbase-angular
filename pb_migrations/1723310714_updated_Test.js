/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2v7lgc93wzp56m8")

  collection.name = "test"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2v7lgc93wzp56m8")

  collection.name = "Test"

  return dao.saveCollection(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2v7lgc93wzp56m8",
    "created": "2024-08-10 17:24:54.931Z",
    "updated": "2024-08-10 17:24:54.931Z",
    "name": "Test",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9xbkmboo",
        "name": "text",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2v7lgc93wzp56m8");

  return dao.deleteCollection(collection);
})

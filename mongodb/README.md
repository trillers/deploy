use wenode
db.createUser(
    {
      user: "wenode",
      pwd: "wenode",
      roles: [
         { role: "readWrite", db: "wenode" }
      ]
    }
)

use wenode-qa
db.createUser(
    {
      user: "wenode-qa",
      pwd: "wenode-qa",
      roles: [
         { role: "readWrite", db: "wenode-qa" }
      ]
    }
)

use wenode-ci
db.createUser(
    {
      user: "wenode-ci",
      pwd: "wenode-ci",
      roles: [
         { role: "readWrite", db: "wenode-ci" }
      ]
    }
)

use wenode-dev
db.createUser(
    {
      user: "wenode-dev",
      pwd: "wenode-dev",
      roles: [
         { role: "readWrite", db: "wenode-dev" }
      ]
    }
)

use wenode-case
db.createUser(
    {
      user: "wenode-case",
      pwd: "wenode-case",
      roles: [
         { role: "readWrite", db: "wenode-case" }
      ]
    }
)

use mt
db.createUser(
    {
      user: "mt",
      pwd: "mt",
      roles: [
         { role: "readWrite", db: "mt" }
      ]
    }
)

use mt-ci
db.createUser(
    {
      user: "mt-ci",
      pwd: "mt-ci",
      roles: [
         { role: "readWrite", db: "mt-ci" }
      ]
    }
)

use note
db.createUser(
    {
      user: "note",
      pwd: "note",
      roles: [
         { role: "readWrite", db: "note" }
      ]
    }
)

use note-ci
db.createUser(
    {
      user: "note-ci",
      pwd: "note-ci",
      roles: [
         { role: "readWrite", db: "note-ci" }
      ]
    }
)

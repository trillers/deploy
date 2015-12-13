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
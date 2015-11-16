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
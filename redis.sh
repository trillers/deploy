## init redis config file for a redis instance
mkdir /etc/redis
cp redis.conf /etc/redis/6379.conf
## create redis data file for a redis instance
mkdir /var/redis
mkdir /var/redis/6379
## setup init script for a redis instance
cp utils/redis_init_script /etc/init.d/redis_6379
update-rc.d redis_6379 defaults


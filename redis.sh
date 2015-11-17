## init redis config file for a redis instance
sudo mkdir /etc/redis
sudo cp redis.conf /etc/redis/6379.conf
## create redis data file for a redis instance
sudo mkdir /var/redis
sudo mkdir /var/redis/6379
## setup init script for a redis instance
sudo cp utils/redis_init_script /etc/init.d/redis_6379
sudo update-rc.d redis_6379 defaults


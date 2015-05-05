pm2 stop sanya

cd /home/www/sanya/
git pull

npm install
npm install seedtrip/sanya-settings#ci

pm2 start sanya

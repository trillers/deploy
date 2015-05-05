pm2 stop hawaii

cd /home/www/hawaii/
git pull

npm install
npm install seedtrip/hawaii-settings#ci

pm2 start hawaii

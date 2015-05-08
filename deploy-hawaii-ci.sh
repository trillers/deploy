pm2 stop hawaii

cd /home/www/hawaii/
git pull

npm install
npm install seedtrip/hawaii-settings#ci

cd /home/www/deploy
pm2 restart boot-hawaii-ci.json

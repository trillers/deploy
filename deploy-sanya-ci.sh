cd /home/www/sanya/
git pull origin  develop

npm install
npm install https://seedtripgit:d6fdc047f748aa51ed3e13639eeffae0da9cb1db@github.com/seedtrip/sanya-settings.git#ci

pm2 reload sanya

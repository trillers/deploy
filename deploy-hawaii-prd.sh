cd /home/www/hawaii/
git checkout master
git pull origin master

npm install
npm install https://seedtripgit:d6fdc047f748aa51ed3e13639eeffae0da9cb1db@github.com/seedtrip/hawaii-settings.git#prd

cd /home/www/deploy
pm2 reload hawaii

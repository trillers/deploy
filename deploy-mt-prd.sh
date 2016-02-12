cd /home/www/mt/
git checkout master
git pull origin master

npm install
npm install https://henryleu:c148960791ab761064ecfbb07b7fdf582ff008df@github.com/trillers/mt-settings.git#prd

cd /home/www/deploy
pm2 reload mt

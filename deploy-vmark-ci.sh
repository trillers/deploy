cd /home/www/vmark/
git checkout master
git pull origin master

npm install
npm install https://henryleu:c148960791ab761064ecfbb07b7fdf582ff008df@github.com/trillers/base-settings.git#ci
npm install https://henryleu:c148960791ab761064ecfbb07b7fdf582ff008df@github.com/trillers/vmark-settings.git#ci

cd /home/www/deploy
pm2 reload vmark

cd /home/www/athena/
git checkout master
git pull origin master

npm install
npm install https://henryleu:c148960791ab761064ecfbb07b7fdf582ff008df@github.com/trillers/athena-settings.git#ci

cd /home/www/deploy
pm2 reload athena

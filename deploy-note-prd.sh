cd /home/www/note/
git checkout membook
git pull origin membook

npm install
npm install https://henryleu:c148960791ab761064ecfbb07b7fdf582ff008df@github.com/trillers/base-settings.git#nprd
npm install https://henryleu:c148960791ab761064ecfbb07b7fdf582ff008df@github.com/trillers/vmark-settings.git#nprd

cd /home/www/deploy
pm2 reload note

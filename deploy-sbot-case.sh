cd /home/www/sbot/
git checkout case
git pull origin case

npm install
npm install https://henryleu:c148960791ab761064ecfbb07b7fdf582ff008df@github.com/trillers/athena-settings.git#case

pm2 reload sbot

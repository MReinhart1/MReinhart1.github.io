sudo yum install git nodejs npm
git clone https://github.com/MReinhart1/MReinhart1.github.io.git
cd MReinhart1.github.io
echo NEXT_PUBLIC_SITE_URL=https://localhost:80 > .env.local
npm install
npm run build
npm run start
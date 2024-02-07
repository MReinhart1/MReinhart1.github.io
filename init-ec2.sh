sudo yum install git nodejs npm
cd MReinhart1.github.io
echo NEXT_PUBLIC_SITE_URL=https://localhost:3000 > .env.local
npm install
npm run build
npm run start
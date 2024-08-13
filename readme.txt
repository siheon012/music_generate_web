프로젝트 구조

/app
  /components
    Layout.tsx
    Navbar.tsx
    ChatLog.tsx
    PromptInput.tsx
    MusicList.tsx
  /pages
    index.tsx
    login.tsx
    register.tsx
    mymusic.tsx
  /styles
    globals.css
/public
  /images

<1>
mkdir music-gpt
cd music-gpt

<2>
npx create-next-app@latest .

<3>
mkdir -p app/components

<4>*
touch app/components/Layout.tsx
touch app/components/Navbar.tsx
touch app/components/ChatLog.tsx
touch app/components/PromptInput.tsx
touch app/components/MusicList.tsx

<5>*
touch app/page.tsx
touch app/login/page.tsx
touch app/register/page.tsx
touch app/mymusic/page.tsx

<6>
app/globals.css -> (추가)
@tailwind base;
@tailwind components;
@tailwind utilities;

<7>
npm install axios

<8>
npm run dev

<9>
http://localhost:3000 -> (실행)
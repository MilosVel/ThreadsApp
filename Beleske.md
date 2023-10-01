Clerk website -> add aplication -> izabere se google, email, username, github i sta vec hocemo. Kliknemo na kreiraj aplikaciju. U Home tablu dobijamo NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY i CLERK_SECRET_KEY koji idu u .env fajl. Pored Home taba u Dashbordu imamo i Users i Organization tabove. U Organizations treba da kliknemo na enable ako hocemo da koristimo tu karakteristiku (znaci toglujemo za enable)

Za konfigurisanje clerk u next aplikaciji pogledati: https://clerk.com/docs/quickstarts/nextjs      Na linku obratiti paznju na middleware.ts fajl, ali i u aplikaciji (testirati pablic i ignored routes ???)

Na autentifikaciju se odnose env fajl, milldeware.ts, ceo (auth) folder, (layout.tsx u (aith) i (root) folderu je wrapovan sa ClerkProvider), 

Topbar.tsx => {/* kod unutar <SignIn> ce se pojavljivati jedino ako je user ulogovan <SignIn/> */}

Za ovaj projekat se MORA KORISTITI node 16.8.0

Videti kako page.tsx u oba folder (auth) i (root) uticu na izgled stranice - Mislim da se svaki page.tsx odnosi samo na svoj (jedan) folder. U AccountProfile.tsx posle uspesno popunjene forme se ide na router.push('/')

Zadatak -> AccountProfile.jsx obavezno prebaciti tako da samo upotrebljava ReactHookForm
Zadatak ->  odakle ovi searchParams    u Home page u page.tsx u (root) folderu


Next.config.js : dozvoljava se prikaz slika sa clerk.com itd., takodje se omogucava mongoose

Fajlovi koji se odnose na UPLOADTHING (1h i 45 min videa):
1. AccountProfile.tsx, 
2. uploadthing.ts (unutar lib foldera), 
3. core.ts i route.ts fajlovi (koji su unutar api/uploadthing/core.ts i api/uploadthing/route.ts) (Note: OurFileRouter se koristii u api/uploadthing/core.ts i u uploadthing.ts fajlu unutar lib foldera)

Ako uploadthing pravi problem pogledati 2h i 22 minut tutorijala (odnosi sne na ubacivanje varijabli sa uploadthing u env fajl)


Sto se tice rutiranja -> ime foldera (na primer create-threadd ) mora da bude identicno kao link za rutu u contansts/index.js koji se koristi u LeftSidebar.tsx

Zadatak: proveriti da li se koristi objecId u onboarding/page.tsx
ZADATAK: pogleadati community.actions.ts i api/webhook/clear/route.ts to su povezani fajlovi
ZADATAK: mora se u .env fajlu dodati NEXT_CLERK_WEBHOOK_SECRET
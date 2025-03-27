import{r as f,o as c,c as d,a as e,n as x,w as m,F as g,b as o,d as v,e as b,V as _}from"./vendor.befa50ac.js";const w=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}};w();var y="/assets/gitavatar.3d37363e.jpg",C="/assets/home.0faaef57.png",p="/assets/project1.fea206d3.jpg",j="/assets/project1.fea206d3.jpg",k="/assets/contact.7ae932b3.png",L=(r,n)=>{const l=r.__vccOpts||r;for(const[i,t]of n)l[i]=t;return l};const M={methods:{scrollToContact(){const r=document.getElementById("contact");r&&r.scrollIntoView({behavior:"smooth"})}}},P={class:"banner-1"},B={class:"container px-6 mx-auto md:flex md:justify-between md:items-center"},z={class:"flex items-center justify-between"},q=e("div",{class:"relative w-16 h-16"},[e("img",{class:"rounded-full border border-gray-100 shadow-sm",src:y,alt:"user image"})],-1),A=e("button",{type:"button",class:"text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"},[e("svg",{viewBox:"0 0 24 24",class:"w-6 h-6 fill-current"},[e("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})])],-1),D=[A],S=e("li",{class:"menu-button"},[e("a",{href:"#"},"Accueil")],-1),F=e("li",{class:"menu-button"},[e("a",{href:"src\\assets\\CVNoPhoto.pdf",target:"_blank"},"CV")],-1),V={class:"menu-button"},N={href:"#work"},R=o("Projets"),T=[R],G={class:"menu-button"},E={href:"#about"},H=o("A propos de moi"),O=[H],I={class:"menu-button"},J={href:"#contact"},W=o("Contact"),U=[W],$={class:"flex items-center"},X={class:"w-11/12 space-y-5 md:space-y-10"},Z=e("h3",{class:"hello-button text-gray-700 w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-work_sans"}," \u2615 Bonjour, ",-1),K=e("h1",{class:"3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-Eczar font-bold leading-tight text-gray-700"},[o(" Je suis "),e("a",{href:"https://github.com/RondBallon",target:"_blank",class:"text-black hover:underline"}," Cl\xE9ment Ferrandery"),o("\u{1F9D4}"),e("br"),o("Developpeur Fullstack "),e("br"),o("(en recherche d'alternance) ")],-1),Q={class:"md:flex gap-1 md:gap-10"},Y={class:"text-white bg-gray-800 submit-button hidden md:block",href:"#work"},ee=o(" Mes projets \u{1F6A7} "),te=[ee],se=e("div",{class:"w-8/12 flex justify-end"},[e("img",{class:"object-contain w-auto max-w-full 3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[350px]",src:C,alt:"user image"})],-1),oe=v('<div class="banner-2 space-y-10 pb-20" id="work"><h3 class="heading3 my-5">Mes projets \u{1F6A7}</h3><div class="card"><div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2"><h4 class="project-title item">Portfolio Terminal</h4><p class="font-work_sans pr-12"> Portfolio Terminal est un portfolio interactif inspir\xE9 d&#39;un terminal Unix, cr\xE9\xE9 avec Go et JavaScript. Il pr\xE9sente ma transition de menuisier/restaurateur vers le d\xE9veloppement web \xE0 travers des commandes comme whoiam, projets, et cv, ainsi que des Easter eggs comme matrix et 42. H\xE9berg\xE9 sur GitHub Pages et MongoDB Atlas, il offre une exp\xE9rience unique et interactive qui refl\xE8te mon parcours et mes comp\xE9tences. </p><a href="https://github.com/RondBallon/PortfolioTerminal-" target="_blank"><button class="text-sky-800 font-bold text-2xl tracking-wider"> Repo Github </button></a></div><div class="card-image bg-green-100"><img class="object-cover w-full h-72 md:h-96" src="'+p+'"></div></div><div class="card"><div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2"><h4 class="project-title item">ConvertPro</h4><p class="font-work_sans pr-12"> ConvertPro est une application web permettant de convertir facilement des fichiers (PDF, Word, images) directement depuis le navigateur. Avec une interface simple et s\xE9curis\xE9e, elle offre des conversions entre diff\xE9rents formats (PDF vers Word/JPG/PNG), ainsi que des outils de gestion des utilisateurs. La s\xE9curit\xE9 est renforc\xE9e par des protections contre les attaques XSS, CSRF, et une validation des fichiers. Construite avec Node.js, MongoDB, et des biblioth\xE8ques de conversion comme pdf-lib et docx. </p><a href="https://github.com/RondBallon/PDFactory" target="_blank"><button class="text-sky-800 font-bold text-2xl tracking-wider"> Repo Github </button></a></div><div class="card-image"><img class="object-cover w-full h-48 md:h-96" src="'+j+'"></div></div><div class="card"><div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2"><h4 class="project-title">On va o\xF9 Babou ? </h4><p class="font-work_sans pr-12"> Une application web interactive avec un globe 3D permettant d&#39;explorer le monde. Cliquez sur un pays ou utilisez la barre de recherche pour afficher des informations d\xE9taill\xE9es : nom, capitale, devise, drapeau, ainsi que la m\xE9t\xE9o en temps r\xE9el (temp\xE9rature, conditions, humidit\xE9). D\xE9velopp\xE9e avec Three.js pour le rendu 3D et OpenWeatherMap pour les donn\xE9es m\xE9t\xE9o. Un de mes premiers projets en formation ! Babou \xE9tait l&#39;ocelot de Salvador Dali \u{1F981} </p><a href="https://github.com/RondBallon/Projet_Terre/tree/master" target="_blank"><button class="text-sky-800 font-bold text-2xl tracking-wider"> Repo Github </button></a></div><div class="card-image bg-green-100"><img class="object-cover w-full h-72 md:h-96" src="'+p+'"></div></div></div>',1),re=e("div",{class:"banner-2 md:flex items-center md:justify-evenly",id:"about"},[e("img",{class:"md:h-[500px] h-[400px]",src:k,alt:"user image"}),e("div",{class:"space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2"},[e("h4",{class:"project-title item"},"A propos \u2753"),e("p",{class:"font-work_sans"},[o(" Je suis Cl\xE9ment Ferrandery, d\xE9veloppeur web et mobile, reconverti en 2024 apr\xE8s 10 ans dans le travail du bois et la restauration. "),e("br"),e("br"),o(" Passionn\xE9 de d\xE9veloppement, j'explore les m\xE9caniques complexes, que ce soit dans un algorithme ou un jeu RTS/4X. "),e("br"),e("br"),o(" Fascin\xE9 par l'inconnu, je me plonge dans les r\xE9cits de Cthulhu, les ARG en ligne, et des \u0153uvres comme Westworld et Ghost in the Shell, qui allient technologie, philosophie et humanit\xE9. "),e("br"),e("br"),o(" En gros, si je ne suis pas en train de coder, je suis probablement en train de r\xE9soudre un myst\xE8re ou d'\xE9viter un tentacule g\xE9ant. ")]),e("button",{class:"text-sky-800 font-bold text-2xl tracking-wider",onclick:"window.open('src/assets/CVNoPhoto.pdf', '_blank')"}," CV ")])],-1),ne=e("div",{class:"banner-1 flex h-full items-center",id:"contact"},[e("div",{class:"w-full md:w-7/12 p-6 md:p-12"},[e("h2",{class:"text-gray-700 text-3xl md:text-4xl font-Eczar mb-3 font-bold"}," Pour me contacter pour un projet ou une collaboration "),e("a",{href:"mailto:clement.ferrandery@gmail.com",class:"text-xl text-black-600 font-work_sans"}," \u{1F4E7} clement.ferrandery@gmail.com ")]),e("div",{class:"w-5/12 pr-28"},[e("div",{class:"flex flex-wrap justify-end gap-2"},[e("button",{class:"bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"},[e("svg",{class:"w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})])]),e("button",{class:"bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"},[e("svg",{class:"w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"})])]),e("button",{class:"bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"},[e("svg",{class:"w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.801 8.207 11.387.6.112.827-.261.827-.582v-2.107c-3.338.725-4.034-1.602-4.034-1.602-.544-1.38-1.329-1.747-1.329-1.747-1.086-.743.082-.728.082-.728 1.202.085 1.833 1.24 1.833 1.24 1.07 1.826 2.809 1.297 3.495.992.107-.774.418-1.297.761-1.597-2.665-.304-5.465-1.338-5.465-5.944 0-1.313.467-2.387 1.236-3.228-.124-.303-.536-1.524.118-3.171 0 0 1.008-.322 3.299 1.248 1.309-.364 2.714-.547 4.09-.547 1.377 0 2.781.185 4.09.547 2.29-1.57 3.299-1.248 3.299-1.248.654 1.647.242 2.868.118 3.171.77.841 1.236 1.915 1.236 3.228 0 4.614-2.804 5.638-5.475 5.944.429.36.815 1.071.815 2.164v3.198c0 .323.224.697.827.582C20.563 21.801 24 17.303 24 12 24 5.373 18.627 0 12 0z"})])]),e("button",{class:"bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"},[e("svg",{class:"w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current",role:"img",viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg"},[e("g",null,[e("path",{d:"M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"})])])])])])],-1);function ae(r,n,l,i,t,s){const a=f("smooth-scroll");return c(),d(g,null,[e("div",P,[e("nav",B,[e("div",z,[q,e("div",{onClick:n[0]||(n[0]=u=>r.showMenu=!r.showMenu),class:"flex md:hidden"},D)]),e("ul",{class:x([r.showMenu?"flex":"hidden","flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"])},[S,F,e("li",V,[m((c(),d("a",N,T)),[[a]])]),e("li",G,[m((c(),d("a",E,O)),[[a]])]),e("li",I,[m((c(),d("a",J,U)),[[a]])])],2)]),e("div",$,[e("div",X,[Z,K,e("div",Q,[m((c(),d("button",Y,te)),[[a]]),e("button",{onClick:n[1]||(n[1]=(...u)=>s.scrollToContact&&s.scrollToContact(...u)),class:"text-gray-800 border-4 border-gray-800 submit-button mb-5 md:mb-0"}," Me contacter \u{1F4E7} ")])]),se])]),oe,re,ne],64)}var le=L(M,[["render",ae]]);const h=b(le);h.use(_);h.mount("#app");

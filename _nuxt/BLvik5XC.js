import{O as a,c as l}from"./DrPIWaY5.js";const o=a({mila_name:{ru:"Логос Мила",en:"Logos Mila"},languages:["ru","en"],language_captions:{ru:"Cменить язык на русский",en:"Switch language to english"},menu_items:[{name:{ru:"ОБ АВТОРЕ",en:"ABOUT"},id:"about",url:"/about",video:{url:"/videos/menu/glass.mp4",poster_url:"/videos/menu/glass.png"},vertical_video:{url:"/videos/menu/glass_vertical.mp4",poster_url:"/videos/menu/glass_vertical.png"}},{name:{ru:"ПРОЕКТЫ",en:"PROJECTS"},id:"projects",url:"/projects",video:{url:"/videos/menu/feelings_transform_reality.mp4",poster_url:"/videos/menu/feelings_transform_reality.png"},vertical_video:{url:"/videos/menu/feelings_transform_reality_vertical.mp4",poster_url:"/videos/menu/feelings_transform_reality_vertical.png"}},{name:{ru:"ВДОХНОВЕНИЕ",en:"INSPIRATION"},id:"inspiration",url:"/inspiration",video:{url:"/videos/menu/inspiration.mp4",poster_url:"/videos/menu/inspiration.png"},vertical_video:{url:"/videos/menu/inspiration_vertical.mp4",poster_url:"/videos/menu/inspiration_vertical.png"}}]});o.set_lang=(n,s)=>{if(!o.languages.includes(n))return;const{$router:r,$route:t}=s;r.push({name:t.name,params:{...t.params,lang:n}})};o.router_push=(n,s)=>{const{$router:r,$route:t}=s;r.push(`/${t.params.lang}${n}`)};function c(n,s){return(n%s+s)%s}function _(n){const s=n.toLowerCase(),r=["jpg","jpeg","png","gif","bmp","webp","svg","tiff"],t=["mp4","webm","ogg","ogv","mov","flv","avi","mkv","wmv"],u=["pdf"];return r.includes(s)?"image":t.includes(s)?"video":u.includes(s)?"pdf":"unknown"}const i=a({is_visible:!1,src_list:[],src_index:0,animation_duration_s:.7,touch_start_y:0,prevent_click:!1});i.src=l(()=>i.src_list[i.src_index]);i.src_type=l(()=>{var r;const n=(r=i.src)==null?void 0:r.split(".");if(!n)return null;const s=n[n.length-1];return _(s)});i.is_arrows_visible=l(()=>i.src_list.length>1);i.move_idx=n=>{i.src_index=c(i.src_index+n,i.src_list.length)};i.move_left=()=>i.move_idx(-1);i.move_right=()=>i.move_idx(1);i.keydown=n=>{n.key==="Escape"?i.hide():["ArrowUp","ArrowLeft"].includes(n.key)?i.move_left():["ArrowDown","ArrowRight"].includes(n.key)&&i.move_right()};i.button_set_clicked=n=>n.target.classList.add("clicked");i.button_unset_clicked=n=>n.target.classList.remove("clicked");i.touchstart=()=>{i.touch_start_y=e.changedTouches[0].clientY};i.touchmove=n=>{const s=n.changedTouches[0].clientY-i.touch_start_y;Math.abs(s)>10&&(i.prevent_click=!0)};i.touchend=(n,s)=>{i.prevent_click||i.show(n,s),i.prevent_click=!1};i.click=(n,s)=>{i.prevent_click||i.show(n,s)};i.show=(n,s)=>{i.is_visible||(Array.isArray(n)||(n=n[s]),n.length!==0&&(i.src_list=n,i.is_visible=!0,window.addEventListener("keydown",i.keydown)))};i.hide=()=>{i.is_visible&&(i.is_visible=!1,window.removeEventListener("keydown",i.keydown),setTimeout(()=>{i.src_index=0},i.animation_duration_s*1e3))};export{o as m,i as p};

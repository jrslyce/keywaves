(()=>{var e={};e.id=313,e.ids=[313],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},7931:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{GlobalError:()=>d.a,__next_app__:()=>h,originalPathname:()=>g,pages:()=>m,routeModule:()=>v,tree:()=>p});var n=r(77600),o=r(66877);r(52075);var a=r(32504),s=r(25932),l=r(66550),d=r.n(l),u=r(86979),c={};for(let e in u)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>u[e]);r.d(t,c);var f=e([n,o]);[n,o]=f.then?(await f)():f;let p=["",{children:["campaigns",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,77600)),"/Users/fakebusy/Library/CloudStorage/OneDrive-Personal/aDevProjects/keywaves/keywaves/app/campaigns/[id]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,66877)),"/Users/fakebusy/Library/CloudStorage/OneDrive-Personal/aDevProjects/keywaves/keywaves/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,52075,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],m=["/Users/fakebusy/Library/CloudStorage/OneDrive-Personal/aDevProjects/keywaves/keywaves/app/campaigns/[id]/page.tsx"],g="/campaigns/[id]/page",h={require:r,loadChunk:()=>Promise.resolve()},v=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/campaigns/[id]/page",pathname:"/campaigns/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}});i()}catch(e){i(e)}})},45e3:(e,t,r)=>{Promise.resolve().then(r.bind(r,40569)),Promise.resolve().then(r.t.bind(r,92481,23)),Promise.resolve().then(r.t.bind(r,79404,23))},42563:(e,t,r)=>{Promise.resolve().then(r.bind(r,78143))},3753:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},40569:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});var i=r(10326);r(17577);var n=r(77109),o=r(90434);let a=()=>{let{data:e,status:t}=(0,n.useSession)();return"loading"===t?i.jsx("div",{children:"Loading..."}):(0,i.jsxs)("div",{className:"space-x-4",children:[i.jsx(o.default,{href:"/",children:"Home"}),i.jsx(o.default,{href:"/campaigns",children:"Campaigns"}),e?(0,i.jsxs)(i.Fragment,{children:[i.jsx(o.default,{href:"/dashboard",children:"Dashboard"}),i.jsx(o.default,{href:"/api/auth/signout",children:"Sign out"})]}):i.jsx(i.Fragment,{children:i.jsx(o.default,{href:"/api/auth/signin",children:"Sign in"})}),i.jsx(o.default,{href:"/apply",children:"Apply as Game Marketer"})]})}},78143:(e,t,r)=>{"use strict";r.d(t,{Providers:()=>o});var i=r(10326),n=r(77109);function o({children:e}){return i.jsx(n.SessionProvider,{children:e})}},92481:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let i=r(91174),n=r(58374),o=r(10326),a=n._(r(17577)),s=i._(r(60962)),l=i._(r(60815)),d=r(23078),u=r(35248),c=r(31206);r(576);let f=r(50131),p=i._(r(86820)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,i,n,o,a){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function h(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let v=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:s,width:l,decoding:d,className:u,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:v,fill:y,onLoadRef:b,onLoadingCompleteRef:x,setBlurComplete:w,setShowAltText:j,sizesInput:_,onLoad:P,onError:S,...C}=e;return(0,o.jsx)("img",{...C,...h(f),loading:m,width:l,height:s,decoding:d,"data-nimg":y?"fill":"1",className:u,style:c,sizes:n,srcSet:i,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&g(e,p,b,x,w,v,_))},[r,p,b,x,w,S,v,_,t]),onLoad:e=>{g(e.currentTarget,p,b,x,w,v,_)},onError:e=>{j(!0),"empty"!==p&&w(!0),S&&S(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&s.default.preload?(s.default.preload(r.src,i),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),i=(0,a.useContext)(c.ImageConfigContext),n=(0,a.useMemo)(()=>{let e=m||i||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:s,onLoadingComplete:l}=e,g=(0,a.useRef)(s);(0,a.useEffect)(()=>{g.current=s},[s]);let h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let[b,x]=(0,a.useState)(!1),[w,j]=(0,a.useState)(!1),{props:_,meta:P}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:n,blurComplete:b,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{..._,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:x,setShowAltText:j,sizesInput:e.sizes,ref:t}),P.priority?(0,o.jsx)(y,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},23484:(e,t,r)=>{"use strict";e.exports=r(81616).vendored.contexts.AmpContext},81157:(e,t,r)=>{"use strict";e.exports=r(81616).vendored.contexts.HeadManagerContext},31206:(e,t,r)=>{"use strict";e.exports=r(81616).vendored.contexts.ImageConfigContext},98710:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||r&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},23078:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(576);let i=r(20380),n=r(35248);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,l,d,{src:u,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:v,height:y,fill:b=!1,style:x,overrideSrc:w,onLoad:j,onLoadingComplete:_,placeholder:P="empty",blurDataURL:S,fetchPriority:C,layout:O,objectFit:R,objectPosition:E,lazyBoundary:M,lazyRoot:k,...z}=e,{imgConf:N,showAltText:D,blurComplete:I,defaultLoader:A}=t,F=N||n.imageConfigDefault;if("allSizes"in F)s=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t);s={...F,allSizes:e,deviceSizes:t}}if(void 0===A)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let U=z.loader||A;delete z.loader,delete z.srcSet;let L="__next_img_default"in U;if(L){if("custom"===s.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:r,...i}=t;return e(i)}}if(O){"fill"===O&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let T="",G=a(v),q=a(y);if("object"==typeof(r=u)&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,T=e.src,!b){if(G||q){if(G&&!q){let t=G/e.width;q=Math.round(e.height*t)}else if(!G&&q){let t=q/e.height;G=Math.round(e.width*t)}}else G=e.width,q=e.height}}let B=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:T)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,B=!1),s.unoptimized&&(f=!0),L&&u.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(f=!0),p&&(C="high");let W=a(h),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:E}:{},D?{}:{color:"transparent"},x),V=I||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:G,heightInt:q,blurWidth:l,blurHeight:d,blurDataURL:S||"",objectFit:H.objectFit})+'")':'url("'+P+'")',Z=V?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},$=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:a,loader:s}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,a),u=l.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:l.map((e,i)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:s({config:t,src:r,quality:o,width:l[u]})}}({config:s,src:u,unoptimized:f,width:G,quality:W,sizes:c,loader:U});return{props:{...z,loading:B?"lazy":m,fetchPriority:C,width:G,height:q,decoding:"async",className:g,style:{...H,...Z},sizes:$.sizes,srcSet:$.srcSet,src:w||$.src},meta:{unoptimized:f,priority:p,placeholder:P,fill:b}}}},60815:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let i=r(91174),n=r(58374),o=r(10326),a=n._(r(17577)),s=i._(r(78003)),l=r(23484),d=r(81157),u=r(98710);function c(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(576);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,i={};return n=>{let o=!0,a=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){a=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?o=!1:t.add(n.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=n.props[t],r=i[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),i[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:i})})}let g=function(e){let{children:t}=e,r=(0,a.useContext)(l.AmpStateContext),i=(0,a.useContext)(d.HeadManagerContext);return(0,o.jsx)(s.default,{reduceComponentsToState:m,headManager:i,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},20380:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:a}=e,s=i?40*i:t,l=n?40*n:r,d=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},35248:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},86820:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},78003:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let i=r(17577),n=()=>{},o=()=>{};function a(e){var t;let{headManager:r,reduceComponentsToState:a}=e;function s(){if(r&&r.mountedInstances){let t=i.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(a(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),s(),n(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),n(()=>(r&&(r._pendingUpdate=s),()=>{r&&(r._pendingUpdate=s)})),o(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},77600:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>c});var n=r(84150),o=r(6734),a=r(54234),s=r(19261),l=r(74894),d=e([a]);async function u(e){let t=await s.Z.campaign.findUnique({where:{id:e},include:{marketer:{select:{name:!0,email:!0}}}});return t||(0,o.notFound)(),t}async function c({params:e}){let t=await u(e.id);return n.jsx(a.Z,{children:(0,n.jsxs)("div",{className:"max-w-3xl mx-auto",children:[n.jsx("h1",{className:"text-3xl font-bold mb-4",children:t.title}),(0,n.jsxs)("p",{className:"text-gray-600 mb-4",children:["By ",t.marketer.name]}),t.logoUrl&&n.jsx(l.default,{src:t.logoUrl,alt:`${t.title} logo`,width:500,height:300,className:"mb-4 max-w-md mx-auto"}),t.videoUrl&&n.jsx("div",{className:"mb-4",children:n.jsx("iframe",{width:"100%",height:"315",src:t.videoUrl,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),(0,n.jsxs)("div",{className:"prose max-w-none mb-6",children:[n.jsx("h2",{className:"text-2xl font-semibold mb-2",children:"About the Game"}),n.jsx("div",{dangerouslySetInnerHTML:{__html:t.description}})]}),n.jsx("button",{className:"bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors",children:"Apply for Key"})]})})}a=(d.then?(await d)():d)[0],i()}catch(e){i(e)}})},54234:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.d(t,{Z:()=>l});var n=r(84150);r(92461);var o=r(45580),a=r(34883),s=e([a]);a=(s.then?(await s)():s)[0];let l=({children:e})=>(0,n.jsxs)("div",{children:[n.jsx("header",{className:"bg-gray-800 text-white p-4",children:(0,n.jsxs)("nav",{className:"flex justify-between items-center",children:[n.jsx(o.default,{href:"/",className:"text-xl font-bold",children:"KeyWaves"}),n.jsx(a.Z,{})]})}),n.jsx("main",{className:"container mx-auto mt-8 px-4",children:e})]});i()}catch(e){i(e)}})},34883:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.d(t,{Z:()=>e});var n=r(71851);let e=(await (0,n.createProxy)(String.raw`/Users/fakebusy/Library/CloudStorage/OneDrive-Personal/aDevProjects/keywaves/keywaves/app/components/NavMenu.tsx`)).default;i()}catch(e){i(e)}},1)},66877:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>d,metadata:()=>u});var n=r(84150),o=r(85384),a=r.n(o);r(67272);var s=r(8442),l=e([s]);s=(l.then?(await l)():l)[0];let u={title:"KeyWaves",description:"Game Key Distribution Platform"};function d({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:a().className,children:n.jsx(s.C,{children:e})})})}i()}catch(e){i(e)}})},19261:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});let i=require("@prisma/client"),n=global.prisma||new i.PrismaClient({log:["query"]})},8442:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.d(t,{C:()=>e});var n=r(71851);let e=(await (0,n.createProxy)(String.raw`/Users/fakebusy/Library/CloudStorage/OneDrive-Personal/aDevProjects/keywaves/keywaves/app/providers.tsx`)).Providers;i()}catch(e){i(e)}},1)},74894:(e,t,r)=>{"use strict";r.d(t,{default:()=>n.a});var i=r(91902),n=r.n(i)},45580:(e,t,r)=>{"use strict";r.d(t,{default:()=>n.a});var i=r(40266),n=r.n(i)},6734:(e,t,r)=>{"use strict";var i=r(86375);r.o(i,"notFound")&&r.d(t,{notFound:function(){return i.notFound}})},86375:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return a},RedirectType:function(){return i.RedirectType},notFound:function(){return n.notFound},permanentRedirect:function(){return i.permanentRedirect},redirect:function(){return i.redirect}});let i=r(71520),n=r(5640);class o extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class a extends URLSearchParams{append(){throw new o}delete(){throw new o}set(){throw new o}sort(){throw new o}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5640:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return n},notFound:function(){return i}});let r="NEXT_NOT_FOUND";function i(){let e=Error(r);throw e.digest=r,e}function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},70025:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},71520:(e,t,r)=>{"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return i},getRedirectError:function(){return l},getRedirectStatusCodeFromError:function(){return m},getRedirectTypeFromError:function(){return p},getURLFromRedirectError:function(){return f},isRedirectError:function(){return c},permanentRedirect:function(){return u},redirect:function(){return d}});let n=r(54580),o=r(72934),a=r(70025),s="NEXT_REDIRECT";function l(e,t,r){void 0===r&&(r=a.RedirectStatusCode.TemporaryRedirect);let i=Error(s);i.digest=s+";"+t+";"+e+";"+r+";";let o=n.requestAsyncStorage.getStore();return o&&(i.mutableCookies=o.mutableCookies),i}function d(e,t){void 0===t&&(t="replace");let r=o.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.TemporaryRedirect)}function u(e,t){void 0===t&&(t="replace");let r=o.actionAsyncStorage.getStore();throw l(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.PermanentRedirect)}function c(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,i,n]=e.digest.split(";",4),o=Number(n);return t===s&&("replace"===r||"push"===r)&&"string"==typeof i&&!isNaN(o)&&o in a.RedirectStatusCode}function f(e){return c(e)?e.digest.split(";",3)[2]:null}function p(e){if(!c(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function m(e){if(!c(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(i||(i={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9455:(e,t,r)=>{"use strict";let{createProxy:i}=r(71851);e.exports=i("/Users/fakebusy/Library/CloudStorage/OneDrive-Personal/aDevProjects/keywaves/keywaves/node_modules/next/dist/client/image-component.js")},40266:(e,t,r)=>{"use strict";let{createProxy:i}=r(71851);e.exports=i("/Users/fakebusy/Library/CloudStorage/OneDrive-Personal/aDevProjects/keywaves/keywaves/node_modules/next/dist/client/link.js")},7306:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(25062);let i=r(27660),n=r(22444);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,l,d,{src:u,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:v,height:y,fill:b=!1,style:x,overrideSrc:w,onLoad:j,onLoadingComplete:_,placeholder:P="empty",blurDataURL:S,fetchPriority:C,layout:O,objectFit:R,objectPosition:E,lazyBoundary:M,lazyRoot:k,...z}=e,{imgConf:N,showAltText:D,blurComplete:I,defaultLoader:A}=t,F=N||n.imageConfigDefault;if("allSizes"in F)s=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t);s={...F,allSizes:e,deviceSizes:t}}if(void 0===A)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let U=z.loader||A;delete z.loader,delete z.srcSet;let L="__next_img_default"in U;if(L){if("custom"===s.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:r,...i}=t;return e(i)}}if(O){"fill"===O&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let T="",G=a(v),q=a(y);if("object"==typeof(r=u)&&(o(r)||void 0!==r.src)){let e=o(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,S=S||e.blurDataURL,T=e.src,!b){if(G||q){if(G&&!q){let t=G/e.width;q=Math.round(e.height*t)}else if(!G&&q){let t=q/e.height;G=Math.round(e.width*t)}}else G=e.width,q=e.height}}let B=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:T)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,B=!1),s.unoptimized&&(f=!0),L&&u.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(f=!0),p&&(C="high");let W=a(h),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:E}:{},D?{}:{color:"transparent"},x),V=I||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:G,heightInt:q,blurWidth:l,blurHeight:d,blurDataURL:S||"",objectFit:H.objectFit})+'")':'url("'+P+'")',Z=V?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},$=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:a,loader:s}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,a),u=l.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:l.map((e,i)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===d?e:i+1)+d).join(", "),src:s({config:t,src:r,quality:o,width:l[u]})}}({config:s,src:u,unoptimized:f,width:G,quality:W,sizes:c,loader:U});return{props:{...z,loading:B?"lazy":m,fetchPriority:C,width:G,height:q,decoding:"async",className:g,style:{...H,...Z},sizes:$.sizes,srcSet:$.srcSet,src:w||$.src},meta:{unoptimized:f,priority:p,placeholder:P,fill:b}}}},27660:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:a}=e,s=i?40*i:t,l=n?40*n:r,d=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},22444:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},91902:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return s}});let i=r(73925),n=r(7306),o=r(9455),a=i._(r(22634));function s(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=o.Image},22634:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},25062:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var i=r(40771);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,i.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[424,821,752],()=>r(7931));module.exports=i})();
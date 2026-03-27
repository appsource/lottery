"use strict";(globalThis.webpackChunkpancake_frontend=globalThis.webpackChunkpancake_frontend||[]).push([[291],{82291(e,t,n){n.r(t),n.d(t,{default:()=>Wi});var i=n(49198),r=n(10147),s=n(76853),l=n(68155),o=n(70730),a=n(85582);const d=(e,t,n)=>r.AH`
  width: 100%;
  height: 20px;
  clip-path: url(${t});

  background: ${()=>e.isDark?(null===n||void 0===n?void 0:n.dark)||(null===n||void 0===n?void 0:n.light)||e.colors.background:(null===n||void 0===n?void 0:n.light)||e.colors.background};

  & svg {
    display: block;
  }
`,c=(0,r.Ay)(s.azJ)`
  ${e=>{let{theme:t,clipPath:n,clipFill:i}=e;return d(t,n,i)}}
  transform: ${e=>{let{clipPath:t}=e;return"#bottomConcaveCurve"===t?"translate(0, -13px)":"translate(0, 1px)"}};
`,u=(0,r.Ay)(s.azJ)`
  ${e=>{let{theme:t,clipPath:n,clipFill:i}=e;return d(t,n,i)}}
  transform: ${e=>{let{clipPath:t}=e;return"#bottomConvexCurve"===t?"translate(0, -13px)":"translate(0, -1px)"}};
`,x=e=>{let{clipFill:t}=e;return(0,a.jsx)(u,{clipFill:t,clipPath:"#topConvexCurve",children:(0,a.jsx)("svg",{width:"0",height:"0",children:(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"topConvexCurve",clipPathUnits:"objectBoundingBox",children:(0,a.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C 0.75 0, .25 0, 0 1 Z"})})})})})},h=e=>{let{clipFill:t}=e;return(0,a.jsx)(u,{clipFill:t,clipPath:"#bottomConvexCurve",children:(0,a.jsx)("svg",{width:"0",height:"0",children:(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"bottomConvexCurve",clipPathUnits:"objectBoundingBox",children:(0,a.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},p=e=>{let{clipFill:t}=e;return(0,a.jsx)(c,{clipFill:t,clipPath:"#topConcaveCurve",children:(0,a.jsx)("svg",{width:"0",height:"0",children:(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"topConcaveCurve",clipPathUnits:"objectBoundingBox",children:(0,a.jsx)("path",{d:"M 0,0 L 0,1 L 1,1 L 1,0 C .75 1, .25 1, 0 0 Z"})})})})})},m=e=>{let{clipFill:t}=e;return(0,a.jsx)(c,{clipFill:t,clipPath:"#bottomConcaveCurve",children:(0,a.jsx)("svg",{width:"0",height:"0",children:(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"bottomConcaveCurve",clipPathUnits:"objectBoundingBox",children:(0,a.jsx)("path",{d:"M 0,1 L 0,0 L 1,0 L 1,1 C .75 0.1, .25 0.1, 0 1 Z"})})})})})},g=r.Ay.div`
  background: ${e=>{let{theme:t,dividerFill:n}=e;return t.isDark?(null===n||void 0===n?void 0:n.dark)||(null===n||void 0===n?void 0:n.light)||"none":(null===n||void 0===n?void 0:n.light)||(null===n||void 0===n?void 0:n.dark)||"none"}};
  z-index: ${e=>{let{index:t}=e;return t}};
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,f=r.Ay.div`
  z-index: ${e=>{let{index:t}=e;return t+1}};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,j=e=>{let{index:t,dividerPosition:n,dividerComponent:i,concave:r,clipFill:s,dividerFill:l}=e;const o="top"===n&&!r,d="bottom"===n&&!r,c="top"===n&&r,u="bottom"===n&&r;return(0,a.jsxs)(g,{index:t,dividerFill:l,children:[i&&(0,a.jsx)(f,{index:t,children:i}),(0,a.jsxs)(a.Fragment,{children:[c&&(0,a.jsx)(p,{clipFill:s}),u&&(0,a.jsx)(m,{clipFill:s})]}),(0,a.jsxs)(a.Fragment,{children:[o&&(0,a.jsx)(x,{clipFill:s}),d&&(0,a.jsx)(h,{clipFill:s})]})]})},y=(0,r.Ay)(s.son)`
  position: relative;
  flex-direction: column;
  align-items: center;
  z-index: ${e=>{let{index:t}=e;return t-1}};
  background: ${e=>{let{background:t,theme:n}=e;return t||n.colors.background}};
  padding: ${e=>{let{getPadding:t}=e;return t()}};
`,b=(0,r.Ay)(o.A)`
  min-height: auto;
  padding-top: 16px;
  padding-bottom: 16px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`,C=e=>{let{children:t,background:n,svgFill:i,index:r=1,dividerComponent:l,dividerPosition:o="bottom",hasCurvedDivider:d=!0,concaveDivider:c=!1,clipFill:u,dividerFill:x,containerProps:h,innerProps:p,...m}=e;return(0,a.jsxs)(s.azJ,{...h,children:[d&&"top"===o&&(0,a.jsx)(j,{svgFill:i,index:r,concave:c,dividerPosition:o,dividerComponent:l,clipFill:u,dividerFill:x}),(0,a.jsx)(y,{background:n,index:r,getPadding:()=>d?"bottom"===o?"48px 0 14px":"top"===o?"14px 0 48px":"48px 0":"48px 0",...m,children:(0,a.jsx)(b,{...p,children:t})}),d&&"bottom"===o&&(0,a.jsx)(j,{svgFill:i,index:r,concave:c,dividerPosition:o,dividerComponent:l,clipFill:u,dividerFill:x})]})};var v=n(98629),w=n(64264);const k=()=>{const[e,t]=(0,w.W4)();return{isDark:e,theme:(0,i.useContext)(r.Dx),toggleTheme:t}};var S=n(81264),A=n(4721),E=n(20336),I=n(9166),D=n(8878),B=n(6661),T=n(24280);const L=()=>(0,E.d4)(e=>e.lottery.currentLotteryId),F=()=>(0,E.d4)(e=>e.lottery.userLotteryData),N=()=>(0,E.d4)(e=>e.lottery.lotteriesData),M=()=>{const e=(0,E.d4)(e=>e.lottery.currentRound),t=(0,T.$N)(e),n=(0,E.d4)(e=>e.lottery.isTransitioning),r=L(),s=F(),l=N(),o=(0,E.d4)(e=>e.lottery.maxNumberTicketsPerBuyOrClaim);return{currentLotteryId:r,maxNumberTicketsPerBuyOrClaim:(0,i.useMemo)(()=>new S.A(o),[o]),isTransitioning:n,userLotteryData:s,lotteriesData:l,currentRound:t}},R=(e,t)=>{const{t:n}=(0,v.Bd)(),[r,s]=(0,i.useState)({nextEventTime:null,preCountdownText:null,postCountdownText:null});return(0,i.useEffect)(()=>{t===l.gN.OPEN&&s({nextEventTime:e+30,preCountdownText:null,postCountdownText:n("until the draw")}),t===l.gN.CLOSE&&s({nextEventTime:e+30+180,preCountdownText:n("Winners announced in"),postCountdownText:null}),t===l.gN.CLAIMABLE&&s({nextEventTime:e+30+300,preCountdownText:n("Tickets on sale in"),postCountdownText:null})},[t,e,n]),r};var $=n(23511);const Y=()=>{const{currentLotteryId:e,isTransitioning:t,currentRound:{status:n}}=M(),{account:r}=(0,A.Yu)(),s=(0,I.j)(),o=(0,$.A)(n);(0,i.useEffect)(()=>{o!==n&&e&&(o===l.gN.CLOSE&&n===l.gN.CLAIMABLE&&(s((0,B.D6)({currentLotteryId:e})),r&&s((0,B.XD)({account:r,currentLotteryId:e}))),o===l.gN.CLAIMABLE&&n===l.gN.OPEN&&(s((0,B.D6)({currentLotteryId:e})),r&&s((0,B.XD)({account:r,currentLotteryId:e}))))},[e,n,o,r,s]),(0,i.useEffect)(()=>{if(o===l.gN.CLAIMABLE&&n===l.gN.CLAIMABLE&&t){s((0,B.im)()),s((0,B.D6)({currentLotteryId:e}));const t=setInterval(async()=>{s((0,B.im)()),s((0,B.D6)({currentLotteryId:e}))},1e4);return()=>clearInterval(t)}return()=>null},[n,o,t,e,s])};var z=n(29494),_=n(58590);const P=e=>{let{value:t,color:n="text",decimals:r=3,isDisabled:l=!1,unit:o,prefix:d,onClick:c,...u}=e;const x=(0,i.useRef)(0);return(0,i.useEffect)(()=>{x.current=t},[t]),(0,a.jsx)(s.EYj,{color:l?"textDisabled":n,onClick:c,...u,children:(0,a.jsx)(_.Ay,{start:x.current,end:t,prefix:d,suffix:o,decimals:r,duration:1,separator:","})})};var Z=n(12549);const W=e=>(0,a.jsxs)(s.BSV,{viewBox:"0 0 296 121",...e,children:[(0,a.jsxs)("g",{filter:"url(#filter0_dd_ticket_purchase_card)",children:[(0,a.jsx)("path",{d:"M4 16C4 7.16344 11.1634 0 20 0H66V113H20C11.1634 113 4 105.837 4 97V16Z",fill:"#FFB237"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M69.4931 2.94568C68.9511 1.38001 67.6569 0 66 0V10H90V0C88.3431 0 87.0489 1.38001 86.5069 2.94568C85.2868 6.4696 81.9389 9 78 9C74.0611 9 70.7132 6.4696 69.4931 2.94568Z",fill:"#FFB237"}),(0,a.jsx)("rect",{x:"66",y:"10",width:"10",height:"93",fill:"#FFB237"}),(0,a.jsx)("path",{d:"M78 103V10",stroke:"#FFB237",strokeWidth:"4",strokeDasharray:"4 4"}),(0,a.jsx)("rect",{x:"80",y:"10",width:"10",height:"93",fill:"#FFB237"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M69.4931 110.054C68.9511 111.62 67.6569 113 66 113V103H90V113C88.3431 113 87.0489 111.62 86.5069 110.054C85.2868 106.53 81.9389 104 78 104C74.0611 104 70.7132 106.53 69.4931 110.054Z",fill:"#FFB237"}),(0,a.jsx)("path",{d:"M90 0H276C284.837 0 292 7.16344 292 16V97C292 105.837 284.837 113 276 113H90V0Z",fill:"#FFB237"})]}),(0,a.jsx)("defs",{children:(0,a.jsxs)("filter",{id:"filter0_dd_ticket_purchase_card",x:"0",y:"0",width:"296",height:"121",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,a.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,a.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),(0,a.jsx)("feOffset",{dx:"2",dy:"2"}),(0,a.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 0.686275 0 0 0 0 0 0 0 0 1 0"}),(0,a.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_ticket_purchase_card"}),(0,a.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),(0,a.jsx)("feOffset",{dy:"4"}),(0,a.jsx)("feGaussianBlur",{stdDeviation:"2"}),(0,a.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),(0,a.jsx)("feBlend",{mode:"normal",in2:"effect1_dropShadow_ticket_purchase_card",result:"effect2_dropShadow_ticket_purchase_card"}),(0,a.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow_ticket_purchase_card",result:"shape"})]})})]}),O=e=>(0,a.jsxs)(s.BSV,{viewBox:"0 0 27 26",...e,children:[(0,a.jsxs)("mask",{id:"white-bunny-path-1-outside-1",maskUnits:"userSpaceOnUse",x:"0.5",y:"-0.0263672",width:"26",height:"26",fill:"black",children:[(0,a.jsx)("rect",{fill:"white",x:"0.5",y:"-0.0263672",width:"26",height:"26"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.909 3.56941C7.03125 1.79519 8.76206 0.588231 10.4692 1.08677C11.9461 1.51808 12.7937 3.06497 12.3624 4.54184L11.1683 8.63073C11.9225 8.53996 12.7022 8.49237 13.5 8.49237C14.6339 8.49237 15.731 8.58848 16.7708 8.76808L18.74 2.99564C19.2367 1.53947 20.8199 0.761724 22.2761 1.25849C23.9593 1.83269 24.6807 3.81559 23.7601 5.3372L20.9057 10.0551C23.7031 11.3976 25.5 13.4834 25.5 15.8257L25.5 15.8267V17.6934C25.5 21.7435 20.1274 25.0267 13.5 25.0267C6.87258 25.0267 1.5 21.7435 1.5 17.6934V15.8267V15.8257C1.5 13.379 3.46066 11.2122 6.47417 9.88004L6.909 3.56941Z"})]}),(0,a.jsx)("path",{d:"M10.4692 1.08677L10.7142 0.247673V0.247673L10.4692 1.08677ZM6.909 3.56941L7.78108 3.6295V3.62949L6.909 3.56941ZM12.3624 4.54184L13.2015 4.78689V4.78689L12.3624 4.54184ZM11.1683 8.63073L10.3292 8.38568L9.95792 9.65684L11.2727 9.49862L11.1683 8.63073ZM16.7708 8.76808L16.622 9.62947L17.3572 9.75647L17.5981 9.05032L16.7708 8.76808ZM18.74 2.99564L19.5673 3.27788V3.27788L18.74 2.99564ZM22.2761 1.25849L22.5583 0.431153V0.431153L22.2761 1.25849ZM23.7601 5.3372L23.0122 4.88469V4.88469L23.7601 5.3372ZM20.9057 10.0551L20.1578 9.60256L19.6593 10.4265L20.5275 10.8432L20.9057 10.0551ZM25.5 15.8257H24.6258L24.6259 15.8274L25.5 15.8257ZM25.5 15.8267H26.3742L26.3742 15.8251L25.5 15.8267ZM6.47417 9.88004L6.82762 10.6796L7.31 10.4663L7.34626 9.94013L6.47417 9.88004ZM10.7142 0.247673C8.47144 -0.407305 6.19752 1.17838 6.03691 3.50932L7.78108 3.62949C7.86497 2.412 9.05268 1.58377 10.2241 1.92587L10.7142 0.247673ZM13.2015 4.78689C13.7681 2.84659 12.6545 0.814314 10.7142 0.247673L10.2241 1.92587C11.2376 2.22184 11.8192 3.28334 11.5233 4.2968L13.2015 4.78689ZM12.0074 8.87578L13.2015 4.78689L11.5233 4.2968L10.3292 8.38568L12.0074 8.87578ZM13.5 7.61822C12.6675 7.61822 11.853 7.66787 11.0638 7.76284L11.2727 9.49862C11.9921 9.41204 12.7369 9.36652 13.5 9.36652V7.61822ZM16.9195 7.90668C15.8299 7.71847 14.683 7.61822 13.5 7.61822V9.36652C14.5847 9.36652 15.632 9.45848 16.622 9.62947L16.9195 7.90668ZM17.5981 9.05032L19.5673 3.27788L17.9127 2.7134L15.9434 8.48584L17.5981 9.05032ZM19.5673 3.27788C19.9082 2.27864 20.9946 1.74493 21.9938 2.08582L22.5583 0.431153C20.6452 -0.221485 18.5653 0.800311 17.9127 2.7134L19.5673 3.27788ZM21.9938 2.08582C23.1489 2.47985 23.644 3.84054 23.0122 4.88469L24.5081 5.7897C25.7175 3.79064 24.7697 1.18554 22.5583 0.431153L21.9938 2.08582ZM23.0122 4.88469L20.1578 9.60256L21.6536 10.5076L24.5081 5.7897L23.0122 4.88469ZM26.3741 15.8257C26.3741 12.9967 24.2198 10.676 21.284 9.26698L20.5275 10.8432C23.1864 12.1193 24.6259 13.9701 24.6259 15.8257H26.3741ZM26.3742 15.8251L26.3741 15.8241L24.6259 15.8274L24.6259 15.8284L26.3742 15.8251ZM26.3742 17.6934V15.8267H24.6259V17.6934H26.3742ZM13.5 25.9009C16.9478 25.9009 20.1111 25.0486 22.4411 23.6247C24.7561 22.21 26.3742 20.1382 26.3742 17.6934H24.6259C24.6259 19.2987 23.5576 20.8935 21.5295 22.1329C19.5163 23.3632 16.6797 24.1526 13.5 24.1526V25.9009ZM0.62585 17.6934C0.62585 20.1382 2.24387 22.21 4.55889 23.6247C6.88892 25.0486 10.0523 25.9009 13.5 25.9009V24.1526C10.3203 24.1526 7.48367 23.3632 5.47054 22.1329C3.44242 20.8935 2.37415 19.2987 2.37415 17.6934H0.62585ZM0.62585 15.8267V17.6934H2.37415V15.8267H0.62585ZM0.62585 15.8257V15.8267H2.37415V15.8257H0.62585ZM6.12073 9.08053C2.97211 10.4725 0.62585 12.8707 0.62585 15.8257H2.37415C2.37415 13.8874 3.94921 11.952 6.82762 10.6796L6.12073 9.08053ZM6.03691 3.50932L5.60209 9.81995L7.34626 9.94013L7.78108 3.6295L6.03691 3.50932Z",fill:"#08060B",mask:"url(#path-1-outside-1)"}),(0,a.jsx)("path",{d:"M25.5 17.6933C25.5 21.7434 20.1274 25.0267 13.5 25.0267C6.87258 25.0267 1.5 21.7434 1.5 17.6933V15.8267H25.5V17.6933Z",fill:"#F4EEFF"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.909 3.56941C7.03125 1.79519 8.76206 0.588231 10.4692 1.08677C11.9461 1.51808 12.7937 3.06497 12.3624 4.54184L11.1683 8.63073C11.9225 8.53996 12.7022 8.49237 13.5 8.49237C14.6339 8.49237 15.731 8.58848 16.7708 8.76808L18.74 2.99564C19.2367 1.53947 20.8199 0.761724 22.2761 1.25849C23.9593 1.83269 24.6807 3.81559 23.7601 5.3372L20.9057 10.0551C23.7031 11.3976 25.5 13.4834 25.5 15.8257C25.5 19.8758 20.1274 23.159 13.5 23.159C6.87258 23.159 1.5 19.8758 1.5 15.8257C1.5 13.379 3.46066 11.2122 6.47417 9.88004L6.909 3.56941Z",fill:"white"}),(0,a.jsx)("ellipse",{cx:"10.4334",cy:"15.292",rx:"1.33333",ry:"2",fill:"#08060B"}),(0,a.jsx)("ellipse",{cx:"19.6331",cy:"15.292",rx:"1.33333",ry:"2",fill:"#08060B"})]}),H=r.Ay.div`
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`,q=(0,r.Ay)(s.EYj)`
  color: #000000;
  text-shadow: -0.75px -0.75px 0 white, 0.75px -0.75px 0 white, -0.75px 0.75px 0 white, 0.75px 0.75px 0 white;
  transform: rotate(${e=>{let{rotationTransform:t}=e;return t||0}}deg);
`,U={pink:e=>(0,a.jsxs)(s.BSV,{viewBox:"0 0 32 32",...e,children:[(0,a.jsx)("circle",{cx:"16",cy:"16",r:"16",fill:"#D750B2"}),(0,a.jsx)("g",{style:{mixBlendMode:"multiply"},opacity:"0.1",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.3428 3.13232C28.9191 8.87177 28.5505 17.2573 23.2373 22.5706C17.528 28.2799 8.27148 28.2799 2.56223 22.5706C2.2825 22.2909 2.01648 22.0026 1.76416 21.7067C4.02814 27.3486 9.54881 31.3326 16 31.3326C24.4683 31.3326 31.3332 24.4677 31.3332 15.9994C31.3332 10.6078 28.5504 5.8661 24.3428 3.13232Z",fill:"black"})}),(0,a.jsx)("g",{style:{mixBlendMode:"multiply"},opacity:"0.1",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.7713 4.18262C30.6308 10.2119 30.2607 19.061 24.6609 24.6608C19.0615 30.2602 10.2132 30.6307 4.18396 25.7722C6.99643 29.1689 11.2455 31.3329 16 31.3329C24.4683 31.3329 31.3332 24.468 31.3332 15.9997C31.3332 11.2446 29.1687 6.99508 25.7713 4.18262Z",fill:"black"})}),(0,a.jsx)("g",{style:{mixBlendMode:"soft-light"},children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.48969 24.8677C0.151051 18.7651 0.974979 11.0636 6.01931 6.01927C11.0639 0.974682 18.7659 0.15093 24.8687 3.49016C22.365 1.71201 19.3046 0.666603 16 0.666603C7.53165 0.666603 0.666733 7.53152 0.666733 15.9998C0.666733 19.3041 1.7119 22.3642 3.48969 24.8677Z",fill:"white"})}),(0,a.jsx)("g",{style:{mixBlendMode:"soft-light"},children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.10075 9.5143C3.77271 5.93677 6.78528 3.11129 10.4921 1.68422C10.546 1.73235 10.5987 1.78219 10.6502 1.83374C12.4838 3.66728 10.9119 5.7442 8.66145 7.99465C6.411 10.2451 4.33417 11.8169 2.50064 9.98335C2.35338 9.83609 2.22013 9.6793 2.10075 9.5143Z",fill:"white"})})]}),lilac:e=>(0,a.jsxs)(s.BSV,{viewBox:"0 0 32 32",...e,children:[(0,a.jsx)("circle",{cx:"16",cy:"16",r:"16",fill:"#A881FC"}),(0,a.jsx)("g",{style:{mixBlendMode:"multiply"},opacity:"0.1",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.3428 3.13232C28.9191 8.87177 28.5505 17.2573 23.2373 22.5706C17.528 28.2799 8.27148 28.2799 2.56223 22.5706C2.2825 22.2909 2.01648 22.0026 1.76416 21.7067C4.02814 27.3486 9.54881 31.3326 16 31.3326C24.4683 31.3326 31.3332 24.4677 31.3332 15.9994C31.3332 10.6078 28.5504 5.8661 24.3428 3.13232Z",fill:"black"})}),(0,a.jsx)("g",{style:{mixBlendMode:"multiply"},opacity:"0.1",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.7713 4.18262C30.6308 10.2119 30.2607 19.061 24.6609 24.6608C19.0615 30.2602 10.2132 30.6307 4.18396 25.7722C6.99643 29.1689 11.2455 31.3329 16 31.3329C24.4683 31.3329 31.3332 24.468 31.3332 15.9997C31.3332 11.2446 29.1687 6.99508 25.7713 4.18262Z",fill:"black"})}),(0,a.jsx)("g",{style:{mixBlendMode:"soft-light"},children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.48969 24.8677C0.151051 18.7651 0.974979 11.0636 6.01931 6.01927C11.0639 0.974682 18.7659 0.15093 24.8687 3.49016C22.365 1.71201 19.3046 0.666603 16 0.666603C7.53165 0.666603 0.666733 7.53152 0.666733 15.9998C0.666733 19.3041 1.7119 22.3642 3.48969 24.8677Z",fill:"white"})}),(0,a.jsx)("g",{style:{mixBlendMode:"soft-light"},children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.10075 9.5143C3.77271 5.93677 6.78528 3.11129 10.4921 1.68422C10.546 1.73235 10.5987 1.78219 10.6502 1.83374C12.4838 3.66728 10.9119 5.7442 8.66145 7.99465C6.411 10.2451 4.33417 11.8169 2.50064 9.98335C2.35338 9.83609 2.22013 9.6793 2.10075 9.5143Z",fill:"white"})})]}),teal:e=>(0,a.jsxs)(s.BSV,{viewBox:"0 0 32 32",...e,children:[(0,a.jsx)("circle",{cx:"16",cy:"16",r:"16",fill:"#1FC7D4"}),(0,a.jsx)("g",{style:{mixBlendMode:"multiply"},opacity:"0.1",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.3428 3.13232C28.9191 8.87177 28.5505 17.2573 23.2373 22.5706C17.528 28.2799 8.27148 28.2799 2.56223 22.5706C2.2825 22.2909 2.01648 22.0026 1.76416 21.7067C4.02814 27.3486 9.54881 31.3326 16 31.3326C24.4683 31.3326 31.3332 24.4677 31.3332 15.9994C31.3332 10.6078 28.5504 5.8661 24.3428 3.13232Z",fill:"black"})}),(0,a.jsx)("g",{style:{mixBlendMode:"multiply"},opacity:"0.1",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.7713 4.18262C30.6308 10.2119 30.2607 19.061 24.6609 24.6608C19.0615 30.2602 10.2132 30.6307 4.18396 25.7722C6.99643 29.1689 11.2455 31.3329 16 31.3329C24.4683 31.3329 31.3332 24.468 31.3332 15.9997C31.3332 11.2446 29.1687 6.99508 25.7713 4.18262Z",fill:"black"})}),(0,a.jsx)("g",{style:{mixBlendMode:"soft-light"},children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.48969 24.8677C0.151051 18.7651 0.974979 11.0636 6.01931 6.01927C11.0639 0.974682 18.7659 0.15093 24.8687 3.49016C22.365 1.71201 19.3046 0.666603 16 0.666603C7.53165 0.666603 0.666733 7.53152 0.666733 15.9998C0.666733 19.3041 1.7119 22.3642 3.48969 24.8677Z",fill:"white"})}),(0,a.jsx)("g",{style:{mixBlendMode:"soft-light"},children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.10075 9.5143C3.77271 5.93677 6.78528 3.11129 10.4921 1.68422C10.546 1.73235 10.5987 1.78219 10.6502 1.83374C12.4838 3.66728 10.9119 5.7442 8.66145 7.99465C6.411 10.2451 4.33417 11.8169 2.50064 9.98335C2.35338 9.83609 2.22013 9.6793 2.10075 9.5143Z",fill:"white"})})]}),aqua:e=>(0,a.jsxs)(s.BSV,{viewBox:"0 0 32 32",...e,children:[(0,a.jsx)("circle",{cx:"16",cy:"16",r:"16",fill:"#31D0AA"}),(0,a.jsx)("g",{style:{mixBlendMode:"multiply"},opacity:"0.1",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.3428 3.13232C28.9191 8.87177 28.5505 17.2573 23.2373 22.5706C17.528 28.2799 8.27148 28.2799 2.56223 22.5706C2.2825 22.2909 2.01648 22.0026 1.76416 21.7067C4.02814 27.3486 9.54881 31.3326 16 31.3326C24.4683 31.3326 31.3332 24.4677 31.3332 15.9994C31.3332 10.6078 28.5504 5.8661 24.3428 3.13232Z",fill:"black"})}),(0,a.jsx)("g",{style:{mixBlendMode:"multiply"},opacity:"0.1",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.7713 4.18262C30.6308 10.2119 30.2607 19.061 24.6609 24.6608C19.0615 30.2602 10.2132 30.6307 4.18396 25.7722C6.99643 29.1689 11.2455 31.3329 16 31.3329C24.4683 31.3329 31.3332 24.468 31.3332 15.9997C31.3332 11.2446 29.1687 6.99508 25.7713 4.18262Z",fill:"black"})}),(0,a.jsx)("g",{style:{mixBlendMode:"soft-light"},children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.48969 24.8677C0.151051 18.7651 0.974979 11.0636 6.01931 6.01927C11.0639 0.974682 18.7659 0.15093 24.8687 3.49016C22.365 1.71201 19.3046 0.666603 16 0.666603C7.53165 0.666603 0.666733 7.53152 0.666733 15.9998C0.666733 19.3041 1.7119 22.3642 3.48969 24.8677Z",fill:"white"})}),(0,a.jsx)("g",{style:{mixBlendMode:"soft-light"},children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.10075 9.5143C3.77271 5.93677 6.78528 3.11129 10.4921 1.68422C10.546 1.73235 10.5987 1.78219 10.6502 1.83374C12.4838 3.66728 10.9119 5.7442 8.66145 7.99465C6.411 10.2451 4.33417 11.8169 2.50064 9.98335C2.35338 9.83609 2.22013 9.6793 2.10075 9.5143Z",fill:"white"})})]}),green:e=>(0,a.jsxs)(s.BSV,{viewBox:"0 0 32 32",...e,children:[(0,a.jsx)("circle",{cx:"16",cy:"16",r:"16",fill:"#93D45A"}),(0,a.jsx)("g",{style:{mixBlendMode:"multiply"},opacity:"0.1",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.3428 3.13232C28.9191 8.87177 28.5505 17.2573 23.2373 22.5706C17.528 28.2799 8.27148 28.2799 2.56223 22.5706C2.2825 22.2909 2.01648 22.0026 1.76416 21.7067C4.02814 27.3486 9.54881 31.3326 16 31.3326C24.4683 31.3326 31.3332 24.4677 31.3332 15.9994C31.3332 10.6078 28.5504 5.8661 24.3428 3.13232Z",fill:"black"})}),(0,a.jsx)("g",{style:{mixBlendMode:"multiply"},opacity:"0.1",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.7713 4.18262C30.6308 10.2119 30.2607 19.061 24.6609 24.6608C19.0615 30.2602 10.2132 30.6307 4.18396 25.7722C6.99643 29.1689 11.2455 31.3329 16 31.3329C24.4683 31.3329 31.3332 24.468 31.3332 15.9997C31.3332 11.2446 29.1687 6.99508 25.7713 4.18262Z",fill:"black"})}),(0,a.jsx)("g",{style:{mixBlendMode:"soft-light"},children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.48969 24.8677C0.151051 18.7651 0.974979 11.0636 6.01931 6.01927C11.0639 0.974682 18.7659 0.15093 24.8687 3.49016C22.365 1.71201 19.3046 0.666603 16 0.666603C7.53165 0.666603 0.666733 7.53152 0.666733 15.9998C0.666733 19.3041 1.7119 22.3642 3.48969 24.8677Z",fill:"white"})}),(0,a.jsx)("g",{style:{mixBlendMode:"soft-light"},children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.10075 9.5143C3.77271 5.93677 6.78528 3.11129 10.4921 1.68422C10.546 1.73235 10.5987 1.78219 10.6502 1.83374C12.4838 3.66728 10.9119 5.7442 8.66145 7.99465C6.411 10.2451 4.33417 11.8169 2.50064 9.98335C2.35338 9.83609 2.22013 9.6793 2.10075 9.5143Z",fill:"white"})})]}),yellow:e=>(0,a.jsxs)(s.BSV,{viewBox:"0 0 32 32",...e,children:[(0,a.jsx)("circle",{cx:"16",cy:"16",r:"16",fill:"#FFC43C"}),(0,a.jsx)("g",{style:{mixBlendMode:"multiply"},opacity:"0.1",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.3428 3.13245C28.9191 8.87189 28.5505 17.2575 23.2373 22.5707C17.528 28.28 8.27148 28.28 2.56223 22.5707C2.2825 22.291 2.01648 22.0028 1.76416 21.7068C4.02814 27.3487 9.54881 31.3327 16 31.3327C24.4683 31.3327 31.3332 24.4678 31.3332 15.9995C31.3332 10.6079 28.5504 5.86622 24.3428 3.13245Z",fill:"black"})}),(0,a.jsx)("g",{style:{mixBlendMode:"multiply"},opacity:"0.1",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.7714 4.18262C30.6309 10.2119 30.2608 19.061 24.661 24.6608C19.0616 30.2602 10.2134 30.6307 4.18408 25.7722C6.99655 29.1689 11.2456 31.3329 16.0001 31.3329C24.4685 31.3329 31.3334 24.468 31.3334 15.9997C31.3334 11.2446 29.1689 6.99508 25.7714 4.18262Z",fill:"black"})}),(0,a.jsx)("g",{style:{mixBlendMode:"soft-light"},children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.48969 24.8677C0.151051 18.7651 0.974979 11.0636 6.01931 6.01927C11.0639 0.974682 18.7659 0.15093 24.8687 3.49016C22.365 1.71201 19.3046 0.666603 16 0.666603C7.53165 0.666603 0.666733 7.53152 0.666733 15.9998C0.666733 19.3041 1.7119 22.3642 3.48969 24.8677Z",fill:"white"})}),(0,a.jsx)("g",{style:{mixBlendMode:"soft-light"},children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.10087 9.51443C3.77283 5.93689 6.78541 3.11142 10.4922 1.68435C10.5461 1.73247 10.5988 1.78231 10.6504 1.83387C12.4839 3.6674 10.912 5.74432 8.66157 7.99477C6.41112 10.2452 4.33429 11.817 2.50076 9.98347C2.3535 9.83621 2.22025 9.67943 2.10087 9.51443Z",fill:"white"})})]})},V=e=>{let{color:t,number:n,size:i,fontSize:r,rotationTransform:l}=e;const o=U[t];return(0,a.jsxs)(s.son,{alignItems:"center",justifyContent:"center",position:"relative",mx:"2px",children:[(0,a.jsx)(o,{width:null!==i&&void 0!==i?i:"32px",height:null!==i&&void 0!==i?i:"32px"}),(0,a.jsx)(H,{children:(0,a.jsx)(q,{rotationTransform:l,bold:!0,fontSize:null!==r&&void 0!==r?r:"16px",children:n})})]})};var Q=n(70711),J=n(60164),G=(n(92626),n(79051)),K=n(96652);const X=()=>{const[e,t]=(0,i.useState)(Date.now());return{lastUpdated:e,previousLastUpdated:(0,$.A)(e),setLastUpdated:(0,i.useCallback)(()=>{t(Date.now())},[t])}};let ee;!function(e){e.NOT_FETCHED="not-fetched",e.SUCCESS="success",e.FAILED="failed"}(ee||(ee={}));const te=e=>{const{NOT_FETCHED:t,SUCCESS:n,FAILED:r}=ee,[s,l]=(0,i.useState)({balance:J.AH,fetchStatus:t}),{account:o}=(0,A.Yu)(),{fastRefresh:a}=(0,D.A)();return(0,i.useEffect)(()=>{o&&(async()=>{const t=(0,G.ge)(e);try{const e=await t.balanceOf(o);l({balance:new S.A(e.toString()),fetchStatus:n})}catch(i){console.error(i),l(e=>({...e,fetchStatus:r}))}})()},[o,e,a,n,r]),s},ne=()=>{const[e,t]=(0,i.useState)(ee.NOT_FETCHED),[n,r]=(0,i.useState)(Q.gH.from(0)),{account:s}=(0,A.Yu)(),{lastUpdated:l,setLastUpdated:o}=X();return(0,i.useEffect)(()=>{s&&(async()=>{try{const e=await K.t.getBalance(s);r(e),t(ee.SUCCESS)}catch{t(ee.FAILED)}})()},[s,l,r,t]),{balance:n,fetchStatus:e,refresh:o}},ie=te;var re=n(9477),se=n(18098);const le={approvalState:"idle",confirmState:"idle"},oe=(e,t)=>{switch(t.type){case"requires_approval":return{...e,approvalState:"idle"};case"approve_sending":return{...e,approvalState:"loading"};case"approve_receipt":return{...e,approvalState:"success"};case"approve_error":return{...e,approvalState:"fail"};case"confirm_sending":return{...e,confirmState:"loading"};case"confirm_receipt":return{...e,confirmState:"success"};case"confirm_error":return{...e,confirmState:"fail"};default:return e}},ae=e=>{let{onApprove:t,onConfirm:n,onRequiresApproval:r,onSuccess:s=re.noop,onApproveSuccess:l=re.noop}=e;const{t:o}=(0,v.Bd)(),{account:a}=(0,A.Yu)(),[d,c]=(0,i.useReducer)(oe,le),{toastError:u}=(0,se.A)();return(0,i.useEffect)(()=>{a&&r&&r().then(e=>{c(e?{type:"approve_receipt"}:{type:"requires_approval"})})},[a,r,c]),{isApproving:"loading"===d.approvalState,isApproved:"success"===d.approvalState,isConfirming:"loading"===d.confirmState,isConfirmed:"success"===d.confirmState,hasApproveFailed:"fail"===d.approvalState,hasConfirmFailed:"fail"===d.confirmState,handleApprove:async()=>{try{const e=await t();c({type:"approve_sending"});const n=await e.wait();n.status&&(c({type:"approve_receipt"}),l({state:d,receipt:n}))}catch(e){c({type:"approve_error"}),u(o("Error"),o("Please try again. Confirm the transaction and make sure you are paying enough gas!"))}},handleConfirm:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c({type:"confirm_sending"});try{const t=await n(e),i=await t.wait();i.status&&(c({type:"confirm_receipt"}),s({state:d,receipt:i}))}catch(t){c({type:"confirm_error"}),u(o("Error"),o("Please try again. Confirm the transaction and make sure you are paying enough gas!"))}}}};var de=n(66882);const ce=async(e,t,n,i)=>{if(!e[t])throw new Error(`Method ${t} doesn't exist on ${e.address}`);return(await e.estimateGas[t](...n)).mul(Q.gH.from(1e4).add(Q.gH.from(i))).div(Q.gH.from(1e4))},ue=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const r=ce(e,t,n,arguments.length>4&&void 0!==arguments[4]?arguments[4]:1e3);return await e[t](...n,{gasLimit:r,...i})};var xe=n(22308),he=n(94948);n(61149);xe._U;n(22297),n(67853);var pe=n(58738),me=n(84146);var ge=n(54321);const fe=e=>{const{t:t}=(0,v.Bd)(),{login:n,logout:i}=(0,ge.A)(),{onPresentConnectModal:r}=(0,s.oSW)(n,i,t);return(0,a.jsx)(s.$nd,{id:"connect-wallet",className:"primaryButton",onClick:r,...e,children:t("Connect Wallet")})};var je=n(71001);let ye;!function(e){e.ROW="row",e.SEQUENTIAL="sequential"}(ye||(ye={}));const be=r.Ay.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    grid-template-columns: 1fr 24px 1fr;
  }
`,Ce=(0,r.Ay)(s.$nd)`
  width: 100%;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    min-width: 160px;
  }
`,ve={width:"24px",color:"textDisabled"},we=(0,r.Ay)(s.vKP).attrs(ve)`
  display: none;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    display: block;
  }
`,ke=(0,r.Ay)(s.D3D).attrs(ve)`
  display: block;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    display: none;
  }
`,Se=(0,a.jsx)(s.gS_,{spin:!0,color:"currentColor"}),Ae=e=>{let{isApproveDisabled:t,isApproving:n,isConfirming:i,isConfirmDisabled:r,onApprove:l,onConfirm:o,buttonArrangement:d=ye.ROW,confirmLabel:c,confirmId:u}=e;const{t:x}=(0,v.Bd)(),h=null!==c&&void 0!==c?c:x("Confirm");return d===ye.ROW?(0,a.jsxs)(be,{children:[(0,a.jsx)(s.azJ,{children:(0,a.jsx)(Ce,{disabled:t,onClick:l,endIcon:n?Se:void 0,isLoading:n,children:x(n?"Enabling":"Enable")})}),(0,a.jsxs)(s.son,{justifyContent:"center",children:[(0,a.jsx)(we,{}),(0,a.jsx)(ke,{})]}),(0,a.jsx)(s.azJ,{children:(0,a.jsx)(Ce,{id:u,onClick:o,disabled:r,isLoading:i,endIcon:i?Se:void 0,children:i?x("Confirming"):h})})]}):(0,a.jsx)(a.Fragment,{children:t?(0,a.jsx)(s.azJ,{children:(0,a.jsx)(Ce,{id:u,onClick:o,disabled:r,isLoading:i,endIcon:i?Se:void 0,children:i?x("Confirming"):h})}):(0,a.jsx)(s.azJ,{children:(0,a.jsx)(Ce,{onClick:l,endIcon:n?Se:void 0,isLoading:n,children:x(n?"Enabling":"Enable")})})})},Ee=(0,r.Ay)(s.$nd)`
  flex-grow: 1;
`,Ie=e=>{let{children:t,onClick:n,disabled:i=!1}=e;return(0,a.jsx)(Ee,{className:"numTicketsButton",disabled:i,scale:"xs",mx:"2px",p:"4px 16px",variant:"tertiary",onClick:n,children:t})},De=r.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  box-sizing: border-box;
  border: 1px solid #d7caec;
  background-color: #eeeaf4;
  border-radius: 16px;
  margin-bottom: 8px;
  ${e=>{let{isDuplicate:t}=e;return t&&"\n    border: 1px solid #FFB237;\n    box-shadow: 0px 0px 0px 2px #FFB237;\n  "}}
  ${e=>{let{focused:t}=e;return t&&"\n    border: 1px solid #7645D9;\n    box-shadow: 0px 0px 0px 2px #E4DAF7;\n  "}}
`,Be=r.Ay.input`
  border: none;
  height: 32px;
  padding: 0 12px;
  font-size: 16px;
  flex: 1;
  width: 16px;
  text-align: center;
  min-width: 0;
  background-color: transparent;
  caret-color: #7a6faa;

  &::placeholder {
    text-align: center;
  }

  &:placeholder-shown {
    text-align: left;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  -moz-appearance: textfield; /* Firefox */
`,Te=window.SO_LotteryConfig.numbersCount,Le=e=>{let{ticket:t,duplicateWith:n,updateTicket:r,disabled:l}=e;const[o,d]=(0,i.useState)(!1),c=(0,i.useRef)(null),u=(0,i.useRef)(null),x=(0,i.useRef)(null),h=(0,i.useRef)(null),p=(0,i.useRef)(null),m=(0,i.useRef)(null),g=(0,i.useRef)(null),{t:f}=(0,v.Bd)(),j=[u,x,h,p,m,g],y=()=>{c.current&&c.current.scrollIntoView({block:"center",behavior:"smooth"})},b=e=>{e.preventDefault();const n=e.clipboardData.getData("Text");if(n.length<=6&&/^\d+$/.test(n)){const e=Array(6-n.length).fill("");r(t.id,[...n.split(""),...e])}},C=()=>{y(),d(!0)},w=()=>{d(!1)},k=(e,n)=>{const i=parseInt(e.key,10);if(["e","E",".",",","-","Unidentified"].includes(e.key))e.preventDefault();else{if(i>=0&&i<=9){e.preventDefault();const s=[...t.numbers];s[n]=`${i}`,r(t.id,s);const l=n+1,o=j[l];l!==Te&&o.current&&o.current.focus()}if("Backspace"===e.key)if(e.preventDefault(),t.numbers[n]){const e=[...t.numbers];e[n]="",r(t.id,e)}else{const e=n-1,i=j[e];if(-1!==e&&i.current){i.current.focus();const n=[...t.numbers];n[e]="",r(t.id,n)}}if("Delete"===e.key)if(e.preventDefault(),t.numbers[n]){const e=[...t.numbers];e[n]="",r(t.id,e)}else{const e=n+1,i=j[e];if(e!==Te&&i.current){i.current.focus();const n=[...t.numbers];n[e]="",r(t.id,n)}}if("ArrowLeft"===e.key){e.preventDefault();const t=n-1,i=j[t];-1!==t&&i.current&&i.current.focus()}if("ArrowRight"===e.key){e.preventDefault();const t=n+1,i=j[t];t!==Te&&i.current&&i.current.focus()}}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.son,{justifyContent:"space-between",children:[(0,a.jsx)(s.EYj,{fontSize:"12px",color:"textSubtle",children:(S=t.id,S<10?`#00${S}`:S<100?`#0${S}`:`#${S}`)}),(0,a.jsx)(s.EYj,{fontSize:"12px",color:"warning",children:0!==n.length&&f("Duplicate")})]}),(0,a.jsxs)(De,{ref:c,onClick:y,focused:o,isDuplicate:0!==n.length,children:[Te>=1&&(0,a.jsx)(Be,{ref:u,type:"number",value:t.numbers[0],onKeyDown:e=>k(e,0),placeholder:"_",onChange:e=>e.preventDefault(),disabled:l,onFocus:C,onBlur:w,onPaste:b,inputMode:"numeric"}),Te>=2&&(0,a.jsx)(Be,{ref:x,type:"number",value:t.numbers[1],onKeyDown:e=>k(e,1),placeholder:"_",onChange:e=>e.preventDefault(),disabled:l,onFocus:C,onBlur:w,onPaste:b,inputMode:"numeric"}),Te>=3&&(0,a.jsx)(Be,{ref:h,type:"number",value:t.numbers[2],onKeyDown:e=>k(e,2),placeholder:"_",onChange:e=>e.preventDefault(),disabled:l,onFocus:C,onBlur:w,onPaste:b,inputMode:"numeric"}),Te>=4&&(0,a.jsx)(Be,{ref:p,type:"number",value:t.numbers[3],onKeyDown:e=>k(e,3),placeholder:"_",onChange:e=>e.preventDefault(),disabled:l,onFocus:C,onBlur:w,onPaste:b,inputMode:"numeric"}),Te>=5&&(0,a.jsx)(Be,{ref:m,type:"number",value:t.numbers[4],onKeyDown:e=>k(e,4),placeholder:"_",onChange:e=>e.preventDefault(),disabled:l,onFocus:C,onBlur:w,onPaste:b,inputMode:"numeric"}),Te>=6&&(0,a.jsx)(Be,{ref:g,type:"number",value:t.numbers[5],onKeyDown:e=>k(e,5),placeholder:"_",onChange:e=>e.preventDefault(),disabled:l,onFocus:C,onBlur:w,onPaste:b,inputMode:"numeric"})]})]});var S},Fe=(0,r.Ay)(s.aFV)`
  min-width: 280px;
  max-width: 320px;
  max-height: 552px;

  & div:nth-child(2) {
    padding: 0;
  }
`,Ne=r.Ay.div`
  height: 310px;
  overflow-y: scroll;
  border-bottom: ${e=>{let{theme:t}=e;return`1px solid ${t.colors.cardBorder}`}};
  padding: 24px;
`,Me=e=>{let{totalCost:t,updateTicket:n,randomize:i,tickets:r,allComplete:l,onConfirm:o,isConfirming:d,onDismiss:c}=e;const{theme:u}=k(),{t:x}=(0,v.Bd)();return(0,a.jsxs)(Fe,{title:x("Edit numbers"),onDismiss:c,headerBackground:u.colors.gradients.cardHeader,onBack:c,children:[(0,a.jsxs)(Ne,{children:[(0,a.jsxs)(s.son,{justifyContent:"space-between",mb:"16px",children:[(0,a.jsxs)(s.EYj,{color:"textSubtle",children:[x("Total cost"),":"]}),(0,a.jsxs)(s.EYj,{children:["~",t," ",Z.pq().symbol]})]}),(0,a.jsx)(s.EYj,{fontSize:"12px",color:"textSubtle",mb:"16px",children:x("Numbers are randomized, with no duplicates among your tickets. Tap a number to edit it. Available digits: 0-9")}),(0,a.jsx)(s.$nd,{disabled:d,mb:"16px",variant:"secondary",width:"100%",height:"32px",onClick:i,children:x("Randomize")}),r.map(e=>(0,a.jsx)(Le,{ticket:e,duplicateWith:e.duplicateWith,updateTicket:n,disabled:d},e.id))]}),(0,a.jsxs)(s.son,{flexDirection:"column",justifyContent:"center",m:"24px",children:[(0,a.jsx)(s.$nd,{id:"lotteryBuyEdited",disabled:!l||d,endIcon:d?(0,a.jsx)(s.gS_,{spin:!0,color:"currentColor"}):void 0,onClick:()=>{o()},children:x(d?"Confirming":"Confirm and buy")}),(0,a.jsxs)(s.$nd,{mt:"8px",variant:d?"secondary":"text",disabled:d,onClick:c,children:[(0,a.jsx)(s.gFQ,{color:d?"disabled":"primary",height:"24px",width:"24px"})," ",x("Go back")]})]})]})},Re=e=>{const t=e.split("");return t.splice(0,1),t.reverse(),t.join("")},$e=(e,t)=>{const n=1e3*parseInt(t,10);return new Date(n).toLocaleDateString(e,_e)},Ye={year:"numeric",month:"short",day:"numeric"},ze={hour:"numeric",minute:"numeric"},_e={...Ye,...ze},Pe=e=>{const{priceTicketInCake:t,discountDivisor:n,amountCollectedInCake:i}=e,r=new S.A(n),s=new S.A(t),l=new S.A(i);return{isLoading:e.isLoading,lotteryId:e.lotteryId,userTickets:e.userTickets,status:e.status,startTime:e.startTime,endTime:e.endTime,priceTicketInCake:s,discountDivisor:r,treasuryFee:e.treasuryFee,firstTicketId:e.firstTicketId,lastTicketId:e.lastTicketId,amountCollectedInCake:l,finalNumber:e.finalNumber,cakePerBracket:e.cakePerBracket,countWinnersPerBracket:e.countWinnersPerBracket,rewardsBreakdown:e.rewardsBreakdown}},Ze=window.SO_LotteryConfig.numbersCount,We=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:parseInt("1000000".substr(0,Ze+1),10),i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:parseInt("1999999".substr(0,Ze+1),10);const r=(null===t||void 0===t?void 0:t.length)>0?t.map(e=>parseInt(null===e||void 0===e?void 0:e.number)):[],s=[...r];for(let o=0;o<e;o++){let e=(0,re.random)(n,i);for(;s.includes(e);)e=(0,re.random)(n,i);s.push(e)}const l=(null===t||void 0===t?void 0:t.length)>0?s.filter(e=>!r.includes(e)):s;return console.log(">>> ticketsToBuy",l),l},Oe=e=>{let{amount:t,userCurrentTickets:n}=e;const i=We(t,n).map(e=>Re(e.toString()).split(""));return{tickets:Array.from({length:t},(e,t)=>t+1).map(e=>({id:e,numbers:i[e-1],duplicateWith:[],isComplete:!0})),allComplete:!0}},He=window.SO_LotteryConfig.numbersCount,qe=(e,t)=>{switch(t.type){case"updateTicket":{const n=[...e.tickets],{ticketId:i,newNumbers:r}=t.payload,s=e.tickets.filter(e=>e.id!==i&&e.isComplete&&e.numbers.join("")===r.join(""));n[i-1].duplicateWith.forEach(e=>{if(!s.map(e=>{let{id:t}=e;return t}).includes(e)){const t=[...n[e-1].duplicateWith],r=t.findIndex(e=>e===i);t.splice(r,1),n[e-1]={...n[e-1],duplicateWith:t}}}),0!==s.length&&s.forEach(e=>{n[e.id-1]={...e,duplicateWith:[...e.duplicateWith,i]}});const l={id:i,numbers:r,duplicateWith:s.map(e=>e.id),isComplete:r.join("").length===He};n[i-1]=l;const o=n.every(e=>e.isComplete);return{tickets:n,allComplete:o}}case"reset":return Oe({amount:t.payload.amount,userCurrentTickets:t.payload.userCurrentTickets});default:throw new Error}},Ue=(0,r.Ay)(s.$nd)`
  margin-top: 5px;
  margin-bottom: 5px;
`,Ve=e=>{var t,n,i,r,s;let{disabled:l,...o}=e;const{t:d}=(0,v.Bd)(),c=null===(t=window)||void 0===t||null===(n=t.SO_LotteryConfig)||void 0===n?void 0:n.buyTokenLink,u=null===(i=window)||void 0===i||null===(r=i.SO_LotteryConfig)||void 0===r||null===(s=r.token)||void 0===s?void 0:s.symbol;return c?(0,a.jsx)(Ue,{className:"primaryButton",...o,disabled:l,onClick:e=>{e.preventDefault(),window.open(c)},children:d(`Buy ${u}`)}):null},Qe=(0,r.Ay)(s.aFV)`
  min-width: 280px;
  max-width: 320px;
`,Je=(0,r.Ay)(s.son)`
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 24px;
  display: ${e=>{let{isVisible:t}=e;return t?"flex":"none"}};
`;var Ge;!function(e){e.BUY="Buy",e.EDIT="Edit"}(Ge||(Ge={}));const Ke=e=>{let{onDismiss:t}=e;const{account:n}=(0,A.Yu)(),{t:r}=(0,v.Bd)(),{theme:l}=k(),{maxNumberTicketsPerBuyOrClaim:o,currentLotteryId:d,currentRound:{priceTicketInCake:c,discountDivisor:u,userTickets:{tickets:x}}}=M(),{callWithGasPrice:h}=function(){const e=(0,w.YW)(),{library:t}=(0,A.Yu)(),n=(0,i.useCallback)(async function(n,i){var r;let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;const o=(0,re.get)(n,i),a=null===l||void 0===l?void 0:l.gasPrice;return await o(...s,a?{...l}:{...l,gasPrice:await(null===t||void 0===t||null===(r=t.getGasPrice)||void 0===r?void 0:r.call(t))||e})},[e]);return{callWithGasPrice:n}}(),[p,m]=(0,i.useState)(""),[g,f]=(0,i.useState)(""),[j,y]=(0,i.useState)(""),[b,C]=(0,i.useState)(""),[E,D]=(0,i.useState)(Ge.BUY),[T,L]=(0,i.useState)(J.AH),[F,N]=(0,i.useState)(!1),[R,$]=(0,i.useState)(!1),Y=(0,de.n8)(),_=(0,de.sL)(),{toastSuccess:P}=(0,se.A)(),{balance:W,fetchStatus:O}=ie(Z.Ay.cake.address),H=W.toJSON(),q=(0,i.useMemo)(()=>new S.A(H),[H]),U=new S.A(Z.pq().price||0),V=(0,I.j)(),G=O===ee.SUCCESS,K=(0,z.cB)(W,Z.pq().decimals,3),X=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.EYj,{mb:"16px",children:r("Buying multiple tickets in a single transaction gives a discount. The discount increases in a linear way, up to the maximum of 100 tickets:")}),(0,a.jsx)(s.EYj,{children:r("2 tickets: 0.05%")}),(0,a.jsx)(s.EYj,{children:r("50 tickets: 2.45%")}),(0,a.jsx)(s.EYj,{children:r("100 tickets: 4.95%")})]}),{targetRef:te,tooltip:ne,tooltipVisible:le}=(0,s.fSn)((0,a.jsx)(X,{}),{placement:"bottom-end",tooltipOffset:[20,10]}),oe=(0,i.useCallback)(e=>e.gt(o)?o:e,[o]),ue=(0,i.useCallback)(e=>c.times(e).times(u.plus(1).minus(e)).div(u),[u,c]),xe=(0,i.useCallback)(e=>{const t=ue(e),n=c.times(e).minus(t).div(c);return{overallTicketBuy:e.plus(n),ticketsBoughtWithDiscount:n}},[ue,c]),he=(0,i.useCallback)(e=>{const t=oe(e);ue(t).gt(W)?$(!0):t.eq(o)?N(!0):($(!1),N(!1))},[oe,ue,o,W]);(0,i.useEffect)(()=>{(()=>{const e=q.div(c),t=oe(e);let n;if(t.lt(o)){const{overallTicketBuy:e}=xe(t),{ticketsBoughtWithDiscount:i}=xe(e);n=t.plus(i)}else n=t;G&&n.lt(1)?$(!0):$(!1),L(n)})()},[o,c,q,oe,ue,xe,G]),(0,i.useEffect)(()=>{const e=new S.A(p),t=ue(e),n=c.times(e),i=n.minus(t);C(n.gt(0)?(0,z.cB)(n,Z.pq().decimals):"0"),y(t.gt(0)?(0,z.cB)(t):"0"),f(i.gt(0)?(0,z.cB)(i,Z.pq().decimals,5):"0")},[p,c,u,ue]);const pe=e=>{const t=T.gt(0)?T.div(new S.A(100)).times(new S.A(e)):J.AH;return Math.floor(t.toNumber())},me=pe(10),ge=pe(25),be=pe(50),Ce=pe(100),ve=e=>{m(e.toFixed()),$(!1),N(!1)},[we,ke,Se,Ee,De]=((e,t)=>{const[n,r]=(0,i.useReducer)(qe,{amount:e,userCurrentTickets:t},Oe);return(0,i.useEffect)(()=>{r({type:"reset",payload:{amount:e,userCurrentTickets:t}})},[e,t]),[(e,t)=>{r({type:"updateTicket",payload:{ticketId:e,newNumbers:t}})},()=>{r({type:"reset",payload:{amount:e,userCurrentTickets:t}})},n.tickets,n.allComplete,()=>n.tickets.map(e=>{const t=[...e.numbers].map(e=>parseInt(e,10)).reverse();return t.unshift(1),parseInt(t.join(""),10)})]})(parseInt(p,10),x),Be=(0,i.useCallback)(async()=>{try{const e=await _.allowance(n,Y.address),t=(0,J.wp)(e),i=(0,z.MS)(new S.A(j),Z.pq().decimals);return t.gte(i)}catch(e){return!1}},[j,n]),{isApproving:Te,isApproved:Le,isConfirmed:Fe,isConfirming:Ne,handleApprove:Re,handleConfirm:$e}=ae({onRequiresApproval:(0,i.useMemo)(()=>Be,[j,n]),onApprove:()=>{const e=Q.gH.from((0,z.MS)(new S.A(j),Z.pq().decimals).toString());return h(_,"approve",[Y.address,e])},onApproveSuccess:async e=>{let{receipt:t}=e;P(r("Contract enabled - you can now purchase tickets"),(0,a.jsx)(je.Gf,{txHash:t.transactionHash}))},onConfirm:async()=>{const e=De();let t;try{t=await ce(Y,"buyTickets",[d,e],1e3)}catch(n){console.error("Estimate Gas Error: ",n),t=1e5+22e4*e.length}return h(Y,"buyTickets",[d,e],{gasLimit:t})},onSuccess:async e=>{let{receipt:i}=e;t(),V((0,B.je)({account:n,currentLotteryId:d})),P(r("Lottery tickets purchased!"),(0,a.jsx)(je.Gf,{txHash:i.transactionHash}))}}),Ye=!Le||Fe||R||!p||new S.A(p).lte(0)||De().length!==parseInt(p,10);return E===Ge.EDIT?(0,a.jsx)(Me,{totalCost:j,updateTicket:we,randomize:ke,tickets:Se,allComplete:Ee,onConfirm:$e,isConfirming:Ne,onDismiss:()=>D(Ge.BUY)}):(0,a.jsxs)(Qe,{title:r("Buy Tickets"),onDismiss:t,headerBackground:l.colors.gradients.cardHeader,children:[le&&ne,(0,a.jsxs)(s.son,{alignItems:"center",justifyContent:"space-between",mb:"8px",children:[(0,a.jsxs)(s.EYj,{color:"textSubtle",children:[r("Buy"),":"]}),(0,a.jsxs)(s.son,{alignItems:"center",minWidth:"70px",children:[(0,a.jsx)(s.EYj,{mr:"4px",bold:!0,children:r("Tickets")}),(0,a.jsx)(s.RgA,{})]})]}),(0,a.jsx)(s.Ngf,{isWarning:n&&(R||F),placeholder:"0",value:p,onUserInput:e=>{const t=parseInt(e,10),n=new S.A(t),i=oe(n);he(n),m(t?i.toString():"")},currencyValue:U.gt(0)&&`~${p?(0,z.cB)(c.times(new S.A(p)),Z.pq().decimals):"0.00"} ${Z.pq().symbol}`}),(0,a.jsx)(s.son,{alignItems:"center",justifyContent:"flex-end",mt:"4px",mb:"12px",children:(0,a.jsxs)(s.son,{justifyContent:"flex-end",flexDirection:"column",children:[n&&(R||F)&&(0,a.jsx)(s.EYj,{fontSize:"12px",color:"failure",children:R?r(`Insufficient ${Z.pq().symbol} balance`):r("The maximum number of tickets you can buy in one transaction is %maxTickets%",{maxTickets:o.toString()})}),n&&(0,a.jsxs)(s.son,{justifyContent:"flex-end",children:[(0,a.jsxs)(s.EYj,{fontSize:"12px",color:"textSubtle",mr:"4px",children:[Z.pq().symbol," ",r("Balance"),":"]}),G?(0,a.jsx)(s.EYj,{fontSize:"12px",color:"textSubtle",children:K}):(0,a.jsx)(s.EAD,{width:50,height:12})]})]})}),n&&!G?(0,a.jsx)(s.EAD,{width:"100%",height:20,mt:"8px",mb:"24px"}):(0,a.jsxs)(Je,{isVisible:n&&G&&Ce>=1,children:[me>=1&&(0,a.jsx)(Ie,{onClick:()=>ve(me),children:G?me:""}),ge>=1&&(0,a.jsx)(Ie,{onClick:()=>ve(ge),children:G?ge:""}),be>=1&&(0,a.jsx)(Ie,{onClick:()=>ve(be),children:G?be:""}),Ce>=1&&(0,a.jsx)(Ie,{onClick:()=>ve(Ce),children:"MAX"})]}),(0,a.jsxs)(s.son,{flexDirection:"column",children:[(0,a.jsxs)(s.son,{mb:"8px",justifyContent:"space-between",children:[(0,a.jsxs)(s.EYj,{color:"textSubtle",fontSize:"14px",children:[r("Cost")," (",Z.pq().symbol,")"]}),(0,a.jsxs)(s.EYj,{color:"textSubtle",fontSize:"14px",children:[c&&(0,z.cB)(c.times(p||0),Z.pq().decimals)," ",Z.pq().symbol]})]}),(0,a.jsxs)(s.son,{mb:"8px",justifyContent:"space-between",children:[(0,a.jsxs)(s.son,{children:[(0,a.jsxs)(s.EYj,{display:"inline",bold:!0,fontSize:"14px",mr:"4px",children:[g&&j?(()=>{const e=new S.A(g).div(new S.A(b)).times(100);return e.isNaN()||e.eq(0)?0:e.toNumber().toFixed(2)})():0,"%"]}),(0,a.jsx)(s.EYj,{display:"inline",color:"textSubtle",fontSize:"14px",children:r("Bulk discount")}),(0,a.jsx)(s.son,{alignItems:"center",justifyContent:"center",ref:te,children:(0,a.jsx)(s.NTw,{ml:"4px",width:"14px",height:"14px",color:"textSubtle"})})]}),(0,a.jsxs)(s.EYj,{fontSize:"14px",color:"textSubtle",children:["~",g," ",Z.pq().symbol]})]}),(0,a.jsxs)(s.son,{borderTop:`1px solid ${l.colors.cardBorder}`,pt:"8px",mb:"24px",justifyContent:"space-between",children:[(0,a.jsx)(s.EYj,{color:"textSubtle",fontSize:"16px",children:r("You pay")}),(0,a.jsxs)(s.EYj,{fontSize:"16px",bold:!0,children:["~",j," ",Z.pq().symbol]})]}),n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Ae,{isApproveDisabled:Le,isApproving:Te,isConfirmDisabled:Ye,isConfirming:Ne,onApprove:Re,onConfirm:$e,buttonArrangement:ye.SEQUENTIAL,confirmLabel:r("Buy Instantly"),confirmId:"lotteryBuyInstant"}),Le&&(0,a.jsx)(s.$nd,{variant:"secondary",mt:"8px",endIcon:(0,a.jsx)(s.sIg,{ml:"2px",color:Ye||Ne?"disabled":"primary",height:"24px",width:"24px"}),disabled:Ye||Ne,onClick:()=>{D(Ge.EDIT)},children:r("View/Edit Numbers")}),(0,a.jsx)(Ve,{disabled:!1,width:"100%"})]}):(0,a.jsx)(fe,{}),(0,a.jsx)(s.EYj,{mt:"24px",fontSize:"12px",color:"textSubtle",children:r('"Buy Instantly" chooses random numbers, with no duplicates among your tickets. Prices are set before each round starts, equal to $5 at that time. Purchases are final.')})]})]})},Xe=(0,r.Ay)(s.$nd)`
  margin-left: 10px;
  margin-right: 10px;
`,et=e=>{let{disabled:t,...n}=e;const{t:i}=(0,v.Bd)(),[r]=(0,s.hSE)((0,a.jsx)(Ke,{})),{currentRound:{status:o}}=M();return(0,a.jsx)(Xe,{className:"primaryButton",...n,disabled:t,onClick:r,children:o===l.gN.OPEN?i("Buy Tickets"):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.DPx,{mr:"4px",color:"textDisabled"})," ",i("On sale soon!")]})})},tt=r.i7`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(10px, 10px);
  }
  to {
    transform: translate(0, -0px);
  }  
`,nt=r.i7`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-10px, 10px);
  }
  to {
    transform: translate(0, -0px);
  }  
`,it=r.i7`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-10px, 15px);
  }
  to {
    transform: translate(0, -0px);
  }  
`,rt=r.i7`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(10px, 15px);
  }
  to {
    transform: translate(0, -0px);
  }  
`,st=r.i7`
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(6deg);
  }
  to {
    transform: rotate(0deg);
  }  
`,lt=(0,r.Ay)(s.son)`
  animation: ${st} 3s ease-in-out infinite;
`,ot=(0,r.Ay)(P)`
  background: ${e=>{let{theme:t}=e;return t.colors.gradients.gold}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,at=(0,r.Ay)(et)`
  background: ${e=>{let{theme:t,disabled:n}=e;return n?t.colors.disabled:"linear-gradient(180deg, #7645d9 0%, #452a7a 100%)"}};
  width: 200px;
  ${e=>{let{theme:t}=e;return t.mediaQueries.xs}} {
    width: 240px;
  }
`,dt=r.Ay.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-4deg);
`,ct=r.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-4deg);
`,ut=r.Ay.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(./images/decorations/bg-star.svg);
  background-repeat: no-repeat;
  background-position: center 0;
`,xt=(0,r.Ay)(s.azJ)`
  position: absolute;
  width: 100%;
  height: 100%;

  & img {
    position: absolute;
  }

  & :nth-child(1) {
    animation: ${tt} 3s ease-in-out infinite;
    animation-delay: 0.25s;
  }
  & :nth-child(2) {
    animation: ${tt} 3.5s ease-in-out infinite;
    animation-delay: 0.5s;
  }
  & :nth-child(3) {
    animation: ${nt} 4s ease-in-out infinite;
    animation-delay: 0.75s;
  }
  & :nth-child(4) {
    animation: ${it} 6s ease-in-out infinite;
    animation-delay: 0.2s;
  }
  & :nth-child(5) {
    animation: ${rt} 6s ease-in-out infinite;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    & :nth-child(1) {
      left: 3%;
      top: 42%;
    }
    & :nth-child(2) {
      left: 9%;
      top: 23%;
    }
    & :nth-child(3) {
      right: 2%;
      top: 24%;
    }
    & :nth-child(4) {
      left: 8%;
      top: 67%;
    }
    & :nth-child(5) {
      right: 8%;
      top: 67%;
    }
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    & :nth-child(1) {
      left: 10%;
      top: 42%;
    }
    & :nth-child(2) {
      left: 17%;
      top: 23%;
    }
    & :nth-child(3) {
      right: 10%;
      top: 24%;
    }
    & :nth-child(4) {
      left: 17%;
      top: 67%;
    }
    & :nth-child(5) {
      right: 17%;
      top: 67%;
    }
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.xl}} {
    & :nth-child(1) {
      left: 19%;
      top: 42%;
    }
    & :nth-child(2) {
      left: 25%;
      top: 23%;
    }
    & :nth-child(3) {
      right: 19%;
      top: 24%;
    }
    & :nth-child(4) {
      left: 24%;
      top: 67%;
    }
    & :nth-child(5) {
      right: 24%;
      top: 67%;
    }
  }
`,ht=()=>{const{t:e}=(0,v.Bd)(),{currentRound:{amountCollectedInCake:t,status:n},isTransitioning:i}=M(),r=Z.pq().price||0,o=t.times(r),d=(0,z._c)(o,Z.pq().decimals),c=n!==l.gN.OPEN||i;return(0,a.jsxs)(s.son,{flexDirection:"column",alignItems:"center",justifyContent:"center",children:[(0,a.jsx)(ut,{}),(0,a.jsxs)(xt,{display:["none","none","block"],children:[(0,a.jsx)("img",{src:"./images/lottery/star-big.png",width:"124px",height:"109px",alt:""}),(0,a.jsx)("img",{src:"./images/lottery/star-small.png",width:"70px",height:"62px",alt:""}),(0,a.jsx)("img",{src:"./images/lottery/three-stars.png",width:"130px",height:"144px",alt:""}),(0,a.jsx)("img",{src:"./images/lottery/ticket-l.png",width:"123px",height:"83px",alt:""}),(0,a.jsx)("img",{src:"./images/lottery/ticket-r.png",width:"121px",height:"72px",alt:""})]}),Z.pq().price&&(0,a.jsx)(a.Fragment,{children:n===l.gN.OPEN?(0,a.jsxs)(a.Fragment,{children:[o.isNaN()?(0,a.jsx)(s.EAD,{my:"7px",height:60,width:190}):(0,a.jsx)(ot,{fontSize:"64px",bold:!0,prefix:"$",value:d,mb:"8px",decimals:0}),(0,a.jsx)(s.DZT,{mb:"32px",scale:"lg",color:"#ffffff",children:e("in prizes!")})]}):(0,a.jsx)(s.DZT,{mb:"24px",scale:"xl",color:"#ffffff",children:e("Tickets on sale soon")})}),window&&window.SO_LotteryConfig&&window.SO_LotteryConfig.chainName&&(0,a.jsx)(s.DZT,{mb:"8px",scale:"md",color:"#ffffff",id:"lottery-hero-title",children:e("The Lottery operates on the %chainName% Network",{chainName:window.SO_LotteryConfig.chainName})}),(0,a.jsxs)(lt,{position:"relative",width:["240px","288px"],height:["94px","113px"],alignItems:"center",justifyContent:"center",children:[(0,a.jsx)(dt,{children:(0,a.jsx)(at,{className:"primaryButton",disabled:c})}),(0,a.jsx)(ct,{children:(0,a.jsx)(W,{width:"100%"})})]})]})};var pt=n(67748),mt=n(71295),gt=n(55797),ft=n(77528);const jt=(0,me.wb)(),yt=(e,t)=>{const n=e.split("").reverse(),i=t.split("").reverse(),r=[];for(let s=0;s<i.length-1&&n[s]===i[s];s++)r.push(n[s]);return r.length-1},bt=async e=>{const{roundId:t,userTickets:n,finalNumber:i}=e,r=n.map(e=>({roundId:t,id:e.id,number:e.number,status:e.status,rewardBracket:yt(e.number,i)})).filter(e=>e.rewardBracket>=0),s=r.filter(e=>!e.status);if(s.length>0){const{ticketsWithUnclaimedRewards:e,cakeTotal:n}=await(async e=>{const t=e.map(e=>{const{roundId:t,id:n,rewardBracket:i}=e;return{name:"viewRewardsForTicketId",address:jt,params:[t,n,i]}});try{const n=await(0,pe.h)(pt,t),i=n.reduce((e,t)=>e.plus(new S.A(t[0].toString())),J.AH);return{ticketsWithUnclaimedRewards:e.map((e,t)=>({...e,cakeReward:n[t]})),cakeTotal:i}}catch(n){return console.error(n),{ticketsWithUnclaimedRewards:null,cakeTotal:null}}})(s);return{ticketsWithUnclaimedRewards:e,allWinningTickets:r,cakeTotal:n,roundId:t}}return r.length>0?{ticketsWithUnclaimedRewards:null,allWinningTickets:r,cakeTotal:null,roundId:t}:null},Ct=(e,t)=>{const n=t.find(t=>t.id===e);return null===n||void 0===n?void 0:n.finalNumber},vt=async(e,t,n,i)=>{const{rounds:r}=t;if(0===r.length)return[];if(t.account.toLowerCase()!==e.toLowerCase())return[];const s=r.filter(e=>{const t=parseInt(i,10)-ft.$E;return parseInt(e.lotteryId,10)>=t}).filter(e=>e.status.toLowerCase()===l.gN.CLAIMABLE).filter(e=>!e.claimed||parseInt(e.totalTickets,10)>100).slice(0,mt.PE);if(s.length>0){const t=s.map(e=>e.lotteryId),i=(await(0,gt.F)(t,e)).filter(e=>{var t;return(null===e||void 0===e||null===(t=e.userTickets)||void 0===t?void 0:t.length)>0}).map(e=>({...e,finalNumber:Ct(e.roundId,n)}));return(await Promise.all(i.map(e=>bt(e)))).filter(e=>null!==e).filter(e=>e.ticketsWithUnclaimedRewards)}return[]};var wt=n(8682),kt=n.n(wt);const St=e=>{let{number:t,size:n="32px",fontSize:r="16px",rotateText:l,...o}=e;const[d,c]=(0,i.useState)([]),u=Re(t).split("").slice(0,window.SO_LotteryConfig.numbersCount),x=["pink","lilac","teal","aqua","green","yellow"];return(0,i.useEffect)(()=>{l&&u&&0===d.length&&c(u.map(()=>(0,re.random)(-30,30)))},[l,u,d]),(0,a.jsx)(s.son,{justifyContent:"left",maxHeight:"71px",...o,children:u.map((e,t)=>(0,a.jsx)(V,{rotationTransform:l&&d[t],size:n,fontSize:r,color:x[t],number:e},kt()()))})},At=window.SO_LotteryConfig.numbersCount,Et=(0,r.Ay)(s.son)`
  position: relative;
  padding: 4px 16px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  border-radius: ${e=>{let{theme:t}=e;return t.radii.default}};
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  justify-content: space-between;
`,It=r.Ay.div`
  z-index: 1;
  width: ${e=>{let{numberMatches:t}=e;return(t<At?t*(100/At):100)+"%"}};
  height: 34px;
  border-radius: ${e=>{let{theme:t}=e;return t.radii.default}};
  top: 0;
  left: 0;
  position: absolute;
  border: 2px ${e=>{let{theme:t}=e;return t.colors.primary}} solid;
`,Dt=e=>{let{localId:t,id:n,number:i,rewardBracket:r}=e;const{t:l}=(0,v.Bd)(),o=Re(i).split("").slice(0,window.SO_LotteryConfig.numbersCount),d=r+1;return(0,a.jsxs)(s.son,{flexDirection:"column",mb:"12px",children:[(0,a.jsxs)(s.son,{justifyContent:"space-between",children:[(0,a.jsxs)(s.EYj,{fontSize:"12px",color:"textSubtle",children:["#",parseInt(n,10)+1]}),r>=0&&(0,a.jsxs)(s.EYj,{fontSize:"12px",children:[l("Matched first")," ",d]})]}),(0,a.jsxs)(Et,{children:[r>=0&&(0,a.jsx)(It,{numberMatches:d}),o.map(e=>(0,a.jsx)(s.EYj,{fontSize:"16px",children:e},`${t||n}-${e}-${kt()()}`))]})]})};var Bt=n(44823),Tt=n(6613);const Lt=e=>{let{onSuccess:t,roundsToClaim:n}=e;const{account:r,library:l}=(0,A.Yu)(),{t:o}=(0,v.Bd)(),d=(0,I.j)(),{maxNumberTicketsPerBuyOrClaim:c,currentLotteryId:u}=M(),x=(0,w.YW)(),{toastSuccess:h,toastError:p}=(0,se.A)(),[m,g]=(0,i.useState)(0),[f,j]=(0,i.useState)(!1),[y,b]=(0,i.useState)(Math.ceil(n[m].ticketsWithUnclaimedRewards.length/c.toNumber())),C=(0,de.n8)(),k=n[m],S=(0,Tt.bQ)(),E=k.cakeTotal,D=E.times(S),T=(0,z.zR)(E).toNumber(),L=(0,z.zR)(D).toNumber(),F=(N=k.ticketsWithUnclaimedRewards,{lotteryId:k.roundId,ticketIds:N.map(e=>e.id),brackets:N.map(e=>e.rewardBracket)});var N;const R=c.lt(F.ticketIds.length),$=()=>{n.length>m+1?(g(m+1),d((0,B.XD)({account:r,currentLotteryId:u}))):t()},Y=async()=>{const{lotteryId:e,ticketIds:t,brackets:n}=F,i=((e,t)=>{const n=[],i=c.toNumber();for(let r=0;r<e.length;r+=i){const s=e.slice(r,i+r),l=t.slice(r,i+r);n.push({ticketIds:s,brackets:l})}return n})(t,n),r=i.length,s=[];j(!0);for(const d of i)try{const t=await ue(C,"claimTickets",[e,d.ticketIds,d.brackets],{gasPrice:x}),n=await t.wait();n.status&&(s.push(n),b(r-s.length),s.length!==r&&h(o("Prizes Collected!"),(0,a.jsx)(je.Gf,{txHash:n.transactionHash,children:o("Claim %claimNum% of %claimTotal% for round %lotteryId% was successful. Please confirm the next transaction",{claimNum:s.length,claimTotal:r,lotteryId:e})})))}catch(l){console.error(l),j(!1),p(o("Error"),o("%error% - Please try again.",{error:l.message}));break}s.length===r&&(j(!1),h(o("Prizes Collected!"),o("Your %symbol% prizes for round %lotteryId% have been sent to your wallet",{lotteryId:e,symbol:Z.pq().symbol})),$())};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.son,{flexDirection:"column",children:[(0,a.jsx)(s.EYj,{mb:"4px",textAlign:["center",null,"left"],children:o("You won")}),(0,a.jsxs)(s.son,{alignItems:["flex-start",null,"center"],justifyContent:["flex-start",null,"space-between"],flexDirection:["column",null,"row"],children:[(0,a.jsx)(P,{textAlign:["center",null,"left"],lineHeight:"1.1",value:T,fontSize:"44px",bold:!0,color:"secondary",unit:` ${Z.pq().symbol}!`}),(0,a.jsx)(s.LlA,{ml:["0",null,"12px"],width:"64px"})]}),(0,a.jsx)(P,{mt:["12px",null,"0"],textAlign:["center",null,"left"],value:L,fontSize:"12px",color:"textSubtle",unit:" USD",prefix:"~"})]}),(0,a.jsx)(s.son,{alignItems:"center",justifyContent:"center",children:(0,a.jsxs)(s.EYj,{mt:"8px",fontSize:"12px",color:"textSubtle",children:[o("Round")," #",k.roundId]})}),(0,a.jsx)(s.son,{alignItems:"center",justifyContent:"center",children:(0,a.jsxs)(s.$nd,{isLoading:f,endIcon:f?(0,a.jsx)(s.gS_,{spin:!0,color:"currentColor"}):null,mt:"20px",width:"100%",onClick:()=>R?Y():(async()=>{const{lotteryId:e,ticketIds:t,brackets:n}=F;j(!0);try{var i;const r=await ue(C,"claimTickets",[e,t,n],{gasPrice:await(null===l||void 0===l||null===(i=l.getGasPrice)||void 0===i?void 0:i.call(l))||x}),s=await r.wait();s.status&&(h(o("Prizes Collected!"),(0,a.jsx)(je.Gf,{txHash:s.transactionHash,children:o("Your %symbol% prizes for round %lotteryId% have been sent to your wallet",{lotteryId:e,symbol:Z.pq().symbol})})),j(!1),$())}catch(r){console.error(r),p(o("Error"),o("%error% - Please try again.",{error:r.message})),j(!1)}})(),children:[o(f?"Claiming":"Claim")," ",y>1?`(${y})`:""]})})]})},Ft=(0,r.Ay)(s.Bs0)`
  position: relative;
  overflow: visible;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    min-width: 380px;
  }
`,Nt=(0,r.Ay)(s.rQ0)`
  background: ${e=>{let{theme:t}=e;return t.colors.gradients.cardHeader}};
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
`,Mt=r.Ay.div`
  position: absolute;
  top: -116px; // line up bunny at the top of the modal
  left: 0px;
  text-align: center;
  width: 100%;
`,Rt=()=>{(0,Bt.A)({particleCount:200,startVelocity:30,gravity:.5,spread:350,origin:{x:.5,y:.3}})},$t=e=>{let{onDismiss:t,roundsToClaim:n}=e;const{t:r}=(0,v.Bd)(),{account:l}=(0,A.Yu)(),{currentLotteryId:o}=M(),d=(0,I.j)();return(0,i.useEffect)(()=>{(0,re.delay)(Rt,100)},[]),(0,a.jsxs)(Ft,{minWidth:"280px",children:[(0,a.jsx)(Mt,{children:(0,a.jsx)("img",{src:"./images/decorations/prize-bunny.png",alt:"bunny decoration",height:"124px",width:"168px"})}),(0,a.jsxs)(Nt,{children:[(0,a.jsx)(s.wto,{children:(0,a.jsx)(s.DZT,{children:r("Collect Winnings")})}),(0,a.jsx)(s.s_y,{onDismiss:t})]}),(0,a.jsx)(s.cwr,{p:"24px",children:(0,a.jsx)(Lt,{onSuccess:()=>{d((0,B.XD)({account:l,currentLotteryId:o})),t()},roundsToClaim:n})})]})},Yt=(0,r.Ay)(s.son)`
  flex-direction: column;
  margin: -24px;
  padding: 24px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.dropdown}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
`,zt=(0,r.Ay)(s.azJ)`
  margin-right: -20px;
  padding-right: 24px;
  max-height: 300px;
  overflow-y: scroll;
  margin-top: 24px;
`,_t=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.EAD,{width:"32px",height:"12px",mt:"2px",mb:"4px"}),(0,a.jsx)(s.EAD,{width:"100%",height:"34px",mb:"12px"})]}),Pt=e=>{var t;let{roundId:n}=e;const[r,l]=(0,i.useState)(null),[o,d]=(0,i.useState)(null),[c,u]=(0,i.useState)({allWinningTickets:null,ticketsWithUnclaimedRewards:null,isFetched:!1,claimData:null}),{t:x}=(0,v.Bd)(),{theme:h}=k(),{account:p}=(0,A.Yu)(),{totalTickets:m}=(g=n,F().rounds.find(e=>e.lotteryId===g));var g;const[f]=(0,s.hSE)((0,a.jsx)($t,{roundsToClaim:[c.claimData]}),!1),j=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.EYj,{mb:"16px",children:x("Tickets must match the winning number in the exact same order, starting from the first digit.")}),(0,a.jsx)(s.EYj,{mb:"16px",children:x("If the winning number is \u201c123456\u201d:")}),(0,a.jsx)(s.EYj,{mb:"4px",children:x("\u201c120000\u201d matches the first 2 digits.")}),(0,a.jsx)(s.EYj,{children:x("\u201c000006\u201d matches the last digit, but since the first five digits are wrong, it doesn\u2019t win any prizes.")})]}),{targetRef:y,tooltip:b,tooltipVisible:C}=(0,s.fSn)((0,a.jsx)(j,{}),{placement:"bottom-end",tooltipOffset:[20,10]});(0,i.useEffect)(()=>{(async()=>{const e=await(0,gt.e0)(p,n),t=await(0,T.sH)(n),i=Pe(t),r=await bt({roundId:n,userTickets:e,finalNumber:i.finalNumber.toString()});if(u({isFetched:!0,allWinningTickets:null===r||void 0===r?void 0:r.allWinningTickets,ticketsWithUnclaimedRewards:null===r||void 0===r?void 0:r.ticketsWithUnclaimedRewards,claimData:r}),l(i),null!==r&&void 0!==r&&r.allWinningTickets){const t=(s=e,o=r.allWinningTickets,s.map(e=>o.find(t=>t.id===e.id)||e)),n=t.sort((e,t)=>{const n=void 0===e.rewardBracket?0:e.rewardBracket+1;return(void 0===t.rewardBracket?0:t.rewardBracket+1)-n});d(n)}else d(e);var s,o})()},[n,p,m]);return(0,a.jsxs)(a.Fragment,{children:[C&&b,(0,a.jsxs)(Yt,{children:[(0,a.jsx)(s.EYj,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",mb:"4px",children:x("Winning number")}),null!==r&&void 0!==r&&r.finalNumber?(0,a.jsx)(St,{number:r.finalNumber.toString()}):(0,a.jsx)(s.EAD,{width:"230px",height:"34px"})]}),(0,a.jsxs)(zt,{children:[(0,a.jsx)(s.EYj,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",my:"16px",children:x("Your tickets")}),(0,a.jsxs)(s.son,{mb:"8px",justifyContent:"space-between",children:[(0,a.jsxs)(s.son,{children:[(0,a.jsx)(s.RgA,{width:"24px",height:"24px",mr:"8px"}),(0,a.jsxs)(s.EYj,{bold:!0,color:"text",children:[x("Total tickets"),":"]})]}),(0,a.jsx)(s.EYj,{bold:!0,color:"text",children:o?o.length:(0,a.jsx)(s.EAD,{width:"56px",height:"24px"})})]}),(0,a.jsxs)(s.son,{mb:"24px",justifyContent:"space-between",children:[(0,a.jsxs)(s.son,{children:[(0,a.jsx)(s.LlA,{width:"24px",height:"24px",mr:"8px"}),(0,a.jsxs)(s.EYj,{bold:!0,color:"text",children:[x("Winning tickets"),":"]})]}),(0,a.jsx)(s.EYj,{bold:!0,color:"text",children:c.isFetched?(null===c||void 0===c||null===(t=c.allWinningTickets)||void 0===t?void 0:t.length)||"0":(0,a.jsx)(s.EAD,{width:"40px",height:"24px"})})]}),o?o.map(e=>(0,a.jsx)(Dt,{id:e.id,number:e.number,rewardBracket:e.rewardBracket,status:e.status},e.id)):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(_t,{}),(0,a.jsx)(_t,{}),(0,a.jsx)(_t,{}),(0,a.jsx)(_t,{})]})]}),(0,a.jsx)(s.son,{borderTop:`1px solid ${h.colors.cardBorder}`,alignItems:"center",justifyContent:"center",children:c.isFetched&&(()=>{var e;return(null===c||void 0===c||null===(e=c.ticketsWithUnclaimedRewards)||void 0===e?void 0:e.length)>0?(0,a.jsx)(s.$nd,{onClick:f,mt:"24px",width:"100%",children:x("Collect Prizes")}):c.allWinningTickets?null:(0,a.jsx)("div",{ref:y,children:(0,a.jsxs)(s.son,{alignItems:"center",justifyContent:"center",mt:"20px",children:[(0,a.jsx)(s.mo0,{height:"20px",width:"20px",color:"textSubtle",mr:"8px"}),(0,a.jsx)(s.Lih,{color:"textSubtle",children:x("Why didn't I win?")})]})})})()})]})},Zt=(0,r.Ay)(s.azJ)`
  max-height: 300px;
  overflow-y: scroll;
  margin-left: -24px;
  margin-right: -24px;
  padding-left: 24px;
  padding-right: 20px;
`,Wt=()=>{const{t:e}=(0,v.Bd)(),{theme:t}=k(),{isTransitioning:n,currentRound:{status:i,userTickets:r}}=M(),o=i!==l.gN.OPEN||n;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.son,{flexDirection:"column",children:[(0,a.jsx)(s.EYj,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",mb:"16px",children:e("Your tickets")}),(0,a.jsx)(Zt,{children:r.tickets.map((e,t)=>(0,a.jsx)(Dt,{localId:t+1,id:e.id,number:e.number,status:e.status},e.id))})]}),(0,a.jsx)(s.son,{borderTop:`1px solid ${t.colors.cardBorder}`,alignItems:"center",justifyContent:"center",children:(0,a.jsx)(et,{disabled:o,mt:"24px",width:"100%"})})]})},Ot=(0,r.Ay)(s.aFV)`
  min-width: 280px;
  max-width: 320px;
`,Ht=e=>{let{onDismiss:t,roundId:n,roundStatus:i}=e;const{t:r}=(0,v.Bd)(),{theme:s}=k(),{currentLotteryId:o}=M(),d=(null===i||void 0===i?void 0:i.toLowerCase())===l.gN.CLAIMABLE||n!==o;return(0,a.jsx)(Ot,{title:`${r("Round")} ${n}`,onDismiss:t,headerBackground:s.colors.gradients.cardHeader,children:d?(0,a.jsx)(Pt,{roundId:n}):(0,a.jsx)(Wt,{})})},qt=e=>{let{rewardBracket:t,cakeAmount:n,numberWinners:i,isHistoricRound:r,isBurn:l,isLoading:o}=e;const{t:d}=(0,v.Bd)(),c=(0,Tt.bQ)();return(0,a.jsxs)(s.son,{flexDirection:"column",children:[o?(0,a.jsx)(s.EAD,{mb:"4px",mt:"8px",height:16,width:80}):(0,a.jsx)(s.EYj,{bold:!0,color:l?"failure":"secondary",children:(()=>{const e=t+1;return l?d("Burn"):d(5===t?"Match all %numberMatch%":"Match first %numberMatch%",{numberMatch:e})})()}),(0,a.jsxs)(a.Fragment,{children:[o||n.isNaN()?(0,a.jsx)(s.EAD,{my:"4px",mr:"10px",height:20,width:110}):(0,a.jsx)(P,{fontSize:"20px",bold:!0,unit:` ${Z.pq().symbol}`,value:(0,z._c)(n,Z.pq().decimals),decimals:Z.pq().viewDecimals}),o||n.isNaN()?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.EAD,{mt:"4px",mb:"16px",height:12,width:70})}):(0,a.jsx)(P,{fontSize:"12px",color:"textSubtle",prefix:"~$",value:(0,z._c)(n.times(c),Z.pq().decimals),decimals:Z.pq().viewDecimals}),r&&n&&(0,a.jsxs)(a.Fragment,{children:["0"!==i&&(0,a.jsxs)(s.EYj,{fontSize:"12px",color:"textSubtle",children:[(0,z.cB)(n.div(parseInt(i,10)),Z.pq().decimals,2)," ",Z.pq().symbol," ",d("each")]}),(0,a.jsxs)(s.EYj,{fontSize:"12px",color:"textSubtle",children:[i," ",d("Winners")]})]})]})]})},Ut=(0,r.Ay)(s.son)`
  width: 100%;
  flex-direction: column;
`,Vt=r.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  row-gap: 16px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    grid-template-columns: repeat(4, 1fr);
  }
`,Qt=e=>{let{lotteryNodeData:t,isHistoricRound:n}=e;const{t:r}=(0,v.Bd)(),[l,o]=(0,i.useState)({isLoading:!0,cakeToBurn:J.AH,rewardsLessTreasuryFee:J.AH,rewardsBreakdown:null,countWinnersPerBracket:null});(0,i.useEffect)(()=>{if(t){const{treasuryFee:e,amountCollectedInCake:n,rewardsBreakdown:i,countWinnersPerBracket:r}=t,s=new S.A(e).div(100).div(100).times(new S.A(n)),l=new S.A(n).minus(s);o({isLoading:!1,cakeToBurn:s,rewardsLessTreasuryFee:l,rewardsBreakdown:i,countWinnersPerBracket:r})}else o({isLoading:!0,cakeToBurn:J.AH,rewardsLessTreasuryFee:J.AH,rewardsBreakdown:null,countWinnersPerBracket:null})},[t]);const d=e=>{const t=new S.A(l.rewardsBreakdown[e]).div(100);return l.rewardsLessTreasuryFee.div(100).times(t)},{isLoading:c,countWinnersPerBracket:u,cakeToBurn:x}=l,h=[0,1,2,3,4,5].slice(0,window.SO_LotteryConfig.numbersCount);return(0,a.jsxs)(Ut,{children:[(0,a.jsxs)(s.EYj,{fontSize:"14px",mb:"24px",children:[r("Match the winning number in the same order to share prizes.")," ",!n&&r("Current prizes up for grabs:")]}),(0,a.jsxs)(Vt,{children:[h.map(e=>(0,a.jsx)(qt,{rewardBracket:e,cakeAmount:!c&&d(e),numberWinners:!c&&u[e],isHistoricRound:n,isLoading:c},e)),(0,a.jsx)(qt,{rewardBracket:0,cakeAmount:x,isBurn:!0,isLoading:c})]})]})},Jt=r.Ay.div`
  display: grid;
  grid-template-columns: auto;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    grid-column-gap: 32px;
    grid-template-columns: auto 1fr;
  }
`,Gt=(0,r.Ay)(s.EYj)`
  margin-top: 14px;
`,Kt=(0,r.Ay)(s.ZpM)`
  width: 100%;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    width: 520px;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    width: 756px;
  }
`,Xt=r.Ay.div`
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  padding: 24px;
`,en=()=>{var e;const{t:t,currentLanguage:{locale:n}}=(0,v.Bd)(),{account:r}=(0,A.Yu)(),{currentLotteryId:o,isTransitioning:d,currentRound:c}=M(),{endTime:u,amountCollectedInCake:x,userTickets:h,status:p}=c,[m]=(0,s.hSE)((0,a.jsx)(Ht,{roundId:o,roundStatus:p})),[g,f]=(0,i.useState)(!1),j=p!==l.gN.OPEN||d,y=Z.pq().price||0,b=x.times(y),C=1e3*parseInt(u,10),w=new Date(C),k=p===l.gN.OPEN,S=(null===h||void 0===h||null===(e=h.tickets)||void 0===e?void 0:e.length)||0,E=t(S>1?"You have %amount% tickets this round":"You have %amount% ticket this round",{amount:S}),[I,D]=E.split(S.toString());return(0,a.jsxs)(Kt,{children:[(0,a.jsx)(s.aRn,{p:"16px 24px",children:(0,a.jsxs)(s.son,{justifyContent:"space-between",children:[(0,a.jsx)(s.DZT,{mr:"12px",children:t("Next Draw")}),(0,a.jsxs)(Gt,{children:[o&&`#${p===l.gN.OPEN?`${o} |`:p===l.gN.PENDING?"":parseInt(o,10)+1}`," ",Boolean(u)&&(p===l.gN.OPEN?`${t("Draw")}: ${w.toLocaleString(n,_e)}`:"")]})]})}),(0,a.jsx)(s.bwi,{children:(0,a.jsxs)(Jt,{children:[(0,a.jsx)(s.son,{justifyContent:["center",null,null,"flex-start"],children:(0,a.jsx)(s.DZT,{children:t("Prize Pot")})}),(0,a.jsx)(s.son,{flexDirection:"column",mb:"18px",children:p===l.gN.CLOSE||p===l.gN.CLAIMABLE?(0,a.jsxs)(s.DZT,{scale:"xl",color:"secondary",style:{marginTop:"4px"},textAlign:["center",null,null,"left"],children:[t("Calculating"),"..."]}):Z.pq().price?(0,a.jsxs)(a.Fragment,{children:[b.isNaN()?(0,a.jsx)(s.EAD,{my:"7px",height:40,width:160}):(0,a.jsx)(P,{fontSize:"40px",color:"secondary",textAlign:["center",null,null,"left"],lineHeight:"1",bold:!0,prefix:"~$",value:(0,z._c)(b,Z.pq().decimals),decimals:0}),b.isNaN()?(0,a.jsx)(s.EAD,{my:"2px",height:14,width:90}):(0,a.jsx)(P,{fontSize:"14px",color:"textSubtle",textAlign:["center",null,null,"left"],unit:` ${Z.pq().symbol}`,value:(0,z._c)(x,Z.pq().decimals),decimals:0})]}):(0,a.jsx)(P,{fontSize:"40px",color:"secondary",textAlign:["center",null,null,"left"],lineHeight:"1",bold:!0,unit:` ${Z.pq().symbol}`,value:(0,z._c)(x,Z.pq().decimals),decimals:Z.pq().viewDecimals})}),(0,a.jsx)(s.azJ,{display:["none",null,null,"flex"],children:(0,a.jsx)(s.DZT,{children:t("Your tickets")})}),(0,a.jsxs)(s.son,{flexDirection:["column",null,null,"row"],alignItems:["center",null,null,"center"],children:[k&&(0,a.jsxs)(s.son,{flexDirection:"column",mr:[null,null,null,"24px"],alignItems:["center",null,null,"flex-start"],children:[r&&(0,a.jsxs)(s.son,{justifyContent:["center",null,null,"flex-start"],style:{whiteSpace:"nowrap"},children:[(0,a.jsxs)(s.EYj,{display:"inline",children:[I," "]}),h.isLoading?(0,a.jsx)(s.EAD,{mx:"4px",height:20,width:40}):(0,a.jsx)(P,{value:S,decimals:0,display:"inline",bold:!0,mx:"4px"}),(0,a.jsxs)(s.EYj,{display:"inline",children:[" ",D]})]}),!h.isLoading&&S>0&&(0,a.jsx)(s.$nd,{className:"textButton",onClick:m,height:"auto",width:"fit-content",p:"0",mb:["32px",null,null,"0"],variant:"text",scale:"sm",children:t("View your tickets")})]}),(0,a.jsx)(et,{disabled:j,maxWidth:"280px"}),(0,a.jsx)(Ve,{disabled:!1,maxWidth:"280px"})]})]})}),(0,a.jsxs)(s.wLy,{p:"0",children:[g&&(0,a.jsx)(Xt,{children:(0,a.jsx)(Qt,{lotteryNodeData:c})}),(p===l.gN.OPEN||p===l.gN.CLOSE)&&(0,a.jsx)(s.son,{p:"8px 24px",alignItems:"center",justifyContent:"center",children:(0,a.jsx)(s.deI,{expanded:g,onClick:()=>f(!g),children:t(g?"Hide":"Details")})})]})]})},tn=3600,nn=86400,rn=2629800,sn=31557600,ln=e=>{let t=Math.abs(e);const n={years:0,months:0,days:0,hours:0,minutes:0,seconds:0};return t>=sn&&(n.years=Math.floor(t/sn),t-=n.years*sn),t>=rn&&(n.months=Math.floor(t/rn),t-=n.months*rn),t>=nn&&(n.days=Math.floor(t/nn),t-=n.days*nn),t>=tn&&(n.hours=Math.floor(t/tn),t-=n.hours*tn),t>=60&&(n.minutes=Math.floor(t/60),t-=60*n.minutes),n.seconds=t,n},on=(0,r.Ay)(s.son)`
  ${e=>{let{theme:t,showTooltip:n}=e;return n?` border-bottom: 1px dashed ${t.colors.textSubtle};`:""}}
  div:last-of-type {
    margin-right: 0;
  }
`,an=(0,r.Ay)(s.DZT)`
  background: ${e=>{let{theme:t}=e;return t.colors.gradients.gold}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,dn=e=>{let{minutes:t,hours:n,days:i}=e;const{t:r}=(0,v.Bd)();return(0,a.jsxs)(on,{alignItems:"flex-end",children:[Boolean(i)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(an,{mb:"-4px",scale:"xl",mr:"4px",children:i}),(0,a.jsx)(an,{mr:"12px",children:r("d")})]}),Boolean(n)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(an,{mb:"-4px",scale:"xl",mr:"4px",children:n}),(0,a.jsx)(an,{mr:"12px",children:r("h")})]}),Boolean(t)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(an,{mb:"-4px",scale:"xl",mr:"4px",children:t}),(0,a.jsx)(an,{mr:"12px",children:r("m")})]})]})},cn=e=>{const t=(0,I.j)(),[n,r]=(0,i.useState)(null),s=(0,i.useRef)(null),{currentLotteryId:l}=M();return(0,i.useEffect)(()=>{t((0,B.jb)({isTransitioning:!1}));const n=Math.floor(Date.now()/1e3);return r(e-n),s.current=setInterval(()=>{r(e=>(e<=1&&(clearInterval(s.current),t((0,B.jb)({isTransitioning:!0})),t((0,B.B_)({currentLotteryId:l}))),e-1))},1e3),()=>clearInterval(s.current)},[r,e,l,s,t]),n},un=e=>{let{nextEventTime:t,preCountdownText:n,postCountdownText:i}=e;const r=cn(t),{days:l,hours:o,minutes:d}=ln(r);return(0,a.jsx)(a.Fragment,{children:r?(0,a.jsxs)(s.son,{display:"inline-flex",justifyContent:"flex-end",alignItems:"flex-end",children:[n&&(0,a.jsx)(s.DZT,{mr:"12px",color:"#ffff",children:n}),r>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(dn,{minutes:d+1,hours:o,days:l}),i&&(0,a.jsx)(s.DZT,{color:"#ffff",children:i})]}),r<0&&(0,a.jsx)(s.DZT,{color:"#ffff",children:"Waiting for draw winning combinations"})]}):(0,a.jsx)(s.EAD,{height:"41px",width:"250px"})})},xn=e=>{let{setActiveIndex:t,activeIndex:n}=e;const{t:i}=(0,v.Bd)();return(0,a.jsxs)(s.y$t,{activeIndex:n,onItemClick:t,scale:"sm",variant:"subtle",children:[(0,a.jsx)(s.VWI,{className:"menuButton"+(0===n?" active":""),children:i("All History")}),(0,a.jsx)(s.VWI,{className:"menuButton"+(1===n?" active":""),children:i("Your History")})]})},hn=(0,r.Ay)(s.azJ)`
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto;
  margin-bottom: 8px;
  cursor: pointer;
`,pn=(0,r.Ay)(s.I2q)`
  path {
    fill: ${e=>{let{theme:t}=e;return t.colors.textDisabled}};
  }
`,mn=e=>{let{roundId:t,numberTickets:n,endTime:i,onClick:r,hasWon:l=!1}=e;const{currentLanguage:{locale:o}}=(0,v.Bd)(),d=1e3*parseInt(i,10),c=new Date(d);return(0,a.jsxs)(hn,{onClick:()=>r(t),children:[(0,a.jsx)(s.son,{alignItems:"center",children:(0,a.jsx)(s.EYj,{fontSize:"16px",color:"textSubtle",children:t})}),(0,a.jsxs)(s.son,{mx:"6px",alignItems:["flex-start",null,"center"],justifyContent:["center",null,"flex-start"],flexDirection:["column",null,"row"],children:[(0,a.jsx)(s.EYj,{fontSize:"12px",mr:["0",null,"6px"],children:c.toLocaleDateString(o,Ye)}),(0,a.jsx)(s.EYj,{fontSize:"12px",color:"textSubtle",children:c.toLocaleTimeString(void 0,ze)})]}),(0,a.jsxs)(s.son,{mx:"6px",alignItems:"center",justifyContent:"space-between",children:[(0,a.jsx)(s.EYj,{children:n}),l?(0,a.jsx)(s.wEO,{color:"warning"}):(0,a.jsx)(pn,{})]}),(0,a.jsx)(s.son,{alignItems:"center",justifyContent:"center",children:(0,a.jsx)(s.vKP,{color:"primary"})})]})},gn=(0,r.Ay)(s.azJ)`
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto;
`,fn=e=>{var t;let{handleShowMoreClick:n,numUserRoundsRequested:i,handleHistoryRowClick:r}=e;const{t:o}=(0,v.Bd)(),d=F(),c=null===d||void 0===d?void 0:d.rounds.filter(e=>e.status.toLowerCase()===l.gN.CLAIMABLE),u=null===c||void 0===c?void 0:c.sort((e,t)=>parseInt(t.lotteryId,10)-parseInt(e.lotteryId,10));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(gn,{px:"24px",pt:"24px",mb:"8px",children:[(0,a.jsx)(s.EYj,{bold:!0,fontSize:"12px",color:"secondary",children:"#"}),(0,a.jsx)(s.EYj,{bold:!0,fontSize:"12px",color:"secondary",textTransform:"uppercase",children:o("Date")}),(0,a.jsx)(s.EYj,{bold:!0,fontSize:"12px",color:"secondary",textTransform:"uppercase",children:o("Your Tickets")}),(0,a.jsx)(s.azJ,{width:"20px"})]}),(0,a.jsxs)(s.son,{px:"24px",pb:"24px",flexDirection:"column",overflowY:"scroll",height:"240px",children:[d&&u.map(e=>(0,a.jsx)(mn,{roundId:e.lotteryId,hasWon:e.claimed,numberTickets:e.totalTickets,endTime:e.endTime,onClick:r},e.lotteryId)),(null===d||void 0===d||null===(t=d.rounds)||void 0===t?void 0:t.length)===i&&(0,a.jsx)(s.son,{justifyContent:"center",children:(0,a.jsx)(s.$nd,{mt:"12px",variant:"text",width:"fit-content",onClick:n,children:o("Show More")})})]})]})},jn=(0,r.Ay)(s.bwi)`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,yn=r.Ay.div`
  display: grid;
  grid-template-columns: auto;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    grid-column-gap: 72px;
    grid-row-gap: 36px;
    grid-template-columns: auto 1fr;
  }
`,bn=(0,r.Ay)(s.DSW)`
  right: -20px;
  top: -20px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.xs}} {
    right: -10px;
    top: -10px;
  }
`,Cn=e=>{let{lotteryNodeData:t,lotteryId:n}=e;const{t:i}=(0,v.Bd)(),{currentLotteryId:r,currentRound:{status:o}}=M(),d=F().rounds.find(e=>e.lotteryId===n),{isLg:c,isXl:u,isXxl:x}=(0,s.ZVF)(),h=c||u||x,p=parseInt(r),m=(o===l.gN.CLAIMABLE?p:p-1).toString()===n,[g]=(0,s.hSE)((0,a.jsx)(Ht,{roundId:n,roundStatus:null===t||void 0===t?void 0:t.status})),f=d?d.totalTickets:0,j=i(f>1?"You had %amount% tickets this round":"You had %amount% ticket this round",{amount:f}),[y,b]=j.split(f.toString());return(0,a.jsxs)(jn,{children:[m&&(0,a.jsx)(bn,{text:i("Latest")}),(0,a.jsxs)(yn,{children:[(0,a.jsx)(s.son,{justifyContent:["center",null,null,"flex-start"],children:(0,a.jsx)(s.DZT,{mb:"24px",children:i("Winning Number")})}),(0,a.jsx)(s.son,{maxWidth:["240px",null,null,"100%"],justifyContent:["center",null,null,"flex-start"],children:n?t?(0,a.jsx)(St,{rotateText:h||!1,number:null===t||void 0===t?void 0:t.finalNumber.toString(),mr:[null,null,null,"32px"],size:"100%",fontSize:h?"42px":"16px",maxHeight:"71px"}):(0,a.jsx)(s.EAD,{width:["240px",null,null,"450px"],height:["34px",null,null,"71px"],mr:[null,null,null,"32px"]}):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(s.son,{flexDirection:"column",alignItems:"center",width:["240px",null,null,"480px"],children:[(0,a.jsx)(s.EYj,{mb:"8px",children:i("Please specify Round")}),(0,a.jsx)(s.jzW,{height:"64px",width:"64px"})]})})}),d&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.azJ,{display:["none",null,null,"flex"],children:(0,a.jsx)(s.DZT,{children:i("Your tickets")})}),(0,a.jsxs)(s.son,{flexDirection:"column",mr:[null,null,null,"24px"],alignItems:["center",null,null,"flex-start"],children:[(0,a.jsxs)(s.azJ,{mt:["32px",null,null,0],children:[(0,a.jsxs)(s.EYj,{display:"inline",children:[y," "]}),(0,a.jsx)(s.EYj,{display:"inline",bold:!0,children:d.totalTickets}),(0,a.jsx)(s.EYj,{display:"inline",children:b})]}),(0,a.jsx)(s.$nd,{className:"textButton",onClick:g,height:"auto",width:"fit-content",p:"0",variant:"text",scale:"sm",children:i("View your tickets")})]})]})]})]})},vn=(0,r.Ay)(s.son)`
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  padding: 24px;
  flex-direction: column;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    flex-direction: row;
  }
`,wn=e=>{let{lotteryNodeData:t,lotteryId:n}=e;const{t:r}=(0,v.Bd)(),[l,o]=(0,i.useState)(),d=(e=>{const t=N();return null===t||void 0===t?void 0:t.find(t=>t.id===e)})(n),c=Z.pq().price||0;(0,i.useEffect)(()=>{d||(async()=>{const e=await(0,ft.K1)(void 0,void 0,{id_in:[n]});o(e[0])})()},[d,n]);let u=new S.A(NaN);if(t){const{amountCollectedInCake:e}=t;u=e.times(c)}return(0,a.jsxs)(vn,{children:[(0,a.jsxs)(s.son,{mr:"24px",flexDirection:"column",justifyContent:"space-between",children:[(0,a.jsxs)(s.azJ,{children:[(0,a.jsx)(s.DZT,{children:r("Prize pot")}),(0,a.jsx)(a.Fragment,{children:Z.pq().price?(0,a.jsxs)(a.Fragment,{children:[u.isNaN()?(0,a.jsx)(s.EAD,{my:"7px",height:40,width:200}):(0,a.jsxs)(s.DZT,{scale:"xl",lineHeight:"1",color:"secondary",children:["~$",(0,z.ZV)((0,z._c)(u,Z.pq().decimals),0,0)]}),u.isNaN()?(0,a.jsx)(s.EAD,{my:"2px",height:14,width:90}):(0,a.jsx)(P,{fontSize:"14px",color:"textSubtle",unit:` ${Z.pq().symbol}`,value:(0,z._c)(null===t||void 0===t?void 0:t.amountCollectedInCake,Z.pq().decimals),decimals:Z.pq().viewDecimals})]}):(0,a.jsx)(s.DZT,{scale:"xl",lineHeight:"1",color:"secondary",children:(0,a.jsx)(P,{fontSize:"14px",color:"textSubtle",unit:` ${Z.pq().symbol}`,value:(0,z._c)(null===t||void 0===t?void 0:t.amountCollectedInCake,Z.pq().decimals),decimals:Z.pq().viewDecimals})})})]}),(0,a.jsx)(s.azJ,{mb:"24px",children:(0,a.jsx)(s.son,{children:(0,a.jsxs)(s.EYj,{fontSize:"14px",display:"inline",children:[r("Total players this round"),":"," ",t&&(d||l)?(()=>{var e,t;return!d&&l?null===l||void 0===l||null===(e=l.totalUsers)||void 0===e?void 0:e.toLocaleString():d?null===d||void 0===d||null===(t=d.totalUsers)||void 0===t?void 0:t.toLocaleString():null})():(0,a.jsx)(s.EAD,{height:14,width:31})]})})})]}),(0,a.jsx)(Qt,{lotteryNodeData:t,isHistoricRound:!0})]})},kn=(0,r.Ay)(s.deI)`
  &:hover {
    color: #1FC7D4;
    background-color: transparent;
  }

  &:active {
    color: #1FC7D4;
    background-color: transparent;
  }

  &:focus {
    color: #1FC7D4;
    background-color: transparent;
  }
`,Sn=e=>{let{lotteryNodeData:t,lotteryId:n}=e;const{t:r}=(0,v.Bd)(),[l,o]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{n||o(!1)},[n]),(0,a.jsxs)(s.wLy,{p:"0",children:[l&&(0,a.jsx)(wn,{lotteryNodeData:t,lotteryId:n}),(0,a.jsx)(s.son,{p:"8px 24px",alignItems:"center",justifyContent:"center",children:(0,a.jsx)(kn,{expanded:l,onClick:()=>{n&&o(!l)},children:r(l?"Hide":"Details")})})]})},An=(0,r.Ay)(s.ZpM)`
  width: 100%;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    width: 756px;
  }
`,En=(0,r.Ay)(s.bwi)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 240px;
`,In=e=>{let{handleShowMoreClick:t,numUserRoundsRequested:n}=e;const{t:r,currentLanguage:{locale:o}}=(0,v.Bd)(),{account:d}=(0,A.Yu)(),[c,u]=(0,i.useState)(!1),[x,h]=(0,i.useState)(null),[p,m]=(0,i.useState)(null),{isTransitioning:g,currentRound:{status:f}}=M(),j=F(),y=f!==l.gN.OPEN||g,b=async e=>{u(!0),m(e);const t=await(0,T.sH)(e),n=Pe(t);h(n)};return(0,a.jsxs)(An,{children:[(0,a.jsx)(s.aRn,{children:c?(0,a.jsxs)(s.son,{alignItems:"center",children:[(0,a.jsx)(s.gFQ,{cursor:"pointer",onClick:()=>(u(!1),h(null),void m(null)),mr:"20px"}),(0,a.jsxs)(s.son,{flexDirection:"column",alignItems:"flex-start",justifyContent:"center",children:[(0,a.jsxs)(s.DZT,{scale:"md",mb:"4px",children:[r("Round")," ",p||""]}),null!==x&&void 0!==x&&x.endTime?(0,a.jsxs)(s.EYj,{fontSize:"14px",children:[r("Drawn")," ",$e(o,x.endTime)]}):(0,a.jsx)(s.EAD,{width:"185px",height:"21px"})]})]}):(0,a.jsx)(s.DZT,{scale:"md",children:r("Rounds")})}),(()=>{if(c)return(0,a.jsx)(Cn,{lotteryNodeData:x,lotteryId:p});const e=null===j||void 0===j?void 0:j.rounds.filter(e=>e.status.toLowerCase()===l.gN.CLAIMABLE);return d?0===e.length?(0,a.jsx)(En,{children:(0,a.jsxs)(s.azJ,{maxWidth:"280px",children:[(0,a.jsxs)(s.son,{alignItems:"center",justifyContent:"center",mb:"16px",children:[(0,a.jsx)(O,{height:"24px",mr:"8px"})," ",(0,a.jsx)(s.EYj,{textAlign:"left",children:r("No lottery history found")})]}),(0,a.jsx)(s.EYj,{textAlign:"center",color:"textSubtle",mb:"16px",children:r("Buy tickets for the next round!")}),(0,a.jsx)(et,{disabled:y,width:"100%"})]})}):(0,a.jsx)(fn,{handleHistoryRowClick:b,handleShowMoreClick:t,numUserRoundsRequested:n}):(0,a.jsxs)(En,{children:[(0,a.jsx)(s.EYj,{textAlign:"center",color:"textSubtle",mb:"16px",children:r("Connect your wallet to check your history")}),(0,a.jsx)(fe,{})]})})(),x?(0,a.jsx)(Sn,{lotteryNodeData:x,lotteryId:p}):(0,a.jsx)(s.wLy,{children:(0,a.jsx)(s.son,{flexDirection:"column",justifyContent:"center",alignItems:"center",children:(0,a.jsx)(s.EYj,{fontSize:"12px",color:"textSubtle",children:r("Only showing data for Lottery V2")})})})]})},Dn=(0,r.Ay)(s.pde)`
  width: 60px;
  height: 100%;
  padding: 4px 16px;
`,Bn=(0,r.Ay)(s.K0)`
  width: 32px;

  :disabled {
    background: none;

    svg {
      fill: ${e=>{let{theme:t}=e;return t.colors.textDisabled}};

      path {
        fill: ${e=>{let{theme:t}=e;return t.colors.textDisabled}};
      }
    }
  }
`,Tn=e=>{let{isLoading:t,selectedRoundId:n,mostRecentRound:i,handleInputChange:r,handleArrowButtonPress:l}=e;const{t:o}=(0,v.Bd)(),d=parseInt(n,10);return(0,a.jsxs)(s.son,{alignItems:"center",justifyContent:"space-between",children:[(0,a.jsxs)(s.son,{alignItems:"center",children:[(0,a.jsx)(s.DZT,{mr:"8px",children:o("Round")}),(0,a.jsx)(Dn,{pattern:"^[0-9]+$",inputMode:"numeric",disabled:t,id:"round-id",name:"round-id",value:n,scale:"lg",onChange:e=>{e.currentTarget.validity.valid&&r(e)}})]}),(0,a.jsxs)(s.son,{alignItems:"center",children:[(0,a.jsx)(Bn,{className:"iconButton",disabled:!d||d<=1,onClick:()=>l(d-1),variant:"text",scale:"sm",mr:"4px",children:(0,a.jsx)(s.gFQ,{})}),(0,a.jsx)(Bn,{className:"iconButton",disabled:d>=i,onClick:()=>l(d+1),variant:"text",scale:"sm",mr:"4px",children:(0,a.jsx)(s.sIg,{})}),(0,a.jsx)(Bn,{className:"iconButton",disabled:d>=i,onClick:()=>l(i),variant:"text",scale:"sm",children:(0,a.jsx)(s.bEJ,{})})]})]})},Ln=(0,r.Ay)(s.ZpM)`
  width: 100%;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    width: 756px;
  }
`,Fn=(0,r.Ay)(s.aRn)`
  z-index: 2;
  background: none;
  border-bottom: 1px ${e=>{let{theme:t}=e;return t.colors.cardBorder}} solid;
`,Nn=()=>{const{t:e,currentLanguage:{locale:t}}=(0,v.Bd)(),n=(0,I.j)(),{currentLotteryId:r,lotteriesData:o,currentRound:{status:d,isLoading:c}}=M(),[u,x]=(0,i.useState)(null),[h,p]=(0,i.useState)(""),[m,g]=(0,i.useState)(null),f=(0,i.useRef)(null),j=null===o||void 0===o?void 0:o.length;(0,i.useEffect)(()=>{if(r){const e=r?parseInt(r):null,t=d===l.gN.CLAIMABLE?e:e-1;x(t),p(t.toString())}},[r,d]),(0,i.useEffect)(()=>{g(null);return f.current=setInterval(()=>{h&&(async()=>{const e=await(0,T.sH)(h),t=Pe(e);g(t)})(),clearInterval(f.current)},1e3),()=>clearInterval(f.current)},[h,r,j,n]);return(0,a.jsxs)(Ln,{children:[(0,a.jsxs)(Fn,{children:[(0,a.jsx)(Tn,{isLoading:c,selectedRoundId:h,mostRecentRound:u,handleInputChange:e=>{const{target:{value:t}}=e;t?(p(t),parseInt(t,10)<=0&&p(""),parseInt(t,10)>=u&&p(u.toString())):p("")},handleArrowButtonPress:e=>{p(e?e.toString():"1")}}),(0,a.jsx)(s.azJ,{mt:"8px",children:h?null!==m&&void 0!==m&&m.endTime?(0,a.jsxs)(s.EYj,{fontSize:"14px",children:[e("Drawn")," ",$e(t,m.endTime)]}):(0,a.jsx)(s.EAD,{width:"185px",height:"21px"}):null})]}),(0,a.jsx)(Cn,{lotteryNodeData:m,lotteryId:h}),(0,a.jsx)(Sn,{lotteryNodeData:m,lotteryId:h})]})};let Mn;!function(e){e.NOT_FETCHED="not-fetched",e.IN_PROGRESS="in-progress",e.SUCCESS="success"}(Mn||(Mn={}));const Rn=()=>{const{account:e}=(0,A.Yu)(),{isTransitioning:t,currentLotteryId:n}=M(),r=F(),s=N(),[l,o]=(0,i.useState)([]),[a,d]=(0,i.useState)(Mn.NOT_FETCHED);(0,i.useEffect)(()=>{d(Mn.NOT_FETCHED)},[e,t]);return{fetchAllRewards:async()=>{d(Mn.IN_PROGRESS);const t=await vt(e,r,s,n);o(t),d(Mn.SUCCESS)},unclaimedRewards:l,fetchStatus:a}},$n=r.Ay.img`
  height: 60px;
  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    height: 100px;
  }
`,Yn=r.Ay.img`
  height: 54px;
  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    height: 84px;
  }
`,zn=()=>{const{t:e}=(0,v.Bd)(),{account:t}=(0,A.Yu)(),{isTransitioning:n,currentRound:{status:r}}=M(),{fetchAllRewards:o,unclaimedRewards:d,fetchStatus:c}=Rn(),u=F(),[x,h]=(0,i.useState)(!1),[p,m]=(0,i.useState)(!1),[g]=(0,s.hSE)((0,a.jsx)($t,{roundsToClaim:d}),!1),f=c===Mn.IN_PROGRESS,j=r===l.gN.CLOSE,y=!u.account||j;(0,i.useEffect)(()=>{c===Mn.SUCCESS&&(d.length>0&&!x&&(m(!0),h(!0),g()),0!==d.length||x||(m(!1),h(!0)))},[d,x,c,g]),(0,i.useEffect)(()=>{m(!1),h(!1)},[t,n]);return(0,a.jsx)(s.son,{children:(()=>{if(!t)return(0,a.jsxs)(s.son,{alignItems:"center",justifyContent:"center",children:[(0,a.jsx)($n,{src:"./images/lottery/ticket-l.png",alt:"lottery ticket"}),(0,a.jsxs)(s.son,{mx:["4px",null,"16px"],flexDirection:"column",alignItems:"center",children:[(0,a.jsx)(s.DZT,{textAlign:"center",color:"#F4EEFF",children:e("Connect your wallet")}),(0,a.jsx)(s.DZT,{textAlign:"center",color:"#F4EEFF",mb:"24px",children:e("to check if you've won!")}),(0,a.jsx)(fe,{className:"primaryButton",width:"190px"}),window&&window.SO_LotteryConfig&&window.SO_LotteryConfig.chainName&&(0,a.jsx)(s.DZT,{mb:"8px",scale:"md",color:"#ffffff",id:"lottery-hero-title",children:e("The Lottery operates on the %chainName% Network",{chainName:window.SO_LotteryConfig.chainName})})]}),(0,a.jsx)($n,{src:"./images/lottery/ticket-r.png",alt:"lottery ticket"})]});if(x&&!p)return(0,a.jsxs)(s.son,{alignItems:"center",justifyContent:"center",children:[(0,a.jsx)(Yn,{src:"./images/lottery/torn-ticket-l.png",alt:"torn lottery ticket"}),(0,a.jsxs)(s.son,{mx:["4px",null,"16px"],flexDirection:"column",children:[(0,a.jsxs)(s.DZT,{textAlign:"center",color:"#F4EEFF",children:[e("No prizes to collect"),"..."]}),(0,a.jsx)(s.DZT,{textAlign:"center",color:"#F4EEFF",children:e("Better luck next time!")})]}),(0,a.jsx)(Yn,{src:"./images/lottery/torn-ticket-r.png",alt:"torn lottery ticket"})]});if(x&&p)return(0,a.jsxs)(s.son,{alignItems:"center",justifyContent:"center",children:[(0,a.jsx)($n,{src:"./images/lottery/ticket-l.png",alt:"lottery ticket"}),(0,a.jsxs)(s.son,{mx:["4px",null,"16px"],flexDirection:"column",children:[(0,a.jsx)(s.DZT,{textAlign:"center",color:"#F4EEFF",children:e("Congratulations!")}),(0,a.jsx)(s.DZT,{textAlign:"center",color:"#F4EEFF",children:e("Why not play again")})]}),(0,a.jsx)($n,{src:"./images/lottery/ticket-r.png",alt:"lottery ticket"})]});return(0,a.jsxs)(s.son,{alignItems:"center",justifyContent:"center",children:[(0,a.jsx)($n,{src:"./images/lottery/ticket-l.png",alt:"lottery ticket"}),(0,a.jsxs)(s.son,{mx:["4px",null,"16px"],flexDirection:"column",children:[(0,a.jsx)(s.DZT,{textAlign:"center",color:"#F4EEFF",mb:"24px",children:e("Are you a winner?")}),(0,a.jsx)(s.$nd,{className:"primaryButton",disabled:y,onClick:o,isLoading:f,endIcon:f?(0,a.jsx)(s.gS_,{color:"currentColor",spin:!0}):null,children:j?`${e("Calculating rewards")}...`:e(f?"Checking":"Check Now")})]}),(0,a.jsx)($n,{src:"./images/lottery/ticket-r.png",alt:"lottery ticket"})]})})()})};window.SO_LotteryConfig.numbersCount;const _n=r.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  height: 1px;
  margin: 40px 0;
  width: 100%;
`,Pn=r.Ay.ul`
  list-style-type: none;
  margin-left: 8px;
  padding: 0;
  li {
    margin: 0;
    padding: 0;
  }
  li::before {
    content: '•';
    margin-right: 4px;
    color: ${e=>{let{theme:t}=e;return t.colors.textSubtle}};
  }
  li::marker {
    font-size: 12px;
  }
`,Zn=(0,r.Ay)(s.son)`
  gap: 24px;
  width: 100%;
  flex-direction: column;
  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    flex-direction: row;
  }
`,Wn=(0,r.Ay)(s.azJ)`
  display: flex;
  align-self: baseline;
  position: relative;
  background: ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  padding: 1px 1px 3px 1px;
  border-radius: ${e=>{let{theme:t}=e;return t.radii.card}};
`,On=(0,r.Ay)(s.azJ)`
  width: 100%;
  padding: 24px;
  background: ${e=>{let{theme:t}=e;return t.card.background}};
  border-radius: ${e=>{let{theme:t}=e;return t.radii.card}};
`,Hn=e=>{let{step:t}=e;return(0,a.jsx)(Wn,{width:"100%",children:(0,a.jsxs)(On,{height:["200px","180px",null,"200px"],children:[(0,a.jsx)(s.EYj,{mb:"16px",fontSize:"12px",bold:!0,textAlign:"right",textTransform:"uppercase",children:t.label}),(0,a.jsx)(s.DZT,{mb:"16px",scale:"lg",color:"secondary",children:t.title}),(0,a.jsx)(s.EYj,{color:"textSubtle",children:t.subtitle})]})})},qn=((0,r.Ay)(s.son)`
  gap: 6.5px;
  padding-left: 7px;
  align-items: center;
  width: 100%;
`,(0,r.Ay)(s.N_E)`
  display: inline;

  &:hover, &;active, &:focus {
    color: #1FC7D4;
  }
`,r.Ay.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 46px 64px 64px;
`,r.Ay.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-auto-rows: max-content;
  row-gap: 4px;
`),Un=r.Ay.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-color: ${e=>{let{color:t}=e;return t}};
`,Vn=e=>{let{color:t,text:n}=e;return(0,a.jsxs)(s.son,{alignItems:"center",children:[(0,a.jsx)(Un,{color:t}),(0,a.jsx)(s.EYj,{color:"textSubtle",children:n})]})},Qn=()=>{const{t:e}=(0,v.Bd)(),t=window.SO_LotteryConfig.winPercents,n=window.SO_LotteryConfig.numbersCount;return(0,a.jsx)(Wn,{width:["280px","330px","380px"],children:(0,a.jsxs)(On,{height:"auto",children:[(0,a.jsxs)(s.son,{justifyContent:"space-between",children:[(0,a.jsx)(s.EYj,{fontSize:"12px",color:"secondary",bold:!0,textTransform:"uppercase",children:e("Digits matched")}),(0,a.jsx)(s.EYj,{fontSize:"12px",color:"secondary",bold:!0,textAlign:"right",textTransform:"uppercase",children:e("Prize pool allocation")})]}),(0,a.jsxs)(qn,{children:[n>=1&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Vn,{color:"#FFE362",text:e(1==n?"Matches all %digits%":"Matches first %digits%",{digits:1})}),(0,a.jsxs)(s.EYj,{textAlign:"right",bold:!0,children:[parseFloat(t.match_1.toFixed(2)),"%"]})]}),n>=2&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Vn,{color:"#85C54E",text:e(2==n?"Matches all %digits%":"Matches first %digits%",{digits:2})}),(0,a.jsxs)(s.EYj,{textAlign:"right",bold:!0,children:[parseFloat(t.match_2.toFixed(2)),"%"]})]}),n>=3&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Vn,{color:"#028E75",text:e(3==n?"Matches all %digits%":"Matches first %digits%",{digits:3})}),(0,a.jsxs)(s.EYj,{textAlign:"right",bold:!0,children:[parseFloat(t.match_3.toFixed(2)),"%"]})]}),n>=4&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Vn,{color:"#36E8F5",text:e(4==n?"Matches all %digits%":"Matches first %digits%",{digits:4})}),(0,a.jsxs)(s.EYj,{textAlign:"right",bold:!0,children:[parseFloat(t.match_4.toFixed(2)),"%"]})]}),n>=5&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Vn,{color:"#A881FC",text:e(5==n?"Matches all %digits%":"Matches first %digits%",{digits:5})}),(0,a.jsxs)(s.EYj,{textAlign:"right",bold:!0,children:[parseFloat(t.match_5.toFixed(2)),"%"]})]}),n>=6&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Vn,{color:"#D750B2",text:e(6==n?"Matches all %digits%":"Matches first %digits%",{digits:6})}),(0,a.jsxs)(s.EYj,{textAlign:"right",bold:!0,children:[parseFloat(t.match_6.toFixed(2)),"%"]})]})]})]})})},Jn=(0,r.Ay)(s.son)`
  gap: 24px;
`,Gn=()=>{const{t:e}=(0,v.Bd)(),t=[{label:e("Step %number%",{number:1}),title:e("Buy Tickets"),subtitle:e("Prices are set when the round starts.")},{label:e("Step %number%",{number:2}),title:e("Wait for the Draw"),subtitle:e("The timer is at the top of this page")},{label:e("Step %number%",{number:3}),title:e("Check for Prizes"),subtitle:e("Once the round\u2019s over, come back to the page and check to see if you\u2019ve won!")}];return(0,a.jsxs)(s.azJ,{width:"100%",children:[(0,a.jsxs)(s.son,{mb:"40px",alignItems:"center",flexDirection:"column",children:[(0,a.jsx)(s.DZT,{mb:"24px",scale:"xl",color:"secondary",children:e("How to Play")}),(0,a.jsx)(s.EYj,{textAlign:"center",children:e("If the digits on your tickets match the winning numbers in the correct order, you win a portion of the prize pool.")}),(0,a.jsx)(s.EYj,{children:e("Simple!")})]}),(0,a.jsx)(Zn,{children:t.map(e=>(0,a.jsx)(Hn,{step:e},e.label))}),(0,a.jsx)(_n,{}),(0,a.jsxs)(Jn,{flexDirection:["column","column","column","row"],children:[(0,a.jsxs)(s.son,{flex:"2",flexDirection:"column",children:[(0,a.jsx)(s.DZT,{mb:"24px",scale:"lg",color:"secondary",children:e("Winning Criteria")}),(0,a.jsx)(s.DZT,{mb:"24px",scale:"md",children:e("The digits on your ticket must match in the correct order to win.")}),(0,a.jsx)(s.EYj,{mb:"16px",color:"textSubtle",children:e("Here\u2019s an example lottery draw, with two tickets, A and B.")}),(0,a.jsxs)(Pn,{children:[(0,a.jsx)("li",{children:(0,a.jsx)(s.EYj,{display:"inline",color:"textSubtle",children:e("Ticket A: The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket only wins a \u201cMatch first 3\u201d prize.")})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.EYj,{display:"inline",color:"textSubtle",children:e("Ticket B: Even though the last 5 digits match, the first digit is wrong, so this ticket doesn\u2019t win a prize.")})})]}),(0,a.jsx)(s.EYj,{mt:"16px",color:"textSubtle",children:e("Prize brackets don\u2019t \u2018stack\u2019: if you match the first 3 digits in order, you\u2019ll only win prizes from the \u2018Match 3\u2019 bracket, and not from \u2018Match 1\u2019 and \u2018Match 2\u2019.")})]}),(0,a.jsx)(s.son,{flex:"1",justifyContent:"center",children:(0,a.jsx)(Qn,{})})]}),(0,a.jsx)(_n,{}),(0,a.jsx)(Jn,{flexDirection:["column","column","column","row"]})]})};var Kn=n(98933);const Xn=()=>{const{account:e}=(0,A.Yu)(),t=(0,I.j)(),[n,r]=(0,i.useState)(Kn.j6);return{numUserRoundsRequested:n,handleShowMoreUserRounds:()=>{t((0,B.OV)({account:e,skip:n})),r(n+Kn.j6)}}},ei=r.Ay.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`,ti=r.Ay.div`
  align-item: center;
  font-size: 11px;
  margin-top: 10px;
  color: gray;

`,ni=()=>(0,a.jsxs)(ti,{children:["Powered by"," ",(0,a.jsx)(ei,{href:"https://onout.org/lottery",target:"_blank",rel:"noreferrer",children:"OnOut - no-code tool to create Lottery"})]});var ii=n(97745),ri=(n(38971),n(38766));const si=e=>[{label:e("Trade"),icon:"Swap",href:"/swap",showItemsOnMobile:!1,items:[{label:e("Exchange"),href:"/swap"},{label:e("Liquidity"),href:"/liquidity"}]},{label:e("Earn"),href:"/farms",icon:"Earn",items:[{label:e("Farms"),href:"/farms"},{label:e("Pools"),href:"/pools"}]},{label:e("Win"),href:"/prediction",icon:"Trophy",items:[{label:e("Prediction (BETA)"),href:"/prediction"},{label:e("Lottery"),href:"/lottery"}]},{label:e("NFT"),href:`${ri.aF}`,icon:"Nft",items:[{label:e("Overview"),href:`${ri.aF}`},{label:e("Collections"),href:`${ri.aF}/collections`}]},{label:"",href:"/info",icon:"More",hideSubNav:!0,items:[{label:e("Info"),href:"/info"},{label:e("IFO"),href:"/ifo"},{label:e("Voting"),href:"/voting"},{type:s.CMY.DIVIDER},{label:e("Leaderboard"),href:"/teams"},{type:s.CMY.DIVIDER},{label:e("Blog"),href:"https://medium.com/pancakeswap",type:s.CMY.EXTERNAL_LINK},{label:e("Docs"),href:"https://docs.pancakeswap.finance",type:s.CMY.EXTERNAL_LINK}]}];var li=n(17429),oi=n(28915),ai=n(37970);const di=(0,r.Ay)(s.son)`
  align-items: center;
  background-color: ${e=>{let{theme:t}=e;return t.colors.dropdown}};
  border-radius: 16px;
  position: relative;
`,ci=r.Ay.div`
  flex: 1;
  position: relative;
  padding-left: 16px;

  & > input {
    background: transparent;
    border: 0;
    color: ${e=>{let{theme:t}=e;return t.colors.text}};
    display: block;
    font-weight: 600;
    font-size: 16px;
    padding: 0;
    width: 100%;

    &:focus {
      outline: 0;
    }
  }

  &:after {
    background: linear-gradient(
      to right,
      ${e=>{let{theme:t}=e;return t.colors.background}}00,
      ${e=>{let{theme:t}=e;return t.colors.background}}E6
    );
    content: '';
    height: 100%;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
  }
`,ui=r.Ay.div`
  display: ${e=>{let{isTooltipDisplayed:t}=e;return t?"inline-block":"none"}};
  position: absolute;
  padding: 8px;
  top: -38px;
  right: 0;
  text-align: center;
  background-color: ${e=>{let{theme:t}=e;return t.colors.contrast}};
  color: ${e=>{let{theme:t}=e;return t.colors.invertedContrast}};
  border-radius: 16px;
  opacity: 0.7;
  width: 100px;
`,xi=e=>{let{account:t,...n}=e;const[r,l]=(0,i.useState)(!1),{t:o}=(0,v.Bd)();function d(){l(!0),setTimeout(()=>{l(!1)},1e3)}return(0,a.jsxs)(s.azJ,{position:"relative",...n,children:[(0,a.jsxs)(di,{children:[(0,a.jsx)(ci,{title:t,children:(0,a.jsx)("input",{type:"text",readOnly:!0,value:t})}),(0,a.jsx)(s.K0,{variant:"text",onClick:()=>{if(navigator.clipboard&&navigator.permissions)navigator.clipboard.writeText(t).then(()=>d());else if(document.queryCommandSupported("copy")){const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),d()}},children:(0,a.jsx)(s.TdU,{color:"primary",width:"24px"})})]}),(0,a.jsx)(ui,{isTooltipDisplayed:r,children:o("Copied")})]})},hi=e=>{let{hasLowBnbBalance:t,onDismiss:n}=e;const{t:i}=(0,v.Bd)(),{account:r}=(0,A.Yu)(),{balance:l,fetchStatus:o}=ne(),{balance:d,fetchStatus:c}=ie(Z.Ay.cake.address),{logout:u}=(0,ge.A)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.EYj,{color:"secondary",fontSize:"12px",textTransform:"uppercase",fontWeight:"bold",mb:"8px",children:i("Your Address")}),(0,a.jsx)(xi,{account:r,mb:"24px"}),t&&(0,a.jsx)(s.QBZ,{variant:"warning",mb:"24px",children:(0,a.jsxs)(s.azJ,{children:[(0,a.jsx)(s.EYj,{fontWeight:"bold",children:i("BNB Balance Low")}),(0,a.jsx)(s.EYj,{as:"p",children:i("You need BNB for transaction fees.")})]})}),(0,a.jsxs)(s.son,{alignItems:"center",justifyContent:"space-between",children:[(0,a.jsx)(s.EYj,{color:"textSubtle",children:i("BNB Balance")}),o!==ee.SUCCESS?(0,a.jsx)(s.EAD,{height:"22px",width:"60px"}):(0,a.jsx)(s.EYj,{children:(0,z.TZ)(l,6)})]}),(0,a.jsxs)(s.son,{alignItems:"center",justifyContent:"space-between",mb:"24px",children:[(0,a.jsx)(s.EYj,{color:"textSubtle",children:i("CAKE Balance")}),c!==ee.SUCCESS?(0,a.jsx)(s.EAD,{height:"22px",width:"60px"}):(0,a.jsx)(s.EYj,{children:(0,z.cB)(d,18,3)})]}),(0,a.jsx)(s.son,{alignItems:"center",justifyContent:"end",mb:"24px",children:(0,a.jsx)(s.e9T,{href:(0,ai.Qn)(r,"address"),children:i("View on BscScan")})}),(0,a.jsx)(s.$nd,{variant:"secondary",width:"100%",onClick:()=>{n(),u()},children:i("Disconnect Wallet")})]})};var pi=n(27057),mi=n(76730);function gi(){var e;const{chainId:t}=(0,pi.A)(),n=(0,E.d4)(e=>e.transactions);return t&&null!==(e=n[t])&&void 0!==e?e:{}}function fi(e){return(new Date).getTime()-e.addedTime<864e5}const ji=(0,r.Ay)(s.son)`
  align-items: center;
  flex: none;
  width: 24px;
`,yi=r.Ay.div`
  flex: 1;
  padding: 0 8px;
`,bi=(0,r.Ay)(s.N_E)`
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  display: flex;
  margin-bottom: 16px;
  width: 100%;

  &:hover {
    text-decoration: none;
  }
`,Ci=e=>{var t,n;return e.receipt?1===(null===(t=e.receipt)||void 0===t?void 0:t.status)||"undefined"===typeof(null===(n=e.receipt)||void 0===n?void 0:n.status)?(0,a.jsx)(s.Dee,{color:"success",width:"24px"}):(0,a.jsx)(s.thY,{color:"failure",width:"24px"}):(0,a.jsx)(s.fNY,{spin:!0,width:"24px"})},vi=e=>{var t;let{txn:n}=e;const{chainId:i}=(0,pi.A)();return n?(0,a.jsxs)(bi,{href:(0,ai.Qn)(n.hash,"transaction",i),external:!0,children:[(0,a.jsx)(ji,{children:Ci(n)}),(0,a.jsx)(yi,{children:null!==(t=n.summary)&&void 0!==t?t:n.hash}),(0,a.jsx)(ji,{children:(0,a.jsx)(s.aO4,{width:"24px",color:"primary"})})]}):null},wi=()=>{const{chainId:e}=(0,pi.A)(),t=(0,E.wA)(),{t:n}=(0,v.Bd)(),i=gi(),r=(0,re.orderBy)(Object.values(i).filter(fi),"addedTime","desc");return(0,a.jsxs)(s.azJ,{minHeight:"120px",children:[(0,a.jsxs)(s.son,{alignItems:"center",justifyContent:"space-between",mb:"24px",children:[(0,a.jsx)(s.EYj,{color:"secondary",fontSize:"12px",textTransform:"uppercase",fontWeight:"bold",children:n("Recent Transactions")}),r.length>0&&(0,a.jsx)(s.$nd,{scale:"sm",onClick:()=>{e&&t((0,mi._i)({chainId:e}))},variant:"text",px:"0",children:n("Clear all")})]}),r.length>0?r.map(e=>(0,a.jsx)(vi,{txn:e},e.hash)):(0,a.jsx)(s.EYj,{textAlign:"center",children:n("No recent transactions")})]})};let ki;!function(e){e[e.WALLET_INFO=0]="WALLET_INFO",e[e.TRANSACTIONS=1]="TRANSACTIONS"}(ki||(ki={}));const Si=(0,oi.parseUnits)("2","gwei"),Ai=(0,r.Ay)(s.rQ0)`
  background: ${e=>{let{theme:t}=e;return t.colors.gradients.bubblegum}};
`,Ei=r.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.dropdown}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  padding: 16px 24px;
`,Ii=e=>{let{initialView:t=ki.WALLET_INFO,onDismiss:n}=e;const[r,l]=(0,i.useState)(t),{t:o}=(0,v.Bd)(),{balance:d,fetchStatus:c}=ne(),u=c===ee.SUCCESS&&d.lte(Si);return(0,a.jsxs)(s.Bs0,{title:o("Welcome!"),minWidth:"320px",children:[(0,a.jsxs)(Ai,{children:[(0,a.jsx)(s.wto,{children:(0,a.jsx)(s.DZT,{children:o("Your Wallet")})}),(0,a.jsx)(s.K0,{variant:"text",onClick:n,children:(0,a.jsx)(s.USm,{width:"24px",color:"text"})})]}),(0,a.jsx)(Ei,{children:(0,a.jsxs)(s.y$t,{scale:"sm",variant:"subtle",onItemClick:e=>{l(e)},activeIndex:r,fullWidth:!0,children:[(0,a.jsx)(s.VWI,{children:o("Wallet")}),(0,a.jsx)(s.VWI,{children:o("Transactions")})]})}),(0,a.jsxs)(s.cwr,{p:"24px",maxWidth:"400px",width:"100%",children:[r===ki.WALLET_INFO&&(0,a.jsx)(hi,{hasLowBnbBalance:u,onDismiss:n}),r===ki.TRANSACTIONS&&(0,a.jsx)(wi,{})]})]})},Di=()=>{var e,t;const{t:n}=(0,v.Bd)(),{account:i}=(0,A.Yu)(),{logout:r}=(0,ge.A)(),{balance:l,fetchStatus:o}=ne(),{isInitialized:d,isLoading:c,profile:u}=(0,li.xc)(),[x]=(0,s.hSE)((0,a.jsx)(Ii,{initialView:ki.WALLET_INFO})),[h]=(0,s.hSE)((0,a.jsx)(Ii,{initialView:ki.TRANSACTIONS})),p=null===u||void 0===u||null===(e=u.nft)||void 0===e||null===(t=e.image)||void 0===t?void 0:t.thumbnail;o===ee.SUCCESS&&l.lte(Si);return i?(0,a.jsx)(s.BgT,{account:i,avatarSrc:p,children:(0,a.jsx)(s.mzM,{as:"button",onClick:r,children:(0,a.jsxs)(s.son,{alignItems:"center",justifyContent:"space-between",width:"100%",children:[n("Disconnect"),(0,a.jsx)(s.o4l,{})]})})}):(0,a.jsx)(fe,{scale:"sm"})};n(48673),n(70374);n(17076),n(71242);n(67129),n(38208),n(60777);n(67244);const Bi=new he.QE(he.xB.BigInt(25),he.xB.BigInt(1e4)),Ti=new he.QE(he.xB.BigInt(1e4),he.xB.BigInt(1e4));Ti.subtract(Bi);n(89500);n(54172);var Li=n(88145);Li.gql`
  query lastPairDayId($pairId: String) {
    pairDayDatas(first: 1, where: { pairAddress: $pairId }, orderBy: date, orderDirection: desc) {
      id
    }
  }
`,Li.gql`
  query pairHourDatas($pairId: String, $first: Int) {
    pairHourDatas(first: $first, where: { pair: $pairId }, orderBy: hourStartUnix, orderDirection: desc) {
      id
      hourStartUnix
      reserve0
      reserve1
      reserveUSD
      pair {
        token0 {
          id
        }
        token1 {
          id
        }
      }
    }
  }
`,Li.gql`
  query pairDayDatasByIdsQuery($pairIds: [String]) {
    pairDayDatas(where: { id_in: $pairIds }, orderBy: date, orderDirection: desc) {
      id
      date
      reserve0
      reserve1
      reserveUSD
      pairAddress {
        token0 {
          id
        }
        token1 {
          id
        }
      }
    }
  }
`;let Fi;!function(e){e[e.DAY=0]="DAY",e[e.WEEK=1]="WEEK",e[e.MONTH=2]="MONTH",e[e.YEAR=3]="YEAR"}(Fi||(Fi={}));Fi.DAY,Fi.WEEK,Fi.MONTH,Fi.YEAR,Fi.DAY,Fi.WEEK,Fi.MONTH,Fi.YEAR;n(13644);Li.gql`
  query pairDayDatas($pairId: String, $first: Int) {
    pairDayDatas(first: $first, where: { pairAddress: $pairId }, orderBy: date, orderDirection: desc) {
      id
      date
      reserve0
      reserve1
      reserveUSD
      pairAddress {
        token0 {
          id
        }
        token1 {
          id
        }
      }
    }
  }
`,Li.gql`
  query pairHourDatasByIds($pairIds: [String]) {
    pairHourDatas(where: { id_in: $pairIds }, orderBy: hourStartUnix, orderDirection: desc) {
      id
      hourStartUnix
      reserve0
      reserve1
      reserveUSD
      pair {
        token0 {
          id
        }
        token1 {
          id
        }
      }
    }
  }
`,Li.gql`
  query lastPairHourId($pairId: String) {
    pairHourDatas(first: 1, where: { pair: $pairId }, orderBy: hourStartUnix, orderDirection: desc) {
      id
    }
  }
`;n(47130);r.Ay.div`
  :hover,
  :focus {
    opacity: 0.7;
  }
`;var Ni,Mi;!function(e){e.InvalidInput="InvalidInput",e.RiskyLow="RiskyLow",e.RiskyHigh="RiskyHigh"}(Ni||(Ni={})),function(e){e.InvalidInput="InvalidInput"}(Mi||(Mi={}));RegExp("^\\d*(?:\\\\[.])?\\d*$");(0,r.Ay)(s.son)`
  flex-direction: column;
  max-height: 400px;
  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    max-height: none;
  }
`;const Ri=e=>{var t;let{pathname:n,menuItem:i}=e;const r=null!==(t=null===i||void 0===i?void 0:i.items.filter(e=>n.startsWith(e.href)))&&void 0!==t?t:[];if(!r||0===r.length)return;if(1===r.length)return r[0];return r.sort((e,t)=>t.href.length-e.href.length)[0]},$i=r.Ay.div`
  display: flex;
  border-bottom: 2px solid #CCCCCC;
  justify-content: space-between;
  padding: 5px;
  padding-top: 5px;
  padding-bottom: 2px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  background: #FFF;
  z-index: 10;
`,Yi=r.Ay.div`
  display: flex;
  vertical-align: middle;
  line-height: 36px;
`,zi=r.Ay.a`
  font-size: 14pt;
  color: #000000;
  padding-left: 10px;
  padding-right: 10px;
  :hover {
    color: #0c4183;
  }
`,_i=r.Ay.a`
  text-decoration: none;
  height: 40px;
  img {
    display: block;
    width: auto;
    height: 40px;
  }
`,Pi=e=>{var t,n,i,r;const{isDark:s,toggleTheme:l}=k(),{currentLanguage:o,setLanguage:d,t:c}=((0,Tt.bQ)(),(0,v.Bd)()),{pathname:u}=(0,ii.zy)(),[x]=(0,w.PN)(),h=(e=>{let{pathname:t,menuConfig:n}=e;return n.find(e=>t.startsWith(e.href)||Ri({menuItem:e,pathname:t}))})({menuConfig:si(c),pathname:u}),p=(Ri({menuItem:h,pathname:u}),null===(t=window)||void 0===t||null===(n=t.SO_LotteryConfig)||void 0===n?void 0:n.menu),m=null===(i=window)||void 0===i||null===(r=i.SO_LotteryConfig)||void 0===r?void 0:r.logo;return(0,a.jsxs)($i,{className:"mainMenu",children:[(0,a.jsxs)(Yi,{children:[(0,a.jsx)(_i,{href:"/",children:(0,a.jsx)("img",{src:m})}),p&&(0,a.jsx)("nav",{children:p.map(e=>(0,a.jsx)(zi,{href:e.link,target:e.blank?"_blank":"_self",children:e.title}))})]}),(0,a.jsx)(Di,{})]})},Zi=r.Ay.div`
  min-height: calc(100vh - 64px);
`,Wi=()=>{var e,t;(()=>{const{account:e}=(0,A.Yu)(),{fastRefresh:t}=(0,D.A)(),n=(0,I.j)(),r=L();(0,i.useEffect)(()=>{n((0,B.im)())},[n]),(0,i.useEffect)(()=>{r&&(n((0,B.D6)({currentLotteryId:r})),n((0,B.B_)({currentLotteryId:r})))},[n,r,t]),(0,i.useEffect)(()=>{e&&r&&n((0,B.je)({account:e,currentLotteryId:r}))},[n,r,e])})(),Y();const{t:n}=(0,v.Bd)(),{isDark:r,theme:o}=k(),{currentRound:{status:d,endTime:c}}=M(),[u,x]=(0,i.useState)(0),h=!(null!==(e=window)&&void 0!==e&&null!==(t=e.SO_LotteryConfig)&&void 0!==t&&t.hideServiceLink),p=parseInt(c,10),{nextEventTime:m,postCountdownText:g,preCountdownText:f}=R(p,d),{numUserRoundsRequested:j,handleShowMoreUserRounds:y}=Xn();return(0,a.jsxs)(Zi,{children:[(0,a.jsx)(Pi,{}),(0,a.jsx)(C,{className:"lotteryHeader",background:"linear-gradient(180deg, #7645D9 0%, #452A7A 100%)",index:1,hasCurvedDivider:!1,children:(0,a.jsx)(ht,{})}),(0,a.jsx)(C,{className:"buyTicketHolder",containerProps:{style:{marginTop:"-30px"}},background:"linear-gradient(180deg, #7645D9 0%, #5121B1 100%)",concaveDivider:!0,clipFill:{light:"#7645D9"},dividerPosition:"top",index:2,children:(0,a.jsxs)(s.son,{alignItems:"center",justifyContent:"center",flexDirection:"column",pt:"24px",children:[d===l.gN.OPEN&&(0,a.jsx)(s.DZT,{scale:"xl",color:"#ffffff",mb:"24px",textAlign:"center",children:n("Get your tickets now!")}),(0,a.jsx)(s.son,{alignItems:"center",justifyContent:"center",mb:"48px",children:m&&(g||f)?(0,a.jsx)(un,{nextEventTime:m,postCountdownText:g,preCountdownText:f}):(0,a.jsx)(s.EAD,{height:"41px",width:"250px"})}),(0,a.jsx)(en,{}),h&&(0,a.jsx)(ni,{})]})}),(0,a.jsx)(C,{className:"pricesSection",background:"linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",hasCurvedDivider:!1,index:2,children:(0,a.jsx)(zn,{})}),(0,a.jsx)(C,{className:"roundsHistory",innerProps:{style:{margin:"0",width:"100%",paddingLeft:"0px",paddingRight:"0px"}},background:r?"linear-gradient(180deg, #434575 0%, #66578D 100%)":"linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",hasCurvedDivider:!1,index:2,children:(0,a.jsxs)(s.son,{width:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center",children:[(0,a.jsx)(s.DZT,{mb:"24px",scale:"xl",children:n("Finished Rounds")}),(0,a.jsx)(s.azJ,{mb:"24px",children:(0,a.jsx)(xn,{activeIndex:u,setActiveIndex:e=>x(e)})}),0===u?(0,a.jsx)(Nn,{}):(0,a.jsx)(In,{handleShowMoreClick:y,numUserRoundsRequested:j})]})}),(0,a.jsx)(C,{className:"howToPlay",dividerPosition:"top",dividerFill:{light:o.colors.background},clipFill:{light:"#9A9FD0",dark:"#66578D"},index:2,children:(0,a.jsx)(Gn,{})})]})}}}]);
//# sourceMappingURL=291.a9f6044b.chunk.js.map
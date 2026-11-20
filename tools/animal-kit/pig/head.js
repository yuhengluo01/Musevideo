const W=1920,H=1080,cv=document.getElementById('c'),ctx=cv.getContext('2d');
const BAR=2.666626,BEAT=BAR/4,B=n=>(n-1)*BAR,END=29.36;
function rng(seed){return function(){seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;}}
const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x)),seg=(t,a,b)=>clamp((t-a)/(b-a)),eOut=x=>1-Math.pow(1-x,3),eInOut=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;
const eBack=x=>{const c=1.7;return 1+(c+1)*Math.pow(x-1,3)+c*Math.pow(x-1,2);};
const eIn=x=>x*x*x;
const win=(t,a,b,fi=.35,fo=.35)=>Math.min(seg(t,a,a+fi),1-seg(t,b-fo,b)),lerp=(a,b,x)=>a+(b-a)*x;
const VIO='#b89bff',CRIM='#ff6fa8',GOLD='#ffd27a',MAG='#ff9fd0',ICE='#6ff0dc',WHITE='#f6f2ff',SKETCH='#ece8f2',SER='"Noto Serif CJK SC"';
const PAL=[VIO,CRIM,GOLD,MAG,ICE];
const GY=935,FX=760,TX=1480;
const KICKS=JSON.parse(document.getElementById('kicks').textContent);

function Q(p0,c,p1,n=14){const a=[];for(let i=0;i<=n;i++){const t=i/n,u=1-t;a.push([u*u*p0[0]+2*u*t*c[0]+t*t*p1[0],u*u*p0[1]+2*u*t*c[1]+t*t*p1[1]]);}return a;}
function cat(...ps){let a=[];ps.forEach((p,i)=>{a=a.concat(i&&p.length>1?p.slice(1):p)});return a;}
function circ(cx,cy,rx,ry,n=72,a0=-Math.PI/2){const a=[];for(let i=0;i<=n;i++){const t=a0+i/n*Math.PI*2;a.push([cx+Math.cos(t)*rx,cy+Math.sin(t)*ry]);}return a;}
function partial(pts,p){if(p>=1)return pts;if(p<=0)return[];let L=0;const d=[0];for(let i=1;i<pts.length;i++){L+=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);d.push(L);}
  const tg=L*p,o=[pts[0]];for(let i=1;i<pts.length;i++){if(d[i]<=tg)o.push(pts[i]);else{const f=(tg-d[i-1])/(d[i]-d[i-1]||1);o.push([lerp(pts[i-1][0],pts[i][0],f),lerp(pts[i-1][1],pts[i][1],f)]);break;}}return o;}
function trace(p){ctx.beginPath();p.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));}
let PEN=null;
function glow(pts,p,col,w=2.4,a=1,blur=14,head=true){const s=partial(pts,p);if(s.length<2||a<=0.003)return;
  ctx.save();ctx.globalCompositeOperation='lighter';ctx.lineCap='round';ctx.lineJoin='round';trace(s);
  ctx.strokeStyle=col;ctx.globalAlpha=.42*a;ctx.lineWidth=w*3.2;if(blur>0){ctx.shadowColor=col;ctx.shadowBlur=blur;}ctx.stroke();
  ctx.shadowBlur=0;ctx.globalAlpha=a;ctx.lineWidth=w;ctx.stroke();ctx.globalAlpha=.6*a;ctx.lineWidth=w*.4;ctx.strokeStyle='#fff';ctx.stroke();ctx.restore();
  if(head&&p>0&&p<1){PEN=s[s.length-1];}}
function thin(pts,col,w,a){if(a<=.003||pts.length<2)return;ctx.save();ctx.globalCompositeOperation='lighter';ctx.globalAlpha=a;ctx.strokeStyle=col;ctx.lineWidth=w;ctx.lineCap='round';ctx.lineJoin='round';trace(pts);ctx.stroke();ctx.restore();}
function dot(x,y,r,col,a=1){if(a<=0.003)return;const R=Math.max(.1,r*4);ctx.save();ctx.globalCompositeOperation='lighter';const g=ctx.createRadialGradient(x,y,0,x,y,R);g.addColorStop(0,col);g.addColorStop(.25,col);g.addColorStop(1,'rgba(0,0,0,0)');ctx.globalAlpha=Math.min(1,a);ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,R,0,7);ctx.fill();ctx.restore();}
const line=thin;
function hex2rgb(h){const n=parseInt(h.slice(1),16);return[n>>16&255,n>>8&255,n&255];}
function rgba(h,a){const c=hex2rgb(h);return`rgba(${c[0]},${c[1]},${c[2]},${a})`;}
function mixc(a,b,x){const A=hex2rgb(a),Bc=hex2rgb(b);return'#'+A.map((v,i)=>Math.round(lerp(v,Bc[i],x)).toString(16).padStart(2,'0')).join('');}
function sinceKick(t,list){let best=9;for(const k of list){if(t>=k)best=Math.min(best,t-k);}return best;}
function wash(x,y,r,col,a,seed,t){if(a<=0.01||r<=1)return;const rr=rng(seed);ctx.save();ctx.globalCompositeOperation='screen';
  for(let k=0;k<5;k++){const ox=(rr()-.5)*r*.5+Math.sin(t*.3+k+seed)*r*.05,oy=(rr()-.5)*r*.35,R=r*(.55+rr()*.5);const g=ctx.createRadialGradient(x+ox,y+oy,0,x+ox,y+oy,R);g.addColorStop(0,rgba(col,.26*a));g.addColorStop(.7,rgba(col,.12*a));g.addColorStop(1,rgba(col,0));ctx.fillStyle=g;ctx.fillRect(x+ox-R,y+oy-R,R*2,R*2);}ctx.restore();}
function sparks(t,t0,x,y,n,seed,spd=500,life=.7,col=GOLD,up=false){const dt=t-t0;if(dt<0||dt>life)return;const r=rng(seed);for(let i=0;i<n;i++){const an=up?-Math.PI*r():r()*Math.PI*2,v=spd*(.4+r()*.8);const f=d=>[x+Math.cos(an)*v*d,y+Math.sin(an)*v*d+700*d*d];const a=f(dt),b=f(Math.max(0,dt-.045));thin([b,a],r()<.5?'#fff':col,2.2,1-dt/life);}}
function debris(t,t0,x,y,n,seed,spd=700,life=1.4){const dt=t-t0;if(dt<0||dt>life)return;const r=rng(seed);for(let i=0;i<n;i++){const an=-Math.PI*(.05+r()*.9),v=spd*(.3+r()*.9);const px=x+Math.cos(an)*v*dt,py=y+Math.sin(an)*v*dt+1300*dt*dt;if(py>GY+20)continue;const s=4+r()*10;
  ctx.save();ctx.translate(px,py);ctx.rotate(dt*(r()*14-7));ctx.globalAlpha=1-dt/life;ctx.fillStyle='#1a1222';ctx.strokeStyle=r()<.4?CRIM:'#9a8fb0';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(-s,-s*.5);ctx.lineTo(s*.8,-s*.7);ctx.lineTo(s*.4,s*.8);ctx.closePath();ctx.fill();ctx.stroke();ctx.restore();}}
function cracks(x,y,p,a,seed,n=12,len=700){const r=rng(seed);for(let i=0;i<n;i++){const dir=i<n/2?-1:1;let px=x,py=y;const pts=[[px,py]];const L=len*(.5+r()*.6);for(let s=0;s<7;s++){px+=dir*L/7*(.6+r()*.8);py+=(r()-.45)*12+s*1.5*r();pts.push([px,py+(i%(n/2))*7]);}glow(pts,eOut(p),CRIM,2.6,a,16,false);
  if(i%3==0){const q=pts[3];glow([q,[q[0]+dir*40,q[1]+20+r()*20]],eOut(clamp(p*1.5-.5)),CRIM,1.6,a,8,false);}}}
function shock(x,y,p,a,col,maxR,flat=.12,w=5){if(p<=0||p>=1)return;const R=40+eOut(p)*maxR;glow(circ(x,y,R,R*flat,120),1,col,w*(1-p*.6),a*(1-p),20,false);}

function shrink(poly,f){let cx=0,cy=0;poly.forEach(q=>{cx+=q[0];cy+=q[1];});cx/=poly.length;cy/=poly.length;return poly.map(q=>[cx+(q[0]-cx)*f,cy+(q[1]-cy)*f]);}
function plate(poly,p,col,a,live,fillA,hatch=3,seed=1){if(p<=0)return;if(p>=1&&fillA>0){ctx.save();ctx.globalAlpha=fillA*a;ctx.fillStyle='#0d0718';trace(poly);ctx.closePath();ctx.fill();ctx.restore();}
  glow(poly,p,live?col:SKETCH,live?2.6:1.7,a*(live?1:.9),live?12:0);
  if(p>=1){const inn=shrink(poly,.76);thin(inn,live?col:SKETCH,1.1,a*.55);
    const n=poly.length-1,h=Math.floor(n/2);for(let k=1;k<=hatch;k++){const f=k/(hatch+1);const i1=Math.floor(f*h),i2=n-Math.floor(f*h);const A=inn[Math.min(i1,inn.length-1)],Bq=inn[Math.min(i2,inn.length-1)];thin([A,Bq],live?col:SKETCH,.8,a*.35);}
    if(live){const c=shrink(poly,0)[0];dot(c[0],c[1],2.2,col,a*.7);}}}

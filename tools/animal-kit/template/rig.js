const DROP=B(4);
const CA='#ff5a8a',CB='#6ee8ff',CC='#b8a8e0';
// ---------- stick rig ----------
const P0={x:0,oy:0,lean:0,f:1,rot:0,sq:1,fax:40,fay:135,bax:-30,bay:135,flx:22,fly:190,blx:-22,bly:190,walk:0,exp:0,blush:0,a:1,hd:0};
function SP(o){return Object.assign({},P0,o);}
const DISC=['exp','f'];
function kfS(K,T){let i=0;while(i<K.length-1&&K[i+1][0]<=T)i++;const a=K[i],b=K[Math.min(i+1,K.length-1)];if(a===b||T<=a[0])return Object.assign({},a[1]);const p0=seg(T,a[0],b[0]);const p=b[2]=='snap'?eOut(p0):eInOut(p0);const o={};for(const k in a[1])o[k]=DISC.includes(k)?(p<.5?a[1][k]:b[1][k]):lerp(a[1][k],b[1][k],p);return o;}
function ik2(A,T,L1,L2,bend){const dx=T[0]-A[0],dy=T[1]-A[1];const d=Math.min(Math.hypot(dx,dy),L1+L2-.5);const an=Math.atan2(dy,dx);const c=clamp((L1*L1+d*d-L2*L2)/(2*L1*d),-1,1);const al=Math.acos(c)*bend;return[[A[0]+Math.cos(an+al)*L1,A[1]+Math.sin(an+al)*L1],[A[0]+Math.cos(an)*d,A[1]+Math.sin(an)*d]];}
const SS=1.45;
function stickGeo(po,t){const f=po.f,s=SS;const gx=po.x,gy=GY+po.oy;
  const wk=po.walk?Math.sin(t*9)*po.walk:0;
  const hip=[0,-190];const nk=[Math.sin(po.lean)*150,-190-Math.cos(po.lean)*150*po.sq];const hc=[nk[0]+Math.sin(po.lean+po.hd)*44,nk[1]-Math.cos(po.lean+po.hd)*44];const sh=[nk[0]*.92,nk[1]+14];
  const fh=[sh[0]+po.fax,sh[1]+po.fay],bh=[sh[0]+po.bax,sh[1]+po.bay];
  const ff=[po.flx+wk*40,-190+po.fly-Math.max(0,wk)*20],bf=[po.blx-wk*40,-190+po.bly-Math.max(0,-wk)*20];
  const fe=ik2(sh,fh,74,74,1),be=ik2(sh,bh,74,74,1),fk=ik2(hip,ff,98,98,-1),bk=ik2(hip,bf,98,98,-1);
  const T=(p)=>{let x=p[0]*f,y=p[1];const c=Math.cos(po.rot),sn=Math.sin(po.rot);const yy=y+190;const rx=x*c-yy*sn,ry=x*sn+yy*c-190;return[gx+rx*s,gy+ry*s];};
  return{T,hip:T(hip),nk:T(nk),hc:T(hc),sh:T(sh),fh:T(fe[1]),bh:T(be[1]),fe:T(fe[0]),be:T(be[0]),fk:T(fk[0]),bk:T(bk[0]),ff:T(fk[1]),bf:T(bk[1]),f,s};}
function drawStick(po,t,col,prog=1,ghost=false){const a=po.a;if(a<=.01)return null;const G=stickGeo(po,t);const s=G.s,w=ghost?3:5.5;
  const P=(p0,p1)=>seg(prog,p0,p1);
  const head=circ(G.hc[0],G.hc[1],36*s,36*s,40);
  if(!ghost&&P(0,.25)>.5){ctx.save();ctx.globalAlpha=a*.92;ctx.fillStyle='#0c0a16';ctx.beginPath();ctx.arc(G.hc[0],G.hc[1],36*s,0,TAU);ctx.fill();ctx.restore();}
  glow(head,P(0,.25),col,w,a,ghost?0:18,true);
  glow([G.nk,G.hip],P(.25,.4),col,w,a,ghost?0:18,true);
  glow([G.bh,G.be,G.sh],P(.4,.55),col,w,a*(ghost?1:.85),ghost?0:14,true);glow([G.sh,G.fe,G.fh],P(.45,.6),col,w,a,ghost?0:18,true);
  glow([G.hip,G.bk,G.bf],P(.6,.8),col,w,a*(ghost?1:.85),ghost?0:14,true);glow([G.hip,G.fk,G.ff],P(.65,.85),col,w,a,ghost?0:18,true);
  if(!ghost&&prog>.3){const ea=a*seg(prog,.3,.45);const f=G.f,hc=G.hc,r=36*s;const ex=hc[0]+f*r*.38,ey=hc[1]-r*.1;const e2=hc[0]+f*r*-.02;
    const ec='#ffffff';
    if(po.exp==3){[ex,e2].forEach(x=>{glow(heartP(x,ey,.75*s),1,'#ff4a7a',2,ea,8,false);});}
    else if(po.exp==1){[ex,e2].forEach((x,i)=>{glow([[x-7*s,ey-6*s+(i?-3:3)*s*f],[x+7*s,ey-6*s+(i?3:-3)*s*f]],1,ec,2.4,ea,4,false);dot(x,ey+2*s,3.4*s,ec,ea);});}
    else if(po.exp==2){[ex,e2].forEach(x=>glow(Q([x-6*s,ey],[x,ey+4*s],[x+6*s,ey],4),1,ec,2.2,ea,4,false));const tx=ex+3*s;const td=(t*1.3)%1;dot(tx,ey+8*s+td*30*s,3*s,'#8ad8ff',ea*(1-td));}
    else if(po.exp==4){[ex,e2].forEach(x=>glow(circ(x,ey,5*s,5*s,12),1,ec,2,ea,4,false));}
    else if(po.exp==5){[ex,e2].forEach(x=>glow([[x-7*s,ey+1*s],[x+7*s,ey+1*s]],1,ec,2.6,ea,4,false));}
    else{[ex,e2].forEach(x=>dot(x,ey,3.6*s,ec,ea));}
    const mx=hc[0]+f*r*.2,my=hc[1]+r*.42;
    if(po.exp==1)glow(Q([mx-8*s,my+3*s],[mx,my-5*s],[mx+8*s,my+3*s],6),1,ec,2.2,ea,4,false);
    else if(po.exp==2)glow(Q([mx-7*s,my+4*s],[mx,my-3*s],[mx+7*s,my+4*s],6),1,ec,2.2,ea,4,false);
    else if(po.exp==4)glow(circ(mx,my,5*s,6*s,12),1,ec,2,ea,4,false);
    else if(po.exp==5)glow([[mx-8*s,my+2*s],[mx+8*s,my+2*s]],1,ec,2.2,ea,4,false);
    else glow(Q([mx-9*s,my-2*s],[mx,my+7*s],[mx+9*s,my-2*s],6),1,ec,2.2,ea,4,false);
    if(po.blush>.05){ctx.save();ctx.globalAlpha=ea*po.blush*.6;ctx.fillStyle='#ff4a7a';ctx.beginPath();ctx.ellipse(hc[0]+f*r*.45,hc[1]+r*.25,8*s,4.5*s,0,0,TAU);ctx.fill();ctx.restore();}}
  return G;}
function heartP(x,y,s){const o=[];for(let i=0;i<=40;i++){const an=i/40*TAU;o.push([x+16*Math.pow(Math.sin(an),3)*s,y-(13*Math.cos(an)-5*Math.cos(2*an)-2*Math.cos(3*an)-Math.cos(4*an))*s]);}return o;}
function heartF(x,y,s,col,a,fill=true){if(a<=.01)return;const h=heartP(x,y,s);if(fill){ctx.save();ctx.globalAlpha=a*.85;ctx.fillStyle=col;trace(h);ctx.fill();ctx.restore();}glow(h,1,fill?'#ffd0e0':col,1.8,a,12,false);}
function bubble(x,y,txt,a,sc,col,tail=-1){if(a<=.01)return;ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);ctx.font='800 40px '+SER;const w=ctx.measureText(txt).width+50;ctx.globalAlpha=a*.92;ctx.fillStyle='#10101c';ctx.beginPath();ctx.roundRect(-w/2,-38,w,76,30);ctx.fill();ctx.beginPath();ctx.moveTo(tail*w*.25,34);ctx.lineTo(tail*w*.25-tail*30,64);ctx.lineTo(tail*w*.25-tail*44,34);ctx.fill();ctx.globalAlpha=a;ctx.strokeStyle=col;ctx.lineWidth=3;ctx.shadowColor=col;ctx.shadowBlur=16;ctx.beginPath();ctx.roundRect(-w/2,-38,w,76,30);ctx.stroke();ctx.shadowBlur=0;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.fillText(txt,0,14);ctx.restore();}
function chain(A,Bp,a,t,col,tight){if(a<=.01)return;const dx=Bp[0]-A[0],dy=Bp[1]-A[1],L=Math.hypot(dx,dy);const n=Math.max(4,Math.floor(L/34));const sag=(1-tight)*80;const pts=[];for(let i=0;i<=n;i++){const f=i/n;pts.push([A[0]+dx*f,A[1]+dy*f+Math.sin(f*Math.PI)*sag]);}
  for(let i=0;i<n;i++){const p=pts[i],q=pts[i+1];const cx=(p[0]+q[0])/2,cy=(p[1]+q[1])/2,an=Math.atan2(q[1]-p[1],q[0]-p[0]);ctx.save();ctx.translate(cx,cy);ctx.rotate(an);ctx.globalAlpha=a;ctx.strokeStyle=col;ctx.lineWidth=3.4;ctx.shadowColor=col;ctx.shadowBlur=12;ctx.beginPath();if(i%2)ctx.ellipse(0,0,22,4,0,0,TAU);else ctx.ellipse(0,0,22,11,0,0,TAU);ctx.stroke();ctx.restore();}}
function cage(x,y,w,h,a,col,shatter,t){if(a<=.01)return;if(shatter>0){const r=rng(5);for(let i=0;i<14;i++){const bx=x-w/2+i/13*w;const vx=(bx-x)*4+(r()-.5)*400,vy=-500-r()*500;const dt=shatter*1.2;const px=bx+vx*dt,py=y-h/2+vy*dt+1400*dt*dt;const an=dt*(r()*10-5);glow([[px-Math.sin(an)*h*.25,py-Math.cos(an)*h*.25],[px+Math.sin(an)*h*.25,py+Math.cos(an)*h*.25]],1,col,4,a*(1-shatter),16,false);}return;}
  for(let i=0;i<=8;i++){const bx=x-w/2+i/8*w;glow([[bx,y-h],[bx,y]],1,col,4,a,16,false);}glow(Q([x-w/2,y-h],[x,y-h-140],[x+w/2,y-h],20),1,col,4,a,16,false);glow([[x-w/2-20,y],[x+w/2+20,y]],1,col,5,a,16,false);glow([[x-w/2-10,y-h*.55],[x+w/2+10,y-h*.55]],1,col,3,a*.8,10,false);
  glow(circ(x,y-h-150,26,26,20),1,col,4,a,14,false);}
function jar(x,y,s,a,tip){if(a<=.01)return;ctx.save();ctx.translate(x,y);ctx.rotate(tip*1.8);const p=cat(Q([-40*s,-120*s],[-80*s,-60*s],[-60*s,0],8),[[60*s,0]],Q([60*s,0],[80*s,-60*s],[40*s,-120*s],8),[[-40*s,-120*s]]);ctx.globalAlpha=a*.9;ctx.fillStyle='#14100a';trace(p);ctx.fill();ctx.restore();ctx.save();ctx.translate(x,y);ctx.rotate(tip*1.8);const pp=p;ctx.restore();
  const R=pp.map(q=>{const c=Math.cos(tip*1.8),sn=Math.sin(tip*1.8);return[x+q[0]*c-q[1]*sn,y+q[0]*sn+q[1]*c];});glow(R,1,'#c8a050',3,a,14,false);ctx.save();ctx.translate(x,y);ctx.rotate(tip*1.8);ctx.globalAlpha=a;ctx.font='900 '+Math.round(64*s)+'px '+SER;ctx.textAlign='center';ctx.fillStyle='#ffd88a';ctx.shadowColor='#c8a050';ctx.shadowBlur=14;ctx.fillText('醋',0,-36*s);ctx.restore();}
function phone(G,a){if(a<=.01)return;const h=G.fh;const r=[[h[0]-18,h[1]-62],[h[0]+18,h[1]-62],[h[0]+18,h[1]+6],[h[0]-18,h[1]+6],[h[0]-18,h[1]-62]];ctx.save();ctx.globalAlpha=a;ctx.fillStyle='#0c1420';ctx.fillRect(h[0]-18,h[1]-62,36,68);ctx.restore();glow(r,1,CB,2.6,a,12,false);ctx.save();ctx.globalAlpha=a*.5;ctx.fillStyle=CB;ctx.fillRect(h[0]-12,h[1]-54,24,48);ctx.restore();}
function wordBox(x,y,txt,a,sc,col,rot=0){if(a<=.01)return;ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);ctx.font='700 44px '+SER;const w=ctx.measureText(txt).width+44;ctx.globalAlpha=a*.85;ctx.fillStyle='#10100c';ctx.beginPath();ctx.roundRect(-w/2,-36,w,72,14);ctx.fill();ctx.globalAlpha=a;ctx.strokeStyle=col;ctx.lineWidth=2.2;ctx.setLineDash([8,6]);ctx.stroke();ctx.setLineDash([]);ctx.textAlign='center';ctx.fillStyle='#e0d8c8';ctx.fillText(txt,0,15);ctx.restore();}
function shards(t,t0,x,y,a,seed,col,n=16,spd=700){const dt=t-t0;if(dt<0||dt>1.2)return;const r=rng(seed);for(let i=0;i<n;i++){const an=r()*TAU,v=spd*(.3+r()*.9);const px=x+Math.cos(an)*v*dt,py=y+Math.sin(an)*v*dt+900*dt*dt;const s=8+r()*16;const sp=[[-s,-s*.6],[s*.9,-s*.3],[s*.2,s*.8],[-s,-s*.6]].map(q=>{const c=Math.cos(dt*(r()*14-7)),sn=Math.sin(dt*8);return[px+q[0]*c-q[1]*sn,py+q[0]*sn+q[1]*c];});glow(sp,1,col,1.4,a*(1-seg(dt,.5,1.2)),8,false);}}
function rain(a,t){if(a<=.01)return;const r=rng(13);ctx.save();ctx.globalCompositeOperation='lighter';ctx.strokeStyle='#a8b8c0';ctx.lineWidth=1.4;for(let i=0;i<260;i++){const x=r()*W*1.2-W*.1,sp=1000+r()*700,ph=r();const y=-100+((ph*(H+200)+t*sp)%(H+200));ctx.globalAlpha=a*(.2+r()*.4);ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-8,y+36);ctx.stroke();}ctx.restore();}
function bolt(x0,y0,x1,y1,seed,disp,col,a){let pts=[[x0,y0],[x1,y1]];const r=rng(seed);for(let d=0;d<6;d++){const np=[pts[0]];for(let i=0;i<pts.length-1;i++){const p=pts[i],q=pts[i+1];const dx=q[0]-p[0],dy=q[1]-p[1],l=Math.hypot(dx,dy)||1;const off=(r()-.5)*disp;np.push([(p[0]+q[0])/2-dy/l*off,(p[1]+q[1])/2+dx/l*off],q);}pts=np;disp*=.55;}glow(pts,1,col,2.4,a,20,false);}


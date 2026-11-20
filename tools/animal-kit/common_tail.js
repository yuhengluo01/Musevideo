// ===== common frame (shared by ep5+) : needs EP config + epWorld(S) setting FOC =====
let FOC=[600,500];
function kfO(K,T){let i=0;while(i<K.length-1&&K[i+1][0]<=T)i++;const a=K[i],b=K[Math.min(i+1,K.length-1)];if(a===b)return Object.assign({},a[1]);const d=b[0]-a[0];let p=d>0?seg(T,a[0],b[0]):1;p=b[2]=='snap'?eOut(p):eInOut(p);const o={};for(const k in a[1]){o[k]=(k=='dir'||k=='exp'||k=='evil')?(p<.5?a[1][k]:b[1][k]):lerp(a[1][k],b[1][k],p);}return o;}
function camS(t){const C=EP.cams;let i=0;while(i<C.length-1&&C[i+1][0]<=t)i++;const a=C[i],pv=C[Math.max(0,i-1)];const p=eInOut(seg(t,a[0],a[0]+(i==2?.5:.6)));return[1,2,3].map(j=>lerp(pv[j],a[j],i==0?1:p));}
function skyAt(t){const S=EP.sky;let c=S[0][1];for(let i=1;i<S.length;i++){const p=seg(t,S[i][0]-.15,S[i][0]+.4);if(p<=0)break;c=c.map((x,j)=>mixc(x,S[i][1][j],p));}return c;}
const STARS=[...Array(200)].map((_,i)=>{const r=rng(i+5);return[r()*W*1.4-W*.2,r()*H*.7,r()*1.6+.4,r()*6];});
// big pop-in text in world coords
function bigText(t,t0,t1,x,y,txt,col,size=60,fill){if(t<t0||t>=t1)return;const dt=t-t0,p=eBack(seg(dt,0,.28));ctx.save();ctx.globalAlpha=(1-seg(t,t1-.3,t1))*Math.min(1,dt*8);ctx.translate(x,y);ctx.scale(p,p);ctx.font='900 '+size+'px '+SER;ctx.textAlign='center';ctx.lineWidth=size*.08;ctx.lineJoin='round';ctx.strokeStyle='rgba(6,4,14,.85)';ctx.strokeText(txt,0,0);ctx.fillStyle=fill||col;ctx.shadowColor=col;ctx.shadowBlur=24;ctx.fillText(txt,0,0);ctx.restore();}
// proverb chars slam-in (intro)
function proverb(t,txt,x,y,hiIdx,hiCol,t0=7.0,step=.2,size=80){[...txt].forEach((c,i)=>{const k=t0+i*step;if(t<k)return;const p=eOut(seg(t,k,k+.14));ctx.save();ctx.globalAlpha=1-seg(t,DROP-.05,DROP+.05);ctx.translate(x+i*size*1.18,y);ctx.rotate((i-(txt.length-1)/2)*.1);ctx.scale(lerp(2,1,p),lerp(2,1,p));ctx.font='900 '+size+'px '+SER;ctx.textAlign='center';ctx.lineWidth=7;ctx.lineJoin='round';ctx.strokeStyle='rgba(6,4,14,.85)';ctx.strokeText(c,0,0);ctx.fillStyle=i==hiIdx?hiCol:'#fff';ctx.shadowColor=hiCol;ctx.shadowBlur=18;ctx.fillText(c,0,0);ctx.restore();});}
window.draw=function(t){t0g=t;
  PEN=null;ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';ctx.filter='none';
  const live=t>=DROP,hit=hitAmt(t),endF=1-seg(t,B(11)+.5,27.6),T=rt(t);const A=EP.acc;
  const b1=win(t,B(5)-.4,B(6),.2,.25),b2=win(t,B(6)-.1,B(7),.2,.25),b3=win(t,B(7)-.1,B(8),.2,.25),b4=win(t,B(8)-.1,B(9)+.1,.2,.3),dark=win(t,B(9),CLIMAX,.4,.12),fire=seg(t,CLIMAX,CLIMAX+.8);
  const sky=skyAt(t);const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,sky[0]);g.addColorStop(.62,sky[1]);g.addColorStop(1,sky[2]);ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const cm=camS(t),sh=shake(t);const z=cm[2]*(1+sh.z);
  ctx.save();ctx.translate(W*.38+sh.x,H*.55+sh.y);ctx.rotate(sh.r);ctx.scale(z,z);ctx.translate(-cm[0],-cm[1]);
  STARS.forEach(s=>{ctx.globalAlpha=(.1+.4*(.5+.5*Math.sin(t*1.5+s[3])))*endF*(1-dark*.8)*(1-b3*.7);ctx.fillStyle='#fff';ctx.fillRect(s[0],s[1],s[2],s[2]);});ctx.globalAlpha=1;
  if(EP.city!==false){const r=rng(EP.seed||45);let x=-500;while(x<W+700){const w=120+r()*180,h=160+r()*360;ctx.save();ctx.globalAlpha=endF*.8;ctx.fillStyle=mixc('#05050c',sky[1],.25);ctx.fillRect(x,GY-h-120,w-12,h);ctx.restore();for(let i=0;i<Math.floor((w-30)/34);i++)for(let j=0;j<Math.floor((h-30)/44);j++){if(r()<.62)continue;ctx.save();ctx.globalAlpha=(live?.3:.12)*endF*(1-dark*.8)*(.6+.4*Math.sin(t+i+j));ctx.fillStyle=r()>.75?A:'#f4f0ff';ctx.fillRect(x+16+i*34,GY-h-102+j*44,14,20);ctx.restore();}x+=w;}}
  ctx.fillStyle=mixc('#05040a',sky[2],.12);ctx.fillRect(-1200,GY,W+2400,700);glow([[-1200,GY],[W+1200,GY]],eOut(seg(t,.1,1.2)),live?mixc(A,'#777',dark):SKETCH,2,.8*endF,live?10:0,false);
  const S={t,T,live,endF,b1,b2,b3,b4,dark,fire,hit};
  epWorld(S);
  const O=FOC;
  if(t>=DROP&&t<DROP+1.6){const dt=t-DROP;[0,.12,.26].forEach((d,j)=>shock(O[0],O[1],seg(dt,d,d+1.1),endF,j==1?'#fff':A,2200,.8,6));sparks(t,DROP,O[0],O[1],70,8,1300,.9,A);}
  if(t>=LOCK&&t<LOCK+1.2){const dt=t-LOCK;[0,.1,.22].forEach((d,j)=>shock(O[0],O[1],seg(dt,d,d+1),b2*endF,j==1?'#fff':RED,1500,.8,7));}
  if(t>=STAMP&&t<STAMP+1.6){const dt=t-STAMP;[0,.12,.26].forEach((d,j)=>shock(O[0],O[1],seg(dt,d,d+1.2),b3*endF,j==1?'#fff':GOLD,2200,.8,7));sparks(t,STAMP,O[0],O[1],90,44,1500,1,GOLD);}
  if(t>=SLAM&&t<SLAM+1.8){const dt=t-SLAM;for(let j=0;j<5;j++)shock(O[0],GY-40,seg(dt,j*.09,j*.09+1.3),endF,j%2?'#fff':EP.slamCol||'#c8d0e0',3000,.6,8);if(dt<.4){ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=`rgba(220,225,255,${.45*(1-dt/.4)*endF})`;ctx.fillRect(-3000,-3000,W+6000,H+6000);ctx.restore();}}
  if(dark>0){const a=dark*endF;EP.words.forEach((w,i)=>{const an=t*.7+i*TAU/4;const rr=lerp(560,380,seg(t,B(9),CLIMAX));wordBox(O[0]+Math.cos(an)*rr,O[1]-60+Math.sin(an)*rr*.42,w,a*seg(t,B(9)+.3+i*.25,B(9)+.6+i*.25),1,'#9a98a8',Math.sin(t+i)*.08);});}
  if(t>=CLIMAX-.55&&t<CLIMAX){const p=seg(t,CLIMAX-.55,CLIMAX);const r=rng(Math.floor(t*30));for(let i=0;i<30;i++){const an=r()*TAU,d0=900*(1-p)*(.5+r());dot(O[0]+Math.cos(an)*d0,O[1]+Math.sin(an)*d0,4,i%2?GOLD:A,p*endF);}glow(circ(O[0],O[1],700*(1-p)+100,700*(1-p)+100,80),1,GOLD,2.4,p*endF,12,false);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;
    ctx.save();ctx.globalCompositeOperation='lighter';for(let i=0;i<32;i++){const an=i/32*TAU+t*.05;const L=2400*fire;const gg=ctx.createLinearGradient(O[0],O[1],O[0]+Math.cos(an)*L,O[1]+Math.sin(an)*L);gg.addColorStop(0,`rgba(255,235,180,${.2*a})`);gg.addColorStop(1,'rgba(255,235,180,0)');ctx.strokeStyle=gg;ctx.lineWidth=28;ctx.beginPath();ctx.moveTo(O[0],O[1]);ctx.lineTo(O[0]+Math.cos(an)*L,O[1]+Math.sin(an)*L);ctx.stroke();}ctx.restore();
    if(dt<2.6){[0,.12,.26,.4].forEach((d,j)=>shock(O[0],O[1],seg(dt,d,d+1.4),a,j%2?'#fff':A,2800,.8,9));sparks(t,CLIMAX,O[0],O[1],140,100,2000,1.3,GOLD);if(dt<.4)dot(O[0],O[1],300*(1-dt/.4),'#fff',a);
      EP.words.forEach((w,i)=>{shards(t,CLIMAX,O[0]+Math.cos(i*1.6)*360,O[1]-60+Math.sin(i*1.6)*160,a,i+140,'#d0d0e0',20,1100);});}
    const r2=rng(171);for(let i=0;i<40;i++){const st=r2()*1.6,sx=r2()*W*1.4-W*.2,sp=120+r2()*200;const p=dt-st-.1;if(p<0)continue;dot(sx+Math.sin(p*2+i)*40,GY-p*sp,2+r2()*3,[GOLD,A,'#ffb0d0'][i%3],a*(1-seg(p,2.4,3.4))*.85);}}
  if(epWorld.top)epWorld.top(S);
  if(dark>0){ctx.save();ctx.globalAlpha=dark*.3*endF;ctx.fillStyle='#040406';ctx.fillRect(-3000,-3000,W+6000,H+6000);ctx.restore();rain(dark*endF,t);}
  ctx.restore();
  if(hit>.15){const r=rng(Math.floor(t*30)+1);ctx.save();ctx.globalCompositeOperation='lighter';for(let i=0;i<60;i++){const an=r()*TAU,r0=360+r()*200,r1=r0+250+r()*600;ctx.globalAlpha=hit*.5*r();ctx.strokeStyle=[A,'#fff',ICE,GOLD,MAG][i%5];ctx.lineWidth=1+r()*2.5;ctx.beginPath();ctx.moveTo(W*.38+Math.cos(an)*r0,H/2+Math.sin(an)*r0*.6);ctx.lineTo(W*.38+Math.cos(an)*r1,H/2+Math.sin(an)*r1*.6);ctx.stroke();}ctx.restore();}
  if(hit>0){ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=`rgba(240,235,255,${.32*hit*hit})`;ctx.fillRect(0,0,W,H);ctx.restore();}
  chroma(hit*15);
  for(const k of INVERT){if(t>=k&&t<k+.067)invertFrame();}
  const hud=seg(t,DROP+.6,DROP+1.2)*(1-seg(t,B(11)+.6,B(11)+1.2));if(hud>0&&!window.NOCAP){ctx.save();ctx.globalAlpha=hud*.9;glow(Q([71,100],[64,84],[76,66],6),1,A,2,1,6,false);ctx.textAlign='left';ctx.fillStyle=WHITE;ctx.font='600 26px '+SER;ctx.fillText('人间动物志 · '+EP.name,104,76);ctx.fillStyle='rgba(246,242,255,.65)';ctx.font='500 21px '+SER;ctx.fillText(EP.epn+' · 每种人，都是一种动物',104,104);ctx.restore();}
  if(!window.NOCAP){const s2=ctx.createRadialGradient(TX,450,0,TX,450,480);s2.addColorStop(0,'rgba(4,4,10,.76)');s2.addColorStop(.6,'rgba(4,4,10,.5)');s2.addColorStop(1,'rgba(4,4,10,0)');ctx.save();ctx.translate(TX,450);ctx.scale(1.25,.8);ctx.translate(-TX,-450);ctx.fillStyle=s2;ctx.fillRect(TX-480,-30,960,960);ctx.restore();}
  ctx.save();ctx.translate(sh.x*.35,sh.y*.35);
  const H2=n=>B(n)+BAR/2,C=EP.caps,TG=EP.tags;
  caption(t,.05,H2(1),C[0]);caption(t,H2(1),B(2),C[1]);caption(t,B(2),H2(2),C[2]);caption(t,H2(2),B(3),C[3]);caption(t,B(3),DROP-.03,C[4]);
  if(!window.NOCAP&&t>=DROP&&t<B(5)){const a=win(t,DROP,B(5),.03,.3),k=1+.5*(1-eOut(seg(t,DROP,DROP+.35)));ctx.save();ctx.globalAlpha=a;ctx.textAlign='center';ctx.translate(TX,470);ctx.scale(k,k);
    ctx.font='600 28px '+SER;ctx.fillStyle=WHITE;ctx.letterSpacing='10px';ctx.fillText(EP.en,5,-140);ctx.letterSpacing='0px';const n=[...EP.name].length;ctx.font='900 '+(n>3?140:170)+'px '+SER;const gg=ctx.createLinearGradient(-280,0,280,0);EP.grad.forEach((c,i)=>gg.addColorStop(i/(EP.grad.length-1),c));ctx.fillStyle=gg;ctx.shadowColor=EP.glowC;ctx.shadowBlur=34;ctx.fillText(EP.name,0,50);ctx.shadowBlur=0;
    ctx.font='500 26px '+SER;ctx.fillStyle='rgba(246,242,255,.9)';ctx.fillText('人间动物志 · '+EP.epn,0,104);ctx.font='500 24px '+SER;ctx.fillStyle=EP.kwCol;ctx.fillText(EP.kw,0,144);ctx.restore();}
  caption(t,B(5),H2(5),C[5],TG[0]);caption(t,H2(5),B(6),C[6],TG[0]);
  caption(t,B(6),H2(6),C[7],TG[1]);caption(t,H2(6),B(7),C[8],TG[1]);
  caption(t,B(7),H2(7),C[9],TG[2]);caption(t,H2(7),B(8),C[10],TG[2]);
  caption(t,B(8),H2(8),C[11],TG[3]);caption(t,H2(8),B(9),C[12],TG[3]);
  caption(t,B(9),H2(9),C[13]);caption(t,H2(9),CLIMAX-.02,C[14]);
  if(!window.NOCAP&&t>=CLIMAX&&t<B(11)){const a=win(t,CLIMAX,B(11),.02,.3),k=1+.6*(1-eOut(seg(t,CLIMAX,CLIMAX+.3)));ctx.save();ctx.globalAlpha=a;ctx.textAlign='center';ctx.font='900 58px '+SER;ctx.fillStyle=WHITE;ctx.fillText(EP.cl[0],TX,380);
    ctx.translate(TX,525);ctx.scale(k,k);ctx.font='900 '+([...EP.cl[1]].length>3?120:136)+'px '+SER;ctx.fillStyle=hiFill();ctx.shadowColor=EP.glowC;ctx.shadowBlur=36;ctx.fillText(EP.cl[1],0,0);ctx.restore();}
  caption(t,B(11),27.6,EP.endCap);
  ctx.restore();
  const vg=ctx.createRadialGradient(W/2,H/2,H*.35,W/2,H/2,W*.62);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.55)');ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);
  if(window.boyCard)boyCard(ctx,t,27.45,{accent:A,x:735,y:540,sub:'@知识探索者 · 人间动物志'});
  ctx.save();ctx.globalAlpha=.06;ctx.globalCompositeOperation='overlay';ctx.drawImage(NOISE[Math.floor(t*30)%4],0,0,W,H);ctx.restore();
};

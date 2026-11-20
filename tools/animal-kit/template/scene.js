// ===== 人间动物志 · 墙头草 =====
const GC='#7dff7a',WALLC='#b09078',WIND='#c8e8ff';
const WX0=440,WX1=960,WTOP=GY-300,GX=700;
// grass: base (bx,by), o:{sway,exp,armL,armR,grow,sq,fall}
function grass(bx,by,s,o,a=1,prog=1){if(a<=.01)return null;o=Object.assign({sway:0,exp:0,armL:0,armR:0,h:1,flower:0,sq:1},o);
  const H=170*o.h*s,sw=o.sway;const head=[bx+sw*95*s,by-H*o.sq+Math.abs(sw)*28*s];const ctl=[bx+sw*25*s,by-H*.55];
  const stem=Q([bx,by],ctl,head,14);glow(stem,seg(prog,0,.35),GC,4,a,14,prog<1);
  // leaf arms
  const mid=Q([bx,by],ctl,head,14)[7];const lp=seg(prog,.3,.6);if(lp>0){[-1,1].forEach(side=>{const wv=side<0?o.armL:o.armR;const an=side<0?Math.PI*(1.05+wv*.3)+sw*.4:-Math.PI*(.05+wv*.3)+sw*.4;const L=70*s;const tip=[mid[0]+Math.cos(an)*L,mid[1]+Math.sin(an)*L];const nx=-Math.sin(an)*14*s,ny=Math.cos(an)*14*s;const c=[(mid[0]+tip[0])/2,(mid[1]+tip[1])/2];glow(Q(mid,[c[0]+nx,c[1]+ny],tip,10).concat(Q(tip,[c[0]-nx,c[1]-ny],mid,10)),lp,GC,3,a,10,false);});}
  // head blades
  const hp=seg(prog,.45,.8);if(hp>0){for(let i=0;i<7;i++){const an=-Math.PI/2+(i-3)*.32+sw*.5;const L=(i%2?44:62)*s;const tip=[head[0]+Math.cos(an)*L,head[1]-26*s+Math.sin(an)*L];glow(Q([head[0]+Math.cos(an)*20*s,head[1]-20*s+Math.sin(an)*10*s],[head[0]+Math.cos(an)*L*.5+6*s,head[1]-26*s+Math.sin(an)*L*.6],tip,8),hp,GC,3,a,10,false);}
    ctx.save();ctx.globalAlpha=a*hp*.92;ctx.fillStyle='#08120a';ctx.beginPath();ctx.ellipse(head[0],head[1],34*s,30*s,sw*.3,0,TAU);ctx.fill();ctx.restore();glow(circ(head[0],head[1],34*s,30*s,30),hp,GC,3.4,a,14,false);}
  const fp=seg(prog,.7,.95);if(fp>0){const fa=a*fp,hx=head[0],hy=head[1],e=o.exp;
    if(e==0){glow(Q([hx-16*s,hy-4*s],[hx-10*s,hy-12*s],[hx-4*s,hy-4*s],6),1,GC,2.6,fa,6,false);glow(Q([hx+4*s,hy-4*s],[hx+10*s,hy-12*s],[hx+16*s,hy-4*s],6),1,GC,2.6,fa,6,false);glow(Q([hx-12*s,hy+8*s],[hx,hy+18*s],[hx+12*s,hy+8*s],8),1,GC,2.6,fa,6,false);}
    else if(e==1){dot(hx-10*s,hy-4*s,4*s,'#fff',fa);dot(hx+10*s,hy-4*s,4*s,'#fff',fa);glow(Q([hx-10*s,hy+12*s],[hx,hy+6*s],[hx+10*s,hy+12*s],6),1,GC,2.6,fa,6,false);const sp=(t0g*1.3)%1;ctx.save();ctx.globalAlpha=fa*(1-sp);ctx.fillStyle='#8ad8ff';ctx.beginPath();ctx.ellipse(hx+30*s,hy-10*s+sp*30,4*s,7*s,0,0,TAU);ctx.fill();ctx.restore();}
    else if(e==2){glow([[hx-16*s,hy-2*s],[hx-4*s,hy-6*s]],1,GC,2.6,fa,6,false);glow([[hx+4*s,hy-6*s],[hx+16*s,hy-2*s]],1,GC,2.6,fa,6,false);glow(Q([hx-10*s,hy+14*s],[hx,hy+6*s],[hx+10*s,hy+14*s],6),1,GC,2.6,fa,6,false);const tp=(t0g*1.4)%1;dot(hx-12*s,hy+tp*30,3.5*s,'#8ad8ff',fa*(1-tp));}
    else {glow([[hx-18*s,hy-12*s],[hx-4*s,hy-6*s]],1,GC,2.6,fa,6,false);glow([[hx+18*s,hy-12*s],[hx+4*s,hy-6*s]],1,GC,2.6,fa,6,false);dot(hx-10*s,hy-2*s,4.5*s,'#fff',fa);dot(hx+10*s,hy-2*s,4.5*s,'#fff',fa);glow([[hx-8*s,hy+12*s],[hx+8*s,hy+12*s]],1,GC,2.6,fa,6,false);}
    if(o.flower>0){const f=eBack(o.flower);for(let i=0;i<6;i++){const an=i/6*TAU+t0g*.5;glow(circ(hx+Math.cos(an)*44*s*f,hy-62*s+Math.sin(an)*44*s*f,20*s*f,14*s*f,16),1,'#ffb0d0',2.6,fa,12,false);}dot(hx,hy-62*s,12*s*f,GOLD,fa);}}
  return{hx:head[0],hy:head[1]};}
function wall(a,prog){if(a<=.01)return;ctx.save();ctx.globalAlpha=a*.9;ctx.fillStyle='#120c08';ctx.fillRect(WX0,WTOP,WX1-WX0,GY-WTOP);ctx.restore();glow(rectP(WX0,WTOP,WX1,GY),prog,WALLC,3,a,10,false);
  if(prog>.5){const pa=a*seg(prog,.5,1);for(let r=1;r<5;r++){const y=WTOP+r*60;glow([[WX0,y],[WX1,y]],1,WALLC,1.4,pa*.6,0,false);for(let c=0;c<9;c++){const x=WX0+(c+(r%2?.5:0))*65;if(x>WX0&&x<WX1)glow([[x,y-60],[x,y]],1,WALLC,1.2,pa*.5,0,false);}}}}
function wind(t,t0,dir,y,txt,a){const dt=t-t0;if(dt<-.1||dt>.8)return;const p=seg(dt,-.1,.6);for(let i=0;i<7;i++){const yy=y-90+i*30;const x0=dir>0?-300+p*1300:1700-p*1300;const L=200+i%3*80;glow([[x0,yy],[x0-dir*L,yy+Math.sin(i)*6]],1,WIND,2.4,a*(1-seg(dt,.4,.8))*.8,12,false);}
  if(txt){ctx.save();ctx.globalAlpha=a*(1-seg(dt,.45,.8))*seg(dt,-.1,.05);ctx.font='900 40px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=WIND;ctx.shadowBlur=16;ctx.fillText(txt,dir>0?-300+p*1300:1700-p*1300,y-130);ctx.restore();}}
const GP=o=>Object.assign({sway:0,exp:0,armL:0,armR:0,h:1,flower:0,sq:1,bx:GX,by:WTOP,fall:0},o);
const KG=[[0,GP({})],[2.67,GP({sway:-.2})],[3.3,GP({sway:-.9,armL:.6,exp:0}),'snap'],[4.0,GP({sway:-.8,armL:.4})],[4.66,GP({sway:.9,armR:.6}),'snap'],[5.33,GP({sway:.8,armR:.4})],[6.0,GP({sway:-.9}),'snap'],[6.66,GP({sway:.9}),'snap'],[7.4,GP({sway:0,exp:1,sq:.9})],
 [DROP,GP({sway:0,exp:0,armL:.8,armR:.8,sq:1.08}),'snap'],[DROP+.8,GP({sway:0})]];
MK.forEach((k,i)=>{const d=i%2?1:-1;KG.push([k-.05,GP({sway:-d*.3})],[k+.08,GP({sway:d*1,armL:d<0?.7:0,armR:d>0?.7:0}),'snap'],[k+.4,GP({sway:d*.85})]);});
KG.push([B(6),GP({sway:0,exp:0})],[WAVES[0],GP({sway:-1,armL:.8,exp:0}),'snap'],[WAVES[0]+.4,GP({sway:-.8})],[WAVES[1],GP({sway:1,armR:.8,exp:0}),'snap'],[WAVES[1]+.4,GP({sway:.8})],[LOCK,GP({sway:0,exp:1,sq:.82,armL:-.4,armR:-.4}),'snap'],[LOCK+.6,GP({sway:0,exp:1,sq:.85})],
 [B(7),GP({sway:0,exp:0})]);
JABS.forEach((k,i)=>{const d=i%2?1:-1;KG.push([k,GP({sway:d*1.2,sq:.85,exp:3}),'snap'],[k+.35,GP({sway:-d*.2,exp:3})]);});
KG.push([STAMP,GP({sway:0,exp:0,armL:.9,armR:.9,sq:1.1}),'snap'],[STAMP+.6,GP({sway:0,exp:0})],[B(8),GP({sway:0})]);
SNAPS.forEach((k,i)=>{KG.push([k,GP({sway:(i%2?.5:-.5),exp:2,sq:.92}),'snap'],[k+.35,GP({sway:0,exp:2})]);});
KG.push([SLAM-.2,GP({sway:0,exp:1})],[SLAM,GP({sway:.2,exp:1,bx:GX+60,by:WTOP-120,sq:.9}),'snap'],[SLAM+.5,GP({sway:1.3,exp:2,bx:GX+150,by:GY,sq:.6})],[B(9),GP({sway:1.4,exp:2,bx:GX+160,by:GY,sq:.5})],[CLIMAX-.6,GP({sway:1.1,exp:2,bx:GX+160,by:GY,sq:.55})],[CLIMAX-.15,GP({sway:.2,exp:3,bx:GX+160,by:GY,sq:.6})],
 [CLIMAX,GP({sway:0,exp:3,bx:GX+160,by:GY,h:2.3,armL:.8,armR:.8,flower:0}),'snap'],[CLIMAX+.6,GP({sway:0,exp:0,bx:GX+160,by:GY,h:2.4,flower:1})],[B(11),GP({sway:.05,exp:0,bx:GX+160,by:GY,h:2.4,flower:1})],[27.5,GP({sway:-.05,bx:GX+160,by:GY,h:2.4,flower:1})]);
KG.sort((a,b)=>a[0]-b[0]);
const TPp=o=>Object.assign({x:250,oy:0,dir:1,evil:0,mouth:0,fhx:44,fhy:-110,bhx:-46,bhy:-110,knife:0,walk:0,crack:0,lean:0,sq:1,a:1},o);
const KTt=[[0,TPp({a:0,x:100})],[2.67,TPp({a:1,x:250})],[3.0,TPp({fhx:170,fhy:-210,mouth:1}),'snap'],[3.8,TPp({})],[MK[0],TPp({fhx:170,fhy:-200,mouth:1}),'snap'],[B(6),TPp({})],[WAVES[0],TPp({fhx:120,fhy:-160,mouth:1}),'snap'],[LOCK,TPp({fhx:200,fhy:-220,lean:.15,mouth:0,evil:0}),'snap'],[LOCK+.6,TPp({fhx:60,fhy:-110})],[B(7)-.2,TPp({a:0})],
 [B(8),TPp({a:1})],[SNAPS[0],TPp({dir:-1,walk:1})],[SNAPS[0]+1.2,TPp({dir:-1,walk:1,x:-150,a:0})],[CLIMAX-.4,TPp({a:0,x:100})],[CLIMAX+.3,TPp({a:1,x:250})],[CLIMAX+1,TPp({a:1,x:250,fhx:120,fhy:-200,mouth:1}),'snap'],[27.5,TPp({a:1,x:250})]];
KTt.sort((a,b)=>a[0]-b[0]);
const OPp=o=>Object.assign({x:1160,oy:0,dir:-1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,a:1},o);
const KOo=[[0,OPp({a:0,x:1300})],[4.2,OPp({a:0,x:1300})],[4.5,OPp({a:1})],[4.66,OPp({fhx:170,fhy:-220,exp:2}),'snap'],[5.4,OPp({})],[MK[1],OPp({fhx:170,fhy:-210,exp:2}),'snap'],[B(6),OPp({})],[WAVES[1],OPp({fhx:120,fhy:-170,exp:0}),'snap'],[LOCK,OPp({fhx:200,fhy:-220,lean:.15,exp:2}),'snap'],[LOCK+.6,OPp({exp:2})],[B(7)-.2,OPp({a:0})],
 [B(8),OPp({a:1})],[SNAPS[0]+.2,OPp({dir:1,walk:1})],[SNAPS[0]+1.4,OPp({dir:1,walk:1,x:1550,a:0})],[CLIMAX-.4,OPp({a:0,x:1300})],[CLIMAX+.3,OPp({a:1})],[CLIMAX+1,OPp({a:1,fhx:120,fhy:-210,exp:0}),'snap'],[27.5,OPp({a:1})]];
KOo.sort((a,b)=>a[0]-b[0]);
function kfO(K,T){let i=0;while(i<K.length-1&&K[i+1][0]<=T)i++;const a=K[i],b=K[Math.min(i+1,K.length-1)];if(a===b)return Object.assign({},a[1]);const d=b[0]-a[0];let p=d>0?seg(T,a[0],b[0]):1;p=b[2]=='snap'?eOut(p):eInOut(p);const o={};for(const k in a[1]){o[k]=(k=='dir'||k=='exp'||k=='evil')?(p<.5?a[1][k]:b[1][k]):lerp(a[1][k],b[1][k],p);}return o;}
const CAMS=[[0,700,480,2.0],[2.3,700,500,1.6],[2.67,720,620,1.0],[5.33,720,600,1.05],[7.4,700,560,1.18],[DROP,760,610,1.0],[B(5),740,600,1.04],[B(6),720,610,1.02],[LOCK,700,590,1.1],[B(7),720,610,1.04],[STAMP,720,600,1.08],[B(8),740,610,1.02],[SLAM,720,630,1.04],[B(9),780,700,1.1],[CLIMAX-.5,800,740,1.24],[CLIMAX,780,540,.95],[B(11),780,560,1.0]];
function camS(t){let i=0;while(i<CAMS.length-1&&CAMS[i+1][0]<=t)i++;const a=CAMS[i],pv=CAMS[Math.max(0,i-1)];const p=eInOut(seg(t,a[0],a[0]+(i==2?.5:.6)));return[1,2,3].map(j=>lerp(pv[j],a[j],i==0?1:p));}
const SKY=[[0,['#040a06','#0a160e','#14261a']],[DROP,['#061a0a','#145a24','#70e080']],[B(5),['#081408','#1a3a1c','#5aa060']],[B(6),['#100808','#30141a','#803040']],[B(7),['#0a1408','#2a5a20','#c0f080']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#0a140c','#2a5a3a','#c0f0a0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]];
function skyAt(t){let c=SKY[0][1];for(let i=1;i<SKY.length;i++){const p=seg(t,SKY[i][0]-.15,SKY[i][0]+.4);if(p<=0)break;c=c.map((x,j)=>mixc(x,SKY[i][1][j],p));}return c;}
const STARS=[...Array(200)].map((_,i)=>{const r=rng(i+5);return[r()*W*1.4-W*.2,r()*H*.7,r()*1.6+.4,r()*6];});
const WORDS=['没主见','两面派','随风倒','靠不住'];

window.draw=function(t){t0g=t;
  PEN=null;ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';ctx.filter='none';
  const live=t>=DROP,hit=hitAmt(t),endF=1-seg(t,B(11)+.5,27.6),T=rt(t);
  const b1=win(t,B(5)-.4,B(6),.2,.25),b2=win(t,B(6)-.1,B(7),.2,.25),b3=win(t,B(7)-.1,B(8),.2,.25),b4=win(t,B(8)-.1,B(9)+.1,.2,.3),dark=win(t,B(9),CLIMAX,.4,.12),fire=seg(t,CLIMAX,CLIMAX+.8);
  const sky=skyAt(t);const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,sky[0]);g.addColorStop(.62,sky[1]);g.addColorStop(1,sky[2]);ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const cm=camS(t),sh=shake(t);const z=cm[2]*(1+sh.z);
  ctx.save();ctx.translate(W*.38+sh.x,H*.55+sh.y);ctx.rotate(sh.r);ctx.scale(z,z);ctx.translate(-cm[0],-cm[1]);
  STARS.forEach(s=>{ctx.globalAlpha=(.1+.4*(.5+.5*Math.sin(t*1.5+s[3])))*endF*(1-dark*.8)*(1-b3);ctx.fillStyle='#fff';ctx.fillRect(s[0],s[1],s[2],s[2]);});ctx.globalAlpha=1;
  {const r=rng(45);let x=-500;const fc=live?mixc(sky[2],'#ffffff',.25):'#555';while(x<W+700){const w=120+r()*180,h=160+r()*360;ctx.save();ctx.globalAlpha=endF*.8;ctx.fillStyle=mixc('#05050c',sky[1],.25);ctx.fillRect(x,GY-h-120,w-12,h);ctx.restore();for(let i=0;i<Math.floor((w-30)/34);i++)for(let j=0;j<Math.floor((h-30)/44);j++){if(r()<.62)continue;ctx.save();ctx.globalAlpha=(live?.3:.12)*endF*(1-dark*.8)*(.6+.4*Math.sin(t+i+j));ctx.fillStyle=r()>.75?GC:'#f0fff0';ctx.fillRect(x+16+i*34,GY-h-102+j*44,14,20);ctx.restore();}x+=w;}}
  ctx.fillStyle=mixc('#05040a',sky[2],.12);ctx.fillRect(-1200,GY,W+2400,700);glow([[-1200,GY],[W+1200,GY]],eOut(seg(t,.1,1.2)),live?mixc(GC,'#777',dark):SKETCH,2,.8*endF,live?10:0,false);
  // wall (crumbles at climax? keep)
  wall(endF,seg(t,.1,1.0));
  const go=kfO(KG,T),to=kfO(KTt,T),oo=kfO(KOo,T);
  // stiff stick in 03
  if(b3>0){const sx=GX+150;const brk=JABS.length?seg(t,JABS[JABS.length-1],JABS[JABS.length-1]+.2):0;const a=b3*endF;if(brk<1){glow([[sx,WTOP],[sx+brk*30,WTOP-170]],1,'#c0a080',5,a,10,false);}else{glow([[sx,WTOP],[sx+6,WTOP-80]],1,'#c0a080',5,a,10,false);const fp=seg(t,JABS[JABS.length-1]+.2,JABS[JABS.length-1]+.8);glow([[sx+10+fp*120,WTOP-80+fp*fp*220],[sx+40+fp*160,WTOP-160+fp*fp*240]],1,'#c0a080',5,a*(1-fp*.5),10,false);}
    ctx.save();ctx.globalAlpha=a*seg(t,B(7),B(7)+.3);ctx.font='700 26px '+SER;ctx.textAlign='center';ctx.fillStyle='#e0c8a0';ctx.fillText('硬木棍',sx+20,WTOP-190);ctx.restore();}
  // roots in climax
  if(t>=CLIMAX-.15){const p=seg(t,CLIMAX-.15,CLIMAX+.5);const rx=go.bx;for(let i=0;i<6;i++){const an=Math.PI/2+(i-2.5)*.35;glow(Q([rx,GY],[rx+Math.cos(an)*60,GY+60],[rx+Math.cos(an)*140*p,GY+Math.sin(an)*160*p],10),1,GOLD,2.6,endF,12,false);}}
  const TG=to.a>.01?tiger(to.x,GY+to.oy,1.25,to.dir,to,to.a*endF,1):null;
  const OXG=oo.a>.01?ox(oo.x,GY+oo.oy,1.25,oo.dir,oo,oo.a*endF,1):null;
  const gprog=t<2.67?seg(t,.6,2.4):1;const GG=grass(go.bx,go.by,1.6,go,endF,gprog);
  // ---- intro ----
  if(t<DROP&&GG){bubble(GG.hx+20,GG.hy-120,'大家好~',win(t,1.6,2.6,.1,.2),1,GC,-1);
    if(TG)bubble(TG.hx+30,TG.hy-150,'我说得对吧？',win(t,2.8,3.4,.08,.1),1,TC,-1);bubble(GG.hx-40,GG.hy-120,'对对对！',win(t,3.3,4.4,.06,.15),eBack(seg(t,3.3,3.45)),GC,1);
    if(OXG)bubble(OXG.hx-10,OXG.hy-160,'我觉得不对',win(t,4.4,5.0,.08,.1),1,OC,1);bubble(GG.hx+40,GG.hy-120,'也对也对！',win(t,4.66,5.9,.06,.15),eBack(seg(t,4.66,4.8)),GC,-1);
    wind(t,3.25,1,WTOP-160,'',1);wind(t,4.6,-1,WTOP-160,'',1);wind(t,5.95,1,WTOP-200,'',1);wind(t,6.6,-1,WTOP-200,'',1);
    const pv='随风倒'.split('');pv.forEach((c,i)=>{const k=7.0+i*.2;if(t<k)return;const p=eOut(seg(t,k,k+.14));ctx.save();ctx.globalAlpha=1-seg(t,DROP-.05,DROP+.05);ctx.translate(610+i*92,WTOP-470);ctx.rotate((i-1)*.12);ctx.scale(lerp(2,1,p),lerp(2,1,p));ctx.font='900 76px '+SER;ctx.textAlign='center';ctx.fillStyle=i==2?WIND:'#fff';ctx.shadowColor=WIND;ctx.shadowBlur=18;ctx.fillText(c,0,0);ctx.restore();});}
  if(t>=DROP&&t<DROP+1.6&&GG){const dt=t-DROP;[0,.12,.26].forEach((d,j)=>shock(GG.hx,GG.hy,seg(dt,d,d+1.1),endF,j==1?'#fff':GC,2200,.8,6));sparks(t,DROP,GG.hx,GG.hy,70,8,1300,.9,GC);}
  // 01 winds
  if(b1>0&&GG){const a=b1*endF;const lab=['老板来了','风向变了','谁赢跟谁'];MK.forEach((k,i)=>{wind(t,k-.2,i%2?-1:1,WTOP-220,lab[i],a);const e=i<2?MK[i+1]:B(6);if(t>=k&&t<e)bubble(GG.hx+(i%2?-40:40),GG.hy-120,['您说得对！','我早就这么想！','我一直站您！'][i],a,eBack(seg(t,k,k+.2)),GC,i%2?1:-1);});}
  // 02 both sides
  if(b2>0&&GG){const a=b2*endF;if(t>=WAVES[0]&&t<WAVES[1])bubble(GG.hx-40,GG.hy-120,'（悄悄）我站你！',a,eBack(seg(t,WAVES[0],WAVES[0]+.2)),GC,1);if(t>=WAVES[1]&&t<LOCK)bubble(GG.hx+40,GG.hy-120,'（悄悄）我也站你！',a,eBack(seg(t,WAVES[1],WAVES[1]+.2)),GC,-1);
    if(t>=LOCK){const dt=t-LOCK;if(TG)bubble(TG.hx+30,TG.hy-150,'你站谁？！',a*(1-seg(t,B(7)-.3,B(7))),eBack(seg(dt,0,.2)),RED,-1);if(OXG)bubble(OXG.hx-10,OXG.hy-160,'你到底站谁？！',a*(1-seg(t,B(7)-.3,B(7))),eBack(seg(dt,0,.2)),RED,1);
      if(dt<1.2){[0,.1,.22].forEach((d,j)=>shock(GG.hx,GG.hy,seg(dt,d,d+1),a,j==1?'#fff':RED,1500,.8,7));}
      const p=eBack(seg(dt,.1,.4));ctx.save();ctx.globalAlpha=a*(1-seg(t,B(7)-.3,B(7)));ctx.translate(GX+60,WTOP-420);ctx.scale(p,p);ctx.font='900 64px '+SER;ctx.textAlign='center';ctx.fillStyle=RED;ctx.shadowColor=RED;ctx.shadowBlur=24;ctx.fillText('两头讨好，两头穿帮',0,0);ctx.restore();}}
  // 03 flexible
  if(b3>0&&GG){const a=b3*endF;JABS.forEach((k,i)=>{wind(t,k-.2,i%2?1:-1,WTOP-150,'',a);if(t>=k&&t<k+.5)sparks(t,k,GG.hx,GG.hy,20,i+20,600,.5,GC);});
    if(t>=STAMP){const dt=t-STAMP;if(dt<1.6){[0,.12,.26].forEach((d,j)=>shock(GG.hx,GG.hy,seg(dt,d,d+1.2),a,j==1?'#fff':GC,2200,.8,7));sparks(t,STAMP,GG.hx,GG.hy,90,44,1500,1,GOLD);}
      const tp=eBack(seg(dt,.05,.35));ctx.save();ctx.globalAlpha=a*(1-seg(t,B(8)-.3,B(8)));ctx.translate(GX+60,WTOP-420);ctx.scale(tp,tp);ctx.font='900 58px '+SER;ctx.textAlign='center';ctx.fillStyle=GOLD;ctx.shadowColor=GOLD;ctx.shadowBlur=24;ctx.fillText('能屈能伸，才不会断',0,0);ctx.restore();}}
  // 04
  if(b4>0&&GG){const a=b4*endF;const lab=['没主见','不靠谱','墙头草'];[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;const side=i%2?1:-1;wordBox(GX+side*(300+i*30),WTOP-300-i*40,lab[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',side*.08);});
    if(t>=SNAPS[0]&&t<SLAM)bubble(GG.hx+30,GG.hy-120,'别走啊…我站你们！',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),GC,-1);
    if(t>=SLAM&&t<SLAM+1.8){const dt=t-SLAM;wind(t,SLAM-.15,1,WTOP-150,'',endF);wind(t,SLAM-.15,-1,WTOP-120,'',endF);for(let j=0;j<5;j++)shock(GX,WTOP,seg(dt,j*.09,j*.09+1.3),endF,j%2?'#fff':WIND,3000,.6,8);
      const p=eBack(seg(dt,0,.25));ctx.save();ctx.globalAlpha=endF*(1-seg(dt,1.3,1.8));ctx.translate(GX+60,WTOP-420);ctx.scale(p,p);ctx.font='900 60px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=WIND;ctx.shadowBlur=24;ctx.fillText('风一停，没人要了',0,0);ctx.restore();
      if(dt<.4){ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=`rgba(210,235,255,${.5*(1-dt/.4)*endF})`;ctx.fillRect(-3000,-3000,W+6000,H+6000);ctx.restore();}}}
  // storm
  if(dark>0&&GG){const a=dark*endF;WORDS.forEach((w,i)=>{const an=t*.7+i*TAU/4;const rr=lerp(560,360,seg(t,B(9),CLIMAX));wordBox(GG.hx+Math.cos(an)*rr,GG.hy-80+Math.sin(an)*rr*.45,w,a*seg(t,B(9)+.3+i*.25,B(9)+.6+i*.25),1,'#90a090',Math.sin(t+i)*.08);});
    if(t<CLIMAX-.7)bubble(GG.hx+30,GG.hy-100,'我到底…站哪边',a*seg(t,B(9)+.9,B(9)+1.2),1,GC,-1);
    if(t>=CLIMAX-.6)bubble(GG.hx+30,GG.hy-100,'我站我自己！',a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GC,-1);}
  // climax
  if(t>=CLIMAX-.55&&t<CLIMAX&&GG){const p=seg(t,CLIMAX-.55,CLIMAX);const O=[go.bx,GY-40];const r=rng(Math.floor(t*30));for(let i=0;i<30;i++){const an=r()*TAU,d0=900*(1-p)*(.5+r());dot(O[0]+Math.cos(an)*d0,O[1]+Math.sin(an)*d0,4,i%2?GOLD:GC,p*endF);}glow(circ(O[0],O[1],700*(1-p)+100,700*(1-p)+100,80),1,GOLD,2.4,p*endF,12,false);}
  if(t>=CLIMAX&&GG){const a=endF,dt=t-CLIMAX;const O=[GG.hx,GG.hy];
    ctx.save();ctx.globalCompositeOperation='lighter';for(let i=0;i<32;i++){const an=i/32*TAU+t*.05;const L=2400*fire;const gg=ctx.createLinearGradient(O[0],O[1],O[0]+Math.cos(an)*L,O[1]+Math.sin(an)*L);gg.addColorStop(0,`rgba(220,255,180,${.2*a})`);gg.addColorStop(1,'rgba(220,255,180,0)');ctx.strokeStyle=gg;ctx.lineWidth=28;ctx.beginPath();ctx.moveTo(O[0],O[1]);ctx.lineTo(O[0]+Math.cos(an)*L,O[1]+Math.sin(an)*L);ctx.stroke();}ctx.restore();
    if(dt<2.6){[0,.12,.26,.4].forEach((d,j)=>shock(O[0],O[1],seg(dt,d,d+1.4),a,j%2?'#fff':GC,2800,.8,9));sparks(t,CLIMAX,O[0],O[1],140,100,2000,1.3,GOLD);if(dt<.4)dot(O[0],O[1],300*(1-dt/.4),'#fff',a);
      WORDS.forEach((w,i)=>{shards(t,CLIMAX,O[0]+Math.cos(i*1.6)*360,O[1]-80+Math.sin(i*1.6)*160,a,i+140,'#c8d8c0',20,1100);});}
    if(dt>=.8&&dt<2.2){if(TG)bubble(TG.hx+30,TG.hy-150,'有主见！',a*(1-seg(dt,2.0,2.2)),1,TC,-1);if(OXG)bubble(OXG.hx-10,OXG.hy-160,'靠得住！',a*(1-seg(dt,2.0,2.2)),1,OC,1);}
    const r2=rng(171);for(let i=0;i<40;i++){const st=r2()*1.6,sx=r2()*W*1.4-W*.2,sp=120+r2()*200;const p=dt-st-.1;if(p<0)continue;dot(sx+Math.sin(p*2+i)*40,GY-p*sp,2+r2()*3,[GOLD,GC,'#ffb0d0'][i%3],a*(1-seg(p,2.4,3.4))*.85);}}
  if(dark>0){ctx.save();ctx.globalAlpha=dark*.3*endF;ctx.fillStyle='#040406';ctx.fillRect(-3000,-3000,W+6000,H+6000);ctx.restore();rain(dark*endF,t);}
  ctx.restore();
  if(hit>.15){const r=rng(Math.floor(t*30)+1);ctx.save();ctx.globalCompositeOperation='lighter';for(let i=0;i<60;i++){const an=r()*TAU,r0=360+r()*200,r1=r0+250+r()*600;ctx.globalAlpha=hit*.5*r();ctx.strokeStyle=[GC,'#fff',WIND,GOLD,TC][i%5];ctx.lineWidth=1+r()*2.5;ctx.beginPath();ctx.moveTo(W*.38+Math.cos(an)*r0,H/2+Math.sin(an)*r0*.6);ctx.lineTo(W*.38+Math.cos(an)*r1,H/2+Math.sin(an)*r1*.6);ctx.stroke();}ctx.restore();}
  if(hit>0){ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=`rgba(230,255,225,${.32*hit*hit})`;ctx.fillRect(0,0,W,H);ctx.restore();}
  chroma(hit*15);
  for(const k of INVERT){if(t>=k&&t<k+.067)invertFrame();}
  const hud=seg(t,DROP+.6,DROP+1.2)*(1-seg(t,B(11)+.6,B(11)+1.2));if(hud>0&&!window.NOCAP){ctx.save();ctx.globalAlpha=hud*.9;glow(Q([71,100],[64,84],[76,66],6),1,GC,2,1,6,false);ctx.textAlign='left';ctx.fillStyle=WHITE;ctx.font='600 26px '+SER;ctx.fillText('人间动物志 · 墙头草',104,76);ctx.fillStyle='rgba(246,242,255,.65)';ctx.font='500 21px '+SER;ctx.fillText('第四期 · 每种人，都是一种动物',104,104);ctx.restore();}
  if(!window.NOCAP){const s2=ctx.createRadialGradient(TX,450,0,TX,450,480);s2.addColorStop(0,'rgba(4,8,4,.76)');s2.addColorStop(.6,'rgba(4,8,4,.5)');s2.addColorStop(1,'rgba(4,8,4,0)');ctx.save();ctx.translate(TX,450);ctx.scale(1.25,.8);ctx.translate(-TX,-450);ctx.fillStyle=s2;ctx.fillRect(TX-480,-30,960,960);ctx.restore();}
  ctx.save();ctx.translate(sh.x*.35,sh.y*.35);
  const H2=n=>B(n)+BAR/2;
  caption(t,.05,H2(1),[[['有一种人',0]],[['没有',0],['立场',1]]]);
  caption(t,H2(1),B(2),[[['你说东',0]],[['TA',0],['往东',1]]]);
  caption(t,B(2),H2(2),[[['他说西',0]],[['TA',0],['往西',1]]]);
  caption(t,H2(2),B(3),[[['哪边风大',0]],[['倒向',0],['哪边',1]]]);
  caption(t,B(3),DROP-.03,[[['人称',0]],[['墙头草',1]]]);
  if(!window.NOCAP&&t>=DROP&&t<B(5)){const a=win(t,DROP,B(5),.03,.3),k=1+.5*(1-eOut(seg(t,DROP,DROP+.35)));ctx.save();ctx.globalAlpha=a;ctx.textAlign='center';ctx.translate(TX,470);ctx.scale(k,k);
    ctx.font='600 28px '+SER;ctx.fillStyle=WHITE;ctx.letterSpacing='10px';ctx.fillText('FENCE-SITTER',5,-140);ctx.letterSpacing='0px';ctx.font='900 170px '+SER;const gg=ctx.createLinearGradient(-260,0,260,0);gg.addColorStop(0,'#f0ffe8');gg.addColorStop(.5,GC);gg.addColorStop(1,'#5ae0d0');ctx.fillStyle=gg;ctx.shadowColor='rgba(120,255,120,.9)';ctx.shadowBlur=34;ctx.fillText('墙头草',0,50);ctx.shadowBlur=0;
    ctx.font='500 26px '+SER;ctx.fillStyle='rgba(240,255,240,.9)';ctx.fillText('人间动物志 · 第四期',0,104);ctx.font='500 24px '+SER;ctx.fillStyle='rgba(180,255,170,.92)';ctx.fillText('见风使舵 · 两头讨好 · 灵活 · 没人信',0,144);ctx.restore();}
  caption(t,B(5),H2(5),[[['风往哪吹',0]],[['TA往',0],['哪倒',1]]],['01','见风使舵',GC]);
  caption(t,H2(5),B(6),[[['立场',0]],[['一天',0],['三变',1]]],['01','见风使舵',GC]);
  caption(t,B(6),H2(6),[[['当面',0]],[['都说',0],['你对',1]]],['02','两头讨好',RED]);
  caption(t,H2(6),B(7),[[['两边',0]],[['都想',0],['讨好',1]]],['02','两头讨好',RED]);
  caption(t,B(7),H2(7),[[['好的一面',0]],[['灵活',0],['变通',1]]],['03','灵活',GOLD]);
  caption(t,H2(7),B(8),[[['风再大',0]],[['也',0],['折不断',1]]],['03','灵活',GOLD]);
  caption(t,B(8),H2(8),[[['坏的一面',0]],[['谁都',0],['不信TA',1]]],['04','没人信','#a0b0a0']);
  caption(t,H2(8),B(9),[[['两边都想站',0]],[['最后',0],['没人要',1]]],['04','没人信','#a0b0a0']);
  caption(t,B(9),H2(9),[[['随风倒的草',0]],[['扎不下',0],['根',1]]]);
  caption(t,H2(9),CLIMAX-.02,[[['有自己的立场',0]],[['才',0],['站得稳',1]]]);
  if(!window.NOCAP&&t>=CLIMAX&&t<B(11)){const a=win(t,CLIMAX,B(11),.02,.3),k=1+.6*(1-eOut(seg(t,CLIMAX,CLIMAX+.3)));ctx.save();ctx.globalAlpha=a;ctx.textAlign='center';ctx.font='900 58px '+SER;ctx.fillStyle=WHITE;ctx.fillText('做人',TX,380);
    ctx.translate(TX,525);ctx.scale(k,k);ctx.font='900 136px '+SER;ctx.fillStyle=hiFill();ctx.shadowColor='rgba(160,255,140,.85)';ctx.shadowBlur=36;ctx.fillText('要有根',0,0);ctx.restore();}
  caption(t,B(11),27.6,[[['可以温柔',0]],[['但要有',0],['立场',1]]]);
  ctx.restore();
  const vg=ctx.createRadialGradient(W/2,H/2,H*.35,W/2,H/2,W*.62);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.55)');ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);
  if(window.boyCard)boyCard(ctx,t,27.45,{accent:GC,x:735,y:540,sub:'@知识探索者 · 人间动物志'});
  ctx.save();ctx.globalAlpha=.06;ctx.globalCompositeOperation='overlay';ctx.drawImage(NOISE[Math.floor(t*30)%4],0,0,W,H);ctx.restore();
};

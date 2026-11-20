// ===== 人间动物志 · 出头鸟 =====
const HC='#ffb040',CREST='#ff5a3a',FC='#7fb8d8',SKYB='#9ae8ff',RED='#ff4a5a';
const WY=GY-430; // wire base height
function wireY(x){const d=(x-700)/1100;return WY+60*(1-d*d);}
// bird in local coords (feet at 0,0, facing right). o: {head,crest,flap,beak,ang,sq,brow,fly}
function birdPaths(o){const P=[];const hy=-108-o.head*46;const hx=30+o.head*6;
  const bodyRot=o.fly?-.15:.18;const body=circ(0,-62,48,36,40).map(([x,y])=>{const dx=x,dy=y+62;return[dx*Math.cos(bodyRot)-dy*Math.sin(bodyRot),-62+dx*Math.sin(bodyRot)+dy*Math.cos(bodyRot)];});
  P.push(['body',body]);
  if(o.head>.05)P.push(['neck',[[18,-88],[hx-10,hy+18]]],['neck2',[[34,-76],[hx+12,hy+20]]]);
  P.push(['head',circ(hx,hy,26,25,30)]);
  const op=o.beak*10;P.push(['beak',[[hx+20,hy-6],[hx+50,hy+1-op*.3],[hx+22,hy+4]]]);if(o.beak>.05)P.push(['beak2',[[hx+22,hy+6],[hx+44,hy+8+op],[hx+20,hy+12]]]);
  if(o.crest>.02){for(let i=0;i<3;i++){const bx=hx-6+i*8,by=hy-24;P.push(['crest',[[bx,by],[bx-14-i*2,by-(26+i*8)*o.crest]]]);}}
  const fl=o.flap;const sh=[-6,-84];const wing=[[sh[0],sh[1]],[sh[0]-30,sh[1]+6],[sh[0]-58,sh[1]+30]].map(([x,y])=>{const dx=x-sh[0],dy=y-sh[1];const an=-fl*1.9;return[sh[0]+dx*Math.cos(an)-dy*Math.sin(an),sh[1]+dx*Math.sin(an)+dy*Math.cos(an)];});
  const wing2=Q([sh[0],sh[1]],[sh[0]+10+fl*0,sh[1]+30-fl*60],[wing[2][0],wing[2][1]],10);P.push(['wing',Q(wing[0],wing[1],wing[2],10).concat(wing2.slice().reverse())]);
  P.push(['tail',[[-44,-50],[-98,-28]]],['tail2',[[-44,-56],[-100,-48]]],['tail3',[[-42,-44],[-92,-12]]]);
  if(!o.fly)P.push(['leg',[[-8,-28],[-8,0]]],['leg2',[[10,-28],[10,0]]],['foot',[[-18,0],[2,0]]],['foot2',[[0,0],[20,0]]]);else P.push(['leg',[[-8,-28],[-24,-10]]],['leg2',[[8,-28],[-10,-8]]]);
  return {P,hx,hy};}
function bird(x,y,s,dir,col,o,a=1,prog=1){if(a<=.01)return null;o=Object.assign({head:0,crest:0,flap:0,beak:0,ang:0,sq:1,brow:0,fly:0,eye:1},o);const {P,hx,hy}=birdPaths(o);
  ctx.save();ctx.translate(x,y);ctx.rotate(o.ang);ctx.scale(s*dir,s*o.sq);
  // fill silhouette
  ctx.save();ctx.globalAlpha=a*.92*Math.min(1,prog*2);ctx.fillStyle='#0a0a12';trace(P[0][1]);ctx.fill();ctx.beginPath();ctx.arc(hx,hy,25,0,TAU);ctx.fill();ctx.restore();
  const N=P.length;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.85,i/N*.85+.25);if(p<=0)return;glow(pts,p,nm=='crest'?CREST:col,3.2/s,a,14,prog<1);});
  if(prog>.6){const ea=a*seg(prog,.6,.8);dot(hx+9,hy-5,4.5*o.eye+.5,'#fff',ea);if(o.brow>0)glow([[hx-2,hy-18],[hx+18,hy-12]],1,col,3/s,ea*o.brow,8,false);}
  ctx.restore();
  // return world head pos
  const wx=x+dir*s*(hx*Math.cos(o.ang)-hy*Math.sin(o.ang)),wy=y+s*o.sq*(hx*Math.sin(o.ang)*dir+hy*Math.cos(o.ang));return {hx:wx,hy:wy,x,y};}
function pole(x,a,prog){glow([[x,GY],[x,WY-40]],prog,'#8a8aa0',4,a,6,false);glow([[x-60,WY-20],[x+60,WY-20]],prog,'#8a8aa0',4,a,6,false);}
function stone(x,y,s,txt,a,rot){if(a<=.01)return;ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.globalAlpha=a;ctx.fillStyle='#2a2430';ctx.beginPath();ctx.moveTo(-22*s,-6*s);ctx.lineTo(-8*s,-20*s);ctx.lineTo(18*s,-14*s);ctx.lineTo(24*s,6*s);ctx.lineTo(4*s,20*s);ctx.lineTo(-18*s,14*s);ctx.closePath();ctx.fill();ctx.strokeStyle=RED;ctx.lineWidth=3;ctx.shadowColor=RED;ctx.shadowBlur=14;ctx.stroke();ctx.restore();
  if(txt){ctx.save();ctx.globalAlpha=a;ctx.font='900 30px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=RED;ctx.shadowBlur=12;ctx.fillText(txt,x,y-34);ctx.restore();}}
function feather(x,y,s,rot,col,a){if(a<=.01)return;ctx.save();ctx.translate(x,y);ctx.rotate(rot);glow([[0,-18*s],[0,18*s]],1,col,2,a,8,false);glow(Q([0,-18*s],[10*s,0],[0,16*s],8),1,col,1.6,a,8,false);glow(Q([0,-18*s],[-10*s,0],[0,16*s],8),1,col,1.6,a,8,false);ctx.restore();}
const FLX=[200,350,500,900,1050,1200];
const CAMS=[[0,700,470,2.3],[2.3,700,500,2.0],[2.67,780,560,1.0],[5.33,760,540,1.1],[7.4,720,500,1.4],[DROP,840,560,1.0],[B(5),820,540,1.02],[B(6),800,520,1.04],[LOCK,760,500,1.12],[B(7),760,420,.95],[STAMP,760,400,1.0],[B(8),820,540,1.0],[SLAM,780,560,1.08],[B(9),760,760,1.1],[CLIMAX-.5,760,820,1.3],[CLIMAX,780,420,.92],[B(11),780,420,.98]];
function camS(t){let i=0;while(i<CAMS.length-1&&CAMS[i+1][0]<=t)i++;const a=CAMS[i],pv=CAMS[Math.max(0,i-1)];const p=eInOut(seg(t,a[0],a[0]+(i==2?.5:.6)));return[1,2,3].map(j=>lerp(pv[j],a[j],i==0?1:p));}
const SKY=[[0,['#06060e','#10101e','#1c1a30']],[2.67,['#0a0814','#1c1630','#3a2a50']],[DROP,['#1a0a04','#5a2a0c','#ff9a40']],[B(5),['#140a06','#40200c','#d07a30']],[B(6),['#140608','#3a1014','#a03a30']],[B(7),['#0a1830','#2a5a90','#ffd890']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#0c1420','#2a4a70','#ffc080']],[B(11)+.6,['#040408','#0c0c14','#16161e']]];
function skyAt(t){let c=SKY[0][1];for(let i=1;i<SKY.length;i++){const p=seg(t,SKY[i][0]-.15,SKY[i][0]+.4);if(p<=0)break;c=c.map((x,j)=>mixc(x,SKY[i][1][j],p));}return c;}
const STARS=[...Array(200)].map((_,i)=>{const r=rng(i+5);return[r()*W*1.4-W*.2,r()*H*.7,r()*1.6+.4,r()*6];});
const WORDS=['枪打出头鸟','爱出风头','少管闲事','闭嘴吧'];
// hero keyframes: x,y offset (0=on wire), head, crest, flap, beak, ang, sq, brow, fly
const HP=o=>Object.assign({x:700,y:0,head:0,crest:.3,flap:0,beak:0,ang:0,sq:1,brow:0,fly:0,dir:1,eye:1},o);
const KH=[[0,HP({})],[2.67,HP({})],[4.0,HP({ang:.05})],[5.33,HP({head:.2})],[6.0,HP({head:.5,crest:.6})],[6.66,HP({head:.8,crest:.8,beak:1}),'snap'],[7.3,HP({head:1,crest:1,beak:.3,brow:1})],[7.9,HP({head:.6,sq:.9,crest:.8})],
 [DROP,HP({head:1,crest:1,beak:1,flap:1,y:-60,sq:1.08,brow:1}),'snap'],[DROP+.8,HP({head:.6,crest:.8})],[B(5)-.1,HP({head:.3,crest:.6})]];
MK.forEach((k,i)=>{KH.push([k-.2,HP({head:.2,crest:.5,sq:.94})],[k,HP({head:1,crest:1,beak:1,flap:.7,brow:1,y:-30,sq:1.06}),'snap'],[k+.35,HP({head:.8,crest:.9,beak:.3,brow:1})]);});
KH.push([B(6)-.1,HP({head:.6,crest:.8,brow:1})]);[[WAVES[0],-1],[WAVES[1],1]].forEach(([k,d])=>{KH.push([k-.25,HP({head:.4,crest:.8,sq:.9})],[k,HP({x:700+d*80,y:-160,fly:1,flap:1,crest:1,head:.3}),'snap'],[k+.3,HP({x:700+d*40,y:0,head:.4,crest:.8})]);});
KH.push([LOCK-.1,HP({head:.8,crest:1,beak:.5})],[LOCK,HP({x:640,y:-40,ang:-.6,sq:.9,crest:.2,eye:.4,flap:.8}),'snap'],[LOCK+.5,HP({x:660,y:0,ang:-.15,head:.1,crest:.3,eye:.6})],
 [B(7),HP({y:-260,fly:1,flap:.2,crest:.8,head:.3})]);
JABS.forEach((k,i)=>{KH.push([k-.12,HP({x:700+i*20,y:-300-i*20,fly:1,flap:-.3,crest:1,head:.3})],[k,HP({x:720+i*20,y:-330-i*20,fly:1,flap:1,crest:1,head:.4,beak:.6}),'snap']);});
KH.push([STAMP,HP({x:760,y:-380,fly:1,flap:1,crest:1,head:.5,beak:1,sq:1.08}),'snap'],[STAMP+.6,HP({x:770,y:-370,fly:1,flap:-.2,crest:1,head:.4})],[B(8)-.15,HP({x:700,y:0,crest:.8,head:.6})]);
SNAPS.forEach((k,i)=>{KH.push([k,HP({head:.2,crest:.5-i*.1,sq:.92,eye:.7}),'snap'],[k+.3,HP({head:.1,crest:.4,sq:.94})]);});
KH.push([SLAM-.3,HP({head:.1,crest:.3,sq:.92})],[SLAM,HP({x:760,y:-80,ang:.9,fly:1,flap:1,crest:0,eye:.3}),'snap'],[SLAM+.6,HP({x:840,y:200,ang:1.6,fly:1,flap:.4,eye:.3})],[B(9),HP({x:760,y:430-40,ang:.25,crest:0,eye:.5,sq:.9})],[CLIMAX-.6,HP({x:740,y:390,ang:.1,crest:.2,head:.2,eye:1})],[CLIMAX-.2,HP({x:740,y:400,sq:.84,crest:.6,flap:-.5,fly:1})],
 [CLIMAX,HP({x:720,y:-300,fly:1,flap:1,crest:1,head:.5,beak:1}),'snap'],[CLIMAX+.7,HP({x:730,y:-330,fly:1,flap:-.2,crest:1,head:.4})],[B(11),HP({x:740,y:-320,fly:1,flap:.4,crest:1,head:.4})],[27.5,HP({x:760,y:-330,fly:1,flap:.4,crest:1})]);
KH.sort((a,b)=>a[0]-b[0]);
function kfH(T){let i=0;while(i<KH.length-1&&KH[i+1][0]<=T)i++;const a=KH[i],b=KH[Math.min(i+1,KH.length-1)];if(a===b)return Object.assign({},a[1]);const d=b[0]-a[0];let p=d>0?seg(T,a[0],b[0]):1;p=b[2]=='snap'?eOut(p):eInOut(p);const o={};for(const k in a[1])o[k]=lerp(a[1][k],b[1][k],p);return o;}

window.draw=function(t){
  PEN=null;ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';ctx.filter='none';
  const live=t>=DROP,hit=hitAmt(t),endF=1-seg(t,B(11)+.5,27.6),T=rt(t);
  const b1=win(t,B(5)-.4,B(6),.2,.25),b2=win(t,B(6)-.1,B(7),.2,.25),b3=win(t,B(7)-.1,B(8),.2,.25),b4=win(t,B(8)-.1,B(9)+.1,.2,.3),dark=win(t,B(9),CLIMAX,.4,.12),fire=seg(t,CLIMAX,CLIMAX+.8);
  const sky=skyAt(t);const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,sky[0]);g.addColorStop(.62,sky[1]);g.addColorStop(1,sky[2]);ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const cm=camS(t),sh=shake(t);const z=cm[2]*(1+sh.z);
  ctx.save();ctx.translate(W*.38+sh.x,H*.55+sh.y);ctx.rotate(sh.r);ctx.scale(z,z);ctx.translate(-cm[0],-cm[1]);
  STARS.forEach(s=>{ctx.globalAlpha=(.1+.4*(.5+.5*Math.sin(t*1.5+s[3])))*endF*(1-dark*.8)*(1-b3)*(1-fire*.7);ctx.fillStyle='#fff';ctx.fillRect(s[0],s[1],s[2],s[2]);});ctx.globalAlpha=1;
  // sun in 03 / climax
  const sunA=Math.max(b3,fire)*endF;if(sunA>0){const sx=1000,sy=110;ctx.save();ctx.globalCompositeOperation='lighter';const gg=ctx.createRadialGradient(sx,sy,0,sx,sy,600);gg.addColorStop(0,`rgba(255,220,140,${.6*sunA})`);gg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=gg;ctx.fillRect(sx-700,sy-700,1400,1400);ctx.restore();glow(circ(sx,sy,90,90,50),1,'#fff0c0',4,sunA,30,false);}
  {const r=rng(39);let x=-500;const fc=live?mixc(sky[2],'#ffffff',.25):'#555';while(x<W+700){const w=120+r()*180,h=120+r()*300;ctx.save();ctx.globalAlpha=endF;ctx.fillStyle=mixc('#05050c',sky[1],.25);ctx.fillRect(x,GY-h,w-12,h);ctx.restore();glow(rectP(x,GY-h,x+w-12,GY),eOut(seg(t,2.6,3.6)),fc,1.2,.3*endF,0,false);
      for(let i=0;i<Math.floor((w-30)/34);i++)for(let j=0;j<Math.floor((h-30)/44);j++){if(r()<.62)continue;ctx.save();ctx.globalAlpha=(live?.35:.14)*endF*(1-dark*.8)*(.6+.4*Math.sin(t+i+j));ctx.fillStyle=r()>.75?HC:'#fff0d8';ctx.fillRect(x+16+i*34,GY-h+18+j*44,14,20);ctx.restore();}x+=w;}}
  ctx.fillStyle=mixc('#05040a',sky[2],.12);ctx.fillRect(-1200,GY,W+2400,700);glow([[-1200,GY],[W+1200,GY]],eOut(seg(t,2.6,3.4)),live?mixc(HC,'#777',dark):SKETCH,2,.8*endF,live?10:0,false);
  // wire + poles
  const wp=eOut(seg(t,2.67,3.4));const wireA=endF*(t<B(7)-.2||t>=B(8)-.3?1:1-b3)*(1-seg(t,CLIMAX,CLIMAX+.6));
  if(wireA>0){pole(-400,wireA,wp);pole(1800,wireA,wp);const pts=[];for(let i=0;i<=80;i++){const x=-400+i*2200/80;pts.push([x,wireY(x)]);}glow(pts,wp,'#a0a0b8',2.6,wireA,6,false);
    if(t>=SLAM&&t<SLAM+.6){const p=seg(t,SLAM,SLAM+.6);glow(pts,1,'#fff',2,wireA*(1-p),14,false);}}
  const ho=kfH(T);
  // ---- flock ----
  const flockOn=(i)=>seg(t,2.67+.67*(i%3)+(i>2?.33:0),2.9+.67*(i%3)+(i>2?.33:0));
  for(let i=0;i<6;i++){let x=FLX[i],y=wireY(FLX[i]),dir=i<3?1:-1,o={head:0,flap:0,ang:0,sq:1,beak:0},a=endF;
    const pop=flockOn(i);if(t<DROP){a*=pop;o.sq=lerp(.3,1,eBack(pop));y-=(1-eOut(pop))*120;if(t>6.66)dir=i<3?1:-1;else dir=i%2?1:-1;}
    // turn heads to hero at 6.66
    if(t>=6.66&&t<DROP)dir=FLX[i]<700?1:-1;
    // 01: hide heads (shrink) on hero shouts
    if(b1>0){const hidden=MK.filter(k=>t>=k).length;o.sq=1-.15*Math.min(1,hidden)*b1;o.head=0;dir=FLX[i]<700?-1:1;}
    // 02: watching stones, side-eye
    if(b2>0){dir=FLX[i]<700?1:-1;o.beak=.3*Math.sin(t*12+i)>.1?1:0;}
    // 03: V formation flying behind hero
    if(b3>0||(t>=B(7)-.3&&t<B(8)-.1)){const k=seg(t,B(7)-.2+i*.05,B(7)+.4+i*.05);const rank=Math.floor(i/2)+1,side=i%2?1:-1;const hx=700+(ho.x-700)+lerp(0,0,1),hy=wireY(700)+ho.y;const tx=ho.x-rank*150,ty=hy+side*rank*95+20;const back=seg(t,B(8)-.5,B(8)-.1);x=lerp(lerp(FLX[i],tx,eInOut(k)),FLX[i],eInOut(back));y=lerp(lerp(wireY(FLX[i]),ty,eInOut(k)),wireY(FLX[i]),eInOut(back));o.fly=k>.1&&back<.9?1:0;o.flap=o.fly?Math.sin(t*14+i):0;dir=1;}
    // 04: move away from hero
    if(t>=B(8)-.1&&t<B(9)+.3){const n=[B(8)+.1,...SNAPS].filter(k=>t>=k).length;const lastK=[B(8)+.1,...SNAPS][Math.max(0,n-1)];const hop=n?1-Math.abs(seg(t,lastK,lastK+.3)*2-1):0;x=FLX[i]+(FLX[i]<700?-1:1)*n*90;y=wireY(x)-hop*40;dir=FLX[i]<700?-1:1;o.flap=hop;}
    // storm: gone (flew away)
    if(t>=SLAM){const p=seg(t,SLAM,SLAM+1.2);x=FLX[i]+(FLX[i]<700?-1:1)*(360+p*900);y=wireY(FLX[i])-p*500;o.fly=1;o.flap=Math.sin(t*16+i);a*=1-seg(t,SLAM+.6,SLAM+1.2);}
    // climax: V around hero
    if(t>=CLIMAX){const k=eOut(seg(t,CLIMAX+.1+i*.06,CLIMAX+.7+i*.06));const rank=Math.floor(i/2)+1,side=i%2?1:-1;const hx=ho.x,hy=wireY(700)+ho.y;x=lerp(side>0?1900:-500,hx-rank*155,k);y=lerp(hy+300,hy+side*rank*95+20,k);o.fly=1;o.flap=Math.sin(t*14+i*1.3);dir=1;a=endF*k;}
    bird(x,y,.9,dir,FC,o,a,1);}
  // ---- hero ----
  const heroBig=t<2.67;const hprog=seg(t,.15,2.3);const hs=1.15;const hx0=ho.x,hy0=wireY(700)+ho.y;
  const HB=bird(hx0,hy0,hs,ho.dir,HC,ho,endF,heroBig?hprog:1);
  // crest glow pulse when speaking
  // ---- intro ----
  if(t<DROP&&HB){if(t>=6.66)bubble(HB.hx+30,HB.hy-90,'我来！',win(t,6.66,7.9,.05,.2),eBack(seg(t,6.66,6.86))*1.2,HC,-1);
    if(t>=6.66&&t<7.3)shock(HB.hx,HB.hy,seg(t,6.66,7.2),1,HC,600,.9,5);
    [5.33,5.99].forEach((k,i)=>{if(t>=k&&t<k+.6){for(let q=0;q<6;q++){const fx=FLX[q],fy=wireY(fx)-120;ctx.save();ctx.globalAlpha=(1-seg(t,k+.3,k+.6));ctx.font='900 34px '+SER;ctx.textAlign='center';ctx.fillStyle='#c0c8d8';ctx.fillText(i?'…':'？',fx,fy);ctx.restore();}}});
    if(t>=5.33&&t<6.66){ctx.save();ctx.globalAlpha=win(t,5.33,6.66,.1,.15);ctx.font='700 30px '+SER;ctx.textAlign='center';ctx.fillStyle='#d0d8e8';ctx.fillText('“谁来说两句？”',700,wireY(700)-260);ctx.restore();}
    // proverb glyph
    const pv='枪打出头鸟'.split('');pv.forEach((c,i)=>{const k=7.25+i*.13;if(t<k)return;const p=eOut(seg(t,k,k+.14));ctx.save();ctx.globalAlpha=1-seg(t,DROP-.05,DROP+.05);ctx.translate(560+i*70,wireY(700)-330);ctx.scale(lerp(2,1,p),lerp(2,1,p));ctx.font='900 64px '+SER;ctx.textAlign='center';ctx.fillStyle=i==4?RED:'#fff';ctx.shadowColor=i==4?RED:'#fff';ctx.shadowBlur=18;ctx.fillText(c,0,0);ctx.restore();});}
  if(t>=DROP&&t<DROP+1.6){const dt=t-DROP;[0,.12,.26].forEach((d,j)=>shock(700,wireY(700)-60,seg(dt,d,d+1.1),endF,j==1?'#fff':HC,2200,.8,6));sparks(t,DROP,700,wireY(700)-80,70,8,1300,.9,HC);for(let i=0;i<10;i++){const r=rng(i+3);feather(700+(r()-.5)*dt*900,wireY(700)-80+dt*300*r()+(r()-.5)*dt*500,1,dt*4+i,i%2?HC:FC,1-seg(dt,1,1.6));}}
  // 01 speak up
  if(b1>0&&HB){const a=b1*endF;const say=['这方案有问题！','我有不同意见！','这事我负责！'];MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6);if(t>=k&&t<e)bubble(HB.hx+30,HB.hy-90,say[i],a,eBack(seg(t,k,k+.2))*(1+i*.1),HC,-1);if(t>=k&&t<k+.6){shock(HB.hx,HB.hy,seg(t,k,k+.5),a,HC,900,.9,6);sparks(t,k,HB.hx,HB.hy-30,40,i+12,900,.5,CREST);}});
    if(t>=MK[0]+.2){for(let i=0;i<6;i++){const fx=FLX[i];ctx.save();ctx.globalAlpha=a*.85*seg(t,MK[0]+.2,MK[0]+.4);ctx.font='700 26px '+SER;ctx.textAlign='center';ctx.fillStyle='#a8b8c8';ctx.fillText(['嘘…','完了','又是TA','…','别看我','啧'][i],fx,wireY(fx)-140);ctx.restore();}}}
  // 02 stones
  if(b2>0&&HB){const a=b2*endF;const S=[[B(6)+.0,WAVES[0],'闲话',-1],[WAVES[0]+.1,WAVES[1],'嫉妒',1],[WAVES[1]+.1,LOCK,'背锅',-1]];S.forEach(([t0,t1,txt,side],i)=>{if(t<t0||t>t1+.6)return;const p=seg(t,t0,t1);const sx=700+side*900,sy=wireY(700)-500;const tx=700,ty=wireY(700)-70;if(t<t1){stone(lerp(sx,tx,p),lerp(sy,ty,p)-Math.sin(p*Math.PI)*120,1.3,txt,a,t*8);}else if(i<2){const q=seg(t,t1,t1+.6);stone(lerp(tx,tx-side*800,q),ty-q*200,1.3,txt,a*(1-q),t*8);ctx.save();ctx.globalAlpha=a*(1-q);ctx.font='900 40px '+SER;ctx.fillStyle='#fff';ctx.textAlign='center';ctx.fillText('躲！',HB.hx,HB.hy-120);ctx.restore();}});
    if(t>=LOCK){const dt=t-LOCK;if(dt<1.2){[0,.1,.22].forEach((d,j)=>shock(HB.hx,HB.hy+40,seg(dt,d,d+1),a,j==1?'#fff':RED,1500,.8,7));for(let i=0;i<16;i++){const r=rng(i+60);const an=r()*TAU,v=200+r()*500;feather(HB.hx+Math.cos(an)*v*dt,HB.hy+40+Math.sin(an)*v*dt+300*dt*dt,1.2,dt*5+i,i%3?HC:CREST,a*(1-seg(dt,.7,1.2)));}}
      const p=eBack(seg(dt,0,.3));ctx.save();ctx.globalAlpha=a*(1-seg(t,B(7)-.3,B(7)));ctx.translate(700,wireY(700)-280);ctx.scale(p,p);ctx.font='900 66px '+SER;ctx.textAlign='center';ctx.fillStyle=RED;ctx.shadowColor=RED;ctx.shadowBlur=24;ctx.fillText('锅，全是你的！',0,0);ctx.restore();}}
  // 03 lead
  if(b3>0&&HB){const a=b3*endF;JABS.forEach((k,i)=>{if(t>=k&&t<k+.6){glow(circ(HB.hx,HB.hy,20+seg(t,k,k+.5)*140,20+seg(t,k,k+.5)*140,30),1,'#fff',2.4,a*(1-seg(t,k,k+.5)),12,false);sparks(t,k,HB.hx,HB.hy,24,i+20,700,.5,HC);}});
    bubble(HB.hx+30,HB.hy-90,'跟我来！',a*win(t,B(7)+.3,STAMP,.1,.15),1,HC,-1);
    if(t>=STAMP){const dt=t-STAMP;if(dt<1.6){[0,.12,.26].forEach((d,j)=>shock(HB.hx,HB.hy,seg(dt,d,d+1.2),a,j==1?'#fff':HC,2200,.8,7));sparks(t,STAMP,HB.hx,HB.hy,90,44,1500,1,GOLD);}
      const tp=eBack(seg(dt,.05,.35));ctx.save();ctx.globalAlpha=a*(1-seg(t,B(8)-.3,B(8)));ctx.translate(600,wireY(700)+60);ctx.scale(tp,tp);ctx.font='900 58px '+SER;ctx.textAlign='center';ctx.fillStyle=GOLD;ctx.shadowColor=GOLD;ctx.shadowBlur=24;ctx.fillText('总得有人，第一个飞',0,0);ctx.restore();}}
  // 04 isolated
  if(b4>0&&HB){const a=b4*endF;const lab=['爱出风头','显摆','装什么'];[B(8)+.1,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM)return;const side=i%2?1:-1;wordBox(700+side*(330+i*40),wireY(700)-200-i*50,lab[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b8',side*.08);});
    if(t>=SNAPS[0]&&t<SLAM)bubble(HB.hx+30,HB.hy-90,'你们…去哪？',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),HC,-1);
    if(t>=SLAM&&t<SLAM+1.6){const dt=t-SLAM;bolt(900,-400,760,wireY(700)-40,9,160,'#fff',endF*(1-seg(dt,.15,.4)));for(let j=0;j<5;j++)shock(760,wireY(700)-40,seg(dt,j*.09,j*.09+1.3),endF,j%2?'#fff':SKYB,3000,.6,8);
      if(dt<.4){ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=`rgba(220,230,255,${.55*(1-dt/.4)*endF})`;ctx.fillRect(-3000,-3000,W+6000,H+6000);ctx.restore();}}}
  // storm
  if(dark>0&&HB){const a=dark*endF;WORDS.forEach((w,i)=>{const an=t*.7+i*TAU/4;const rr=lerp(560,340,seg(t,B(9),CLIMAX));wordBox(HB.x+Math.cos(an)*rr,HB.y-80+Math.sin(an)*rr*.45,w,a*seg(t,B(9)+.3+i*.25,B(9)+.6+i*.25),1,'#8a90a0',Math.sin(t+i)*.08);});
    const r=rng(70);for(let i=0;i<12;i++)feather(HB.x-260+r()*520,GY-6,1,r()*3,i%3?HC:CREST,a*.7);
    if(t<CLIMAX-.7)bubble(HB.hx+30,HB.hy-80,'出头…真的错了吗',a*seg(t,B(9)+1.0,B(9)+1.3),1,HC,-1);}
  // climax
  if(t>=CLIMAX-.55&&t<CLIMAX&&HB){const p=seg(t,CLIMAX-.55,CLIMAX);const O=[HB.hx,HB.hy];const r=rng(Math.floor(t*30));for(let i=0;i<30;i++){const an=r()*TAU,d0=900*(1-p)*(.5+r());dot(O[0]+Math.cos(an)*d0,O[1]+Math.sin(an)*d0,4,i%2?GOLD:HC,p*endF);}glow(circ(O[0],O[1],700*(1-p)+100,700*(1-p)+100,80),1,GOLD,2.4,p*endF,12,false);}
  if(t>=CLIMAX&&HB){const a=endF,dt=t-CLIMAX;const O=[HB.x,HB.y-60];
    ctx.save();ctx.globalCompositeOperation='lighter';for(let i=0;i<32;i++){const an=i/32*TAU+t*.05;const L=2400*fire;const gg=ctx.createLinearGradient(O[0],O[1],O[0]+Math.cos(an)*L,O[1]+Math.sin(an)*L);gg.addColorStop(0,`rgba(255,215,150,${.2*a})`);gg.addColorStop(1,'rgba(255,215,150,0)');ctx.strokeStyle=gg;ctx.lineWidth=28;ctx.beginPath();ctx.moveTo(O[0],O[1]);ctx.lineTo(O[0]+Math.cos(an)*L,O[1]+Math.sin(an)*L);ctx.stroke();}ctx.restore();
    if(dt<2.6){[0,.12,.26,.4].forEach((d,j)=>shock(O[0],O[1],seg(dt,d,d+1.4),a,j%2?'#fff':GOLD,2800,.8,9));sparks(t,CLIMAX,O[0],O[1],140,100,2000,1.3,GOLD);if(dt<.4)dot(O[0],O[1],320*(1-dt/.4),'#fff',a);
      WORDS.forEach((w,i)=>{shards(t,CLIMAX,O[0]+Math.cos(i*1.6)*360,O[1]+120+Math.sin(i*1.6)*160,a,i+140,'#d8d8e0',20,1100);});}
    if(dt>=.6&&dt<2.2)bubble(HB.hx+30,HB.hy-90,'这次，一起飞！',a*(1-seg(dt,2.0,2.2)),1,HC,-1);
    const r2=rng(171);for(let i=0;i<40;i++){const st=r2()*1.6,sx=r2()*W*1.4-W*.2,sp=120+r2()*200;const p=dt-st-.1;if(p<0)continue;feather(sx+Math.sin(p*2+i)*40,-100+p*sp,1+r2(),p*2+i,[HC,GOLD,FC][i%3],a*(1-seg(p,2.4,3.4))*.85);}}
  if(dark>0){ctx.save();ctx.globalAlpha=dark*.3*endF;ctx.fillStyle='#040406';ctx.fillRect(-3000,-3000,W+6000,H+6000);ctx.restore();rain(dark*endF,t);}
  ctx.restore();
  if(hit>.15){const r=rng(Math.floor(t*30)+1);ctx.save();ctx.globalCompositeOperation='lighter';for(let i=0;i<60;i++){const an=r()*TAU,r0=360+r()*200,r1=r0+250+r()*600;ctx.globalAlpha=hit*.5*r();ctx.strokeStyle=[HC,'#fff',CREST,FC,GOLD][i%5];ctx.lineWidth=1+r()*2.5;ctx.beginPath();ctx.moveTo(W*.38+Math.cos(an)*r0,H/2+Math.sin(an)*r0*.6);ctx.lineTo(W*.38+Math.cos(an)*r1,H/2+Math.sin(an)*r1*.6);ctx.stroke();}ctx.restore();}
  if(hit>0){ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=`rgba(255,240,215,${.32*hit*hit})`;ctx.fillRect(0,0,W,H);ctx.restore();}
  chroma(hit*15);
  for(const k of INVERT){if(t>=k&&t<k+.067)invertFrame();}
  const hud=seg(t,DROP+.6,DROP+1.2)*(1-seg(t,B(11)+.6,B(11)+1.2));if(hud>0&&!window.NOCAP){ctx.save();ctx.globalAlpha=hud*.9;feather(71,86,1,.4,HC,1);ctx.textAlign='left';ctx.fillStyle=WHITE;ctx.font='600 26px '+SER;ctx.fillText('人间动物志 · 出头鸟',104,76);ctx.fillStyle='rgba(246,242,255,.65)';ctx.font='500 21px '+SER;ctx.fillText('第一期 · 每种人，都是一种动物',104,104);ctx.restore();}
  if(!window.NOCAP){const s2=ctx.createRadialGradient(TX,450,0,TX,450,480);s2.addColorStop(0,'rgba(8,6,4,.76)');s2.addColorStop(.6,'rgba(8,6,4,.5)');s2.addColorStop(1,'rgba(8,6,4,0)');ctx.save();ctx.translate(TX,450);ctx.scale(1.25,.8);ctx.translate(-TX,-450);ctx.fillStyle=s2;ctx.fillRect(TX-480,-30,960,960);ctx.restore();}
  ctx.save();ctx.translate(sh.x*.35,sh.y*.35);
  const H2=n=>B(n)+BAR/2;
  caption(t,.05,H2(1),[[['有一种鸟',0]],[['总爱',0],['出头',1]]]);
  caption(t,H2(1),B(2),[[['大家都安静',0]],[['TA偏要',0],['开口',1]]]);
  caption(t,B(2),H2(2),[[['开会没人说话',0]],[['TA先',0],['举手',1]]]);
  caption(t,H2(2),B(3),[[['问谁来负责',0]],[['TA',0],['第一个',1]]]);
  caption(t,B(3),DROP-.03,[[['可老话说',0]],[['枪打',0],['出头鸟',1]]]);
  if(!window.NOCAP&&t>=DROP&&t<B(5)){const a=win(t,DROP,B(5),.03,.3),k=1+.5*(1-eOut(seg(t,DROP,DROP+.35)));ctx.save();ctx.globalAlpha=a;ctx.textAlign='center';ctx.translate(TX,470);ctx.scale(k,k);
    ctx.font='600 28px '+SER;ctx.fillStyle=WHITE;ctx.letterSpacing='10px';ctx.fillText('THE FIRST BIRD',5,-140);ctx.letterSpacing='0px';ctx.font='900 170px '+SER;const gg=ctx.createLinearGradient(-260,0,260,0);gg.addColorStop(0,'#fff0c8');gg.addColorStop(.5,HC);gg.addColorStop(1,CREST);ctx.fillStyle=gg;ctx.shadowColor='rgba(255,150,60,.9)';ctx.shadowBlur=34;ctx.fillText('出头鸟',0,50);ctx.shadowBlur=0;
    ctx.font='500 26px '+SER;ctx.fillStyle='rgba(255,244,230,.9)';ctx.fillText('人间动物志 · 第一期',0,104);ctx.font='500 24px '+SER;ctx.fillStyle='rgba(255,200,140,.92)';ctx.fillText('敢说 · 挨打 · 领飞 · 孤立',0,144);ctx.restore();}
  caption(t,B(5),H2(5),[[['别人不敢说的',0]],[['TA',0],['说',1]]],['01','敢说',HC]);
  caption(t,H2(5),B(6),[[['别人不敢扛的',0]],[['TA',0],['扛',1]]],['01','敢说',HC]);
  caption(t,B(6),H2(6),[[['风头一出',0]],[['闲话',0],['就来',1]]],['02','挨打',RED]);
  caption(t,H2(6),B(7),[[['功劳没份',0]],[['锅',0],['全是TA的',1]]],['02','挨打',RED]);
  caption(t,B(7),H2(7),[[['好的一面',0]],[['敢闯',0],['敢当',1]]],['03','领飞',GOLD]);
  caption(t,H2(7),B(8),[[['一群人里',0]],[['总要有人',0],['先飞',1]]],['03','领飞',GOLD]);
  caption(t,B(8),H2(8),[[['坏的一面',0]],[['容易被',0],['孤立',1]]],['04','孤立','#a0a8b8']);
  caption(t,H2(8),B(9),[[['锋芒太露',0]],[['处处',0],['树敌',1]]],['04','孤立','#a0a8b8']);
  caption(t,B(9),H2(9),[[['被打下来',0]],[['才懂',0],['分寸',1]]]);
  caption(t,H2(9),CLIMAX-.02,[[['出头不是错',0]],[['要看',0],['时机',1]]]);
  if(!window.NOCAP&&t>=CLIMAX&&t<B(11)){const a=win(t,CLIMAX,B(11),.02,.3),k=1+.6*(1-eOut(seg(t,CLIMAX,CLIMAX+.3)));ctx.save();ctx.globalAlpha=a;ctx.textAlign='center';ctx.font='900 58px '+SER;ctx.fillStyle=WHITE;ctx.fillText('出头鸟',TX,380);
    ctx.translate(TX,525);ctx.scale(k,k);ctx.font='900 136px '+SER;ctx.fillStyle=hiFill();ctx.shadowColor='rgba(255,180,90,.85)';ctx.shadowBlur=36;ctx.fillText('也能领头',0,0);ctx.restore();}
  caption(t,B(11),27.6,[[['锋芒可以有',0]],[['但要',0],['会收',1]]]);
  ctx.restore();
  const vg=ctx.createRadialGradient(W/2,H/2,H*.35,W/2,H/2,W*.62);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.55)');ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);
  if(window.boyCard)boyCard(ctx,t,27.45,{accent:HC,x:735,y:540,sub:'@知识探索者 · 人间动物志'});
  ctx.save();ctx.globalAlpha=.06;ctx.globalCompositeOperation='overlay';ctx.drawImage(NOISE[Math.floor(t*30)%4],0,0,W,H);ctx.restore();
};

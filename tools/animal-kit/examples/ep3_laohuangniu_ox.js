// ===== 人间动物志 · 老黄牛 =====
const OC='#e8b04a',HORN='#fff0d0',GRN='#6dffa8';
// ox local coords; o:{exp:0 smile 1 tired 2 determined 3 collapsed, sweat, fhx,fhy,bhx,bhy,walk,lean,sq,mouth}
function ox(x,y,s,dir,o,a=1,prog=1){if(a<=.01)return null;o=Object.assign({exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,mouth:0,ring:1},o);
  ctx.save();ctx.translate(x,y);ctx.scale(s*dir,s*o.sq);ctx.rotate(o.lean);const w=3.2/s;const ph=o.walk*Math.sin(t0g*10);
  ctx.save();ctx.globalAlpha=a*.92*Math.min(1,prog*2);ctx.fillStyle='#0c0a06';ctx.beginPath();ctx.ellipse(0,-128,52,66,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(8,-232,50,46,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(16,-200,46,30,0,0,TAU);ctx.fill();ctx.restore();
  const P=[['leg',[[-22+ph*14,0],[-20,-74]]],['leg2',[[22-ph*14,0],[20,-74]]],['body',circ(0,-128,52,66,40)],
    ['head',circ(8,-238,50,44,40)],['muzzle',circ(16,-198,46,30,36)],
    ['horn',Q([-28,-268],[-70,-280],[-62,-326],10)],['horn2',Q([44,-268],[86,-280],[78,-326],10)],
    ['ear',circ(-50,-246,18,9,20)],['ear2',circ(66,-246,18,9,20)],
    ['tail',Q([-48,-100],[-96,-80],[-88,-30],10)]];
  const N=P.length+4;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.8,i/N*.8+.25);if(p>0)glow(pts,p,nm.startsWith('horn')?HORN:OC,w,a,14,prog<1);});
  const fp=seg(prog,.6,.85);if(fp>0){const fa=a*fp;
    ctx.save();ctx.globalAlpha=fa;ctx.fillStyle=OC;ctx.beginPath();ctx.ellipse(0,-194,6,4,0,0,TAU);ctx.ellipse(32,-194,6,4,0,0,TAU);ctx.fill();ctx.restore();
    if(o.ring>0)glow(circ(16,-178,10,10,20),1,GOLD,w,fa,10,false);
    // tuft
    glow([[2,-280],[6,-268]],1,OC,w,fa,6,false);glow([[14,-282],[14,-268]],1,OC,w,fa,6,false);
    const e=o.exp;
    if(e==0){glow(Q([-14,-244],[-6,-252],[2,-244],6),1,OC,w,fa,6,false);glow(Q([22,-244],[30,-252],[38,-244],6),1,OC,w,fa,6,false);glow(Q([2,-174+o.mouth*0],[16,-166],[30,-174],8),1,OC,w,fa,6,false);}
    else if(e==1){glow([[-16,-246],[2,-246]],1,OC,w,fa,6,false);glow([[20,-246],[38,-246]],1,OC,w,fa,6,false);dot(-6,-242,4,'#fff',fa);dot(30,-242,4,'#fff',fa);glow(Q([4,-168],[16,-174],[28,-168],6),1,OC,w,fa,6,false);}
    else if(e==2){glow([[-18,-256],[2,-248]],1,OC,w,fa,6,false);glow([[40,-256],[20,-248]],1,OC,w,fa,6,false);dot(-6,-242,5,'#fff',fa);dot(30,-242,5,'#fff',fa);glow([[4,-170],[28,-170]],1,OC,w,fa,6,false);}
    else {glow([[-14,-250],[0,-238]],1,OC,w,fa,6,false);glow([[-14,-238],[0,-250]],1,OC,w,fa,6,false);glow([[22,-250],[36,-238]],1,OC,w,fa,6,false);glow([[22,-238],[36,-250]],1,OC,w,fa,6,false);glow(Q([4,-168],[16,-176],[28,-168],6),1,OC,w,fa,6,false);}
    if(o.sweat>0){const sp=(t0g*1.2)%1;ctx.save();ctx.globalAlpha=fa*o.sweat*(1-sp);ctx.fillStyle='#8ad8ff';ctx.beginPath();ctx.ellipse(54,-262+sp*40,6,9,0,0,TAU);ctx.fill();ctx.restore();}
    arm([34,-170],[o.fhx,o.fhy],110,OC,w,fa,-1);arm([-34,-170],[o.bhx,o.bhy],110,OC,w,fa,1);dot(o.fhx,o.fhy,10,OC,fa);dot(o.bhx,o.bhy,10,OC,fa);}
  ctx.restore();return{hx:x+dir*s*8,hy:y+s*o.sq*-238,top:y+s*o.sq*-330,fh:[x+dir*s*o.fhx,y+s*o.sq*o.fhy]};}
function box(x,y,w,h,txt,a,rot,col){if(a<=.01)return;ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.globalAlpha=a*.95;ctx.fillStyle='#1c140a';ctx.fillRect(-w/2,-h,w,h);ctx.strokeStyle=col||'#d0a060';ctx.lineWidth=3;ctx.shadowColor=col||'#d0a060';ctx.shadowBlur=10;ctx.strokeRect(-w/2,-h,w,h);ctx.shadowBlur=0;if(txt){ctx.font='800 '+Math.round(Math.min(28,w/txt.length*.9))+'px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.fillText(txt,0,-h/2+10);}ctx.restore();}
const LAB=['文件','报表','PPT','方案','加班','周报','会议','跑腿','背锅','急件','改稿','值班'];
const OX0=640,TG0=280,BN0=1010;
const OP=o=>Object.assign({x:OX0,oy:0,dir:1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1},o);
const CARRY={fhx:40,fhy:-300,bhx:-40,bhy:-300};
const KO=[[0,OP({fhx:80,fhy:-150})],[2.67,OP({...CARRY})],[3.33,OP({...CARRY,sq:.97}),'snap'],[4.0,OP({...CARRY,sq:.95}),'snap'],[4.66,OP({...CARRY,sq:.93,exp:1,sweat:.5}),'snap'],[5.33,OP({...CARRY,sq:.93,exp:1,sweat:.6})],[7.4,OP({...CARRY,sq:.92,exp:1,sweat:.8})],
 [DROP,OP({...CARRY,exp:0,oy:-40,sq:1.04}),'snap'],[DROP+.8,OP({...CARRY,exp:0})]];
MK.forEach((k,i)=>{KO.push([k-.1,OP({...CARRY,exp:0,sq:.92-i*.03})],[k+.05,OP({...CARRY,exp:1,sweat:1,sq:.86-i*.03,lean:.03}),'snap'],[k+.4,OP({...CARRY,exp:0,sq:.9-i*.03,sweat:1})]);});
KO.push([B(6)-.05,OP({fhx:150,fhy:-160,exp:0,sweat:.6})],[WAVES[0],OP({fhx:160,fhy:-150,exp:0,lean:.08}),'snap'],[WAVES[1],OP({fhx:60,fhy:-110,exp:0})],[LOCK,OP({exp:1,sq:.94,fhx:40,fhy:-100,bhx:-40,bhy:-100}),'snap'],[LOCK+.6,OP({exp:1,sq:.94,fhx:40,fhy:-100})],
 [B(7),OP({exp:0})]);
JABS.forEach((k,i)=>{KO.push([k-.15,OP({exp:2,fhx:120,fhy:-220,bhx:-20,bhy:-230})],[k,OP({exp:2,fhx:160,fhy:-60,bhx:60,bhy:-80,lean:.15,sq:.96}),'snap']);});
KO.push([STAMP-.3,OP({exp:0,sq:.92})],[STAMP,OP({exp:0,fhx:80,fhy:-330,bhx:-80,bhy:-330,oy:-40}),'snap'],[STAMP+.6,OP({exp:0})],[B(8),OP({...CARRY,exp:0})]);
SNAPS.forEach((k,i)=>{KO.push([k+.05,OP({...CARRY,exp:1,sweat:1,sq:.88-i*.06,lean:.05}),'snap'],[k+.35,OP({...CARRY,exp:1,sweat:1,sq:.86-i*.06})]);});
KO.push([SLAM-.2,OP({...CARRY,exp:1,sq:.72,sweat:1})],[SLAM,OP({exp:3,sq:.6,lean:.4,fhx:120,fhy:-20,bhx:-80,bhy:-20,oy:20}),'snap'],[B(9),OP({exp:3,sq:.55,lean:.6,fhx:120,fhy:-10,bhx:-90,bhy:-10,oy:30})],[CLIMAX-.7,OP({exp:1,sq:.7,lean:.3})],[CLIMAX-.25,OP({exp:2,sq:.85,lean:.1,fhx:60,fhy:-120})],
 [CLIMAX,OP({exp:2,fhx:220,fhy:-240,bhx:-200,bhy:-240,oy:-50,sq:1.08}),'snap'],[CLIMAX+.8,OP({exp:2,fhx:60,fhy:-110,bhx:-60,bhy:-110})],[B(11),OP({exp:0,fhx:60,fhy:-110,walk:.6,x:OX0+60})],[27.5,OP({exp:0,x:OX0+120,walk:.6})]);
KO.sort((a,b)=>a[0]-b[0]);
const TPp=o=>Object.assign({x:TG0,oy:0,dir:1,evil:0,mouth:0,fhx:44,fhy:-110,bhx:-46,bhy:-110,knife:0,walk:0,crack:0,lean:0,sq:1,a:0},o);
const KTt=[[0,TPp({})],[2.4,TPp({a:0,x:TG0-200})],[2.67,TPp({a:1,x:TG0-60,walk:1})],[3.2,TPp({a:1,x:TG0,fhx:180,fhy:-200,mouth:1}),'snap'],[4.66,TPp({a:1,fhx:190,fhy:-200,mouth:1}),'snap'],[5.33,TPp({a:1,dir:-1,walk:1})],[6.3,TPp({a:0,dir:-1,x:TG0-300,walk:1})],
 [MK[0]-.5,TPp({a:1,x:TG0})],[MK[0],TPp({a:1,x:TG0,fhx:200,fhy:-220,mouth:1}),'snap'],[MK[2],TPp({a:1,x:TG0,fhx:200,fhy:-220,mouth:1}),'snap'],[B(6),TPp({a:1,x:TG0})],[LOCK,TPp({a:1,x:TG0,fhx:60,fhy:-280,bhx:-60,bhy:-280,mouth:1,oy:-30}),'snap'],[LOCK+.6,TPp({a:1,x:TG0,fhx:60,fhy:-280,mouth:1})],[B(7)-.1,TPp({a:0,x:TG0})],
 [B(8),TPp({a:1,x:TG0})],...SNAPS.map((k,i)=>[k,TPp({a:1,x:TG0,fhx:200,fhy:-220,mouth:1}),'snap']),[SLAM,TPp({a:1,x:TG0,lean:-.1})],[B(9),TPp({a:1,x:TG0-200,dir:-1,walk:1})],[B(9)+1,TPp({a:0,x:TG0-500,dir:-1,walk:1})],
 [CLIMAX-.1,TPp({a:1,x:TG0+40})],[CLIMAX+.1,TPp({a:1,x:TG0-120,lean:-.4,sq:.85,fhx:60,fhy:-240,bhx:-60,bhy:-240}),'snap'],[CLIMAX+1,TPp({a:1,x:TG0-160,sq:.9,mouth:1})],[27.5,TPp({a:1,x:TG0-160})]];
KTt.sort((a,b)=>a[0]-b[0]);
const BPp=o=>Object.assign({x:BN0,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,sq:1,walk:0,dir:-1,a:0},o);
const KBb=[[0,BPp({})],[2.9,BPp({a:0,x:BN0+200})],[3.1,BPp({a:1,x:BN0+40,walk:1})],[3.4,BPp({a:1,x:BN0,hop:.3,fhx:90,fhy:-120}),'snap'],[4.0,BPp({a:1,fhx:90,fhy:-130,hop:.3}),'snap'],[5.33,BPp({a:1,dir:1,walk:1})],[6.3,BPp({a:0,dir:1,x:BN0+300,walk:1})],
 [MK[0]-.5,BPp({a:1})],[MK[1],BPp({a:1,fhx:100,fhy:-130,hop:.3}),'snap'],[B(6),BPp({a:1})],[LOCK+.1,BPp({a:1,hop:.3,fhx:50,fhy:-130,bhx:50,bhy:-130}),'snap'],[LOCK+.6,BPp({a:1})],[B(7)-.1,BPp({a:0})],
 [B(8),BPp({a:1})],...SNAPS.map((k,i)=>[k+.1,BPp({a:1,fhx:100,fhy:-130,hop:.3}),'snap']),[SLAM,BPp({a:1,exp:1})],[B(9),BPp({a:1,dir:1,walk:1,x:BN0+200})],[B(9)+1,BPp({a:0,dir:1,x:BN0+500,walk:1})],
 [CLIMAX-.1,BPp({a:1,x:BN0-40})],[CLIMAX+.1,BPp({a:1,x:BN0+80,exp:1,hop:.4}),'snap'],[CLIMAX+1,BPp({a:1,x:BN0+100,exp:0,blush:.6})],[27.5,BPp({a:1,x:BN0+100})]];
KBb.sort((a,b)=>a[0]-b[0]);
function kfO(K,T){let i=0;while(i<K.length-1&&K[i+1][0]<=T)i++;const a=K[i],b=K[Math.min(i+1,K.length-1)];if(a===b)return Object.assign({},a[1]);const d=b[0]-a[0];let p=d>0?seg(T,a[0],b[0]):1;p=b[2]=='snap'?eOut(p):eInOut(p);const o={};for(const k in a[1]){o[k]=(k=='dir'||k=='exp'||k=='evil')?(p<.5?a[1][k]:b[1][k]):lerp(a[1][k],b[1][k],p);}return o;}
function nBoxes(t){if(t<2.67)return 0;if(t<B(5)){return Math.min(4,1+[3.33,4.0,4.66].filter(k=>t>=k).length);}if(t<B(6)-.1)return 4+MK.filter(k=>t>=k).length;if(t<B(8))return 0;if(t<SLAM)return 2+[...SNAPS].filter(k=>t>=k).length*3+Math.floor(seg(t,B(8),B(8)+.4)*2);return -1;}
const CAMS=[[0,620,600,1.9],[2.3,630,620,1.6],[2.67,700,580,.95],[5.33,680,580,1.0],[7.4,660,580,1.12],[DROP,760,600,.92],[B(5),740,560,.92],[B(6),700,600,.98],[LOCK,700,600,1.06],[B(7),720,600,.98],[STAMP,720,590,1.04],[B(8),720,560,.9],[SLAM,720,600,1.0],[B(9),720,640,1.04],[CLIMAX-.5,700,640,1.18],[CLIMAX,740,600,.92],[B(11),760,620,.98]];
function camS(t){let i=0;while(i<CAMS.length-1&&CAMS[i+1][0]<=t)i++;const a=CAMS[i],pv=CAMS[Math.max(0,i-1)];const p=eInOut(seg(t,a[0],a[0]+(i==2?.5:.6)));return[1,2,3].map(j=>lerp(pv[j],a[j],i==0?1:p));}
const SKY=[[0,['#0c0a04','#1c160a','#2c2410']],[5.33,['#04040c','#0c0c1c','#1a1a30']],[DROP,['#1a1004','#5a3a0c','#ffc040']],[B(5),['#1a1004','#4a3010','#d09a40']],[B(6),['#100808','#30141a','#803040']],[B(7),['#0a1408','#2a5a20','#c0f080']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#14100a','#5a4020','#f0c080']],[B(11)+.6,['#040408','#0c0c14','#16161e']]];
function skyAt(t){let c=SKY[0][1];for(let i=1;i<SKY.length;i++){const p=seg(t,SKY[i][0]-.15,SKY[i][0]+.4);if(p<=0)break;c=c.map((x,j)=>mixc(x,SKY[i][1][j],p));}return c;}
const STARS=[...Array(200)].map((_,i)=>{const r=rng(i+5);return[r()*W*1.4-W*.2,r()*H*.7,r()*1.6+.4,r()*6];});
const WORDS=['能者多劳','再辛苦一下','这个也你来','你最能干'];

window.draw=function(t){t0g=t;
  PEN=null;ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';ctx.filter='none';
  const live=t>=DROP,hit=hitAmt(t),endF=1-seg(t,B(11)+.5,27.6),T=rt(t);
  const b1=win(t,B(5)-.4,B(6),.2,.25),b2=win(t,B(6)-.1,B(7),.2,.25),b3=win(t,B(7)-.1,B(8),.2,.25),b4=win(t,B(8)-.1,B(9)+.1,.2,.3),dark=win(t,B(9),CLIMAX,.4,.12),fire=seg(t,CLIMAX,CLIMAX+.8);
  const sky=skyAt(t);const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,sky[0]);g.addColorStop(.62,sky[1]);g.addColorStop(1,sky[2]);ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const cm=camS(t),sh=shake(t);const z=cm[2]*(1+sh.z);
  ctx.save();ctx.translate(W*.38+sh.x,H*.55+sh.y);ctx.rotate(sh.r);ctx.scale(z,z);ctx.translate(-cm[0],-cm[1]);
  STARS.forEach(s=>{ctx.globalAlpha=(.1+.4*(.5+.5*Math.sin(t*1.5+s[3])))*endF*(1-dark*.8)*(1-b3);ctx.fillStyle='#fff';ctx.fillRect(s[0],s[1],s[2],s[2]);});ctx.globalAlpha=1;
  // moon in intro night
  const mA=win(t,5.33,DROP,.3,.1)*endF;if(mA>0){glow(circ(1150,180,50,50,40),1,'#fff6d0',3,mA,24,false);}
  {const r=rng(43);let x=-500;const fc=live?mixc(sky[2],'#ffffff',.25):'#555';while(x<W+700){const w=120+r()*180,h=160+r()*360;ctx.save();ctx.globalAlpha=endF;ctx.fillStyle=mixc('#05050c',sky[1],.25);ctx.fillRect(x,GY-h,w-12,h);ctx.restore();glow(rectP(x,GY-h,x+w-12,GY),eOut(seg(t,2.6,3.6)),fc,1.2,.3*endF,0,false);
      for(let i=0;i<Math.floor((w-30)/34);i++)for(let j=0;j<Math.floor((h-30)/44);j++){if(r()<.62)continue;const lit=t>=5.33&&t<DROP?(r()>.92?1:0):1;ctx.save();ctx.globalAlpha=(live?.35:.14)*endF*(1-dark*.8)*lit*(.6+.4*Math.sin(t+i+j));ctx.fillStyle=r()>.75?OC:'#fff0d8';ctx.fillRect(x+16+i*34,GY-h+18+j*44,14,20);ctx.restore();}x+=w;}}
  ctx.fillStyle=mixc('#05040a',sky[2],.12);ctx.fillRect(-1200,GY,W+2400,700);glow([[-1200,GY],[W+1200,GY]],eOut(seg(t,2.6,3.4)),live?mixc(OC,'#777',dark):SKETCH,2,.8*endF,live?10:0,false);
  // sprouts in 03
  if(b3>0){JABS.forEach((k,i)=>{if(t<k)return;for(let q=0;q<5;q++){const sx=OX0+120+i*160+q*36-80,gp=eOut(seg(t,k+q*.05,k+q*.05+.4));glow(Q([sx,GY],[sx-6,GY-30*gp],[sx+2,GY-60*gp],6),1,GRN,2.6,b3*endF,10,false);if(gp>.6){glow(circ(sx+10,GY-56*gp,10,5,12),1,GRN,2,b3*endF,8,false);}}});}
  const oo=kfO(KO,T),to=kfO(KTt,T),bo=kfO(KBb,T);
  // ---- side characters ----
  const TG=to.a>.01?tiger(to.x,GY+to.oy,1.25,to.dir,to,to.a*endF,1):null;
  const BG=bo.a>.01?bunny(bo.x,GY,1.25,bo.dir,bo,bo.a*endF,1):null;
  // ---- ox ----
  const oprog=t<2.67?seg(t,.1,2.3):1;const OXG=ox(oo.x,GY+oo.oy,1.5,oo.dir,oo,endF,oprog);
  // ---- boxes on head ----
  const nb=nBoxes(t);if(nb>0&&OXG){const bw=nb>6?120:140,bh=nb>6?56:66;let y=OXG.top+20;for(let i=0;i<nb;i++){const sway=Math.sin(t*3+i*.6)*i*1.5;const drop=i==nb-1?(1-eOut(seg(t,lastBoxT(t),lastBoxT(t)+.15)))*-180:0;box(OXG.hx-10+sway,y+drop,bw,bh,LAB[i%LAB.length],endF,sway*.004,i>=4&&t<B(6)?'#ff8a5a':'#d0a060');y-=bh+4;}}
  if(nb==-1&&OXG&&t<CLIMAX+1.6){const dt=t-SLAM;const r=rng(81);for(let i=0;i<14;i++){const tx=OX0-420+r()*900,an=r()*.8-.4;const p=eOut(seg(dt,0,.6+r()*.3));const sx=OXG.hx,sy=OXG.top-i*50;let x=lerp(sx,tx,p),y=lerp(sy,GY,p)-Math.sin(p*Math.PI)*200;let A=endF;if(t>=CLIMAX){const q=eOut(seg(t,CLIMAX,CLIMAX+.8));x=lerp(tx,tx<OX0?-800:2200,q);y=lerp(GY,GY-500,q);A*=1-q;}box(x,y,120,56,LAB[i%LAB.length],A,an*p+(t>=CLIMAX?(t-CLIMAX)*4:0),'#d0a060');}}
  // ---- intro ----
  if(t<DROP&&OXG){bubble(OXG.hx+30,OXG.hy-160,'今天也要努力！',win(t,1.1,2.6,.12,.2),1,OC,-1);
    if(TG)bubble(TG.hx+30,TG.hy-150,'这个你来~',win(t,2.9,4.6,.1,.2),1,TC,-1);
    if(BG)bubble(BG.hx-10,BG.hy-100,'帮我一下嘛~',win(t,3.4,5.1,.1,.2),1,BUN,1);
    [3.0,3.7,4.3].forEach((k,i)=>{if(t>=k&&t<k+.5)bubble(OXG.hx+170,OXG.hy+60,['好的','没问题','我来吧'][i],1-seg(t,k+.3,k+.5),eBack(seg(t,k,k+.15))*.9,OC,-1);});
    if(t>=5.33&&t<6.6){[TG,BG].forEach((G,i)=>{if(G)bubble(G.hx+(i?-10:30),G.hy-(i?100:150),'下班啦~',win(t,5.4,6.4,.08,.2),.9,i?BUN:TC,i?1:-1);});}
    if(t>=6.0){ctx.save();ctx.globalAlpha=seg(t,6.0,6.3)*(1-seg(t,DROP-.05,DROP+.05));ctx.font='700 30px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff6d0';ctx.fillText('23:47',OXG.hx+200,OXG.hy-60);ctx.restore();}
    const pv='任劳任怨'.split('');pv.forEach((c,i)=>{const k=6.7+i*.2;if(t<k)return;const p=eOut(seg(t,k,k+.14));ctx.save();ctx.globalAlpha=1-seg(t,DROP-.05,DROP+.05);ctx.translate(560+i*92,GY-760);ctx.scale(lerp(2,1,p),lerp(2,1,p));ctx.font='900 72px '+SER;ctx.textAlign='center';ctx.fillStyle=i==3?'#ff8a5a':'#fff';ctx.shadowColor=i==3?'#ff8a5a':'#fff';ctx.shadowBlur=18;ctx.fillText(c,0,0);ctx.restore();});}
  if(t>=DROP&&t<DROP+1.6&&OXG){const dt=t-DROP;[0,.12,.26].forEach((d,j)=>shock(OXG.hx,OXG.hy,seg(dt,d,d+1.1),endF,j==1?'#fff':OC,2200,.8,6));sparks(t,DROP,OXG.hx,OXG.hy,70,8,1300,.9,OC);}
  // 01
  if(b1>0&&OXG){const a=b1*endF;MK.forEach((k,i)=>{if(t>=k&&t<k+.6){shock(OXG.hx,OXG.top-100,seg(t,k,k+.5),a,'#ff8a5a',700,.6,6);sparks(t,k,OXG.hx,OXG.top-150,30,i+12,800,.5,'#ff8a5a');}const e=i<2?MK[i+1]:B(6);if(t>=k&&t<e)bubble(OXG.hx+170,OXG.hy+60,['好的…','没问题…','我…来吧'][i],a,eBack(seg(t,k,k+.2)),OC,-1);});
    if(TG&&t>=MK[0])bubble(TG.hx+30,TG.hy-150,'辛苦啦~',a*win(t,MK[0],MK[1],.1,.1),1,TC,-1);if(BG&&t>=MK[1])bubble(BG.hx-10,BG.hy-100,'谢谢牛哥~',a*win(t,MK[1],B(6),.1,.1),1,BUN,1);}
  // 02 medal
  if(b2>0&&OXG){const a=b2*endF;if(t<LOCK){ctx.save();ctx.globalAlpha=a*seg(t,B(6),B(6)+.3);ctx.font='800 28px '+SER;ctx.textAlign='center';ctx.fillStyle=GRN;ctx.shadowColor=GRN;ctx.shadowBlur=12;ctx.fillText('项目完成 ✓',OXG.fh[0]+40,OXG.fh[1]-40);ctx.restore();}
    if(TG&&t>=WAVES[0]&&t<LOCK)bubble(TG.hx+30,TG.hy-150,'这是我带的项目~',a,eBack(seg(t,WAVES[0],WAVES[0]+.2)),TC,-1);
    const mp=eOut(seg(t,LOCK-.4,LOCK));const mx=lerp(OXG.hx+300,TG?TG.hx:TG0,mp),my=lerp(GY-900,TG?TG.hy-170:GY-500,mp);if(t>=WAVES[1]){ctx.save();ctx.globalAlpha=a;ctx.fillStyle=GOLD;ctx.shadowColor=GOLD;ctx.shadowBlur=24;ctx.beginPath();ctx.arc(mx,my,40,0,TAU);ctx.fill();ctx.fillStyle='#ff5a5a';ctx.fillRect(mx-18,my-90,14,52);ctx.fillRect(mx+4,my-90,14,52);ctx.shadowBlur=0;ctx.font='900 20px '+SER;ctx.fillStyle='#5a3a04';ctx.textAlign='center';ctx.fillText('优秀',mx,my-2);ctx.fillText('员工',mx,my+20);ctx.restore();}
    if(t>=LOCK){const dt=t-LOCK;if(dt<1.2){[0,.1,.22].forEach((d,j)=>shock(mx,my,seg(dt,d,d+1),a,j==1?'#fff':GOLD,1500,.8,7));}
      const sp=1+1.3*(1-eOut(seg(dt,.15,.35)));ctx.save();ctx.translate(OXG.hx+20,OXG.hy-170);ctx.rotate(-.15);ctx.scale(sp,sp);ctx.globalAlpha=a*seg(dt,.15,.25);ctx.strokeStyle='#ff5a5a';ctx.lineWidth=5;ctx.strokeRect(-80,-28,160,56);ctx.font='900 36px '+SER;ctx.fillStyle='#ff5a5a';ctx.textAlign='center';ctx.fillText('继续加班',0,12);ctx.restore();
      const p=eBack(seg(dt,0,.3));ctx.save();ctx.globalAlpha=a*(1-seg(t,B(7)-.3,B(7)));ctx.translate(OX0,GY-720);ctx.scale(p,p);ctx.font='900 62px '+SER;ctx.textAlign='center';ctx.fillStyle=GOLD;ctx.shadowColor=GOLD;ctx.shadowBlur=24;ctx.fillText('活是我干的，奖是你领的',0,0);ctx.restore();}}
  // 03
  if(b3>0&&OXG){const a=b3*endF;JABS.forEach((k,i)=>{if(t>=k&&t<k+.6){shock(OXG.fh[0],GY,seg(t,k,k+.5),a,GRN,600,.15,5);sparks(t,k,OXG.fh[0],GY-20,26,i+20,600,.5,GRN);}});
    bubble(OXG.hx+40,OXG.hy-160,'交给我，放心！',a*win(t,B(7)+.2,STAMP,.1,.15),1,OC,-1);
    if(t>=STAMP){const dt=t-STAMP;if(dt<1.6){[0,.12,.26].forEach((d,j)=>shock(OXG.hx,OXG.hy,seg(dt,d,d+1.2),a,j==1?'#fff':GRN,2200,.8,7));sparks(t,STAMP,OXG.hx,OXG.hy,90,44,1500,1,GOLD);}
      const tp=eBack(seg(dt,.05,.35));ctx.save();ctx.globalAlpha=a*(1-seg(t,B(8)-.3,B(8)));ctx.translate(OX0+60,GY-760);ctx.scale(tp,tp);ctx.font='900 58px '+SER;ctx.textAlign='center';ctx.fillStyle=GOLD;ctx.shadowColor=GOLD;ctx.shadowBlur=24;ctx.fillText('靠谱，是最硬的底气',0,0);ctx.restore();}}
  // 04
  if(b4>0&&OXG){const a=b4*endF;[TG,BG].forEach((G,i)=>{if(G&&t<SLAM){SNAPS.forEach((k,j)=>{const e=SNAPS[j+1]||SLAM;if(t>=k+(i?.1:0)&&t<e)bubble(G.hx+(i?-10:30),G.hy-(i?100:150),i?['这个也帮我~','再帮一下~','最后一次~'][j%3]:['这个你来~','顺便这个~','能者多劳嘛~'][j%3],a,eBack(seg(t,k,k+.2)),i?BUN:TC,i?1:-1);});}});
    SNAPS.forEach((k,i)=>{if(t>=k&&t<k+.5){shock(OXG.hx,OXG.hy+200,seg(t,k,k+.45),a,'#ff8a5a',500,.15,5);}});
    if(t>=SLAM&&t<SLAM+1.8){const dt=t-SLAM;for(let j=0;j<5;j++)shock(OXG.hx,GY-60,seg(dt,j*.09,j*.09+1.3),endF,j%2?'#fff':'#ff8a5a',3000,.3,8);
      const p=eBack(seg(dt,0,.25));ctx.save();ctx.globalAlpha=endF*(1-seg(dt,1.3,1.8));ctx.translate(OX0,GY-700);ctx.scale(p,p);ctx.font='900 60px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor='#ff8a5a';ctx.shadowBlur=24;ctx.fillText('牛…也会累垮的',0,0);ctx.restore();
      if(dt<.4){ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=`rgba(255,220,180,${.5*(1-dt/.4)*endF})`;ctx.fillRect(-3000,-3000,W+6000,H+6000);ctx.restore();}}}
  // storm
  if(dark>0&&OXG){const a=dark*endF;WORDS.forEach((w,i)=>{const an=t*.7+i*TAU/4;const rr=lerp(560,360,seg(t,B(9),CLIMAX));wordBox(OXG.hx+Math.cos(an)*rr,OXG.hy+60+Math.sin(an)*rr*.45,w,a*seg(t,B(9)+.3+i*.25,B(9)+.6+i*.25),1,'#a09070',Math.sin(t+i)*.08);});
    if(t<CLIMAX-.7)bubble(OXG.hx+40,OXG.hy-120,'我…也想休息',a*seg(t,B(9)+.9,B(9)+1.2),1,OC,-1);}
  // climax: NO
  if(t>=CLIMAX-.55&&t<CLIMAX&&OXG){const p=seg(t,CLIMAX-.55,CLIMAX);const O=[OXG.hx,OXG.hy];const r=rng(Math.floor(t*30));for(let i=0;i<30;i++){const an=r()*TAU,d0=900*(1-p)*(.5+r());dot(O[0]+Math.cos(an)*d0,O[1]+Math.sin(an)*d0,4,i%2?GOLD:OC,p*endF);}glow(circ(O[0],O[1],700*(1-p)+100,700*(1-p)+100,80),1,GOLD,2.4,p*endF,12,false);}
  if(t>=CLIMAX&&OXG){const a=endF,dt=t-CLIMAX;const O=[OXG.hx,OXG.hy];
    ctx.save();ctx.globalCompositeOperation='lighter';for(let i=0;i<32;i++){const an=i/32*TAU+t*.05;const L=2400*fire;const gg=ctx.createLinearGradient(O[0],O[1],O[0]+Math.cos(an)*L,O[1]+Math.sin(an)*L);gg.addColorStop(0,`rgba(255,220,150,${.2*a})`);gg.addColorStop(1,'rgba(255,220,150,0)');ctx.strokeStyle=gg;ctx.lineWidth=28;ctx.beginPath();ctx.moveTo(O[0],O[1]);ctx.lineTo(O[0]+Math.cos(an)*L,O[1]+Math.sin(an)*L);ctx.stroke();}ctx.restore();
    if(dt<1.6){const p=eBack(seg(dt,0,.25));ctx.save();ctx.globalAlpha=a*(1-seg(dt,1.2,1.6));ctx.translate(O[0],O[1]-260);ctx.scale(p,p);ctx.font='900 150px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=GOLD;ctx.shadowBlur=40;ctx.fillText('不！',0,0);ctx.restore();}
    if(dt<2.6){[0,.12,.26,.4].forEach((d,j)=>shock(O[0],O[1],seg(dt,d,d+1.4),a,j%2?'#fff':GOLD,2800,.8,9));sparks(t,CLIMAX,O[0],O[1],140,100,2000,1.3,GOLD);if(dt<.4)dot(O[0],O[1],300*(1-dt/.4),'#fff',a);
      WORDS.forEach((w,i)=>{shards(t,CLIMAX,O[0]+Math.cos(i*1.6)*360,O[1]+60+Math.sin(i*1.6)*160,a,i+140,'#d8d0c0',20,1100);});}
    if(dt>=1.4&&dt<2.6)bubble(OXG.hx+40,OXG.hy-160,'我的活我干，你的你干',a*(1-seg(dt,2.4,2.6)),1,OC,-1);
    const r2=rng(171);for(let i=0;i<40;i++){const st=r2()*1.6,sx=r2()*W*1.4-W*.2,sp=120+r2()*200;const p=dt-st-.1;if(p<0)continue;dot(sx+Math.sin(p*2+i)*40,GY-p*sp,2+r2()*3,[GOLD,OC,'#fff'][i%3],a*(1-seg(p,2.4,3.4))*.85);}}
  if(dark>0){ctx.save();ctx.globalAlpha=dark*.3*endF;ctx.fillStyle='#040406';ctx.fillRect(-3000,-3000,W+6000,H+6000);ctx.restore();rain(dark*endF,t);}
  ctx.restore();
  if(hit>.15){const r=rng(Math.floor(t*30)+1);ctx.save();ctx.globalCompositeOperation='lighter';for(let i=0;i<60;i++){const an=r()*TAU,r0=360+r()*200,r1=r0+250+r()*600;ctx.globalAlpha=hit*.5*r();ctx.strokeStyle=[OC,'#fff',GRN,HORN,GOLD][i%5];ctx.lineWidth=1+r()*2.5;ctx.beginPath();ctx.moveTo(W*.38+Math.cos(an)*r0,H/2+Math.sin(an)*r0*.6);ctx.lineTo(W*.38+Math.cos(an)*r1,H/2+Math.sin(an)*r1*.6);ctx.stroke();}ctx.restore();}
  if(hit>0){ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=`rgba(255,240,215,${.32*hit*hit})`;ctx.fillRect(0,0,W,H);ctx.restore();}
  chroma(hit*15);
  for(const k of INVERT){if(t>=k&&t<k+.067)invertFrame();}
  const hud=seg(t,DROP+.6,DROP+1.2)*(1-seg(t,B(11)+.6,B(11)+1.2));if(hud>0&&!window.NOCAP){ctx.save();ctx.globalAlpha=hud*.9;glow(Q([60,92],[56,72],[48,64],6),1,HORN,2,1,6,false);glow(Q([82,92],[86,72],[94,64],6),1,HORN,2,1,6,false);ctx.textAlign='left';ctx.fillStyle=WHITE;ctx.font='600 26px '+SER;ctx.fillText('人间动物志 · 老黄牛',104,76);ctx.fillStyle='rgba(246,242,255,.65)';ctx.font='500 21px '+SER;ctx.fillText('第三期 · 每种人，都是一种动物',104,104);ctx.restore();}
  if(!window.NOCAP){const s2=ctx.createRadialGradient(TX,450,0,TX,450,480);s2.addColorStop(0,'rgba(8,6,4,.76)');s2.addColorStop(.6,'rgba(8,6,4,.5)');s2.addColorStop(1,'rgba(8,6,4,0)');ctx.save();ctx.translate(TX,450);ctx.scale(1.25,.8);ctx.translate(-TX,-450);ctx.fillStyle=s2;ctx.fillRect(TX-480,-30,960,960);ctx.restore();}
  ctx.save();ctx.translate(sh.x*.35,sh.y*.35);
  const H2=n=>B(n)+BAR/2;
  caption(t,.05,H2(1),[[['有一种人',0]],[['埋头',0],['苦干',1]]]);
  caption(t,H2(1),B(2),[[['不抱怨',0]],[['不',0],['喊累',1]]]);
  caption(t,B(2),H2(2),[[['别人的活',0]],[['TA也',0],['接',1]]]);
  caption(t,H2(2),B(3),[[['大家都下班',0]],[['TA还在',0],['加班',1]]]);
  caption(t,B(3),DROP-.03,[[['人称',0]],[['老黄牛',1]]]);
  if(!window.NOCAP&&t>=DROP&&t<B(5)){const a=win(t,DROP,B(5),.03,.3),k=1+.5*(1-eOut(seg(t,DROP,DROP+.35)));ctx.save();ctx.globalAlpha=a;ctx.textAlign='center';ctx.translate(TX,470);ctx.scale(k,k);
    ctx.font='600 28px '+SER;ctx.fillStyle=WHITE;ctx.letterSpacing='10px';ctx.fillText('THE WORKHORSE',5,-140);ctx.letterSpacing='0px';ctx.font='900 170px '+SER;const gg=ctx.createLinearGradient(-260,0,260,0);gg.addColorStop(0,'#fff4d8');gg.addColorStop(.5,OC);gg.addColorStop(1,'#ff8a5a');ctx.fillStyle=gg;ctx.shadowColor='rgba(255,180,80,.9)';ctx.shadowBlur=34;ctx.fillText('老黄牛',0,50);ctx.shadowBlur=0;
    ctx.font='500 26px '+SER;ctx.fillStyle='rgba(255,244,230,.9)';ctx.fillText('人间动物志 · 第三期',0,104);ctx.font='500 24px '+SER;ctx.fillStyle='rgba(255,210,140,.92)';ctx.fillText('任劳任怨 · 没功劳 · 靠谱 · 累垮',0,144);ctx.restore();}
  caption(t,B(5),H2(5),[[['交代什么',0]],[['都说',0],['“好”',1]]],['01','任劳任怨',OC]);
  caption(t,H2(5),B(6),[[['压弯了腰',0]],[['也不',0],['吭声',1]]],['01','任劳任怨',OC]);
  caption(t,B(6),H2(6),[[['活全是TA干',0]],[['功劳',0],['没TA份',1]]],['02','没功劳','#ff8a5a']);
  caption(t,H2(6),B(7),[[['升职加薪',0]],[['轮不到',0],['TA',1]]],['02','没功劳','#ff8a5a']);
  caption(t,B(7),H2(7),[[['好的一面',0]],[['踏实',0],['靠谱',1]]],['03','靠谱',GRN]);
  caption(t,H2(7),B(8),[[['交给TA',0]],[['一百个',0],['放心',1]]],['03','靠谱',GRN]);
  caption(t,B(8),H2(8),[[['坏的一面',0]],[['不会',0],['拒绝',1]]],['04','累垮','#b0a090']);
  caption(t,H2(8),B(9),[[['越能干',0]],[['越被',0],['使唤',1]]],['04','累垮','#b0a090']);
  caption(t,B(9),H2(9),[[['老实人',0]],[['不该',0],['吃亏',1]]]);
  caption(t,H2(9),CLIMAX-.02,[[['累了',0]],[['就',0],['说出来',1]]]);
  if(!window.NOCAP&&t>=CLIMAX&&t<B(11)){const a=win(t,CLIMAX,B(11),.02,.3),k=1+.6*(1-eOut(seg(t,CLIMAX,CLIMAX+.3)));ctx.save();ctx.globalAlpha=a;ctx.textAlign='center';ctx.font='900 58px '+SER;ctx.fillStyle=WHITE;ctx.fillText('老黄牛',TX,380);
    ctx.translate(TX,525);ctx.scale(k,k);ctx.font='900 136px '+SER;ctx.fillStyle=hiFill();ctx.shadowColor='rgba(255,200,100,.85)';ctx.shadowBlur=36;ctx.fillText('也要说不',0,0);ctx.restore();}
  caption(t,B(11),27.6,[[['埋头干活',0]],[['也要',0],['抬头看路',1]]]);
  ctx.restore();
  const vg=ctx.createRadialGradient(W/2,H/2,H*.35,W/2,H/2,W*.62);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.55)');ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);
  if(window.boyCard)boyCard(ctx,t,27.45,{accent:OC,x:735,y:540,sub:'@知识探索者 · 人间动物志'});
  ctx.save();ctx.globalAlpha=.06;ctx.globalCompositeOperation='overlay';ctx.drawImage(NOISE[Math.floor(t*30)%4],0,0,W,H);ctx.restore();
};
function lastBoxT(t){const ks=[2.67,3.33,4.0,4.66,...MK,B(8),B(8)+.2,...SNAPS];let last=-9;ks.forEach(k=>{if(t>=k)last=k;});return last;}

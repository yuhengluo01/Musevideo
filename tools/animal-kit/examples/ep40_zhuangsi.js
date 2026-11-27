// ===== 当代人图鉴 · 群里装死 =====
const PC='#6affc4';
const RX=500;
const PP=o=>SP({x:RX,f:1,...o});
const M=o=>PP({...{lean:-.02,hd:.28,fax:70,fay:20,bax:40,bay:60},...o});
const Z=o=>PP({...{lean:.05,hd:.35,fax:70,fay:20,bax:40,bay:60,exp:5},...o});
const UP=o=>PP({fax:60,fay:-150,bax:-60,bay:-150,...o});
const KP=[[0,PP({exp:0})],[2.67,PP({exp:0})],[2.9,M({exp:4})],[4.2,M({exp:5})],[4.45,M({exp:5,sq:1.03}),'snap'],[5.8,M({exp:5})],[5.95,M({exp:4,lean:-.05}),'snap'],[6.4,M({exp:5}),'snap'],[7.6,M({exp:5})],
 [DROP,UP({exp:4,sq:1.05}),'snap'],[DROP+1,M({exp:0})]];
MK.forEach((k,i)=>KP.push([k-.12,M({exp:5})],[k,M({exp:5,sq:1.03,lean:(i-1)*.06,...([{exp:5},{exp:5,hd:.4},{exp:4,fax:110,fay:-140,hd:0}][i]||{})}),'snap'],[k+.35,M({exp:5,...([{exp:5},{exp:5,hd:.4},{exp:4,fax:110,fay:-140,hd:0}][i]||{})})]));
KP.push([B(6)-.1,M({exp:5})],[WAVES[0],M({exp:4,sq:1.05,oy:-10}),'snap'],[WAVES[0]+.4,Z({})],[WAVES[1],Z({exp:4,sq:1.03}),'snap'],[LOCK-.15,Z({})],[LOCK,Z({exp:2,sq:.92,hd:.35}),'snap'],[LOCK+.5,Z({exp:2,hd:.4,sq:.92})],[B(7)-.1,Z({exp:2,hd:.35})],[B(7)+.15,M({exp:0,blush:1})]);
JABS.forEach((k,i)=>KP.push([k,M({exp:0,blush:1,lean:i?.05:-.05,sq:1.03}),'snap'],[k+.4,M({exp:0,blush:1})]));
KP.push([STAMP,UP({exp:3,sq:1.06,blush:1}),'snap'],[STAMP+.6,M({exp:0,blush:1})],[B(8),M({exp:5})]);
SNAPS.forEach((k,i)=>KP.push([k-.1,M({exp:4,sq:.96-i*.04})],[k,M({exp:2,lean:.12+i*.08,hd:.4,sq:.92-i*.05}),'snap'],[k+.35,M({exp:2,lean:.12+i*.08,hd:.4,sq:.9-i*.05})]));
const SL={fax:20,fay:140,bax:-20,bay:140};
KP.push([SLAM-.2,M({exp:2,lean:.3,sq:.86})],[SLAM,PP({exp:4,lean:.1,hd:.5,sq:.8,...SL}),'snap'],[SLAM+.5,PP({exp:2,hd:.5,sq:.82,...SL})],[CLIMAX-.7,PP({exp:2,hd:.45,sq:.84,...SL})],[CLIMAX-.35,M({exp:5,hd:.1,sq:.9})],[CLIMAX-.15,M({exp:1,sq:.86})],
 [CLIMAX,UP({exp:0,sq:1.1,fay:-160,bay:-160,flx:40,blx:-40}),'snap'],[CLIMAX+.7,UP({exp:0,sq:1.04,flx:30,blx:-30})],[CLIMAX+1.5,PP({exp:0,fax:90,fay:-20,flx:30,blx:-30})],[27.5,PP({exp:0,fax:90,fay:-20,flx:30,blx:-30})]);
KP.sort((a,b)=>a[0]-b[0]);
const TPp=o=>Object.assign({x:1100,a:1,evil:0,happy:1,mouth:0,fhx:44,fhy:-110,bhx:-46,bhy:-110,knife:0,walk:0,crack:0,lean:0,sq:1},o);
const KT=[[0,TPp({a:0})],[2.55,TPp({a:0})],[2.8,TPp({a:1,fhx:90,fhy:-200})],[3.6,TPp({})],[3.9,TPp({})],[4.15,TPp({a:0})],
 [WAVES[1]-.3,TPp({a:0})],[WAVES[1],TPp({a:1,evil:1,fhx:100,fhy:-220}),'snap'],[LOCK,TPp({evil:1})],[B(7)-.3,TPp({evil:1})],[B(7)-.1,TPp({a:0})],
 [CLIMAX+.3,TPp({a:0})],[CLIMAX+.8,TPp({a:1,mouth:1,fhx:80,fhy:-200})],[27.5,TPp({a:1,mouth:1,fhx:80,fhy:-200})]];
const BPp=o=>Object.assign({x:860,a:1,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,dir:-1,walk:0},o);
const KB=[[0,BPp({a:0})],[5.7,BPp({a:0})],[5.95,BPp({a:1,exp:1,fhx:70,fhy:-120})],[7.2,BPp({a:1})],[7.5,BPp({a:0})],
 [WAVES[0]-.3,BPp({a:0})],[WAVES[0],BPp({a:1,exp:4,hop:.3,fhx:70,fhy:-120}),'snap'],[LOCK,BPp({exp:4})],[B(7)-.2,BPp({exp:0})],[B(7)+.05,BPp({exp:0,blush:1})],[JABS[1],BPp({exp:0,hop:.3,blush:1,fhx:70,fhy:-130}),'snap'],[B(8)-.3,BPp({exp:0})],[B(8)-.1,BPp({a:0})],
 [CLIMAX+.3,BPp({a:0})],[CLIMAX+.8,BPp({a:1,exp:0,hop:.5,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,exp:0,blush:1,fhx:60,fhy:-140})]];
const OPp=o=>Object.assign({x:980,dir:-1,a:1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,mouth:0,ring:1},o);
const KO=[[0,OPp({a:0})],[B(8)-.4,OPp({a:0})],[B(8)-.1,OPp({a:1,exp:1})],[SNAPS[1],OPp({exp:1,sweat:1,fhx:110,fhy:-180}),'snap'],[SLAM,OPp({exp:1,sweat:1})],[B(9),OPp({exp:1})],[B(9)+.4,OPp({a:0})],[27.5,OPp({a:0})]];
KT.sort((a,b)=>a[0]-b[0]);KB.sort((a,b)=>a[0]-b[0]);
function infoBox(x,y,a,txt,col,sh=0,sz=56){if(a<=.01)return;ctx.save();ctx.font='900 '+sz+'px '+SER;const w=Math.max(200,ctx.measureText(txt).width+70),h=sz*1.8;ctx.restore();x+=sh;
  ctx.save();ctx.globalAlpha=a*.95;ctx.fillStyle='#0a0c14';ctx.beginPath();ctx.roundRect(x-w/2,y-h*.58,w,h,22);ctx.fill();ctx.restore();
  ctx.save();ctx.globalAlpha=a;ctx.strokeStyle=col;ctx.lineWidth=2.6;ctx.shadowColor=col;ctx.shadowBlur=14;ctx.beginPath();ctx.roundRect(x-w/2,y-h*.58,w,h,22);ctx.stroke();ctx.shadowBlur=18;ctx.font='900 '+sz+'px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.fillText(txt,x,y+sz*.32);ctx.restore();}
function screenGlow(G,a){if(a<=.01)return;const h=G.fh;const g=ctx.createRadialGradient(h[0],h[1]-30,0,h[0],h[1]-30,220);g.addColorStop(0,`rgba(150,255,210,${.3*a})`);g.addColorStop(1,'rgba(150,255,210,0)');ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=g;ctx.fillRect(h[0]-240,h[1]-260,480,480);ctx.restore();}
const CAMS=[[0,520,560,1.25],[2.3,560,580,1.08],[2.67,700,560,.92],[5.33,700,560,.95],[7.4,660,550,1.0],[DROP,700,570,.92],[B(5),700,570,.94],[B(6),700,580,.95],[LOCK,660,590,1.0],[B(7),690,570,.95],[STAMP,690,560,.97],[B(8),700,580,.94],[SLAM,680,600,.96],[B(9),560,660,1.08],[CLIMAX-.5,540,700,1.16],[CLIMAX,700,560,.9],[B(11),700,580,.93]];
const TX_={"i1": "（叮叮叮叮…）", "i2": "@所有人 谁有空？", "i3": "（假装没看见）", "i4": "你看群了吗？", "i5": "手机…没电了", "pv": "鸦雀无声", "pvi": 0, "lab1": ["@所有人", "99+", "红包"], "lab1c": "#6affc4", "mk": ["（潜水中）", "（就不点开）", "红包？抢到了！"], "w0": ["b", "群里在叫你…"], "w1": ["t", "怎么都不说话？"], "lk": "我…信号不好", "lkBig": "群里五十人，没一个在线", "j0": "躲过一劫~", "j1": "你好会躲哦！", "stBig": "装死一时，清净一时", "lab4": ["被点名", "背锅", "失信"], "s0": "怎么…又是我", "s1": "既然你在，那就你来", "slBig": "装死到最后，活还是你的", "d1": "……躲不掉的啊", "d2": "收到，我来！", "e1": "靠谱！", "e2": "谢谢你！"};
const EP={"series": "打工人图鉴", "slogan": "每个工位，都有一个故事", "name": "群里装死", "en": "GROUP CHAT GHOST", "epn": "第四十期", "acc": "#6affc4", "grad": ["#ffffff", "#d4ffec", "#40e8a8"], "glowC": "rgba(106,255,196,.85)", "kwCol": "rgba(226,255,242,.92)", "kw": "群里潜水 · 红包秒抢 · 麻烦绕道 · 最后被点名", "slamCol": "#a8f0d4", "words": ["心虚", "逃避", "被点名", "背锅"], cams:CAMS, sky:[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#04140e','#0e4430','#40e8a8']],[B(5),['#040c08','#0e2418','#1e4a34']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#06140e','#2a6a50','#d4ffec']],[B(11)+.6,['#040408','#0c0c14','#16161e']]], "caps": [[[["有一种人", 0]], [["群里", 0], ["装死", 1]]], [[["领导一问", 0]], [["全员", 0], ["潜水", 1]]], [[["谁来接活", 0]], [["没人", 0], ["吱声", 1]]], [[["一发红包", 0]], [["秒", 0], ["抢", 1]]], [[["这就是", 0]], [["群里装死", 1]]], [[["@所有人", 0]], [["假装", 0], ["没看见", 1]]], [[["消息99+", 0]], [["就是", 0], ["不点开", 1]]], [[["领导", 0]], [["再次", 0], ["艾特", 1]]], [[["群里", 0]], [["一片", 0], ["寂静", 1]]], [[["好的一面", 0]], [["麻烦活", 0], ["不沾身", 1]]], [[["精力", 0]], [["留给", 0], ["自己", 1]]], [[["坏的一面", 0]], [["最后", 0], ["被点名", 1]]], [[["活儿", 0]], [["全砸", 0], ["你手里", 1]]], [[["装死", 0]], [["躲得过", 0], ["初一", 1]]], [[["一句收到", 0]], [["没那么", 0], ["难", 1]]]], tags:[['01',"群里潜水",PC],['02',"红包秒抢",RED],['03',"麻烦绕道",GOLD],['04',"最后被点名",'#a0a8b8']], "cl": ["回句收到", "也是担当"], "endCap": [[["该回就回", 0]], [["该拒", 0], ["就拒", 1]]]};
const PHONE=true;

function stepAt(L,t){let r=null;for(const s of L){if(t>=s[0])r=s;}return r;}
function stepBox(L,x,y,t,a,cols,sz){const s=stepAt(L,t);if(!s||a<=.01)return;const col=cols[s[2]||0];const dt=t-s[0];const sh=(s[2]==1&&dt<.5)?Math.sin(t*80)*7*(1-dt/.5):0;const sc=eBack(seg(dt,0,.18));ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);ctx.translate(-x,-y);infoBox(x,y,a,s[1],col,sh,sz||52);ctx.restore();}

function DODGE(t,k=180){return -k*eOut(seg(t,B(8)-.3,B(8)))*(1-eOut(seg(t,SLAM+.2,SLAM+.6)));}
const QZ=[[2.67,'工作群(52)',0],[2.85,'@所有人',1],[4.45,'群消息 99+',1],[5.95,'@你',1],[6.4,'已读 不回',0],[DROP,'装死模式 ON',1],[MK[0],'免打扰 ✓',0],[MK[1],'谁接？无人',1],[MK[2],'红包 秒抢',2],[B(6),'群 静默',1],[B(7),'麻烦 绕道',2],[B(8),'@你 ×3',1],[SNAPS[1],'被点名',1],[CLIMAX,'收到 ✓',2]];
const MSGS=[[2.85,'领导','@所有人 谁有空？'],[4.45,'领导','这个谁负责？'],[5.95,'同事','@你 看一下'],[MK[0],'领导','在吗在吗'],[MK[2],'行政','[红包] 恭喜发财'],[B(6),'领导','怎么没人说话'],[B(8),'领导','@你 你来吧'],[SNAPS[1],'领导','@你 @你'],[CLIMAX,'我','收到，我来！']];
function chatP(x,y,a,col,t){if(a<=.01)return;const w=280,h=262;ctx.save();ctx.globalAlpha=a*.93;ctx.fillStyle='#06100c';ctx.beginPath();ctx.roundRect(x-w/2,y-h/2,w,h,22);ctx.fill();ctx.restore();
  ctx.save();ctx.globalAlpha=a;ctx.strokeStyle=col;ctx.lineWidth=3;ctx.shadowColor=col;ctx.shadowBlur=14;ctx.beginPath();ctx.roundRect(x-w/2,y-h/2,w,h,22);ctx.stroke();ctx.beginPath();ctx.moveTo(x-w/2,y-h/2+48);ctx.lineTo(x+w/2,y-h/2+48);ctx.stroke();
  ctx.font='800 24px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.fillText('工作群(52)',x,y-h/2+33);
  const L=MSGS.filter(m=>t>=m[0]).slice(-3);L.forEach((m,i)=>{const me=m[1]=='我';const yy=y-h/2+84+i*64;const p=eBack(seg(t,m[0],m[0]+.2));ctx.save();ctx.translate(x,yy);ctx.scale(p,p);
    ctx.font='600 17px '+SER;ctx.textAlign=me?'right':'left';ctx.fillStyle='rgba(255,255,255,.6)';ctx.shadowBlur=0;ctx.fillText(m[1],me?w/2-18:-w/2+18,-14);
    ctx.font='800 22px '+SER;const tw=ctx.measureText(m[2]).width+24;const bx=me?w/2-18-tw:-w/2+18;ctx.fillStyle=me?'rgba(255,210,122,.25)':(m[2].includes('@你')?'rgba(255,90,110,.3)':'rgba(255,255,255,.1)');ctx.beginPath();ctx.roundRect(bx,-6,tw,36,10);ctx.fill();
    ctx.fillStyle='#fff';ctx.textAlign='left';ctx.fillText(m[2],bx+12,20);ctx.restore();});ctx.restore();}
function badge(x,y,a,txt){if(a<=.01)return;ctx.save();ctx.globalAlpha=a;ctx.font='900 26px '+SER;const w=Math.max(44,ctx.measureText(txt).width+24);ctx.fillStyle='#ff4a5a';ctx.shadowColor='#ff4a5a';ctx.shadowBlur=18;ctx.beginPath();ctx.roundRect(x-w/2,y-22,w,44,22);ctx.fill();ctx.fillStyle='#fff';ctx.textAlign='center';ctx.shadowBlur=0;ctx.fillText(txt,x,y+9);ctx.restore();}
function propFront(S,G,po){const{t,endF}=S;stepBox(QZ,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const gold=t>=CLIMAX||(t>=B(7)&&t<B(8)),red=t>=B(8)&&t<CLIMAX;const col=gold?GOLD:red?'#ff7a8a':PC;
  const cx=G.hc[0]-300+DODGE(t,125),cy=G.hc[1]-115;const ca=endF*seg(t,2.5,2.75)*(1-seg(t,B(11)-.2,B(11)+.2));chatP(cx,cy,ca,col,t);
  const n=t<2.85?'':t<4.45?'1':t<5.95?'99+':t<CLIMAX?'99+':'';const sh=(t>=2.85&&t<CLIMAX)?Math.sin(t*40)*3:0;badge(cx+130+sh,cy-128,ca*(n?1:0),n);
  const za=endF*Math.min(1,win(t,4.45,5.85,.1,.15)+win(t,MK[0],MK[2]-.05,.1,.05)+win(t,B(6),LOCK,.1,.1));if(za>.01)for(let i=0;i<3;i++){const p=(t*.8+i/3)%1;ctx.save();ctx.globalAlpha=za*Math.sin(p*Math.PI);ctx.font='900 '+(28+p*26)+'px '+SER;ctx.fillStyle='#fff';ctx.shadowColor=PC;ctx.shadowBlur=14;ctx.fillText('Z',G.hc[0]+110+p*70,G.hc[1]-30-p*110);ctx.restore();}
  if(t>=MK[2]&&t<MK[2]+.9)sparks(t,MK[2],G.fh[0],G.fh[1]-40,22,7,500,.8,'#ff5a5a',true);
  if(t>=CLIMAX&&t<CLIMAX+1.2)sparks(t,CLIMAX,cx,cy,26,3,620,.9,GOLD,true);}

function epWorld(S){const{t,T,endF,b1,b2,b3,b4,dark}=S;
  const po=kfS(KP,T),to=kfO(KT,T),bo=kfO(KB,T),oo=kfO(KO,T);
  if(typeof propBack=='function')propBack(S);
  const TG=tiger(to.x,GY,1.3,-1,to,to.a*endF,1)||{hx:to.x,hy:GY-300};
  const BG=bunny(bo.x,GY,1.35,bo.dir,bo,bo.a*endF,1)||{hx:bo.x,hy:GY-170};
  const OG=ox(oo.x,GY,1.2,oo.dir,oo,oo.a*endF,1)||{hx:oo.x,hy:GY-290,top:GY-400};
  const pprog=t<2.67?seg(t,.4,2.5):1;po.a=endF;const col=t>=CLIMAX?mixc(PC,GOLD,seg(t,CLIMAX,CLIMAX+.3)):PC;
  const G=drawStick(po,t,col,pprog)||{hc:[RX,GY-560],fh:[RX+60,GY-300],nk:[RX,GY-500]};FOC=[G.nk[0],G.nk[1]+40];
  if(PHONE){const phA=endF*((t>=2.9&&t<DROP-.05)||(t>=DROP+.6&&t<B(6)-.1)||(t>=B(7)+.15&&t<STAMP)||(t>=B(8)&&t<SLAM-.1)||(t>=CLIMAX-.35&&t<CLIMAX)?1:0);if(phA>0&&po.fay>0&&po.fay<60){screenGlow(G,phA);phone(G,phA);}}
  if(typeof propFront=='function')propFront(S,G,po);
  const bx=G.hc[0]+60,by=G.hc[1]-110,tbx=TG.hx-30,tby=TG.hy-120,kbx=BG.hx-40,kby=BG.hy-110,obx=OG.hx-60,oby=OG.top-40;
  const W_=(who)=>who=='t'?[tbx,tby,TC,1]:who=='b'?[kbx,kby,BUN,1]:who=='o'?[obx,oby-40,OC,1]:[bx,by-40,PC,-1];
  if(t<DROP){bubble(bx,by,TX_.i1,win(t,1.5,2.6,.1,.2),1,PC,-1);
    bubble(tbx,tby,TX_.i2,win(t,2.85,3.9,.06,.1),eBack(seg(t,2.85,3.0)),TC,1);
    bubble(bx,by-40,TX_.i3,win(t,4.45,5.8,.06,.15),eBack(seg(t,4.45,4.6)),PC,-1);
    bubble(kbx,kby,TX_.i4,win(t,5.95,6.4,.04,.05),eBack(seg(t,5.95,6.1)),BUN,1);
    bubble(bx,by-40,TX_.i5,win(t,6.4,7.0,.05,.1),eBack(seg(t,6.4,6.55)),PC,-1);
    proverb(t,TX_.pv,RX-80,GY-780,TX_.pvi,PC,7.0,.2,80);}
  if(b1>0){const a=b1*endF;MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6)-.1;if(t>=k-.3&&t<e){const p=seg(t,k-.3,k);wordBox(lerp(1010,840,eOut(p)),GY-700+i*80,TX_.lab1[i],a*(1-seg(t,e-.2,e)),eBack(p),TX_.lab1c||PC,(i-1)*.08);}
      if(t>=k&&t<e)bubble(bx,by-40,TX_.mk[i],a,eBack(seg(t,k,k+.2)),PC,-1);});}
  if(b2>0){const a=b2*endF;let q=W_(TX_.w0[0]);if(t>=WAVES[0]&&t<B(7))bubble(q[0],q[1],TX_.w0[1],a,eBack(seg(t,WAVES[0],WAVES[0]+.2)),q[2],q[3]);
    q=W_(TX_.w1[0]);if(t>=WAVES[1]&&t<B(7))bubble(q[0],q[1],TX_.w1[1],a,eBack(seg(t,WAVES[1],WAVES[1]+.2)),q[2],q[3]);
    if(t>=LOCK&&t<B(7))bubble(bx,by-40,TX_.lk,a,eBack(seg(t,LOCK,LOCK+.2)),'#9ab8ff',-1);
    bigText(t,LOCK,B(7),RX+420,GY-800,TX_.lkBig,RED,56);}
  if(b3>0){const a=b3*endF;if(t>=JABS[1]&&t<STAMP)bubble(kbx,kby,TX_.j1,a,eBack(seg(t,JABS[1],JABS[1]+.2)),BUN,1);
    if(t>=B(7)&&t<STAMP)bubble(bx,by-40,TX_.j0,a,eBack(seg(t,B(7),B(7)+.2)),GOLD,-1);
    if(t>=STAMP)[0,1,2,3,4].forEach(i=>heartF(G.hc[0]-160+i*80,G.hc[1]-150-Math.sin(i*1.3)*40-(t-STAMP)*40,1.2,'#ffcf6a',a*seg(t,STAMP+i*.06,STAMP+i*.06+.2)*(1-seg(t,B(8)-.4,B(8)))));
    bigText(t,STAMP,B(8),RX+420,GY-800,TX_.stBig,GOLD,56);}
  if(b4>0){const a=b4*endF;[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;wordBox(RX+(i-1)*240+80,GY-740-(i%2)*80,TX_.lab4[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',(i-1)*.06);});
    if(t>=SNAPS[1]&&t<SLAM)bubble(obx,oby-40,TX_.s1,a,eBack(seg(t,SNAPS[1],SNAPS[1]+.2)),OC,1);
    if(t>=SNAPS[0]&&t<SLAM)bubble(bx,by-40,TX_.s0,a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),'#9ab8ff',-1);
    bigText(t,SLAM,SLAM+1.8,RX+420,GY-800,TX_.slBig,'#fff',56);}
  if(dark>0){const a=dark*endF;if(t<CLIMAX-.75)bubble(bx,by-40,TX_.d1,a*seg(t,B(9)+.9,B(9)+1.2),.9,PC,-1);
    if(t>=CLIMAX-.6)bubble(bx,by-40,TX_.d2,a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GOLD,-1);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;if(dt>=.8&&dt<2.2){bubble(kbx,kby,TX_.e1,a*(1-seg(dt,2.0,2.2)),1,BUN,1);bubble(tbx,tby,TX_.e2,a*(1-seg(dt,2.0,2.2)),1,TC,1);}}
}

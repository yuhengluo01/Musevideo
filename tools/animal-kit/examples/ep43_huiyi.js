// ===== 当代人图鉴 · 会议狂魔 =====
const PC='#8a9cff';
const RX=500;
const PP=o=>SP({x:RX,f:1,...o});
const M=o=>PP({...{lean:-.05,hd:-.05,fax:110,fay:-60,bax:-40,bay:50},...o});
const Z=o=>PP({...{lean:-.02,hd:0,fax:120,fay:-100,bax:-60,bay:40,exp:0},...o});
const UP=o=>PP({fax:60,fay:-150,bax:-60,bay:-150,...o});
const KP=[[0,PP({exp:0})],[2.67,PP({exp:0})],[2.9,M({exp:4})],[4.2,M({exp:5})],[4.45,M({exp:0,sq:1.03}),'snap'],[5.8,M({exp:0})],[5.95,M({exp:4,lean:-.05}),'snap'],[6.4,M({exp:0}),'snap'],[7.6,M({exp:0})],
 [DROP,UP({exp:4,sq:1.05}),'snap'],[DROP+1,M({exp:0})]];
MK.forEach((k,i)=>KP.push([k-.12,M({exp:0})],[k,M({exp:0,sq:1.03,lean:(i-1)*.06,...([{fax:120,fay:-120},{fax:100,fay:-40,bax:-100,bay:-40},{fax:110,fay:-150,bax:-110,bay:-150}][i]||{})}),'snap'],[k+.35,M({exp:0,...([{fax:120,fay:-120},{fax:100,fay:-40,bax:-100,bay:-40},{fax:110,fay:-150,bax:-110,bay:-150}][i]||{})})]));
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
 [WAVES[0]-.3,BPp({a:0})],[WAVES[0],BPp({a:1,exp:2,hop:.3,fhx:70,fhy:-120}),'snap'],[LOCK,BPp({exp:2})],[B(7)-.2,BPp({exp:0})],[B(7)+.05,BPp({exp:0,blush:1})],[JABS[1],BPp({exp:0,hop:.3,blush:1,fhx:70,fhy:-130}),'snap'],[B(8)-.3,BPp({exp:0})],[B(8)-.1,BPp({a:0})],
 [CLIMAX+.3,BPp({a:0})],[CLIMAX+.8,BPp({a:1,exp:0,hop:.5,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,exp:0,blush:1,fhx:60,fhy:-140})]];
const OPp=o=>Object.assign({x:980,dir:-1,a:1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,mouth:0,ring:1},o);
const KO=[[0,OPp({a:0})],[B(8)-.4,OPp({a:0})],[B(8)-.1,OPp({a:1,exp:1})],[SNAPS[1],OPp({exp:1,sweat:1,fhx:110,fhy:-180}),'snap'],[SLAM,OPp({exp:1,sweat:1})],[B(9),OPp({exp:1})],[B(9)+.4,OPp({a:0})],[27.5,OPp({a:0})]];
KT.sort((a,b)=>a[0]-b[0]);KB.sort((a,b)=>a[0]-b[0]);
function infoBox(x,y,a,txt,col,sh=0,sz=56){if(a<=.01)return;ctx.save();ctx.font='900 '+sz+'px '+SER;const w=Math.max(200,ctx.measureText(txt).width+70),h=sz*1.8;ctx.restore();x+=sh;
  ctx.save();ctx.globalAlpha=a*.95;ctx.fillStyle='#0a0c14';ctx.beginPath();ctx.roundRect(x-w/2,y-h*.58,w,h,22);ctx.fill();ctx.restore();
  ctx.save();ctx.globalAlpha=a;ctx.strokeStyle=col;ctx.lineWidth=2.6;ctx.shadowColor=col;ctx.shadowBlur=14;ctx.beginPath();ctx.roundRect(x-w/2,y-h*.58,w,h,22);ctx.stroke();ctx.shadowBlur=18;ctx.font='900 '+sz+'px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.fillText(txt,x,y+sz*.32);ctx.restore();}
function screenGlow(G,a){if(a<=.01)return;const h=G.fh;const g=ctx.createRadialGradient(h[0],h[1]-30,0,h[0],h[1]-30,220);g.addColorStop(0,`rgba(150,255,210,${.3*a})`);g.addColorStop(1,'rgba(150,255,210,0)');ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=g;ctx.fillRect(h[0]-240,h[1]-260,480,480);ctx.restore();}
const CAMS=[[0,520,560,1.25],[2.3,560,580,1.08],[2.67,700,560,.92],[5.33,700,560,.95],[7.4,660,550,1.0],[DROP,700,570,.92],[B(5),700,570,.94],[B(6),700,580,.95],[LOCK,660,590,1.0],[B(7),690,570,.95],[STAMP,690,560,.97],[B(8),700,580,.94],[SLAM,680,600,.96],[B(9),560,660,1.08],[CLIMAX-.5,540,700,1.16],[CLIMAX,700,560,.9],[B(11),700,580,.93]];
const TX_={"i1": "（打开日历）", "i2": "今天又有会？", "i3": "来！拉个会！", "i4": "我还有活没干…", "i5": "先开会，再干活！", "pv": "会海无边", "pvi": 0, "lab1": ["晨会", "对齐会", "复盘会"], "lab1c": "#8a9cff", "mk": ["同步一下进度", "我们再对齐一下", "复盘！复盘！"], "w0": ["b", "zzz…（会上睡着）"], "w1": ["t", "所以结论是？"], "lk": "下次…再开会讨论", "lkBig": "开会三小时，结论没有", "j0": "信息同步很重要~", "j1": "大家都清楚了！", "stBig": "信息同步，步调一致", "lab4": ["没空干活", "加班", "崩溃"], "s0": "怎么…活都没干", "s1": "开完会，才开始上班", "slBig": "会开得越多，活干得越少", "d1": "……原来会才是问题", "d2": "十五分钟搞定！", "e1": "高效！", "e2": "准时下班！"};
const EP={"series": "打工人图鉴", "slogan": "每个工位，都有一个故事", "name": "会议狂魔", "en": "MEETING MANIAC", "epn": "第四十三期", "acc": "#8a9cff", "grad": ["#ffffff", "#dde2ff", "#7084ff"], "glowC": "rgba(138,156,255,.85)", "kwCol": "rgba(232,236,255,.92)", "kw": "天天开会 · 会上加会 · 信息同步 · 没空干活", "slamCol": "#c0c8ff", "words": ["冗长", "疲惫", "拖延", "加班"], cams:CAMS, sky:[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#060a1a','#18245a','#7084ff']],[B(5),['#06060e','#141830','#2a3060']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#0a0c1a','#3a4a8a','#dde2ff']],[B(11)+.6,['#040408','#0c0c14','#16161e']]], "caps": [[[["有一种人", 0]], [["天天", 0], ["开会", 1]]], [[["早上晨会", 0]], [["下午", 0], ["对齐", 1]]], [[["一小时的会", 0]], [["开成", 0], ["三小时", 1]]], [[["开完会", 0]], [["再开会", 0], ["讨论会", 1]]], [[["这就是", 0]], [["会议狂魔", 1]]], [[["晨会对齐会", 0]], [["复盘", 0], ["会", 1]]], [[["日历", 0]], [["全", 0], ["排满", 1]]], [[["同事", 0]], [["在会上", 0], ["睡着", 1]]], [[["正事", 0]], [["一件", 0], ["没干", 1]]], [[["好的一面", 0]], [["信息", 0], ["同步及时", 1]]], [[["大家", 0]], [["都在", 0], ["一条线", 1]]], [[["坏的一面", 0]], [["会多到", 0], ["没空干活", 1]]], [[["下班后", 0]], [["才开始", 0], ["工作", 1]]], [[["能发消息的", 0]], [["别", 0], ["开会", 1]]], [[["能开十分钟", 0]], [["别开", 0], ["一小时", 1]]]], tags:[['01',"天天开会",PC],['02',"会上加会",RED],['03',"信息同步",GOLD],['04',"没空干活",'#a0a8b8']], "cl": ["会要少开", "事要多干"], "endCap": [[["开会", 0]], [["是为了", 0], ["解决问题", 1]]]};
const PHONE=false;

function stepAt(L,t){let r=null;for(const s of L){if(t>=s[0])r=s;}return r;}
function stepBox(L,x,y,t,a,cols,sz){const s=stepAt(L,t);if(!s||a<=.01)return;const col=cols[s[2]||0];const dt=t-s[0];const sh=(s[2]==1&&dt<.5)?Math.sin(t*80)*7*(1-dt/.5):0;const sc=eBack(seg(dt,0,.18));ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);ctx.translate(-x,-y);infoBox(x,y,a,s[1],col,sh,sz||52);ctx.restore();}

function DODGE(t,k=180){return -k*eOut(seg(t,B(8)-.3,B(8)))*(1-eOut(seg(t,SLAM+.2,SLAM+.6)));}
const HY=[[2.67,'会议 ×1',0],[2.85,'会议 ×3',0],[4.45,'会议 ×6',1],[5.95,'拖堂 1h',1],[6.4,'会后 再开会',1],[DROP,'开会模式 ON',1],[MK[0],'晨会 9:00',0],[MK[1],'对齐会 11:00',0],[MK[2],'复盘会 15:00',1],[B(6),'干活时间 0',1],[B(7),'信息 已同步',2],[B(8),'加班 补活',1],[SNAPS[1],'全员 崩溃',1],[CLIMAX,'15分钟 散会',2]];
const NF=[[0,0],[2.85,3],[4.45,6],[6.4,9],[MK[0],10],[MK[2],12],[CLIMAX,1]];
function nAt(t){let r=0;for(const n of NF)if(t>=n[0])r=n[1];return r;}
function calG(x,y,a,col,t){if(a<=.01)return;const w=250,h=270;ctx.save();ctx.globalAlpha=a*.93;ctx.fillStyle='#080a16';ctx.fillRect(x-w/2,y-h/2,w,h);ctx.restore();
  glow([[x-w/2,y-h/2],[x+w/2,y-h/2],[x+w/2,y+h/2],[x-w/2,y+h/2],[x-w/2,y-h/2]],1,col,3,a,14,false);glow([[x-w/2,y-h/2+46],[x+w/2,y-h/2+46]],1,col,2,a,8,false);
  ctx.save();ctx.globalAlpha=a;ctx.font='800 24px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.fillText('今日日程',x,y-h/2+32);ctx.restore();
  const n=nAt(t);let last=0;for(const q of NF)if(t>=q[0])last=q[0];
  for(let i=0;i<12;i++){const c=i%3,r=Math.floor(i/3);const cx=x-w/2+18+c*74,cy=y-h/2+60+r*50;const on=i<n;const p=on?eBack(seg(t,last+(i%3)*.04,last+(i%3)*.04+.2)):0;
    ctx.save();ctx.globalAlpha=a*(on?1:.35);ctx.strokeStyle=col;ctx.lineWidth=1.6;ctx.strokeRect(cx,cy,64,40);if(on){ctx.translate(cx+32,cy+20);ctx.scale(Math.max(p,.01),Math.max(p,.01));ctx.fillStyle=col;ctx.globalAlpha=a*.55;ctx.fillRect(-32,-20,64,40);ctx.globalAlpha=a;ctx.fillStyle='#fff';ctx.font='900 24px '+SER;ctx.textAlign='center';ctx.fillText('会',0,9);}ctx.restore();}}
function propFront(S,G,po){const{t,endF}=S;stepBox(HY,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const gold=t>=CLIMAX||(t>=B(7)&&t<B(8)),red=t>=B(8)&&t<CLIMAX;const col=gold?GOLD:red?'#ff7a8a':PC;
  const ka=endF*seg(t,2.5,2.75)*(1-seg(t,B(11)-.2,B(11)+.2));const kx=G.hc[0]-290+DODGE(t),ky=G.hc[1]-160;calG(kx,ky,ka,col,t);
  [2.85,4.45,6.4,...MK].forEach((k,i)=>{if(t>=k&&t<k+.8)sparks(t,k,kx,ky,16,21+i,420,.7,PC,true);});
  const la=endF*Math.min(1,win(t,4.45,7.6,.1,.2)+win(t,MK[0],B(6)-.1,.1,.2));if(la>.01)for(let i=0;i<3;i++){const an=-1.0+i*.5;const p=(t*2+i*.3)%1;const r0=60+p*60;glow([[G.hc[0]+90+Math.cos(an)*r0,G.hc[1]+Math.sin(an)*r0],[G.hc[0]+90+Math.cos(an)*(r0+30),G.hc[1]+Math.sin(an)*(r0+30)]],1,PC,3,la*(1-p),10,false);}
  if(t>=SLAM&&t<SLAM+1)shards(t,SLAM,kx,ky,endF,61,PC,24,800);
  if(t>=CLIMAX&&t<CLIMAX+1.2)sparks(t,CLIMAX,kx,ky,26,3,620,.9,GOLD,true);}

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

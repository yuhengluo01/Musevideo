STEPBOX = r"""
function stepAt(L,t){let r=null;for(const s of L){if(t>=s[0])r=s;}return r;}
function stepBox(L,x,y,t,a,cols,sz){const s=stepAt(L,t);if(!s||a<=.01)return;const col=cols[s[2]||0];const dt=t-s[0];const sh=(s[2]==1&&dt<.5)?Math.sin(t*80)*7*(1-dt/.5):0;const sc=eBack(seg(dt,0,.18));ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);ctx.translate(-x,-y);infoBox(x,y,a,s[1],col,sh,sz||52);ctx.restore();}
"""

SPECS = [
dict(py='yidubuhui', date_id='yidubuhui', ep=19, name='已读不回', en='READ, NO REPLY', epn='第十九期', pc='#8affc8',
  grad=['#ffffff','#d0ffe8','#6ae8b0'], glowC='rgba(120,255,190,.85)', kwCol='rgba(220,255,236,.92)', slamCol='#a8f0d0',
  kw='秒读不回 · 脑内已回 · 有边界感 · 误会多', words=['愧疚','逃避','疲惫','焦虑'],
  sky="[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#04120c','#10402a','#40c090']],[B(5),['#040c0a','#0c2820','#205848']],[B(6),['#140808','#401418','#a04050']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#0a1a10','#208050','#ffd890']],[CLIMAX+1.4,['#061410','#1a5a40','#a0f0c8']],[B(11)+.6,['#040408','#0c0c14','#16161e']]]",
  M="{hd:.28,fax:70,fay:20,bax:40,bay:60}", Z="{hd:.35,fax:70,fay:20,bax:40,bay:60,exp:5,lean:.05}", phone=True, E1='5', E2='0', EMK='5',
  tags=['秒读不回','脑内已回','有边界感','误会多'],
  caps=[('有一种人',[('消息',0),('秒读',1)]),('但就是',[('不回',1)]),('打了一行字',[('又',0),('删掉',1)]),('想着待会回',[('结果',0),('忘了',1)]),('这就是',[('已读不回',1)]),
        ('消息一条条',[('挤进',0),('手机',1)]),('每一条',[('都',0),('已读',1)]),
        ('对方',[('越想越',0),('慌',1)]),('你却',[('在脑子里',0),('回过了',1)]),
        ('好的一面',[('不被',0),('消息绑架',1)]),('自己的节奏',[('自己',0),('掌握',1)]),
        ('坏的一面',[('误会',0),('越积越多',1)]),('朋友',[('慢慢',0),('走散',1)]),
        ('你不是不在乎',[('是',0),('太累了',1)]),('一句收到',[('也是',0),('温柔',1)])],
  cl=['想回就回','别有负担'], endCap=('回复不用完美',[('真诚',0),('就够了',1)]),
  tx=dict(i1='叮~',i2='在吗？',i3='（已读）',i4='周末去玩吗？',i5='待会再回…',pv='石沉大海',pvi=3,
     lab1=['在吗？','周末有空吗','收到请回复'],lab1c='#8affc8',mk=['（已读）','（已读）','（已读…）'],
     w0=['b','你是不是生气了？'],w1=['t','怎么不回消息？'],lk='我回了啊…在脑子里',lkBig='回复在脑子里，发送在梦里',
     j0='免打扰，真香~',j1='你好有边界感~',stBig='我的时间，我做主',
     lab4=['误会','冷场','朋友变少'],s0='我…我忘了',s1='你是不是不想理我？',slBig='不回的消息，越积越重',
     d1='……其实我只是累了',d2='我来回一下！',e1='收到~',e2='秒回！'),
  prop=STEPBOX+r"""
const CNT=[[2.67,'未回复 0',0],[2.85,'未回复 1',0],[5.95,'未回复 2',0],[6.6,'未回复 5',0],[DROP,'未回复 9',1],[MK[0],'未回复 10',1],[MK[1],'未回复 11',1],[MK[2],'未回复 12',1],[WAVES[0],'未回复 18',1],[LOCK,'未回复 23',1],[B(7),'免打扰中',2],[B(8),'未回复 47',1],[SNAPS[0],'未回复 68',1],[SNAPS[1],'未回复 99+',1],[CLIMAX,'已全部回复',2]];
function propFront(S,G,po){const{t,endF}=S;stepBox(CNT,220,GY-470,t,endF*seg(t,2.6,2.85),[PC,'#ff7a8a',GOLD],48);
  if(t>=CLIMAX){const dt=t-CLIMAX;for(let i=0;i<4;i++){const p=seg(dt,.1+i*.12,.5+i*.12);if(p<=0)continue;const x=lerp(G.fh[0],1120,eOut(p)),y=lerp(G.fh[1]-40,GY-760+i*70,eOut(p));ctx.save();ctx.globalAlpha=endF*(1-seg(dt,2.2,2.6));ctx.translate(x,y);ctx.scale(p,p);ctx.fillStyle='#0c2018';ctx.beginPath();ctx.roundRect(-70,-26,140,52,18);ctx.fill();ctx.strokeStyle=PC;ctx.lineWidth=2.4;ctx.shadowColor=PC;ctx.shadowBlur=12;ctx.stroke();ctx.font='800 30px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.fillText(['收到！','好的~','马上来','爱你们'][i],0,10);ctx.restore();}}}
"""),

dict(py='neihao', ep=20, name='精神内耗', en='OVERTHINKING', epn='第二十期', pc='#c4a8ff',
  grad=['#ffffff','#e4d8ff','#a888ff'], glowC='rgba(180,150,255,.85)', kwCol='rgba(236,228,255,.92)', slamCol='#c8b8ff',
  kw='过度脑补 · 身累心更累 · 心思细腻 · 自我怀疑', words=['焦虑','怀疑','失眠','后悔'],
  sky="[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#0c0618','#2a1850','#8060d0']],[B(5),['#08060e','#1c1430','#403068']],[B(6),['#100810','#301428','#803060']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#120a1a','#5a3a90','#ffd890']],[CLIMAX+1.4,['#0c0818','#3a2a6a','#d0c0ff']],[B(11)+.6,['#040408','#0c0c14','#16161e']]]",
  M="{hd:.12,fax:36,fay:-22,bax:34,bay:50}", Z="{hd:.4,lean:.08,fax:10,fay:-60,bax:-10,bay:-62,exp:2}", E1='4', E2='2', EMK='4', TEVIL='0', BEXP='4',
  tags=['过度脑补','身累心更累','心思细腻','自我怀疑'],
  caps=[('有一种人',[('一句话',0),('想三天',1)]),('别人随口',[('你却',0),('当真',1)]),('躺在床上',[('脑子',0),('停不下来',1)]),('什么都没做',[('却',0),('累坏了',1)]),('这就是',[('精神内耗',1)]),
        ('一个眼神',[('脑补',0),('一场大戏',1)]),('一句回复',[('反复',0),('琢磨',1)]),
        ('越想',[('越',0),('焦虑',1)]),('身体躺平',[('脑子',0),('加班',1)]),
        ('好的一面',[('心思',0),('细腻',1)]),('考虑问题',[('特别',0),('周全',1)]),
        ('坏的一面',[('想太多',0),('做太少',1)]),('自己',[('跟自己',0),('打架',1)]),
        ('别人早就忘了',[('只有你',0),('还在想',1)]),('放过自己',[('才能',0),('往前走',1)])],
  cl=['别想了','去做吧'], endCap=('你已经',[('做得',0),('很好了',1)]),
  tx=dict(i1='嗯…',i2='这方案…再看看',i3='他是不是不满意？',i4='早点休息哦~',i5='她是不是在暗示我？',pv='思前想后',pvi=2,
     lab1=['他为什么皱眉？','是不是说错话了','完了完了'],lab1c='#c4a8ff',mk=['是不是…','会不会…','完了…'],
     w0=['b','你脸色好差…'],w1=['t','刚才那事别在意~'],lk='我好累…可我啥也没干',lkBig='什么都没做，却累坏了',
     j0='这里我也想到了~',j1='你想得好周到！',stBig='心细如发，想得周全',
     lab4=['失眠','拖延','自我怀疑'],s0='我是不是不行…',s1='想那么多干嘛？',slBig='想太多，做太少',
     d1='……我是不是哪里不够好',d2='想不如做，干就完了！',e1='加油！',e2='其实挺好的！'),
  prop=r"""
const TR=[[0,0],[2.9,0],[3.4,40],[4.45,70],[5.95,95],[DROP,120],[MK[0],125],[MK[1],130],[MK[2],135],[WAVES[0],140],[LOCK,150],[B(7),60],[STAMP,0],[B(8),90],[SNAPS[0],115],[SNAPS[1],130],[SLAM,145],[B(9),130],[CLIMAX,140]];
function trAt(t){let i=0;while(i<TR.length-1&&TR[i+1][0]<=t)i++;const a=TR[i],b=TR[Math.min(i+1,TR.length-1)];if(a===b)return a[1];const p=eOut(seg(t,b[0]-.3,b[0]));return lerp(a[1],b[1],p);}
function tangle(x,y,R,a,t,col){if(a<=.01||R<4)return;const r=rng(7);const pts=[];for(let i=0;i<120;i++){const an=i*2.39+Math.sin(t*2.5+i*.7)*.35;const rr=R*(.25+.75*r());pts.push([x+Math.cos(an)*rr,y+Math.sin(an)*rr*.82]);}
  ctx.save();ctx.globalAlpha=a*.55;ctx.fillStyle='#0c0818';ctx.beginPath();ctx.ellipse(x,y,R*1.05,R*.9,0,0,TAU);ctx.fill();ctx.restore();glow(Q(pts[0],pts[1],pts[2],2).concat(pts),1,col,2.2,a,12,false);
  if(R>50){ctx.save();ctx.globalAlpha=a;ctx.font='900 '+Math.round(R*.55)+'px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=col;ctx.shadowBlur=16;ctx.fillText('？',x+Math.sin(t*6)*4,y+R*.2);ctx.restore();}}
function propFront(S,G,po){const{t,endF}=S;const R=trAt(t);const x=G.hc[0]-310,y=G.hc[1]-90;const col=t>=B(7)&&t<B(8)?GOLD:PC;
  if(R>4&&t<CLIMAX){[0,1,2].forEach(i=>{const f=(i+1)/4;dot(lerp(G.hc[0]-40,x+R*.6,f),lerp(G.hc[1]-50,y+R*.5,f),4+i*3,col,endF*.9);});tangle(x,y,R,endF,t,col);}
  if(t>=CLIMAX&&t<CLIMAX+1.4){shards(t,CLIMAX,x,y,endF,77,PC,26,900);}
  if(t>=CLIMAX+.2){const p=eOut(seg(t,CLIMAX+.2,CLIMAX+.7));glow([[x-160,y],[x-160+320*p,y]],1,GOLD,4,endF*(1-seg(t,B(11)-.2,B(11)+.3)),18,false);ctx.save();ctx.globalAlpha=endF*p*(1-seg(t,B(11)-.2,B(11)+.3));ctx.font='900 44px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=GOLD;ctx.shadowBlur=14;ctx.fillText('理清了！',x,y-30);ctx.restore();}}
"""),

dict(py='xianyanbao', ep=21, name='显眼包', en='SHOW-OFF', epn='第二十一期', pc='#ffb070',
  grad=['#ffffff','#ffe0c0','#ff9a50'], glowC='rgba(255,170,100,.85)', kwCol='rgba(255,238,220,.92)', slamCol='#ffc8a0',
  kw='永远C位 · 用力过猛 · 气氛担当 · 不被当真', words=['尴尬','孤单','疲惫','面具'],
  sky="[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#180c04','#5a2a10','#ff9a50']],[B(5),['#140a10','#3a1a3a','#c05080']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#140c04','#6a4a1a','#ffe0a0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]]",
  M="{lean:-.04,fax:110,fay:-120,bax:-100,bay:-40}", Z="{hd:.3,lean:.05,fax:20,fay:-110,bax:-20,bay:-112,exp:4}", E1='0', E2='0', EMK='0', TEVIL='1', BEXP='4',
  MKA="[{fax:110,fay:-140,bax:-30,bay:120,lean:.08},{fax:30,fay:120,bax:-110,bay:-140,lean:-.08},{fax:110,fay:-140,bax:-110,bay:-140,flx:60,blx:-60}]",
  tags=['永远C位','用力过猛','气氛担当','不被当真'],
  caps=[('有一种人',[('走到哪',0),('都亮',1)]),('年会',[('永远',0),('C位',1)]),('群聊里',[('表情包',0),('刷屏',1)]),('合照里',[('永远',0),('最抢镜',1)]),('这就是',[('显眼包',1)]),
        ('别人不敢做的',[('他',0),('先上',1)]),('全场',[('笑成',0),('一片',1)]),
        ('偶尔',[('用力',0),('过猛',1)]),('场面',[('一度',0),('尴尬',1)]),
        ('好的一面',[('气氛组',0),('担当',1)]),('有他在',[('从不',0),('冷场',1)]),
        ('坏的一面',[('不被',0),('当真',1)]),('笑着笑着',[('自己',0),('累了',1)]),
        ('你逗大家开心',[('谁来',0),('逗你',1)]),('不用表演',[('也',0),('值得被喜欢',1)])],
  cl=['做自己','就很亮'], endCap=('快乐的你',[('最',0),('可爱',1)]),
  tx=dict(i1='看我！',i2='谁来表演个节目？',i3='我来我来！',i4='哈哈哈哈哈',i5='再来一个！',pv='万众瞩目',pvi=0,
     lab1=['年会C位','群里刷屏','合照抢镜'],lab1c='#ffb070',mk=['看我！','哈哈哈！','耶~'],
     w0=['b','好…好尴尬…'],w1=['t','注意场合！'],lk='啊这…',lkBig='尴尬的不是我，是你们',
     j0='气氛交给我！',j1='有你好开心！',stBig='有你在，就不冷场',
     lab4=['被说幼稚','不被当真','背后吐槽'],s0='我…是认真的',s1='能不能正经点？',slBig='笑着笑着，没人当真',
     d1='……只有搞笑，才有人看我吗',d2='做自己，就很亮！',e1='你最闪亮！',e2='哈哈好样的！'),
  prop=r"""
function spot(x,a){if(a<=.01)return;ctx.save();ctx.globalCompositeOperation='lighter';const g=ctx.createLinearGradient(0,-300,0,GY);g.addColorStop(0,`rgba(255,220,170,${.02*a})`);g.addColorStop(1,`rgba(255,200,140,${.22*a})`);ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(x-50,-300);ctx.lineTo(x+50,-300);ctx.lineTo(x+260,GY);ctx.lineTo(x-260,GY);ctx.closePath();ctx.fill();ctx.restore();
  ctx.save();ctx.globalAlpha=a*.5;ctx.fillStyle='rgba(255,210,150,.5)';ctx.beginPath();ctx.ellipse(x,GY+6,270,30,0,0,TAU);ctx.fill();ctx.restore();}
function shades(G,a){if(a<=.01)return;const h=G.hc,s=G.s,f=G.f;ctx.save();ctx.globalAlpha=a;ctx.fillStyle='#08080c';ctx.strokeStyle=PC;ctx.lineWidth=3;ctx.shadowColor=PC;ctx.shadowBlur=10;[[.38,0],[-.06,0]].forEach(([dx])=>{ctx.beginPath();ctx.roundRect(h[0]+f*36*s*dx-15*s,h[1]-12*s,30*s,17*s,6*s);ctx.fill();ctx.stroke();});ctx.beginPath();ctx.moveTo(h[0]+f*36*s*.06,h[1]-6*s);ctx.lineTo(h[0]+f*36*s*.26,h[1]-6*s);ctx.stroke();ctx.restore();}
function note(x,y,a,col){if(a<=.01)return;ctx.save();ctx.globalAlpha=a;ctx.fillStyle=col;ctx.shadowColor=col;ctx.shadowBlur=12;ctx.beginPath();ctx.ellipse(x,y,13,10,-.4,0,TAU);ctx.fill();ctx.fillRect(x+10,y-48,4,48);ctx.beginPath();ctx.moveTo(x+14,y-48);ctx.quadraticCurveTo(x+34,y-36,x+30,y-18);ctx.lineTo(x+26,y-22);ctx.quadraticCurveTo(x+28,y-34,x+14,y-38);ctx.fill();ctx.restore();}
function propBack(S){const{t,endF}=S;const on=(t>=2.67&&t<WAVES[0])||(t>=B(7)-.1&&t<B(8))||t>=CLIMAX;const a=endF*(on?1:0)*(t<3?seg(t,2.67,3):1);spot(RX,a);}
function propFront(S,G,po){const{t,endF}=S;const sa=endF*((t>=4.45&&t<WAVES[0])||(t>=B(7)&&t<B(8))||t>=CLIMAX+.1?1:0);shades(G,sa);
  const na=endF*((t>=DROP&&t<WAVES[0])||(t>=B(7)&&t<B(8))||t>=CLIMAX?1:0);if(na>0)for(let i=0;i<4;i++){const p=((t*.7+i/4)%1);note(G.hc[0]-220+i*130+Math.sin(p*6+i)*20,G.hc[1]-60-p*240,na*Math.sin(p*Math.PI),[PC,GOLD,'#ff9ad0',CB][i]);}}
"""),

dict(py='shekong', ep=22, name='社恐', en='SOCIAL ANXIETY', epn='第二十二期', pc='#7ad8ff',
  grad=['#ffffff','#d0f0ff','#6ac0ff'], glowC='rgba(120,210,255,.85)', kwCol='rgba(220,244,255,.92)', slamCol='#a8d8ff',
  kw='能躲就躲 · 人多就慌 · 慢热真诚 · 错过机会', words=['紧张','尴尬','退缩','孤单'],
  sky="[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#04081a','#10284a','#4a90d0']],[B(5),['#04060e','#0c1428','#203858']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#0a0a1a','#30306a','#ffd890']],[CLIMAX+1.4,['#06101a','#204060','#a0d8ff']],[B(11)+.6,['#040408','#0c0c14','#16161e']]]",
  M="{hd:.3,fax:70,fay:20,bax:40,bay:60}", Z="{hd:.5,lean:.1,sq:.82,fax:30,fay:60,bax:20,bay:66,exp:2,flx:40,blx:-10}", phone=True, E1='5', E2='4', EMK='5', BEXP='0',
  tags=['能躲就躲','人多就慌','慢热真诚','错过机会'],
  caps=[('有一种人',[('电梯里',0),('只想隐身',1)]),('能发消息',[('绝不',0),('打电话',1)]),('外卖',[('永远',0),('放门口',1)]),('说一句话',[('心里',0),('彩排十遍',1)]),('这就是',[('社恐',1)]),
        ('偶遇同事',[('假装',0),('看手机',1)]),('能躲',[('就',0),('躲',1)]),
        ('一被点名',[('大脑',0),('空白',1)]),('人一多',[('就想',0),('消失',1)]),
        ('好的一面',[('慢热',0),('但真诚',1)]),('一对一',[('超能',0),('聊',1)]),
        ('坏的一面',[('错过',0),('很多机会',1)]),('被误会',[('太',0),('高冷',1)]),
        ('你不是不爱说话',[('只是',0),('需要时间',1)]),('慢一点',[('也',0),('没关系',1)])],
  cl=['勇敢一次','打个招呼'], endCap=('慢热的人',[('也有',0),('光',1)]),
  tx=dict(i1='（别看见我）',i2='嗨！早啊！',i3='（假装看手机）',i4='一起吃饭吗？',i5='我…我吃过了',pv='能躲就躲',pvi=2,
     lab1=['电梯偶遇','来电话了','外卖到了'],lab1c='#7ad8ff',mk=['（屏住呼吸）','能发消息吗…','放门口就好！'],
     w0=['b','大家一起唱歌吧~'],w1=['t','来，自我介绍一下！'],lk='（我想消失…）',lkBig='人多的地方，我会消失',
     j0='其实…我很能聊',j1='跟你聊天好舒服~',stBig='慢热，但真诚',
     lab4=['错过机会','被说高冷','不敢开口'],s0='我…我…',s1='你怎么不说话？',slBig='不是高冷，是不敢',d1='……我也想被看见',d2='你好！我是——',e1='你好呀！',e2='欢迎欢迎！'),
  prop=STEPBOX+r"""
const RH=[[4.45,'心里彩排 第1遍',0],[5.3,'心里彩排 第4遍',0],[6.4,'心里彩排 第7遍',0],[7.0,'心里彩排 第10遍',1]];
function shellA(t){return (win(t,2.8,4.15,.15,.2)+win(t,5.9,7.3,.15,.2)+win(t,WAVES[0]-.1,B(7),.15,.2)+win(t,B(8)+.2,CLIMAX-.6,.2,.2))}
function propFront(S,G,po){const{t,endF}=S;const a=Math.min(1,shellA(t))*endF;const cx=RX,cy=GY-330;
  if(a>.01){ctx.save();ctx.globalAlpha=a*.18;ctx.fillStyle=PC;ctx.beginPath();ctx.ellipse(cx,cy,230+Math.sin(t*3)*6,360,0,0,TAU);ctx.fill();ctx.restore();glow(circ(cx,cy,230+Math.sin(t*3)*6,360,80),1,PC,2.6,a*.9,16,false);
    for(let i=0;i<5;i++){const an=-1.2+i*.25;dot(cx+Math.cos(an)*200,cy+Math.sin(an)*320,3,'#fff',a*.6);}}
  if(t>=CLIMAX&&t<CLIMAX+1.4){shards(t,CLIMAX,cx,cy-120,endF,91,PC,30,1100);}
  stepBox(RH,220,GY-470,t,endF*win(t,4.4,DROP,.1,.05),[PC,'#ff7a8a',GOLD],44);
  if(t>=CLIMAX+.1&&t<B(11))stepBox([[CLIMAX+.1,'说出口了！',2]],220,GY-470,t,endF*(1-seg(t,B(11)-.3,B(11))),[PC,'#ff7a8a',GOLD],48);}
"""),

dict(py='juanwang', ep=23, name='卷王', en='OVERACHIEVER', epn='第二十三期', pc='#ff9a6a',
  grad=['#ffffff','#ffd8c0','#ff7a4a'], glowC='rgba(255,140,90,.85)', kwCol='rgba(255,232,220,.92)', slamCol='#ffb8a0',
  kw='永远加班 · 全组陪跑 · 能力飞涨 · 身体透支', words=['焦虑','疲惫','透支','比较'],
  sky="[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#180804','#5a1a10','#ff7a4a']],[B(5),['#0c0806','#281810','#583020']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#1a0c08','#7a3a1a','#ffc0a0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]]",
  M="{lean:.1,hd:.15,fax:95,fay:45,bax:75,bay:48}", Z="{lean:.06,hd:.1,fax:110,fay:-60,bax:-40,bay:60,exp:1}", E1='1', E2='0', EMK='1', TEVIL='0', BEXP='2',
  tags=['永远加班','全组陪跑','能力飞涨','身体透支'],
  caps=[('有一种人',[('永远',0),('最后下班',1)]),('周末',[('还在',0),('考证',1)]),('别人摸鱼',[('他在',0),('冲刺',1)]),('一刻不停',[('生怕',0),('落后',1)]),('这就是',[('卷王',1)]),
        ('加班',[('到',0),('深夜',1)]),('学习',[('停不',0),('下来',1)]),
        ('他一卷',[('全组',0),('陪跑',1)]),('同事们',[('叫苦',0),('连天',1)]),
        ('好的一面',[('能力',0),('飞涨',1)]),('越努力',[('越',0),('幸运',1)]),
        ('坏的一面',[('没有',0),('生活',1)]),('身体',[('先',0),('透支',1)]),
        ('你停下来',[('世界也',0),('不会塌',1)]),('努力很好',[('休息',0),('也是',1)])],
  cl=['今天','准时下班'], endCap=('人生不是赛跑',[('是',0),('旅行',1)]),
  tx=dict(i1='再干一会儿！',i2='下班啦~明天见',i3='我再学一小时！',i4='你还不走啊？',i5='你们先走！',pv='争分夺秒',pvi=0,
     lab1=['加班到深夜','周末考证','早到一小时'],lab1c='#ff9a6a',mk=['再干一会！','学到就是赚到！','我先到了！'],
     w0=['b','你卷得我们好累…'],w1=['t','大家向他学习！'],lk='我还能再卷！',lkBig='你一卷，全组陪跑',
     j0='考过了！',j1='你好厉害！',stBig='越努力，越幸运',
     lab4=['没有生活','身体透支','永远焦虑'],s0='停下就落后…',s1='歇会儿吧兄弟',slBig='卷赢了别人，输给了自己',
     d1='……停下来，我就会落后吗',d2='今天，准时下班！',e1='一起吃饭！',e2='下班快乐！'),
  prop=STEPBOX+r"""
const TM=[[2.67,'18:00 下班',0],[4.45,'21:00',0],[6.4,'23:30',0],[DROP,'01:00',1],[MK[0],'02:00',1],[MK[1],'周六 08:00',1],[MK[2],'周一 06:30',1],[B(6),'全组加班',1],[B(7),'绩效 A+',2],[B(8),'体检 异常',1],[SNAPS[1],'连续加班 30天',1],[CLIMAX,'18:00 准时下班',2]];
function desk(a,t){if(a<=.01)return;const x0=RX+70,x1=RX+330,y=GY-300;glow([[x0,y],[x1,y]],1,PC,3,a,12,false);glow([[x0+20,y],[x0+20,GY]],1,PC,2.4,a,8,false);glow([[x1-20,y],[x1-20,GY]],1,PC,2.4,a,8,false);
  ctx.save();ctx.globalAlpha=a;ctx.fillStyle='#0c1018';ctx.save();ctx.translate(x0+150,y);ctx.rotate(-.25);ctx.fillRect(-70,-110,140,100);ctx.strokeStyle=CB;ctx.lineWidth=2.6;ctx.shadowColor=CB;ctx.shadowBlur=12;ctx.strokeRect(-70,-110,140,100);ctx.globalAlpha=a*.35;ctx.fillStyle=CB;ctx.fillRect(-60,-100,120,80);ctx.restore();
  ctx.strokeStyle=CB;ctx.lineWidth=3;ctx.shadowColor=CB;ctx.shadowBlur=10;ctx.beginPath();ctx.moveTo(x0+40,y-4);ctx.lineTo(x0+180,y-4);ctx.stroke();
  for(let i=0;i<4;i++){ctx.fillStyle=['#ff9a6a','#ffd06a','#8affc8','#c4a8ff'][i];ctx.fillRect(x1-90,y-16-i*18,70,15);}ctx.restore();}
function crown(x,y,a,s){if(a<=.01)return;const p=[[-40,0],[-48,-46],[-20,-20],[0,-56],[20,-20],[48,-46],[40,0],[-40,0]].map(q=>[x+q[0]*s,y+q[1]*s]);ctx.save();ctx.globalAlpha=a*.6;ctx.fillStyle=GOLD;trace(p);ctx.fill();ctx.restore();glow(p,1,GOLD,3,a,18,false);}
function propBack(S){const{t,endF}=S;const a=endF*((t>=2.67&&t<WAVES[0]+.2)||(t>=B(7)&&t<STAMP)||(t>=B(8)&&t<SLAM)||(t>=CLIMAX-.35&&t<CLIMAX)?1:0)*(t<3?seg(t,2.67,3):1);desk(a,t);}
function propFront(S,G,po){const{t,endF}=S;stepBox(TM,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  if(t>=STAMP&&t<B(8))crown(G.hc[0],G.hc[1]-62*1.45+10,endF*(1-seg(t,B(8)-.3,B(8))),eBack(seg(t,STAMP,STAMP+.25)));
  if(S.b2>0&&t>=WAVES[0]){for(let i=0;i<3;i++){const p=((t*1.3+i/3)%1);ctx.save();ctx.globalAlpha=S.b2*endF*Math.sin(p*Math.PI);ctx.font='900 '+(30+i*6)+'px '+SER;ctx.fillStyle='#ff9a6a';ctx.shadowColor='#ff7a4a';ctx.shadowBlur=10;ctx.fillText('卷',G.hc[0]+90+i*40,G.hc[1]-40-p*120);ctx.restore();}}}
"""),
]

SKY=lambda d,c1,c2:"[[0,['#04060c','#0a0e18','#141a28']],[DROP,"+d+"],[B(5),"+c1+"],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,"+c2+"],[B(11)+.6,['#040408','#0c0c14','#16161e']]]"

SPECS += [
dict(py='zuiti', ep=24, name='嘴替', en='THE VOICE', epn='第二十四期', pc='#ff7ab8',
  grad=['#ffffff','#ffd0e8','#ff5aa0'], glowC='rgba(255,120,180,.85)', kwCol='rgba(255,226,240,.92)', slamCol='#ffb0d0',
  kw='敢说真话 · 全场解气 · 替人发声 · 得罪人', words=['委屈','孤立','后怕','压力'],
  sky=SKY("['#180410','#5a1038','#ff5aa0']","['#10060c','#301428','#683058']","['#1a0812','#7a2a4a','#ffc0d8']"),
  M="{lean:.04,hd:0,fax:80,fay:-40,bax:-30,bay:70}", Z="{lean:-.05,hd:.1,fax:110,fay:-110,bax:-40,bay:60,exp:1}", E1='1', E2='1', EMK='1', TEVIL='1', BEXP='0',
  MKA="[{fax:120,fay:-90},{fax:30,fay:-150,bax:-90,bay:-20},{fax:120,fay:-130,lean:.1}]",
  tags=['敢说真话','全场解气','替人发声','得罪人'],
  caps=[('有一种人',[('你想说的',0),('他全说了',1)]),('开会时',[('大家都',0),('沉默',1)]),('他一开口',[('全场',0),('解气',1)]),('评论区里',[('永远',0),('热评第一',1)]),('这就是',[('嘴替',1)]),
        ('不合理的',[('他',0),('敢说',1)]),('憋着的话',[('他',0),('替你说',1)]),
        ('领导',[('脸都',0),('绿了',1)]),('大家',[('偷偷',0),('点赞',1)]),
        ('好的一面',[('真实',0),('敢言',1)]),('大家的',[('情绪',0),('出口',1)]),
        ('坏的一面',[('容易',0),('得罪人',1)]),('冲在前面',[('一个人',0),('扛',1)]),
        ('你替所有人说话',[('谁来',0),('替你说',1)]),('勇敢很好',[('也要',0),('护住自己',1)])],
  cl=['这一次','替自己说'], endCap=('敢说真话的人',[('最',0),('可贵',1)]),
  tx=dict(i1='（深吸一口气）',i2='周末加个班哈~',i3='凭什么？',i4='说得好！',i5='我就直说了！',pv='一针见血',pvi=0,
     lab1=['周末加班？','画大饼？','功劳被抢？'],lab1c='#ff7ab8',mk=['不合理！','饼吃不饱！','这是我做的！'],
     w0=['b','说出了我的心声！'],w1=['t','你什么意思？'],lk='我…说错了吗',lkBig='你敢说出口，他们只敢点赞',
     j0='有话直说！',j1='你好勇啊！',stBig='替沉默的人，发声',
     lab4=['得罪领导','被穿小鞋','孤军奋战'],s0='大家怎么不说话…',s1='你也太冲了吧',slBig='冲在最前面，回头没有人',
     d1='……我替大家说，谁替我说',d2='这一次，为自己说！',e1='我们挺你！',e2='说得对！'),
  prop=STEPBOX+r"""
const LK=[[2.67,'点赞 0',0],[4.45,'点赞 999',0],[6.4,'点赞 1w+',0],[DROP,'热评第一',2],[MK[0],'点赞 3w',0],[MK[1],'点赞 8w',0],[MK[2],'点赞 10w+',2],[B(6),'领导 已读',1],[B(7),'大家的嘴替',2],[B(8),'被约谈',1],[SNAPS[1],'站队 0人',1],[CLIMAX,'为自己发声',2]];
function horn(G,a,t,col){if(a<=.01)return;const h=G.fh,s=G.s;const ang=-.45;ctx.save();ctx.translate(h[0],h[1]);ctx.rotate(ang);
  const P=[[-6*s,-10*s],[40*s,-30*s],[40*s,30*s],[-6*s,10*s],[-6*s,-10*s]];ctx.globalAlpha=a*.85;ctx.fillStyle='#1a0812';ctx.beginPath();P.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.fill();ctx.restore();
  const tr=P.map(p=>[h[0]+p[0]*Math.cos(ang)-p[1]*Math.sin(ang),h[1]+p[0]*Math.sin(ang)+p[1]*Math.cos(ang)]);glow(tr,1,col,3,a,14,false);
  for(let i=0;i<3;i++){const p=((t*1.6+i/3)%1);const R=(50+p*120)*s*.6;const cx=h[0]+Math.cos(ang)*44*s,cy=h[1]+Math.sin(ang)*44*s;ctx.save();ctx.globalAlpha=a*(1-p);ctx.strokeStyle=col;ctx.lineWidth=3;ctx.shadowColor=col;ctx.shadowBlur=12;ctx.beginPath();ctx.arc(cx,cy,R,ang-.6,ang+.6);ctx.stroke();ctx.restore();}}
function propFront(S,G,po){const{t,endF}=S;stepBox(LK,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const ha=endF*((t>=4.45&&t<5.9)||(t>=6.4&&t<7.6)||(t>=MK[0]-.1&&t<B(6))||(t>=STAMP&&t<B(8))||(t>=CLIMAX&&t<B(11))?1:0);horn(G,ha,t,t>=CLIMAX||(t>=STAMP&&t<B(8))?GOLD:PC);
  if(S.b2>0&&t>=WAVES[0]){for(let i=0;i<4;i++){const p=((t*1.1+i/4)%1);ctx.save();ctx.globalAlpha=S.b2*endF*Math.sin(p*Math.PI);ctx.font='900 34px '+SER;ctx.fillStyle='#ff9ad0';ctx.shadowColor='#ff5aa0';ctx.shadowBlur=10;ctx.fillText('赞',880+i*60,GY-300-p*200);ctx.restore();}}}
"""),

dict(py='banwei', ep=25, name='班味', en='WORK MODE', epn='第二十五期', pc='#9ac8b0',
  grad=['#ffffff','#d8f0e4','#7ab89a'], glowC='rgba(150,210,180,.85)', kwCol='rgba(226,244,236,.92)', slamCol='#c0dcd0',
  kw='眼神空洞 · 张口收到 · 靠谱稳定 · 忘了自己', words=['疲惫','麻木','焦虑','空虚'],
  sky=SKY("['#060c0a','#1a302a','#5a8a78']","['#06080a','#141c20','#2c3a40']","['#0c140e','#3a6a50','#c8f0d8']"),
  M="{lean:.12,hd:.3,fax:50,fay:80,bax:30,bay:90}", Z="{lean:.15,hd:.45,fax:40,fay:110,bax:20,bay:110,exp:5,sq:.94}", E1='5', E2='5', EMK='5', TEVIL='0', BEXP='1',
  MKA="[{fax:60,fay:-20},{fax:90,fay:-60,lean:.05},{fax:70,fay:20}]",
  tags=['眼神空洞','张口收到','靠谱稳定','忘了自己'],
  caps=[('有一种人',[('一身',0),('班味',1)]),('周一早上',[('眼神',0),('空洞',1)]),('工牌一挂',[('魂',0),('就没了',1)]),('下了班',[('也',0),('散不掉',1)]),('这就是',[('班味',1)]),
        ('黑眼圈',[('比咖啡',0),('还浓',1)]),('张口闭口',[('全是',0),('收到',1)]),
        ('朋友说',[('你',0),('变了',1)]),('笑容',[('越来越',0),('少',1)]),
        ('好的一面',[('靠谱',0),('稳定',1)]),('打工人',[('撑起',0),('生活',1)]),
        ('坏的一面',[('忘了',0),('自己',1)]),('周末',[('也在',0),('回消息',1)]),
        ('你不是机器',[('你是',0),('你自己',1)]),('下班以后',[('做回',0),('自己',1)])],
  cl=['摘下工牌','去生活'], endCap=('工作是一部分',[('生活',0),('才是全部',1)]),
  tx=dict(i1='（闹钟响了…）',i2='早啊~周一快乐！',i3='收到。',i4='你怎么无精打采的？',i5='好的。收到。',pv='一身班味',pvi=2,
     lab1=['周一早高峰','第三杯咖啡','收到收到'],lab1c='#9ac8b0',mk=['收到。','好的。','马上改。'],
     w0=['b','你好像变了…'],w1=['t','这个今天要哈~'],lk='收到…',lkBig='嘴上说收到，心里已下班',
     j0='交给我，放心',j1='你好靠谱！',stBig='打工人，最靠谱',
     lab4=['没有自我','周末加班','笑不出来'],s0='我…原来是什么样',s1='你多久没笑了？',slBig='班味太重，忘了自己',
     d1='……我以前，是什么样的',d2='下班！做回自己！',e1='一起去玩！',e2='这才像你！'),
  prop=STEPBOX+r"""
const TM=[[2.67,'周一 07:30',0],[4.45,'咖啡 ×1',0],[6.4,'咖啡 ×2',0],[DROP,'咖啡 ×3',1],[MK[0],'收到 ×12',1],[MK[1],'收到 ×36',1],[MK[2],'收到 ×99',1],[B(6),'笑容 -80%',1],[B(7),'零失误 100天',2],[B(8),'周六 回消息',1],[SNAPS[1],'自我 已离线',1],[CLIMAX,'18:00 下班！',2]];
function badge(G,a,col,off){if(a<=.01)return;const n=G.nk,s=G.s;const cx=n[0]+8*s+(off?off[0]:0),cy=n[1]+95*s+(off?off[1]:0);
  if(!off)glow([[n[0]-14*s,n[1]+6*s],[cx,cy-22*s],[n[0]+22*s,n[1]+6*s]],1,col,2,a,6,false);
  ctx.save();ctx.globalAlpha=a;ctx.fillStyle='#0c1410';ctx.fillRect(cx-22*s,cy-22*s,44*s,34*s);ctx.strokeStyle=col;ctx.lineWidth=2.4;ctx.shadowColor=col;ctx.shadowBlur=10;ctx.strokeRect(cx-22*s,cy-22*s,44*s,34*s);ctx.font='800 '+Math.round(12*s)+'px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.fillText('工牌',cx,cy+2*s);ctx.restore();}
function fumes(G,a,t){if(a<=.01)return;for(let i=0;i<5;i++){const p=((t*.45+i/5)%1);const x=G.hc[0]-120+i*60+Math.sin(p*7+i)*24,y=G.hc[1]-40-p*260;ctx.save();ctx.globalAlpha=a*Math.sin(p*Math.PI)*.8;ctx.strokeStyle='#8a9a94';ctx.lineWidth=4;ctx.shadowColor='#8a9a94';ctx.shadowBlur=14;ctx.beginPath();for(let k=0;k<=12;k++){const yy=y+k*6,xx=x+Math.sin(k*.9+t*3+i)*10;k?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy);}ctx.stroke();ctx.restore();}
  if(a>.3){ctx.save();ctx.globalAlpha=a*.7*(.6+.4*Math.sin(t*3));ctx.font='900 40px '+SER;ctx.textAlign='center';ctx.fillStyle='#b0c0b8';ctx.shadowColor='#6a7a74';ctx.shadowBlur=12;ctx.fillText('班味',G.hc[0]+150,G.hc[1]-200+Math.sin(t*2)*10);ctx.restore();}}
function propFront(S,G,po){const{t,endF}=S;stepBox(TM,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const fa=endF*(t>=4.45&&t<B(7)||t>=B(8)&&t<CLIMAX?1:0)*(t<5?seg(t,4.45,5):1);fumes(G,fa,t);
  if(t<CLIMAX)badge(G,endF*seg(t,2.67,3.0),t>=B(7)&&t<B(8)?GOLD:PC);
  else{const p=seg(t,CLIMAX,CLIMAX+1.2);badge(G,endF*(1-p),GOLD,[p*420,-Math.sin(p*Math.PI)*260-p*80]);}}
"""),

dict(py='dazi', ep=26, name='搭子', en='BUDDY', epn='第二十六期', pc='#6ae0e8',
  grad=['#ffffff','#d0f8fa','#40c8d8'], glowC='rgba(110,224,232,.85)', kwCol='rgba(220,250,252,.92)', slamCol='#a8e8f0',
  kw='万物皆可搭 · 边界拉满 · 轻松不累 · 难以交心', words=['孤单','疏离','空虚','沉默'],
  sky=SKY("['#04101a','#0c3a4a','#40c8d8']","['#040c10','#0c2430','#1c5060']","['#06141a','#1a5a6a','#b0f0f8']"),
  M="{lean:-.02,hd:0,fax:100,fay:-20,bax:-40,bay:70}", Z="{lean:-.12,hd:.1,fax:90,fay:20,bax:-90,bay:20,exp:4,flx:30}", E1='0', E2='0', EMK='0', TEVIL='0', BEXP='0',
  MKA="[{fax:110,fay:-60},{fax:40,fay:-150,bax:-40,bay:-150},{fax:130,fay:-130,lean:.1}]",
  tags=['万物皆可搭','边界拉满','轻松不累','难以交心'],
  caps=[('有一种人',[('吃饭',0),('有搭子',1)]),('健身',[('有',0),('搭子',1)]),('旅游',[('也有',0),('搭子',1)]),('不深交',[('不',0),('打扰',1)]),('这就是',[('搭子',1)]),
        ('拼单',[('秒',0),('成团',1)]),('一句走吗',[('立刻',0),('出发',1)]),
        ('私事',[('一概',0),('不问',1)]),('边界感',[('拉',0),('满',1)]),
        ('好的一面',[('轻松',0),('不累',1)]),('想去哪儿',[('都',0),('有人陪',1)]),
        ('坏的一面',[('搭子',0),('很多',1)]),('知心的',[('没有',0),('一个',1)]),
        ('热闹散场',[('还是',0),('一个人',1)]),('搭子再多',[('也要',0),('有个知己',1)])],
  cl=['把搭子','变成朋友'], endCap=('陪伴',[('不在多',0),('在真心',1)]),
  tx=dict(i1='今天吃啥？',i2='健身走起！',i3='饭搭子集合~',i4='奶茶拼单吗？',i5='走！',pv='一拍即合',pvi=2,
     lab1=['饭搭子','健身搭子','旅游搭子'],lab1c='#6ae0e8',mk=['拼个单！','一起练！','说走就走！'],
     w0=['b','你家里最近还好吗？'],w1=['t','聊聊心事呗？'],lk='呃…这个就不聊了',lkBig='只搭伴，不交心',
     j0='想去就去！',j1='跟你玩好轻松~',stBig='轻松陪伴，刚刚好',
     lab4=['不交心','难倾诉','散场孤单'],s0='（突然好想找人说说话）',s1='有事可以找我啊',slBig='搭子很多，知己很少',
     d1='……难过的时候，我能找谁',d2='其实，我想跟你说…',e1='我在呢！',e2='好朋友！'),
  prop=STEPBOX+r"""
const DZ=[[2.67,'搭子 0',0],[2.85,'健身搭子 +1',0],[4.45,'饭搭子 +1',0],[5.95,'奶茶搭子 +1',0],[DROP,'搭子 ×8',2],[MK[0],'饭搭子 ✓',0],[MK[1],'健身搭子 ✓',0],[MK[2],'旅游搭子 ✓',0],[B(6),'话题：仅限吃喝',1],[B(7),'周末 满档',2],[B(8),'深夜 0人可聊',1],[SNAPS[1],'通讯录 300人',1],[CLIMAX,'知己 +1',2]];
function link(a,x0,y0,x1,y1,col,t){if(a<=.01)return;ctx.save();ctx.globalAlpha=a;ctx.strokeStyle=col;ctx.lineWidth=3;ctx.shadowColor=col;ctx.shadowBlur=12;ctx.setLineDash([14,12]);ctx.lineDashOffset=-t*60;ctx.beginPath();ctx.moveTo(x0,y0);ctx.quadraticCurveTo((x0+x1)/2,Math.min(y0,y1)-90,x1,y1);ctx.stroke();ctx.restore();}
function propFront(S,G,po){const{t,endF}=S;stepBox(DZ,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const la=endF*(win(t,2.85,4.1,.15,.2)+win(t,5.95,7.4,.15,.2)+win(t,B(7)+.1,B(8)-.15,.15,.2));const tx=t<4.2?1060:860;link(la,G.fh[0],G.fh[1],tx,GY-200,PC,t);
  if(t>=CLIMAX+.8){const a=endF*seg(t,CLIMAX+.8,CLIMAX+1.2);link(a,G.fh[0],G.fh[1],860,GY-200,GOLD,t);heartF((G.fh[0]+860)/2,Math.min(G.fh[1],GY-200)-60,1.3,'#ffcf6a',a);}
  if(S.b2>0&&t>=WAVES[0]&&t<B(7)){const a=S.b2*endF;const x=RX+130,y=GY-200;glow([[x,y-220],[x,y+190]],1,'#ff7a8a',4,a,16,false);ctx.save();ctx.globalAlpha=a;ctx.font='900 30px '+SER;ctx.fillStyle='#ff9aa8';ctx.textAlign='center';ctx.fillText('边',x,y-240);ctx.fillText('界',x,y-205);ctx.restore();}}
"""),

dict(py='fafeng', ep=27, name='发疯文学', en='UNHINGED MODE', epn='第二十七期', pc='#ff8ae0',
  grad=['#ffffff','#ffd8f4','#e060ff'], glowC='rgba(240,120,230,.85)', kwCol='rgba(255,228,248,.92)', slamCol='#f0b8ff',
  kw='原地爆炸 · 越疯越火 · 情绪不憋 · 没人当真', words=['委屈','崩溃','压抑','孤单'],
  sky=SKY("['#14041a','#4a1058','#e060ff']","['#10061a','#2c1040','#6a3090']","['#160a1a','#6a2a7a','#ffc8f4']"),
  M="{lean:0,hd:0,fax:60,fay:40,bax:-50,bay:50}", Z="{lean:-.08,hd:.1,fax:120,fay:-140,bax:-120,bay:-140,exp:4}", E1='0', E2='4', EMK='4', TEVIL='0', BEXP='0',
  MKA="[{fax:120,fay:-140,bax:-120,bay:-140},{fax:20,fay:-170,bax:-20,bay:-170,lean:-.1},{fax:130,fay:-60,bax:-130,bay:-60,flx:60,blx:-60}]",
  tags=['原地爆炸','越疯越火','情绪不憋','没人当真'],
  caps=[('有一种人',[('表面',0),('岁月静好',1)]),('一开口',[('全是',0),('感叹号',1)]),('不发疯',[('就',0),('发霉',1)]),('情绪',[('全写在',0),('文字里',1)]),('这就是',[('发疯文学',1)]),
        ('被催进度',[('当场',0),('发疯',1)]),('外卖超时',[('原地',0),('裂开',1)]),
        ('同事们',[('笑',0),('疯了',1)]),('一条动态',[('点赞',0),('过百',1)]),
        ('好的一面',[('情绪',0),('不憋着',1)]),('发完疯',[('继续',0),('上班',1)]),
        ('坏的一面',[('真难过',0),('没人信',1)]),('都当你',[('在',0),('开玩笑',1)]),
        ('笑着发疯',[('其实',0),('很累',1)]),('偶尔',[('认真',0),('说一次',1)])],
  cl=['好好说出','我的感受'], endCap=('情绪',[('值得',0),('被看见',1)]),
  tx=dict(i1='（微笑）',i2='这个今天能改完吗？',i3='啊啊啊啊啊！！！',i4='你…还好吗？',i5='我没事！我好得很！！',pv='一触即发',pvi=2,
     lab1=['又改方案','外卖超时','手机没电'],lab1c='#ff8ae0',mk=['我真的会谢！','我直接裂开！','我原地爆炸！'],
     w0=['b','哈哈哈好有趣！'],w1=['t','这孩子又疯了哈哈'],lk='（其实是真的崩溃）',lkBig='越是真崩溃，越像在搞笑',
     j0='发完疯，接着干！',j1='你好会排解~',stBig='情绪不憋着，就是本事',
     lab4=['没人当真','笑着难过','越发越累'],s0='我是认真的…',s1='又在发疯呢哈哈',slBig='真难过的时候，没人相信',
     d1='……我是真的不开心',d2='我今天，有点难过',e1='抱抱你！',e2='我听你说！'),
  prop=STEPBOX+r"""
const SN=[[2.67,'理智 100%',0],[2.85,'理智 70%',0],[4.45,'理智 3%',1],[5.95,'理智 40%',0],[6.4,'理智 0%',1],[DROP,'发疯模式 ON',1],[MK[0],'感叹号 ×99',1],[B(6),'朋友圈 爆了',0],[B(7),'情绪 已释放',2],[B(8),'真心话 0人信',1],[SNAPS[1],'“哈哈哈” ×50',1],[CLIMAX,'被认真听见',2]];
function bangs(G,a,t){if(a<=.01)return;const r=rng(13);for(let i=0;i<7;i++){const an=-2.6+i*.55+Math.sin(t*5+i)*.08,R=150+r()*70+Math.sin(t*9+i*2)*12;const x=G.hc[0]+Math.cos(an)*R,y=G.hc[1]+Math.sin(an)*R*.8;const sz=40+r()*30;
  ctx.save();ctx.globalAlpha=a*(.7+.3*Math.sin(t*12+i));ctx.translate(x,y);ctx.rotate(an+Math.PI/2);ctx.font='900 '+Math.round(sz)+'px '+SER;ctx.textAlign='center';ctx.fillStyle=['#fff',PC,'#ffd06a'][i%3];ctx.shadowColor=PC;ctx.shadowBlur=16;ctx.fillText(i%3==1?'？':'！',0,0);ctx.restore();}}
function propFront(S,G,po){const{t,endF}=S;stepBox(SN,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const ba=endF*Math.min(1,win(t,4.45,5.9,.1,.2)+win(t,6.4,7.0,.08,.15)+win(t,DROP,WAVES[0],.08,.2)+win(t,LOCK,B(7),.1,.2));bangs(G,ba,t);
  if(t>=4.45&&t<5.9||t>=DROP&&t<DROP+.8)shards(t,t<5.9?4.45:DROP,G.hc[0],G.hc[1],endF,33,PC,18,700);}
"""),

dict(py='songchi', ep=28, name='松弛感', en='EASYGOING', epn='第二十八期', pc='#b8e878',
  grad=['#ffffff','#e8f8d0','#98d850'], glowC='rgba(184,232,120,.85)', kwCol='rgba(240,252,226,.92)', slamCol='#d0f0a8',
  kw='天塌不慌 · 稳如泰山 · 情绪稳定 · 被说佛系', words=['质疑','催促','比较','焦虑'],
  sky=SKY("['#0a1404','#2a4a14','#98d850']","['#080c06','#1a2814','#3a5a2a']","['#0e1408','#4a7a2a','#e0f8c0']"),
  M="{lean:-.06,hd:-.05,fax:60,fay:-10,bax:-40,bay:70}", Z="{lean:-.12,hd:-.1,fax:-30,fay:-150,bax:-70,bay:-150,exp:0}", E1='0', E2='0', EMK='0', TEVIL='0', BEXP='1', ECL='1',
  MKA="[{fax:60,fay:-10},{fax:100,fay:-60,lean:-.1},{fax:-30,fay:-150,bax:-70,bay:-150,lean:-.12}]",
  tags=['天塌不慌','稳如泰山','情绪稳定','被说佛系'],
  caps=[('有一种人',[('天塌了',0),('也不慌',1)]),('航班延误',[('他在',0),('喝茶',1)]),('方案被毙',[('他说',0),('再改呗',1)]),('别人焦虑',[('他在',0),('享受',1)]),('这就是',[('松弛感',1)]),
        ('不内耗',[('不',0),('攀比',1)]),('慢慢来',[('反而',0),('更快',1)]),
        ('大家',[('急得',0),('跳脚',1)]),('他',[('稳如',0),('泰山',1)]),
        ('好的一面',[('情绪',0),('稳定',1)]),('关键时刻',[('最',0),('靠得住',1)]),
        ('坏的一面',[('被说',0),('不上进',1)]),('被当成',[('没心',0),('没肺',1)]),
        ('松弛不是躺平',[('是',0),('想明白了',1)]),('该冲的时候',[('一点',0),('不含糊',1)])],
  cl=['松而不散','从容向前'], endCap=('慢下来',[('也能',0),('到达',1)]),
  tx=dict(i1='（伸个懒腰）',i2='完了完了要迟到了！',i3='不急，来得及~',i4='方案被毙了怎么办！',i5='再改呗~',pv='气定神闲',pvi=0,
     lab1=['航班延误','方案被毙','堵车两小时'],lab1c='#b8e878',mk=['喝杯茶~','再改呗~','听首歌~'],
     w0=['b','你怎么一点都不急！'],w1=['t','明天就要交了！'],lk='急也没用呀~',lkBig='你急你的，我稳我的',
     j0='我来，别慌',j1='有你在好安心~',stBig='情绪稳定，就是实力',
     lab4=['不上进','太佛系','没心没肺'],s0='我…是不是太慢了',s1='你怎么一点不着急？',slBig='松弛，被当成了躺平',
     d1='……慢一点，就错了吗',d2='松弛，但不松懈！',e1='好从容！',e2='佩服佩服！'),
  prop=STEPBOX+r"""
const HR=[[2.67,'心率 62',0],[2.85,'别人 心率 140',1],[4.45,'我 心率 62',0],[5.95,'别人 心率 160',1],[6.4,'我 心率 62',0],[DROP,'心率 62',2],[MK[0],'航班延误 3h',1],[MK[1],'方案 第5版',1],[MK[2],'堵车 2h',1],[B(6),'全组 心率 150',1],[B(7),'危机 已解除',2],[B(8),'考评：太佛系',1],[SNAPS[1],'被催 第9次',1],[CLIMAX,'松弛 且有力',2]];
function cup(G,a,t){if(a<=.01)return;const h=G.fh,s=G.s;const x=h[0]+6*s,y=h[1]-6*s;const P=[[x-16*s,y-24*s],[x-12*s,y+6*s],[x+12*s,y+6*s],[x+16*s,y-24*s]];ctx.save();ctx.globalAlpha=a*.8;ctx.fillStyle='#0e1408';ctx.beginPath();P.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.fill();ctx.restore();glow(P,1,PC,2.6,a,12,false);glow(circ(x+20*s,y-10*s,7*s,9*s,14),1,PC,2.2,a,8,false);
  for(let i=0;i<3;i++){const p=((t*.6+i/3)%1);ctx.save();ctx.globalAlpha=a*Math.sin(p*Math.PI)*.8;ctx.strokeStyle='#e8f8d0';ctx.lineWidth=2.6;ctx.shadowColor=PC;ctx.shadowBlur=10;ctx.beginPath();for(let k=0;k<=8;k++){const yy=y-30*s-p*70-k*5,xx=x-8*s+i*8*s+Math.sin(k*.9+t*3+i)*6;k?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy);}ctx.stroke();ctx.restore();}}
function rush(a,t){if(a<=.01)return;for(let i=0;i<5;i++){const p=((t*1.2+i/5)%1);ctx.save();ctx.globalAlpha=a*Math.sin(p*Math.PI);ctx.font='900 '+(36+i*4)+'px '+SER;ctx.fillStyle='#ff8a7a';ctx.shadowColor='#ff5a4a';ctx.shadowBlur=10;ctx.textAlign='center';ctx.fillText('急',900+Math.sin(i*2.1)*140,GY-260-p*240);ctx.restore();}}
function propFront(S,G,po){const{t,endF}=S;stepBox(HR,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const ca=endF*((t>=2.67&&t<4.2)||(t>=4.45&&t<5.9)||(t>=DROP+1&&t<B(6))||(t>=B(7)+.15&&t<STAMP)||(t>=CLIMAX+1.5)?1:0);if(po.fay>-40&&po.fay<40)cup(G,ca,t);
  const ra=endF*Math.min(1,win(t,2.85,4.1,.15,.2)+win(t,5.95,6.4,.1,.1)+win(t,WAVES[0],B(7),.15,.2));rush(ra,t);}
"""),
]

SPECS += [
dict(py='huibi', ep=29, name='回避型', en='AVOIDANT', epn='第二十九期', pc='#8ac8ff',
  grad=['#ffffff','#d8ecff','#6aa8ff'], glowC='rgba(130,190,255,.85)', kwCol='rgba(226,240,255,.92)', slamCol='#b8d8ff',
  kw='一靠近就逃 · 越近越慌 · 独立自足 · 推开真心', words=['孤单','害怕','逃避','后悔'],
  sky=SKY("['#040a18','#103060','#5aa0ff']","['#060a14','#142640','#2a4a78']","['#0a1020','#3a5a90','#d8ecff']"),
  M="{lean:.08,hd:.1,fax:30,fay:40,bax:-60,bay:30}", Z="{lean:.15,hd:.3,fax:-40,fay:-80,bax:-80,bay:-60,exp:4}", E1='5', E2='4', EMK='4', TEVIL='0', BEXP='2',
  MKA="[{lean:.12},{lean:.2,fax:-50,fay:-60},{lean:.25,fax:-90,fay:0,bax:-90,bay:0}]",
  tags=['一靠近就逃','越近越慌','独立自足','推开真心'],
  caps=[('有一种人',[('越靠近',0),('越想逃',1)]),('别人热情',[('他就',0),('后退',1)]),('一句我想你',[('吓得',0),('已读',1)]),('明明在乎',[('却说',0),('无所谓',1)]),('这就是',[('回避型',1)]),
        ('关系一升温',[('立刻',0),('降温',1)]),('想要靠近',[('又怕',0),('受伤',1)]),
        ('对方',[('一追',0),('再追',1)]),('他',[('一躲',0),('再躲',1)]),
        ('好的一面',[('独立',0),('自足',1)]),('一个人',[('也能',0),('过很好',1)]),
        ('坏的一面',[('真心的人',0),('被推开',1)]),('等想回头',[('人已',0),('走远',1)]),
        ('不是不爱',[('是',0),('怕失去',1)]),('试着',[('慢慢',0),('靠近',1)])],
  cl=['不逃了','我在这'], endCap=('被爱',[('不用',0),('躲',1)]),
  tx=dict(i1='（一个人挺好）',i2='周末一起吃饭呀！',i3='呃…我再看看',i4='我好想你呀~',i5='我…先忙了！',pv='敬而远之',pvi=2,
     lab1=['约饭','表白','见家长'],lab1c='#8ac8ff',mk=['改天吧…','我还没准备好','我先走了！'],
     w0=['b','你是不是在躲我？'],w1=['t','你怎么老往后缩？'],lk='太近了…我喘不过气',lkBig='一靠近，就想逃',
     j0='我自己能搞定~',j1='你好独立呀！',stBig='一个人，也很好',
     lab4=['推开','冷战','错过'],s0='我…是不是又搞砸了',s1='我不等你了',slBig='推开的，都是真心',
     d1='……其实我很怕被丢下',d2='这次，我不逃了！',e1='我在呢！',e2='欢迎回来！'),
  prop=STEPBOX+r"""
const DS=[[2.67,'安全距离 3米',0],[2.85,'距离 1米！',1],[4.45,'后退 5米',0],[5.95,'距离 0.5米！',1],[6.4,'后退 10米',1],[DROP,'逃跑模式 ON',1],[MK[0],'后退 +1米',1],[MK[1],'后退 +3米',1],[MK[2],'后退 +10米',1],[B(6),'关系 降温中',1],[B(7),'独处 满电',2],[B(8),'好友 -1',1],[SNAPS[1],'好友 -3',1],[CLIMAX,'距离 0米',2]];
function streaks(G,a,t){if(a<=.01)return;for(let i=0;i<6;i++){const y=G.hc[1]+30+i*60,p=(t*2.5+i*.37)%1;const x0=G.hc[0]+90+p*80;glow([[x0,y],[x0+130,y]],1,PC,3,a*(1-p),10,false);}}
function propFront(S,G,po){const{t,endF}=S;stepBox(DS,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const sa=endF*Math.min(1,win(t,4.45,5.9,.1,.2)+win(t,6.4,7.4,.1,.2)+win(t,MK[0],B(6)-.1,.1,.2)+win(t,LOCK,B(7),.1,.2));streaks(G,sa,t);
  const wa=endF*Math.min(1,win(t,2.85,4.1,.15,.2)+win(t,WAVES[0],B(7),.15,.2));if(wa>.01){const x=G.hc[0]+190;for(let k=0;k<9;k++){const y0=GY-620+k*68;glow([[x,y0],[x,y0+38]],1,'#9ab8ff',3.4,wa*.85,14,false);}}
  if(t>=CLIMAX+.8){const a=endF*seg(t,CLIMAX+.8,CLIMAX+1.2)*(1-seg(t,B(11)-.2,B(11)+.3));heartF(G.hc[0]+190,G.hc[1]-20,1.5,'#ffcf6a',a);}}
"""),

dict(py='wanmei', ep=30, name='完美主义', en='PERFECTIONIST', epn='第三十期', pc='#ff9a6a',
  grad=['#ffffff','#ffe0d0','#ff8a5a'], glowC='rgba(255,154,106,.85)', kwCol='rgba(255,236,226,.92)', slamCol='#ffc8a8',
  kw='一改再改 · 永不满意 · 出手精品 · 迟迟不交', words=['焦虑','拖延','自责','疲惫'],
  sky=SKY("['#180a04','#5a2410','#ff8a5a']","['#100806','#301810','#6a3a24']","['#1a0e08','#8a4a2a','#ffe0c8']"),
  M="{lean:.05,hd:.15,fax:70,fay:10,bax:40,bay:60}", Z="{lean:.06,hd:.3,fax:20,fay:-80,bax:-20,bay:-80,exp:2}", E1='1', E2='4', EMK='1', TEVIL='1', BEXP='1',
  MKA="[{fax:90,fay:-20},{fax:30,fay:-90,bax:-30,bay:-90},{fax:120,fay:-60,bax:-120,bay:-60}]",
  tags=['一改再改','永不满意','出手精品','迟迟不交'],
  caps=[('有一种人',[('差一点',0),('都不行',1)]),('一个PPT',[('改了',0),('二十版',1)]),('字号差一号',[('重新',0),('排版',1)]),('别人交差',[('他还在',0),('打磨',1)]),('这就是',[('完美主义',1)]),
        ('对齐',[('再',0),('对齐',1)]),('检查',[('再',0),('检查',1)]),
        ('同事',[('早就',0),('下班',1)]),('他',[('还在',0),('抠细节',1)]),
        ('好的一面',[('出手',0),('就是精品',1)]),('交给他',[('最',0),('放心',1)]),
        ('坏的一面',[('越想完美',0),('越不敢交',1)]),('一拖',[('再',0),('拖',1)]),
        ('完成',[('比完美',0),('更重要',1)]),('先交出去',[('再',0),('慢慢改',1)])],
  cl=['完成','胜过完美'], endCap=('够好',[('就是',0),('最好',1)]),
  tx=dict(i1='嗯…还差一点',i2='方案什么时候好？',i3='再改最后一版！',i4='已经很好了呀~',i5='不行，歪了1像素！',pv='精益求精',pvi=1,
     lab1=['最终版','最终版2','最终最终版'],lab1c='#ff9a6a',mk=['再改改…','还是不对…','重来！'],
     w0=['b','真的已经很好了！'],w1=['t','今天必须交！'],lk='可是…还不够完美',lkBig='永远，差一点',
     j0='细节我都抠好了~',j1='哇，好精致！',stBig='出手，就是精品',
     lab4=['拖延','熬夜','自责'],s0='我…还没改完',s1='截止时间过了…',slBig='越想完美，越交不出',
     d1='……做不到满分，就是失败吗',d2='先交出去！',e1='超棒的！',e2='准时完成！'),
  prop=STEPBOX+r"""
const VS=[[2.67,'方案_v1',0],[2.85,'方案_v3',0],[4.45,'方案_v7',1],[5.95,'方案_v12',1],[6.4,'方案_v15',1],[DROP,'最终版_v20',1],[MK[0],'最终版2',1],[MK[1],'最终最终版',1],[MK[2],'打死不改版',1],[B(6),'进度 99%',1],[B(7),'品质 满分',2],[B(8),'截止 已过',1],[SNAPS[1],'还在改…',1],[CLIMAX,'已提交 ✓',2]];
const PG=[[0,0],[2.67,10],[2.85,40],[4.45,90],[5.95,60],[6.4,95],[DROP,99],[MK[0],80],[MK[1],95],[MK[2],40],[WAVES[0],99],[B(7),100],[B(8),99],[SNAPS[1],99.9],[CLIMAX,100]];
function pgAt(t){let i=0;while(i<PG.length-1&&PG[i+1][0]<=t)i++;const a=PG[i],b=PG[Math.min(i+1,PG.length-1)];if(a===b)return a[1];return lerp(a[1],b[1],eOut(seg(t,b[0]-.3,b[0])));}
function bar(a,t,p){if(a<=.01)return;const x=110,y=GY-380,w=220,h=26;const col=(t>=B(7)&&t<B(8))||t>=CLIMAX?GOLD:PC;ctx.save();ctx.globalAlpha=a*.92;ctx.fillStyle='#0a0c14';ctx.fillRect(x,y,w,h);ctx.fillStyle=col;ctx.shadowColor=col;ctx.shadowBlur=12;ctx.fillRect(x+3,y+3,(w-6)*Math.min(100,p)/100,h-6);ctx.font='800 28px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.fillText((p>99.5&&p<99.95?'99.9':Math.floor(p))+'%',x+w/2,y+64);ctx.restore();glow([[x,y],[x+w,y],[x+w,y+h],[x,y+h],[x,y]],1,col,2,a,8,false);}
function propFront(S,G,po){const{t,endF}=S;const ba=endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2));stepBox(VS,220,GY-470,t,ba,[PC,'#ff7a8a',GOLD],44);bar(ba,t,pgAt(t));
  MK.forEach((k,i)=>{if(t>=k&&t<k+.8)shards(t,k,G.fh[0],G.fh[1]-30,endF,41+i,PC,12,520);});
  if(t>=4.45&&t<5.2)shards(t,4.45,G.fh[0],G.fh[1]-30,endF,17,PC,12,520);
  if(t>=CLIMAX&&t<CLIMAX+1.2)sparks(t,CLIMAX,G.hc[0],G.hc[1],26,9,600,.9,GOLD,true);}
"""),

dict(py='moyu', ep=31, series='打工人图鉴', slogan='每个工位，都有一个故事', name='摸鱼达人', en='SLACKING OFF', epn='第三十一期', pc='#6ad8ff',
  grad=['#ffffff','#d4f4ff','#4ac0ff'], glowC='rgba(106,216,255,.85)', kwCol='rgba(222,246,255,.92)', slamCol='#b0e8ff',
  kw='带薪摸鱼 · 秒切屏幕 · 劳逸结合 · 活越堆越多', words=['心虚','堆积','加班','焦虑'],
  sky=SKY("['#04101a','#0e3a58','#4ac0ff']","['#040c12','#0e2434','#1e4860']","['#08141c','#2a6a8a','#d4f4ff']"),
  M="{hd:.28,fax:70,fay:20,bax:40,bay:60}", Z="{hd:0,lean:-.05,fax:90,fay:-30,bax:-70,bay:30,exp:4}", phone=True, E1='0', E2='0', EMK='0', TEVIL='1', BEXP='1',
  tags=['带薪摸鱼','秒切屏幕','劳逸结合','活越堆越多'],
  caps=[('有一种人',[('上班',0),('像度假',1)]),('打开文档',[('其实在',0),('刷视频',1)]),('老板一来',[('秒',0),('切屏',1)]),('一天下来',[('啥也',0),('没干',1)]),('这就是',[('摸鱼达人',1)]),
        ('厕所',[('一蹲',0),('半小时',1)]),('接水',[('绕',0),('三层楼',1)]),
        ('老板',[('突然',0),('出现',1)]),('他',[('演技',0),('满分',1)]),
        ('好的一面',[('劳逸',0),('结合',1)]),('心态',[('永远',0),('不崩',1)]),
        ('坏的一面',[('活儿',0),('越堆越多',1)]),('下班前',[('疯狂',0),('补救',1)]),
        ('摸鱼一时爽',[('加班',0),('火葬场',1)]),('该摸就摸',[('该干',0),('就干',1)])],
  cl=['摸鱼有度','干活有劲'], endCap=('效率',[('才是',0),('真自由',1)]),
  tx=dict(i1='（伸个懒腰）',i2='方案进度怎样了？',i3='在做了在做了！',i4='一起去接水吗？',i5='走！顺便下楼转转',pv='浑水摸鱼',pvi=3,
     lab1=['带薪如厕','绕路接水','假装开会'],lab1c='#6ad8ff',mk=['蹲个半小时~','顺便遛个弯~','听不懂但点头'],
     w0=['b','老板来了！快切屏！'],w1=['t','你在看什么呢？'],lk='我在…查资料！',lkBig='切屏速度，0.1秒',
     j0='休息好，才能干好~',j1='你心态真好！',stBig='劳逸结合，永不内耗',
     lab4=['堆积','催促','加班'],s0='完了…还剩这么多',s1='今晚能交吗？',slBig='摸鱼一时爽，加班火葬场',
     d1='……早知道就不摸了',d2='冲！专注一小时！',e1='好快！',e2='提前完成！'),
  prop=STEPBOX+r"""
const FSX=[[2.67,'工作进度 0%',0],[2.85,'摸鱼时长 1h',0],[4.45,'工作进度 1%',1],[5.95,'摸鱼时长 2h',0],[6.4,'摸鱼时长 3h',1],[DROP,'摸鱼模式 ON',0],[MK[0],'如厕 30min',0],[MK[1],'接水 20min',0],[MK[2],'开会 发呆中',0],[B(6),'老板 靠近中',1],[B(7),'心情 满格',2],[B(8),'待办 ×37',1],[SNAPS[1],'距下班 10min',1],[CLIMAX,'效率 拉满',2]];
function fish(x,y,s,a,col,dir){if(a<=.01)return;const P=[];for(let i=0;i<=20;i++){const u=i/20*TAU;P.push([x+Math.cos(u)*30*s,y+Math.sin(u)*14*s]);}glow(P,1,col,2.6,a,12,false);glow([[x-28*s*dir,y],[x-50*s*dir,y-15*s],[x-50*s*dir,y+15*s],[x-28*s*dir,y]],1,col,2.6,a,12,false);dot(x+16*s*dir,y-3*s,3*s,'#fff',a);}
function propFront(S,G,po){const{t,endF}=S;stepBox(FSX,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const fa=endF*Math.min(1,win(t,2.67,4.3,.2,.2)+win(t,5.95,7.6,.2,.2)+win(t,DROP+.3,WAVES[0],.2,.05)+win(t,B(7)+.1,B(8)-.1,.2,.2)+win(t,CLIMAX+1.5,B(11)+.4,.3,.3));
  for(let i=0;i<3;i++){const an=t*1.6+i*TAU/3;const x=G.hc[0]+Math.cos(an)*175,y=G.hc[1]-20+Math.sin(an)*55;fish(x,y,1+.15*i,fa,i==1?GOLD:PC,-Math.sin(an)>=0?1:-1);}
  if(t>=WAVES[0]&&t<WAVES[0]+.8)shards(t,WAVES[0],G.hc[0],G.hc[1],endF,23,PC,16,700);
  const pn=t<B(8)?0:t<CLIMAX?Math.min(12,Math.floor((t-B(8))*4)+1):Math.max(0,12-Math.floor((t-CLIMAX)*12));
  for(let i=0;i<pn;i++){const y=GY-12-i*22,x=RX+175+Math.sin(i*1.7)*8;glow([[x-50,y],[x+50,y],[x+50,y-17],[x-50,y-17],[x-50,y]],1,'#a0a8b8',2.2,endF,8,false);}}
"""),

dict(py='huabing', ep=32, series='打工人图鉴', slogan='每个工位，都有一个故事', name='画饼型老板', en='PIE IN THE SKY', epn='第三十二期', pc='#ffb86a',
  grad=['#ffffff','#ffe8c8','#ffa040'], glowC='rgba(255,184,106,.85)', kwCol='rgba(255,242,226,.92)', slamCol='#ffd8a8',
  kw='张口画饼 · 越画越大 · 很会激励 · 从不兑现', words=['空话','失信','离职','冷场'],
  sky=SKY("['#180e04','#5a3410','#ffa040']","['#100a04','#30200c','#6a4820']","['#1a1006','#8a5a20','#ffe8c0']"),
  M="{lean:-.05,hd:-.05,fax:100,fay:-80,bax:-40,bay:60}", Z="{lean:.05,hd:.2,fax:40,fay:20,bax:-40,bay:30,exp:5}", E1='0', E2='0', EMK='0', TEVIL='1', BEXP='1', ECL='0',
  MKA="[{fax:110,fay:-120},{fax:120,fay:-60,bax:-120,bay:-60},{fax:60,fay:-170,bax:-60,bay:-170}]",
  tags=['张口画饼','越画越大','很会激励','从不兑现'],
  caps=[('有一种人',[('张口',0),('就画饼',1)]),('明年',[('给你',0),('升职',1)]),('后年',[('带你',0),('上市',1)]),('工资',[('一分',0),('没涨',1)]),('这就是',[('画饼型老板',1)]),
        ('年终奖',[('下次',0),('一定',1)]),('期权',[('人人',0),('都有',1)]),
        ('员工',[('听得',0),('热血沸腾',1)]),('转头',[('继续',0),('加班',1)]),
        ('好的一面',[('很会',0),('鼓舞士气',1)]),('让人',[('看到',0),('希望',1)]),
        ('坏的一面',[('饼',0),('从不兑现',1)]),('人心',[('慢慢',0),('散了',1)]),
        ('饼画得再大',[('不如',0),('一次兑现',1)]),('说到',[('就要',0),('做到',1)])],
  cl=['少画饼','多发饼'], endCap=('信任',[('靠',0),('兑现',1)]),
  tx=dict(i1='咳咳，大家听我说',i2='老板，涨薪的事…',i3='格局要打开！',i4='那年终奖呢？',i5='明年翻倍！',pv='画饼充饥',pvi=1,
     lab1=['升职','期权','上市'],lab1c='#ffb86a',mk=['明年就升你！','人人有期权！','三年上市！'],
     w0=['b','这饼…能吃吗？'],w1=['t','上次说的还没兑现'],lk='年轻人，别太看重钱',lkBig='饼越画越大，工资纹丝不动',
     j0='跟着我，有奔头！',j1='听完好有干劲！',stBig='三句话，燃起一个团队',
     lab4=['失信','离职','冷场'],s0='大家…怎么都走了',s1='我找好下家了',slBig='饼画太多，人心就散了',
     d1='……为什么没人信我了',d2='这次，说到做到！',e1='真发奖金了！',e2='老板大气！'),
  prop=STEPBOX+r"""
const BS=[[2.67,'饼 直径 10cm',0],[2.85,'工资 +0',1],[4.45,'饼 直径 1m',0],[5.95,'年终奖 待定',1],[6.4,'饼 直径 10m',0],[DROP,'画饼模式 ON',0],[MK[0],'升职 明年',0],[MK[1],'期权 人人有',0],[MK[2],'上市 三年后',0],[B(6),'兑现 0次',1],[B(7),'士气 +100',2],[B(8),'离职 +1',1],[SNAPS[1],'离职 +5',1],[CLIMAX,'奖金 已到账',2]];
const PR=[[0,0],[2.67,0],[2.9,25],[4.45,45],[5.95,60],[6.4,80],[DROP,95],[MK[0],100],[MK[1],106],[MK[2],112],[WAVES[0],118],[B(7),100],[B(8),110],[SNAPS[0],90],[SNAPS[1],60],[SLAM,0],[CLIMAX,0],[CLIMAX+.3,90]];
function prAt(t){let i=0;while(i<PR.length-1&&PR[i+1][0]<=t)i++;const a=PR[i],b=PR[Math.min(i+1,PR.length-1)];if(a===b)return a[1];return lerp(a[1],b[1],eOut(seg(t,b[0]-.3,b[0])));}
function pie(x,y,R,a,t,col,txt){if(a<=.01||R<4)return;ctx.save();ctx.globalAlpha=a*.6;ctx.fillStyle='#1a1008';ctx.beginPath();ctx.arc(x,y,R,0,TAU);ctx.fill();ctx.restore();glow(circ(x,y,R,R,48),1,col,3.2,a,16,false);glow(circ(x,y,R*.8,R*.8,40),1,col,1.8,a*.7,8,false);
  for(let i=0;i<6;i++){const an=i*TAU/6+t*.5;glow([[x+Math.cos(an)*R*.2,y+Math.sin(an)*R*.2],[x+Math.cos(an)*R*.8,y+Math.sin(an)*R*.8]],1,col,1.6,a*.6,6,false);}
  if(R>36){ctx.save();ctx.globalAlpha=a;ctx.font='900 '+Math.round(R*.5)+'px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=col;ctx.shadowBlur=16;ctx.fillText(txt,x,y+R*.18);ctx.restore();}}
function propFront(S,G,po){const{t,endF}=S;stepBox(BS,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const R=prAt(t);const x=G.hc[0]-250,y=G.hc[1]-110;const col=(t>=B(7)&&t<B(8))||t>=CLIMAX?GOLD:PC;const pa=endF*(1-seg(t,B(11)-.2,B(11)+.3));
  if(R>4){for(let i=0;i<3;i++){const f=(i+1)/4;dot(lerp(G.fh[0],x+R*.7,f),lerp(G.fh[1],y+R*.4,f),3+i*2,col,pa*.8);}pie(x,y,R,pa,t,col,t>=CLIMAX?'奖':'饼');}
  if(t>=SLAM-.1&&t<SLAM+1)shards(t,SLAM-.1,x,y,endF,61,PC,24,800);
  if(t>=CLIMAX+.3&&t<CLIMAX+1.6)sparks(t,CLIMAX+.3,x,y,22,5,500,.9,GOLD,true);}
"""),

dict(py='lizhi', ep=33, series='打工人图鉴', slogan='每个工位，都有一个故事', name='精神离职', en='QUIET QUITTING', epn='第三十三期', pc='#9ab0ff',
  grad=['#ffffff','#dce4ff','#8098ff'], glowC='rgba(154,176,255,.85)', kwCol='rgba(232,236,255,.92)', slamCol='#c0ccff',
  kw='人在工位 · 魂已下班 · 守住边界 · 越来越麻木', words=['麻木','空虚','迷茫','倦怠'],
  sky=SKY("['#060818','#1a2050','#8098ff']","['#06070e','#141828','#2c3450']","['#0a0c1a','#3a4a8a','#dce4ff']"),
  M="{lean:.04,hd:.25,fax:20,fay:100,bax:-20,bay:100}", Z="{lean:.1,hd:.35,fax:10,fay:110,bax:-10,bay:110,exp:5}", E1='5', E2='5', EMK='5', TEVIL='0', BEXP='2',
  MKA="[{hd:.4},{exp:0,hd:.1,fax:40,fay:-20},{fax:110,fay:-110,exp:0,hd:0}]",
  tags=['人在工位','魂已下班','守住边界','越来越麻木'],
  caps=[('有一种人',[('人在工位',0),('魂已下班',1)]),('开会',[('眼神',0),('放空',1)]),('多一件事',[('都不',0),('想干',1)]),('只做',[('分内',0),('之事',1)]),('这就是',[('精神离职',1)]),
        ('打卡',[('准时',0),('到',1)]),('热情',[('准时',0),('灭',1)]),
        ('领导画饼',[('他',0),('不吃',1)]),('同事内卷',[('他',0),('不卷',1)]),
        ('好的一面',[('守住',0),('边界',1)]),('不被',[('工作',0),('吞噬',1)]),
        ('坏的一面',[('越来越',0),('麻木',1)]),('忘了',[('当初',0),('的梦想',1)]),
        ('身体在上班',[('心',0),('在流浪',1)]),('找回',[('让你',0),('发光的事',1)])],
  cl=['找回热爱','重新发光'], endCap=('工作之外',[('也要',0),('有光',1)]),
  tx=dict(i1='（打卡成功）',i2='这项目你来负责吧',i3='收到。（心如止水）',i4='一起冲业绩吧！',i5='嗯嗯。（已下班）',pv='心不在焉',pvi=1,
     lab1=['开会','团建','加班'],lab1c='#9ab0ff',mk=['（灵魂出窍）','（假笑营业）','到点了，拜~'],
     w0=['b','你最近怎么没精神？'],w1=['t','年轻人要有激情！'],lk='我的魂，已经下班了',lkBig='人在工位，魂在远方',
     j0='工作归工作~',j1='你好清醒啊！',stBig='守住边界，不被吞噬',
     lab4=['麻木','空虚','迷茫'],s0='我…到底想要什么',s1='你还记得梦想吗？',slBig='心一离职，光就灭了',
     d1='……我以前，也是有光的',d2='找回热爱！',e1='你又发光了！',e2='欢迎回来！'),
  prop=STEPBOX+r"""
const LS=[[2.67,'电量 100%',0],[2.85,'电量 60%',1],[4.45,'电量 30%',1],[5.95,'电量 10%',1],[6.4,'电量 1%',1],[DROP,'灵魂 已下线',1],[MK[0],'灵魂 出窍',1],[MK[1],'假笑 营业',1],[MK[2],'18:00 准时',2],[B(6),'热情 0%',1],[B(7),'边界 守住',2],[B(8),'麻木 70%',1],[SNAPS[1],'麻木 99%',1],[CLIMAX,'热爱 回归',2]];
const GL=[[0,0],[2.85,0],[4.45,.4],[5.95,.6],[6.4,.85],[DROP,1],[B(6),1],[B(7),.3],[B(8),.7],[SLAM,1],[CLIMAX-.3,1],[CLIMAX,0]];
function glAt(t){let i=0;while(i<GL.length-1&&GL[i+1][0]<=t)i++;const a=GL[i],b=GL[Math.min(i+1,GL.length-1)];if(a===b)return a[1];return lerp(a[1],b[1],eOut(seg(t,b[0]-.3,b[0])));}
function ghost(x,y,s,a,t,col){if(a<=.01)return;const P=[];for(let i=0;i<=20;i++){const u=Math.PI+i/20*Math.PI;P.push([x+Math.cos(u)*30*s,y+Math.sin(u)*30*s]);}P.push([x+30*s,y+36*s]);for(let i=0;i<=12;i++){const u=i/12;P.push([x+30*s-u*60*s,y+40*s+Math.sin(u*TAU*2+t*6)*7*s]);}P.push(P[0]);
  ctx.save();ctx.globalAlpha=a*.3;ctx.fillStyle=col;ctx.beginPath();P.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.fill();ctx.restore();glow(P,1,col,2.6,a,14,false);dot(x-10*s,y-4*s,3.5*s,'#fff',a);dot(x+10*s,y-4*s,3.5*s,'#fff',a);}
function propFront(S,G,po){const{t,endF}=S;stepBox(LS,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const L=glAt(t);if(L>.02){const x=G.hc[0]-150*L+Math.sin(t*2)*10,y=G.hc[1]-20-150*L+Math.sin(t*3)*8;glow(Q([G.hc[0],G.hc[1]-50],[lerp(G.hc[0],x,.5)+30,lerp(G.hc[1],y,.5)],[x,y+50],10),1,'#cfd8ff',1.6,endF*L*.5,8,false);ghost(x,y,1.3,endF*Math.min(1,L*2),t,'#cfd8ff');}
  if(t>=CLIMAX-.1&&t<CLIMAX+1.2)sparks(t,CLIMAX-.1,G.hc[0],G.hc[1],28,3,650,.9,GOLD,true);}
"""),
]

SW=dict(series='打工人图鉴', slogan='每个工位，都有一个故事')
SPECS += [
dict(py='zhouyi', ep=34, **SW, name='周一综合征', en='MONDAY BLUES', epn='第三十四期', pc='#5ae0c8',
  grad=['#ffffff','#d0fff4','#40d0b8'], glowC='rgba(90,224,200,.85)', kwCol='rgba(222,255,248,.92)', slamCol='#a8f0e0',
  kw='起床困难 · 周一宕机 · 自带缓冲 · 越拖越累', words=['疲惫','抗拒','拖延','崩溃'],
  sky=SKY("['#04121a','#0e3a48','#40c8b8']","['#040c10','#0e2428','#1e4850']","['#06141a','#2a6a70','#d0fff4']"),
  M="{lean:.08,hd:.3,fax:30,fay:110,bax:-30,bay:110}", Z="{lean:.1,hd:.4,fax:20,fay:-60,bax:-20,bay:-60,exp:5}", E1='5', E2='5', EMK='5', TEVIL='0', BEXP='1',
  MKA="[{fax:100,fay:-40,exp:4},{hd:.45},{hd:.5,lean:.12}]",
  tags=['起床困难','周一宕机','自带缓冲','越拖越累'],
  caps=[('有一种病',[('每周',0),('发作一次',1)]),('周日晚上',[('开始',0),('心慌',1)]),('闹钟响了',[('五',0),('遍',1)]),('人到了工位',[('魂',0),('还在床上',1)]),('这就是',[('周一综合征',1)]),
        ('咖啡',[('续了',0),('三杯',1)]),('打开电脑',[('发呆',0),('一小时',1)]),
        ('周会',[('一开',0),('就是半天',1)]),('他',[('原地',0),('宕机',1)]),
        ('好的一面',[('给自己',0),('缓冲时间',1)]),('慢热',[('但',0),('后劲足',1)]),
        ('坏的一面',[('周一的丧',0),('拖垮一整周',1)]),('越拖',[('越',0),('累',1)]),
        ('不是周一太难',[('是周末',0),('没休息好',1)]),('给周一',[('一点',0),('小期待',1)])],
  cl=['周一快乐','元气开工'], endCap=('好好休息',[('才能',0),('好好上班',1)]),
  tx=dict(i1='（闹钟第五遍）',i2='早会九点开始哦~',i3='再睡五分钟…',i4='周一早呀！',i5='早…（魂未到账）',pv='度日如年',pvi=1,
     lab1=['咖啡×3','发呆','周会'],lab1c='#5ae0c8',mk=['续命中…','电脑开了，我没开','（眼皮打架）'],
     w0=['b','你看起来好困啊'],w1=['t','周一要有精神！'],lk='系统…加载中…',lkBig='身体上线，大脑未开机',
     j0='先缓缓，慢慢进状态~',j1='你下午效率好高！',stBig='慢热开机，后劲十足',
     lab4=['拖延','烦躁','周二也丧'],s0='怎么…才周一',s1='这周的活还没动？',slBig='周一一丧，一周全垮',
     d1='……为什么每周都这样',d2='给周一一点期待！',e1='早上好呀！',e2='状态不错！'),
  prop=STEPBOX+r"""
const ZS=[[2.67,'周日 23:59',0],[2.85,'周一 07:00',1],[4.45,'闹钟 ×5',1],[5.95,'迟到 倒计时',1],[6.4,'电量 5%',1],[DROP,'周一模式 ON',1],[MK[0],'咖啡 ×3',0],[MK[1],'发呆 1h',1],[MK[2],'周会 2h',1],[B(6),'大脑 未开机',1],[B(7),'状态 回升',2],[B(8),'周二 也丧',1],[SNAPS[1],'待办 ×28',1],[CLIMAX,'元气 满格',2]];
function calCard(x,y,a,t){if(a<=.01)return;const sun=t<2.85,gold=t>=CLIMAX||(t>=B(7)&&t<B(8));const col=gold?GOLD:sun?'#ffcf6a':PC;const fl=t>=2.85&&t<3.15?Math.abs(Math.cos(seg(t,2.85,3.15)*Math.PI)):1;
  ctx.save();ctx.translate(x,y);ctx.scale(1,fl);ctx.translate(-x,-y);ctx.globalAlpha=a*.92;ctx.fillStyle='#0a0c14';ctx.fillRect(x-80,y-90,160,180);ctx.restore();
  const R=[[x-80,y-90*fl],[x+80,y-90*fl],[x+80,y+90*fl],[x-80,y+90*fl],[x-80,y-90*fl]];glow(R,1,col,2.6,a,12,false);glow([[x-80,y-45*fl],[x+80,y-45*fl]],1,col,2,a,8,false);
  [-40,40].forEach(d=>glow(circ(x+d,y-92*fl,8,10,12),1,col,2,a,6,false));
  ctx.save();ctx.globalAlpha=a;ctx.translate(x,y);ctx.scale(1,fl);ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font='800 28px '+SER;ctx.fillText(sun?'星期日':'星期一',0,-56);ctx.font='900 92px '+SER;ctx.shadowColor=col;ctx.shadowBlur=18;ctx.fillText(sun?'日':'一',0,60);ctx.restore();}
function cloud(x,y,a,t){if(a<=.01)return;const P=[];[[-60,0,40],[-15,-22,48],[40,-8,42],[75,10,30]].forEach(c=>{glow(circ(x+c[0],y+c[1],c[2],c[2]*.8,24),1,'#8a98b0',2.4,a,10,false);});
  for(let i=0;i<7;i++){const p=(t*1.8+i*.37)%1;const xx=x-80+i*26;glow([[xx,y+30+p*90],[xx-4,y+48+p*90]],1,'#8ad8ff',2,a*(1-p),6,false);}}
function propFront(S,G,po){const{t,endF}=S;stepBox(ZS,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  calCard(G.hc[0]-260,G.hc[1]-120,endF*seg(t,2.5,2.75)*(1-seg(t,B(11)-.2,B(11)+.2)),t);
  const ca=endF*Math.min(1,win(t,2.9,DROP,.2,.1)+win(t,MK[0],B(7)-.1,.2,.2)+win(t,B(8),CLIMAX-.1,.3,.1));cloud(G.hc[0]+10,G.hc[1]-150,ca,t);
  if(t>=CLIMAX&&t<CLIMAX+1.2)sparks(t,CLIMAX,G.hc[0],G.hc[1]-150,26,7,600,.9,GOLD,true);
  if(t>=CLIMAX+.2){const a=endF*seg(t,CLIMAX+.2,CLIMAX+.6)*(1-seg(t,B(11)-.2,B(11)+.3));const x=G.hc[0]+10,y=G.hc[1]-170;glow(circ(x,y,36,36,24),1,GOLD,3,a,18,false);for(let i=0;i<10;i++){const an=i*TAU/10+t*.6;glow([[x+Math.cos(an)*50,y+Math.sin(an)*50],[x+Math.cos(an)*72,y+Math.sin(an)*72]],1,GOLD,2.4,a,10,false);}}}
"""),

dict(py='cizhi', ep=35, **SW, name='天天喊辞职', en='ALWAYS QUITTING', epn='第三十五期', pc='#ff6a8a',
  grad=['#ffffff','#ffd4de','#ff5a7a'], glowC='rgba(255,106,138,.85)', kwCol='rgba(255,228,234,.92)', slamCol='#ffb0c0',
  kw='嘴上辞职 · 身体诚实 · 情绪出口 · 原地踏步', words=['抱怨','纠结','不甘','原地'],
  sky=SKY("['#1a0408','#5a1020','#ff5a7a']","['#10060a','#301018','#6a2030']","['#1a0a0e','#8a3a4a','#ffe0e6']"),
  M="{lean:-.05,hd:-.05,fax:100,fay:-60,bax:-40,bay:60}", Z="{lean:.05,hd:.3,fax:20,fay:60,bax:-20,bay:60,exp:5}", E1='1', E2='5', EMK='1', TEVIL='1', BEXP='1',
  MKA="[{fax:110,fay:-120},{fax:60,fay:-170,bax:-60,bay:-170},{exp:5,fax:40,fay:60,hd:.3}]",
  tags=['嘴上辞职','身体诚实','情绪出口','原地踏步'],
  caps=[('有一种人',[('辞职',0),('挂嘴边',1)]),('早上说',[('老子',0),('不干了',1)]),('中午说',[('明天',0),('就走',1)]),('晚上',[('照常',0),('加班',1)]),('这就是',[('天天喊辞职',1)]),
        ('辞职信',[('写了',0),('八封',1)]),('一封',[('都没',0),('交',1)]),
        ('同事',[('都听',0),('腻了',1)]),('老板',[('根本',0),('不信',1)]),
        ('好的一面',[('情绪',0),('有出口',1)]),('骂完',[('继续',0),('干活',1)]),
        ('坏的一面',[('喊了三年',0),('原地踏步',1)]),('别人',[('早就',0),('跳槽了',1)]),
        ('真正想走的人',[('早就',0),('在准备了',1)]),('与其喊',[('不如',0),('做',1)])],
  cl=['少喊一句','多做一步'], endCap=('想走就准备',[('想留就',0),('好好干',1)]),
  tx=dict(i1='（深吸一口气）',i2='这个需求今天改完',i3='老子不干了！',i4='又来了…',i5='…改完再说吧',pv='口是心非',pvi=0,
     lab1=['辞职信1','辞职信5','辞职信8'],lab1c='#ff6a8a',mk=['明天就交！','这次是真的！','…下次一定'],
     w0=['b','你上周也这么说'],w1=['t','辞职信呢？交啊'],lk='我…再考虑考虑',lkBig='辞职喊百遍，工位坐三年',
     j0='骂完就舒服了~',j1='发泄完继续冲！',stBig='嘴上辞职，身体敬业',
     lab4=['原地踏步','错过机会','越来越烦'],s0='我是不是…走不掉了',s1='我下周去新公司了',slBig='喊得越响，走得越难',
     d1='……我到底想要什么',d2='开始准备！',e1='有计划了！',e2='加油！'),
  prop=STEPBOX+r"""
const QS=[[2.67,'喊辞职 ×0',0],[2.85,'需求 +1',1],[4.45,'喊辞职 ×1',1],[5.95,'喊辞职 ×99',1],[6.4,'仍在职 ✓',0],[DROP,'辞职嘴炮 ON',1],[MK[0],'辞职信 ×1',0],[MK[1],'辞职信 ×5',0],[MK[2],'辞职信 ×8',1],[B(6),'已提交 0',1],[B(7),'情绪 已释放',2],[B(8),'在职 3年',1],[SNAPS[1],'同事 已跳槽',1],[CLIMAX,'计划 已启动',2]];
function letter(x,y,s,a,col,txt,rot){if(a<=.01)return;ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);ctx.globalAlpha=a*.92;ctx.fillStyle='#140810';ctx.fillRect(-75,-48,150,96);ctx.restore();
  const T=(px,py)=>{const c=Math.cos(rot),sn=Math.sin(rot);return[x+(px*c-py*sn)*s,y+(px*sn+py*c)*s];};
  glow([T(-75,-48),T(75,-48),T(75,48),T(-75,48),T(-75,-48)],1,col,2.6,a,12,false);glow([T(-75,-48),T(0,6),T(75,-48)],1,col,2,a,8,false);
  ctx.save();ctx.globalAlpha=a;ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);ctx.font='900 30px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=col;ctx.shadowBlur=14;ctx.fillText(txt,0,36);ctx.restore();}
function propFront(S,G,po){const{t,endF}=S;stepBox(QS,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const n=t<MK[0]?0:t<MK[1]?1:t<MK[2]?5:8;const pa=endF*(1-seg(t,SLAM-.1,SLAM+.1))*(t<CLIMAX?1:0);
  for(let i=0;i<n;i++){letter(RX-250+Math.sin(i*2.1)*14,GY-30-i*24,.75,pa*eBack(seg(t,MK[Math.min(2,i?(i<5?1:2):0)],MK[Math.min(2,i?(i<5?1:2):0)]+.2)),'#ff9ab0','辞职信',Math.sin(i*1.7)*.12);}
  const ha=endF*Math.min(1,win(t,4.45,5.85,.08,.15)+win(t,MK[0],B(6)-.1,.08,.15)+win(t,WAVES[1],B(7),.1,.2));
  const gold=t>=CLIMAX;if(!gold)letter(G.fh[0]+30,G.fh[1]-50,1,ha,PC,'辞职信',-.15+Math.sin(t*9)*.05*(t>=4.45&&t<5.85?1:0));
  if(t>=SLAM-.1&&t<SLAM+1)shards(t,SLAM-.1,RX-250,GY-120,endF,51,PC,24,800);
  if(gold){const a=endF*seg(t,CLIMAX,CLIMAX+.25)*(1-seg(t,B(11)-.2,B(11)+.3));letter(G.fh[0]+30,G.fh[1]-60,1.15,a,GOLD,'计划书',-.1);if(t<CLIMAX+1.2)sparks(t,CLIMAX,G.fh[0]+30,G.fh[1]-60,24,9,550,.9,GOLD,true);}}
"""),

dict(py='zhundian', ep=36, **SW, name='准点下班', en='CLOCK OUT ON TIME', epn='第三十六期', pc='#7aff9a',
  grad=['#ffffff','#d8ffe0','#5ae880'], glowC='rgba(122,255,154,.85)', kwCol='rgba(228,255,234,.92)', slamCol='#b0f0c0',
  kw='到点就走 · 绝不加班 · 生活平衡 · 被说不上进', words=['眼色','内疚','孤立','压力'],
  sky=SKY("['#04140a','#0e4020','#5ae880']","['#040c06','#0e2414','#1e4828']","['#06140a','#2a6a3a','#d8ffe0']"),
  M="{lean:-.04,hd:-.05,fax:70,fay:20,bax:40,bay:60}", Z="{lean:.05,hd:.2,fax:40,fay:20,bax:-40,bay:30,exp:5}", E1='0', E2='0', EMK='0', TEVIL='1', BEXP='4',
  MKA="[{fax:110,fay:-60},{fax:90,fay:20},{fax:60,fay:-170,bax:-60,bay:-170}]",
  tags=['到点就走','绝不加班','生活平衡','被说不上进'],
  caps=[('有一种人',[('六点',0),('准时消失',1)]),('五点五十',[('电脑',0),('关机',1)]),('五十九分',[('包已',0),('背好',1)]),('六点整',[('人',0),('没了',1)]),('这就是',[('准点下班',1)]),
        ('无效会议',[('不',0),('参加',1)]),('下班消息',[('明天',0),('再回',1)]),
        ('老板',[('眼神',0),('凝视',1)]),('他',[('照走',0),('不误',1)]),
        ('好的一面',[('生活',0),('有滋有味',1)]),('白天',[('效率',0),('拉满',1)]),
        ('坏的一面',[('被说',0),('不上进',1)]),('加薪',[('总轮',0),('不到他',1)]),
        ('准点下班',[('不是',0),('错',1)]),('高效',[('才是',0),('底气',1)])],
  cl=['高效工作','准点生活'], endCap=('下班',[('是你的',0),('权利',1)]),
  tx=dict(i1='（盯着时钟）',i2='晚上一起加个班？',i3='不了，我约了生活',i4='你真走啊？',i5='拜拜~明天见！',pv='归心似箭',pvi=3,
     lab1=['拒绝内卷','关机','打卡'],lab1c='#7aff9a',mk=['会议？发纪要吧','明天回你~','18:00 打卡！'],
     w0=['b','领导还没走呢…'],w1=['t','年轻人，要多奋斗'],lk='活干完了，人就该走',lkBig='18:00，准时消失',
     j0='下班健身，周末旅行~',j1='你活得好精彩！',stBig='白天高效，晚上自由',
     lab4=['不上进','不加薪','被孤立'],s0='我做错什么了吗…',s1='他天天最后一个走',slBig='准时下班，成了原罪',
     d1='……准点下班，有错吗',d2='用效率说话！',e1='你好高效！',e2='准时完成！'),
  prop=STEPBOX+r"""
const CS=[[2.67,'17:50',0],[2.85,'17:55 关电脑',0],[4.45,'17:59 背包',1],[5.95,'17:59:50',1],[6.4,'18:00 下班！',2],[DROP,'准点模式 ON',0],[MK[0],'会议 已拒绝',0],[MK[1],'消息 明天回',0],[MK[2],'18:00 打卡 ✓',2],[B(6),'老板 凝视中',1],[B(7),'健身 旅行',2],[B(8),'加薪名单 ✗',1],[SNAPS[1],'评价 不上进',1],[CLIMAX,'效率 第一',2]];
const HR=[[0,17.5],[2.85,17.83],[4.45,17.97],[5.95,17.99],[6.4,18],[DROP,18],[MK[0],17.9],[MK[2],18],[B(8),18],[SNAPS[0],19],[SNAPS[1],20],[SLAM,21],[CLIMAX,18]];
function hrAt(t){let i=0;while(i<HR.length-1&&HR[i+1][0]<=t)i++;const a=HR[i],b=HR[Math.min(i+1,HR.length-1)];if(a===b)return a[1];return lerp(a[1],b[1],eOut(seg(t,b[0]-.3,b[0])));}
function clock(x,y,R,a,h,col){if(a<=.01)return;ctx.save();ctx.globalAlpha=a*.9;ctx.fillStyle='#08100a';ctx.beginPath();ctx.arc(x,y,R,0,TAU);ctx.fill();ctx.restore();glow(circ(x,y,R,R,48),1,col,3,a,16,false);
  for(let i=0;i<12;i++){const an=i*TAU/12;glow([[x+Math.cos(an)*R*.82,y+Math.sin(an)*R*.82],[x+Math.cos(an)*R*.94,y+Math.sin(an)*R*.94]],1,col,i%3?1.6:3,a,6,false);}
  const ha=(h%12)/12*TAU-Math.PI/2,ma=(h%1)*TAU-Math.PI/2;glow([[x,y],[x+Math.cos(ha)*R*.5,y+Math.sin(ha)*R*.5]],1,'#fff',4,a,10,false);glow([[x,y],[x+Math.cos(ma)*R*.78,y+Math.sin(ma)*R*.78]],1,col,3,a,10,false);dot(x,y,5,'#fff',a);}
function propFront(S,G,po){const{t,endF}=S;stepBox(CS,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const gold=t>=CLIMAX||(t>=B(7)&&t<B(8)),red=t>=B(8)&&t<CLIMAX;const ka=endF*seg(t,2.5,2.75)*(1-seg(t,B(11)-.2,B(11)+.2));clock(G.hc[0]-250,G.hc[1]-140,78,ka,hrAt(t),gold?GOLD:red?'#ff7a8a':PC);
  [6.4,MK[2]].forEach(k=>{if(t>=k&&t<k+.9)sparks(t,k,G.hc[0]-250,G.hc[1]-140,22,13,520,.8,PC,true);});
  const ra=endF*Math.min(1,win(t,6.4,7.6,.1,.2)+win(t,MK[2],B(6)-.1,.1,.2)+win(t,WAVES[1]+.2,B(7),.1,.2));if(ra>.01)for(let i=0;i<6;i++){const y=G.hc[1]+40+i*62,p=(t*2.6+i*.31)%1;const x0=G.hc[0]-110-p*90;glow([[x0,y],[x0-130,y]],1,PC,3,ra*(1-p),10,false);}
  if(t>=CLIMAX&&t<CLIMAX+1.2)sparks(t,CLIMAX,G.hc[0]-250,G.hc[1]-140,26,3,620,.9,GOLD,true);}
"""),

dict(py='shuaiguo', ep=37, **SW, name='甩锅侠', en='BLAME SHIFTER', epn='第三十七期', pc='#ff8a5a',
  grad=['#ffffff','#ffe0d0','#ff7040'], glowC='rgba(255,138,90,.85)', kwCol='rgba(255,236,226,.92)', slamCol='#ffc0a0',
  kw='甩锅一流 · 推卸责任 · 自保高手 · 没人敢合作', words=['推诿','失信','孤立','背锅'],
  sky=SKY("['#1a0a04','#5a2410','#ff7040']","['#100806','#301810','#6a3220']","['#1a0e08','#8a4a2a','#ffe4d4']"),
  M="{lean:-.06,hd:0,fax:110,fay:-30,bax:-60,bay:40}", Z="{lean:-.08,hd:-.1,fax:60,fay:-150,bax:-60,bay:-150,exp:4}", E1='4', E2='4', EMK='1', TEVIL='1', BEXP='1',
  MKA="[{fax:120,fay:-40},{fax:110,fay:-120},{fax:120,fay:-10,bax:-100,bay:-30}]",
  tags=['甩锅一流','推卸责任','自保高手','没人敢合作'],
  caps=[('有一种人',[('出了事',0),('先甩锅',1)]),('方案出错',[('是',0),('设计的锅',1)]),('进度延误',[('是',0),('测试的锅',1)]),('功劳',[('全是',0),('他的',1)]),('这就是',[('甩锅侠',1)]),
        ('一口锅',[('甩给',0),('同事',1)]),('两口锅',[('甩给',0),('系统',1)]),
        ('老板',[('追问',0),('责任',1)]),('他',[('一脸',0),('无辜',1)]),
        ('好的一面',[('自保',0),('能力满分',1)]),('从来',[('不',0),('背锅',1)]),
        ('坏的一面',[('没人',0),('敢跟他合作',1)]),('锅',[('最后',0),('砸回自己',1)]),
        ('能甩的是锅',[('甩不掉的是',0),('人品',1)]),('敢担责',[('才',0),('值得信任',1)])],
  cl=['我的锅','我来背'], endCap=('担当',[('才是',0),('真本事',1)]),
  tx=dict(i1='（嗯？出bug了？）',i2='这锅谁的？',i3='不关我事啊！',i4='不是你负责的吗？',i5='是…是系统的问题！',pv='推三阻四',pvi=0,
     lab1=['同事','系统','实习生'],lab1c='#ff8a5a',mk=['是他没说清！','系统崩了！','实习生弄的！'],
     w0=['b','明明是你写的…'],w1=['t','到底谁负责？'],lk='我…我只是路过',lkBig='锅在天上飞，他在旁边看',
     j0='反正不是我~',j1='你可真会说…',stBig='甩锅一流，片锅不沾',
     lab4=['没人合作','被孤立','失去信任'],s0='怎么…都不理我了',s1='跟他合作？算了',slBig='甩出去的锅，终会砸回来',
     d1='……原来锅一直在我这',d2='这锅，我来背！',e1='有担当！',e2='靠谱！'),
  prop=STEPBOX+r"""
const GS=[[2.67,'Bug ×1',0],[2.85,'责任人 ？',1],[4.45,'锅 已甩出',0],[5.95,'锅 → 同事',1],[6.4,'锅 → 系统',1],[DROP,'甩锅模式 ON',1],[MK[0],'甩锅 ×1',0],[MK[1],'甩锅 ×2',0],[MK[2],'甩锅 ×3',1],[B(6),'责任 0%',1],[B(7),'功劳 100%',2],[B(8),'信任 -50',1],[SNAPS[1],'合作 0人',1],[CLIMAX,'担当 +100',2]];
const PT=[[0,500,200,0],[2.6,500,200,0],[2.85,500,210,1],[4.3,500,210,1],[4.45,790,230,1],[5.8,790,230,1],[5.95,860,GY-380,1],[6.3,860,GY-380,1],[6.4,960,220,.9],[7.6,960,220,.9],[DROP,500,210,1],[MK[0]-.15,500,210,1],[MK[0],640,170,.9],[MK[1],690,200,.9],[MK[2],640,230,.9],[B(6)-.15,640,230,.9],[WAVES[0],860,GY-380,1],[LOCK,760,190,1],[B(7),960,170,.7],[B(8),960,170,.7],[SNAPS[0],860,230,1.2],[SNAPS[1],700,240,1.5],[SLAM,500,GY-720,1.8],[CLIMAX-.05,500,GY-720,1.8],[CLIMAX+.3,250,280,1.5]];
function ptAt(t){let i=0;while(i<PT.length-1&&PT[i+1][0]<=t)i++;const a=PT[i],b=PT[Math.min(i+1,PT.length-1)];if(a===b)return[a[1],a[2],a[3],0];const p=eOut(seg(t,b[0]-.3,b[0]));const mv=(t>b[0]-.3&&t<b[0])?1:0;return[lerp(a[1],b[1],p),lerp(a[2],b[2],p),lerp(a[3],b[3],p),mv];}
function pot(x,y,s,a,col,rot,txt){if(a<=.01||s<.05)return;s*=1.4;ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);ctx.globalAlpha=a*.9;ctx.fillStyle='#120a06';ctx.beginPath();ctx.ellipse(0,0,70,40,0,0,Math.PI);ctx.fill();ctx.restore();
  const T=(px,py)=>{const c=Math.cos(rot),sn=Math.sin(rot);return[x+(px*c-py*sn)*s,y+(px*sn+py*c)*s];};const B_=[];for(let i=0;i<=20;i++){const u=i/20*Math.PI;B_.push(T(Math.cos(u)*70,Math.sin(u)*40));}
  glow(B_,1,col,3,a,14,false);glow([T(-80,0),T(80,0)],1,col,3,a,12,false);glow([T(80,0),T(150,-6)],1,col,4,a,10,false);
  ctx.save();ctx.globalAlpha=a;ctx.translate(x,y);ctx.rotate(rot);ctx.scale(s,s);ctx.font='900 40px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=col;ctx.shadowBlur=14;ctx.fillText(txt,0,32);ctx.restore();}
function propFront(S,G,po){const{t,endF}=S;stepBox(GS,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const [x,y,s,mv]=ptAt(t);const gold=t>=CLIMAX;const col=gold?GOLD:(t>=B(7)&&t<B(8))?'#a0a8b8':PC;const pa=endF*(1-seg(t,B(11)-.2,B(11)+.3));
  if(mv){for(let i=1;i<5;i++){const q=ptAt(t-i*.03);dot(q[0],q[1],6-i,col,pa*.5);}}
  pot(x,y,s,pa,col,mv?t*14:(t>=SLAM&&t<CLIMAX?Math.PI*.05:Math.sin(t*3)*.08),gold?'担':'锅');
  if(t>=SLAM&&t<SLAM+1)shards(t,SLAM,500,GY-700,endF,71,PC,22,700);
  if(t>=CLIMAX+.3&&t<CLIMAX+1.5)sparks(t,CLIMAX+.3,250,280,24,5,520,.9,GOLD,true);}
"""),

dict(py='heihua', ep=38, **SW, name='职场黑话', en='CORPORATE JARGON', epn='第三十八期', pc='#d08aff',
  grad=['#ffffff','#f0dcff','#b86aff'], glowC='rgba(208,138,255,.85)', kwCol='rgba(244,232,255,.92)', slamCol='#e0c0ff',
  kw='张口黑话 · 听不懂人话 · 显得专业 · 沟通全靠猜', words=['迷茫','空洞','误解','尴尬'],
  sky=SKY("['#10041a','#3a1460','#b86aff']","['#0a0610','#201030','#402060']","['#120a1a','#5a3a8a','#f0dcff']"),
  M="{lean:-.04,hd:-.08,fax:110,fay:-60,bax:-40,bay:40}", Z="{lean:.04,hd:.15,fax:90,fay:-80,bax:40,bay:60,exp:4}", E1='0', E2='0', EMK='0', TEVIL='0', BEXP='4',
  MKA="[{fax:120,fay:-100},{fax:90,fay:-20,bax:-90,bay:-20},{fax:110,fay:-150,bax:-110,bay:-150}]",
  tags=['张口黑话','听不懂人话','显得专业','沟通全靠猜'],
  caps=[('有一种人',[('开口',0),('全是黑话',1)]),('赋能',[('抓手',0),('闭环',1)]),('颗粒度',[('要',0),('对齐',1)]),('同事听完',[('一脸',0),('懵',1)]),('这就是',[('职场黑话',1)]),
        ('一句话',[('塞了',0),('五个词',1)]),('每个词',[('都',0),('听不懂',1)]),
        ('同事',[('疯狂',0),('点头',1)]),('其实',[('一个字',0),('没懂',1)]),
        ('好的一面',[('听起来',0),('很专业',1)]),('汇报',[('气场',0),('拉满',1)]),
        ('坏的一面',[('说了半天',0),('等于没说',1)]),('活儿',[('全',0),('干错了',1)]),
        ('话说得再高级',[('不如',0),('说清楚',1)]),('少点黑话',[('多说',0),('人话',1)])],
  cl=['少说黑话','多说人话'], endCap=('沟通',[('说人话',0),('最高级',1)]),
  tx=dict(i1='咳，我来对齐一下',i2='项目进展如何？',i3='我们要打造闭环！',i4='…所以要干嘛？',i5='找准抓手，赋能业务！',pv='不知所云',pvi=3,
     lab1=['赋能','抓手','闭环'],lab1c='#d08aff',mk=['底层逻辑要打通！','颗粒度再细一点','打出组合拳！'],
     w0=['b','能…说人话吗？'],w1=['t','具体做什么？'],lk='就是…拉通对齐一下',lkBig='字都认识，连起来不懂',
     j0='这叫方法论~',j1='听起来好厉害！',stBig='黑话一出，专业拉满',
     lab4=['误解','返工','尴尬'],s0='为什么…全做错了',s1='我以为你说的是…',slBig='说了半天，等于没说',
     d1='……原来大家都没听懂',d2='说人话！',e1='这次懂了！',e2='清楚明白！'),
  prop=STEPBOX+r"""
const HS=[[2.67,'黑话浓度 10%',0],[2.85,'黑话浓度 30%',0],[4.45,'黑话浓度 60%',1],[5.95,'听懂率 20%',1],[6.4,'黑话浓度 90%',1],[DROP,'黑话模式 ON',1],[MK[0],'赋能 ×1',0],[MK[1],'对齐 ×3',0],[MK[2],'闭环 ×5',1],[B(6),'听懂率 0%',1],[B(7),'气场 满分',2],[B(8),'返工 ×3',1],[SNAPS[1],'返工 ×9',1],[CLIMAX,'听懂率 100%',2]];
const JW=['赋能','抓手','闭环','对齐','颗粒度','打通','链路','沉淀'];
function jw(x,y,a,txt,col,sz){if(a<=.01)return;ctx.save();ctx.globalAlpha=a;ctx.font='900 '+sz+'px '+SER;ctx.textAlign='center';ctx.lineWidth=5;ctx.lineJoin='round';ctx.strokeStyle='rgba(6,4,14,.85)';ctx.strokeText(txt,x,y);ctx.fillStyle='#fff';ctx.shadowColor=col;ctx.shadowBlur=16;ctx.fillText(txt,x,y);ctx.restore();}
function propFront(S,G,po){const{t,endF}=S;stepBox(HS,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const n=t<2.85?0:t<4.45?2:t<6.4?4:6;const oa=endF*seg(t,2.85,3.1)*(1-seg(t,CLIMAX-.05,CLIMAX+.05))*(t>=B(7)&&t<B(8)?.55:1);
  const col=(t>=B(7)&&t<B(8))?GOLD:(t>=B(8))?'#a0a8b8':PC;
  for(let i=0;i<n;i++){const an=t*1.1+i*TAU/n;const z=Math.sin(an);const x=G.hc[0]-40+Math.cos(an)*290,y=G.hc[1]-60+z*80;jw(x,y,oa*(z<-.2?.45:1),JW[i],col,38+z*6);}
  if(t>=CLIMAX-.05&&t<CLIMAX+1)shards(t,CLIMAX-.05,G.hc[0],G.hc[1]-60,endF,81,PC,26,800);
  if(t>=CLIMAX+.25){const a=endF*seg(t,CLIMAX+.25,CLIMAX+.5)*(1-seg(t,B(11)-.2,B(11)+.3));jw(G.hc[0]-260,G.hc[1]-150,a,'说人话 ✓',GOLD,50);if(t<CLIMAX+1.4)sparks(t,CLIMAX+.25,G.hc[0]-260,G.hc[1]-160,22,4,500,.9,GOLD,true);}}
"""),
]

# ===== 打工人图鉴 第39-43期 =====
SPECS += [
dict(py='jiamang', ep=39, **SW, name='假装很忙', en='FAKE BUSY', epn='第三十九期', pc='#5ad0ff',
  grad=['#ffffff','#d4f2ff','#40b8ff'], glowC='rgba(90,208,255,.85)', kwCol='rgba(226,246,255,.92)', slamCol='#a8e0ff',
  kw='演技满分 · 产出为零 · 没人派活 · 活全堆着', words=['心虚','疲惫','拖延','露馅'],
  sky=SKY("['#04101a','#0e3458','#40b8ff']","['#040a10','#0e2034','#1e4060']","['#06101a','#2a5a7a','#d4f2ff']"),
  M="{lean:-.04,hd:.05,fax:90,fay:20,bax:60,bay:30}", Z="{lean:.05,hd:.2,fax:70,fay:-130,bax:-30,bay:60,exp:4}", E1='1', E2='0', EMK='1', TEVIL='1', BEXP='4',
  MKA="[{fax:60,fay:-150,hd:.1},{fax:40,fay:60,bax:-40,bay:60,hd:-.1},{fax:50,fay:-160,bax:60,bay:30}]",
  tags=['演技满分','产出为零','没人派活','活全堆着'],
  caps=[('有一种人',[('永远',0),('很忙',1)]),('老板一来',[('键盘',0),('狂敲',1)]),('抱着文件',[('满场',0),('跑',1)]),('一天下来',[('啥也',0),('没干',1)]),('这就是',[('假装很忙',1)]),
        ('一会皱眉',[('一会',0),('叹气',1)]),('电话',[('假装',0),('在打',1)]),
        ('同事',[('想找他',0),('帮忙',1)]),('他',[('没空',0),('没空',1)]),
        ('好的一面',[('存在感',0),('拉满',1)]),('从来',[('不被',0),('派活',1)]),
        ('坏的一面',[('真活',0),('全堆着',1)]),('晚上',[('偷偷',0),('补作业',1)]),
        ('演忙',[('比干活',0),('还累',1)]),('真正去做',[('反而',0),('轻松',1)])],
  cl=['少演一点','多干一点'], endCap=('忙不忙',[('看产出',0),('不看表演',1)]),
  tx=dict(i1='（听见脚步声）',i2='最近在忙什么？',i3='忙！忙死了！',i4='能帮我个忙吗？',i5='等我忙完这阵…',pv='装模作样',pvi=1,
     lab1=['皱眉','叹气','打电话'],lab1c='#5ad0ff',mk=['嗯…这个数据…','唉，好多事啊','喂？对对对…'],
     w0=['b','帮我看个表格？'],w1=['t','这周做了啥？'],lk='我…在整理思路',lkBig='看着很忙，其实很空',
     j0='忙碌人设，稳了~',j1='你好辛苦啊！',stBig='忙碌人设，无人打扰',
     lab4=['进度为0','加班','被拆穿'],s0='怎么…还剩这么多',s1='你这周交了什么？',slBig='演了一天，活还在那',
     d1='……装忙好累啊',d2='真的开干！',e1='效率好高！',e2='早点下班！'),
  prop=STEPBOX+r"""
function DODGE(t,k=180){return -k*eOut(seg(t,B(8)-.3,B(8)))*(1-eOut(seg(t,SLAM+.2,SLAM+.6)));}
const BZ=[[2.67,'摸鱼中…',0],[2.85,'老板 靠近！',1],[4.45,'切屏 0.1s',1],[5.95,'键盘 狂敲',0],[6.4,'忙碌值 99%',1],[DROP,'假忙模式 ON',1],[MK[0],'皱眉 ×1',0],[MK[1],'叹气 ×3',0],[MK[2],'假电话 ×5',1],[B(6),'实际产出 0',1],[B(7),'存在感 满格',2],[B(8),'真活 堆积',1],[SNAPS[1],'加班 补作业',1],[CLIMAX,'真效率 ON',2]];
function monitor(x,y,a,col,txt,sub){if(a<=.01)return;ctx.save();ctx.globalAlpha=a*.92;ctx.fillStyle='#060a12';ctx.fillRect(x-105,y-72,210,134);ctx.restore();
  glow([[x-105,y-72],[x+105,y-72],[x+105,y+62],[x-105,y+62],[x-105,y-72]],1,col,3,a,14,false);glow([[x,y+62],[x,y+96]],1,col,3,a,8,false);glow([[x-55,y+96],[x+55,y+96]],1,col,3,a,8,false);
  ctx.save();ctx.globalAlpha=a;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=col;ctx.shadowBlur=14;ctx.font='900 36px '+SER;ctx.fillText(txt,x,y-4);ctx.font='700 22px '+SER;ctx.fillText(sub,x,y+36);ctx.restore();}
function propFront(S,G,po){const{t,endF}=S;stepBox(BZ,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const gold=t>=CLIMAX||(t>=B(7)&&t<B(8)),red=t>=B(8)&&t<CLIMAX;const col=gold?GOLD:red?'#ff7a8a':PC;
  const txt=t<4.45?'购物车':t>=CLIMAX?'已完成 ✓':red?'进度 0%':'Excel 表格';const sub=t<4.45?'（摸鱼中）':t>=CLIMAX?'真干活，真高效':red?'截止：今天':'假装加载中…';
  const ma=endF*seg(t,2.5,2.75)*(1-seg(t,B(11)-.2,B(11)+.2));const fl=t>=4.45&&t<4.6?.3:1;monitor(G.hc[0]-260+DODGE(t),G.hc[1]-150,ma*fl,col,txt,sub);
  const ty=endF*Math.min(1,win(t,5.95,7.6,.05,.2)+win(t,MK[0],B(6)-.1,.1,.2)+win(t,B(8),SLAM-.1,.1,.1));
  if(ty>.01){const r=rng(Math.floor(t*14));for(let i=0;i<5;i++){const x=G.fh[0]-20+r()*80,y=G.fh[1]-20-r()*70;ctx.save();ctx.globalAlpha=ty*r();ctx.font='900 30px '+SER;ctx.fillStyle='#fff';ctx.shadowColor=col;ctx.shadowBlur=12;ctx.textAlign='center';ctx.fillText(['哒','啪','嗒'][i%3],x,y);ctx.restore();}}
  const sw=endF*Math.min(1,win(t,2.85,4.4,.1,.1)+win(t,SNAPS[0],CLIMAX-.2,.1,.2));if(sw>.01)[0,1].forEach(i=>{const p=(t*1.4+i*.5)%1;dot(G.hc[0]+50+i*14,G.hc[1]-30+p*50,5,'#8ad8ff',sw*(1-p));});
  if(t>=CLIMAX&&t<CLIMAX+1.2)sparks(t,CLIMAX,G.hc[0]-260,G.hc[1]-150,26,3,620,.9,GOLD,true);}
"""),

dict(py='zhuangsi', ep=40, **SW, name='群里装死', en='GROUP CHAT GHOST', epn='第四十期', pc='#6affc4',
  grad=['#ffffff','#d4ffec','#40e8a8'], glowC='rgba(106,255,196,.85)', kwCol='rgba(226,255,242,.92)', slamCol='#a8f0d4',
  kw='群里潜水 · 红包秒抢 · 麻烦绕道 · 最后被点名', words=['心虚','逃避','被点名','背锅'],
  sky=SKY("['#04140e','#0e4430','#40e8a8']","['#040c08','#0e2418','#1e4a34']","['#06140e','#2a6a50','#d4ffec']"),
  M="{lean:-.02,hd:.28,fax:70,fay:20,bax:40,bay:60}", Z="{lean:.05,hd:.35,fax:70,fay:20,bax:40,bay:60,exp:5}", phone=True, E1='5', E2='5', EMK='5', TEVIL='1', BEXP='4',
  MKA="[{exp:5},{exp:5,hd:.4},{exp:4,fax:110,fay:-140,hd:0}]",
  tags=['群里潜水','红包秒抢','麻烦绕道','最后被点名'],
  caps=[('有一种人',[('群里',0),('装死',1)]),('领导一问',[('全员',0),('潜水',1)]),('谁来接活',[('没人',0),('吱声',1)]),('一发红包',[('秒',0),('抢',1)]),('这就是',[('群里装死',1)]),
        ('@所有人',[('假装',0),('没看见',1)]),('消息99+',[('就是',0),('不点开',1)]),
        ('领导',[('再次',0),('艾特',1)]),('群里',[('一片',0),('寂静',1)]),
        ('好的一面',[('麻烦活',0),('不沾身',1)]),('精力',[('留给',0),('自己',1)]),
        ('坏的一面',[('最后',0),('被点名',1)]),('活儿',[('全砸',0),('你手里',1)]),
        ('装死',[('躲得过',0),('初一',1)]),('一句收到',[('没那么',0),('难',1)])],
  cl=['回句收到','也是担当'], endCap=('该回就回',[('该拒',0),('就拒',1)]),
  tx=dict(i1='（叮叮叮叮…）',i2='@所有人 谁有空？',i3='（假装没看见）',i4='你看群了吗？',i5='手机…没电了',pv='鸦雀无声',pvi=0,
     lab1=['@所有人','99+','红包'],lab1c='#6affc4',mk=['（潜水中）','（就不点开）','红包？抢到了！'],
     w0=['b','群里在叫你…'],w1=['t','怎么都不说话？'],lk='我…信号不好',lkBig='群里五十人，没一个在线',
     j0='躲过一劫~',j1='你好会躲哦！',stBig='装死一时，清净一时',
     lab4=['被点名','背锅','失信'],s0='怎么…又是我',s1='既然你在，那就你来',slBig='装死到最后，活还是你的',
     d1='……躲不掉的啊',d2='收到，我来！',e1='靠谱！',e2='谢谢你！'),
  prop=STEPBOX+r"""
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
"""),

dict(py='yangsheng', ep=41, **SW, name='工位养生', en='DESK WELLNESS', epn='第四十一期', pc='#b0ff5a',
  grad=['#ffffff','#ecffd4','#90e840'], glowC='rgba(176,255,90,.85)', kwCol='rgba(242,255,226,.92)', slamCol='#d0f0a8',
  kw='保温杯泡枸杞 · 熬夜照旧 · 健康意识 · 养了个寂寞', words=['熬夜','黑眼圈','颈椎','焦虑'],
  sky=SKY("['#0c1404','#2a4410','#90e840']","['#080c04','#1a2410','#344a1e']","['#0c1406','#4a6a2a','#ecffd4']"),
  M="{lean:-.03,hd:0,fax:80,fay:-30,bax:-30,bay:60}", Z="{lean:.04,hd:.15,fax:90,fay:-40,bax:40,bay:50,exp:0}", E1='0', E2='4', EMK='0', TEVIL='0', BEXP='0',
  MKA="[{fax:100,fay:-110},{fax:60,fay:-160,bax:-60,bay:-160},{fax:90,fay:-120,hd:-.15}]",
  tags=['保温杯泡枸杞','熬夜照旧','健康意识','养了个寂寞'],
  caps=[('有一种人',[('工位',0),('养生',1)]),('保温杯里',[('泡',0),('枸杞',1)]),('熬最晚的夜',[('敷最贵的',0),('面膜',1)]),('一边吃药',[('一边',0),('喝奶茶',1)]),('这就是',[('工位养生',1)]),
        ('枸杞菊花',[('轮番',0),('上阵',1)]),('护颈枕',[('人手',0),('一个',1)]),
        ('同事',[('递来',0),('奶茶',1)]),('他',[('一口',0),('闷了',1)]),
        ('好的一面',[('有',0),('健康意识',1)]),('至少',[('在',0),('努力',1)]),
        ('坏的一面',[('熬夜',0),('照旧',1)]),('枸杞',[('救不了',0),('命',1)]),
        ('养生',[('不靠',0),('枸杞',1)]),('早点睡',[('才是',0),('真的',1)])],
  cl=['今晚早睡','明天元气'], endCap=('最好的养生',[('是',0),('睡够觉',1)]),
  tx=dict(i1='（拧开保温杯）',i2='昨晚又熬夜了？',i3='没事，我泡了枸杞',i4='奶茶喝吗？',i5='…要三分糖！',pv='朋克养生',pvi=0,
     lab1=['枸杞','眼保健操','护肝片'],lab1c='#b0ff5a',mk=['再多泡点枸杞','保护视力！','吃片护肝的'],
     w0=['b','奶茶到啦~'],w1=['t','少喝点冰的！'],lk='喝完…再养生',lkBig='一手枸杞，一手奶茶',
     j0='身体是本钱~',j1='你好会照顾自己！',stBig='养生意识，拉满',
     lab4=['熬夜','黑眼圈','颈椎痛'],s0='怎么…还是好累',s1='你黑眼圈好重啊',slBig='枸杞救不了熬的夜',
     d1='……养了个寂寞',d2='今晚早睡！',e1='气色真好！',e2='精神满满！'),
  prop=STEPBOX+r"""
function DODGE(t,k=180){return -k*eOut(seg(t,B(8)-.3,B(8)))*(1-eOut(seg(t,SLAM+.2,SLAM+.6)));}
const YS=[[2.67,'昨晚 2:00睡',1],[2.85,'枸杞 ×10',0],[4.45,'菊花茶 ✓',0],[5.95,'奶茶 +1',1],[6.4,'三分糖 ✓',0],[DROP,'朋克养生 ON',1],[MK[0],'枸杞 +20',0],[MK[1],'眼保健操',0],[MK[2],'护肝片 ✓',0],[B(6),'奶茶 +2',1],[B(7),'心态 平和',2],[B(8),'今晚 3:00睡',1],[SNAPS[1],'颈椎 报警',1],[CLIMAX,'23:00 早睡',2]];
function cup(x,y,s,a,col,t){if(a<=.01)return;ctx.save();ctx.globalAlpha=a*.9;ctx.fillStyle='#0a1006';ctx.beginPath();ctx.roundRect(x-42*s,y-90*s,84*s,180*s,16*s);ctx.fill();ctx.restore();
  const R=(x0,y0,w,h)=>[[x0,y0],[x0+w,y0],[x0+w,y0+h],[x0,y0+h],[x0,y0]];glow(R(x-42*s,y-90*s,84*s,180*s),1,col,3,a,14,false);glow(R(x-46*s,y-118*s,92*s,28*s),1,col,3,a,10,false);
  glow([[x-42*s,y-50*s],[x+42*s,y-50*s]],1,col,1.6,a*.6,6,false);
  for(let i=0;i<7;i++){const r=rng(i+3);const px=x+(r()-.5)*56*s+Math.sin(t*1.5+i)*6*s,py=y-30*s+r()*100*s+Math.sin(t*2+i*1.7)*8*s;dot(px,py,5*s,'#ff5a4a',a);}
  for(let i=0;i<3;i++){const p=(t*.7+i/3)%1;const sx=x+(i-1)*24*s;const P=[];for(let k=0;k<=10;k++){const u=k/10;P.push([sx+Math.sin(u*6+t*3+i)*10*s,y-125*s-u*70*s-p*30*s]);}glow(P,1,'#ffffff',2,a*.5*Math.sin(p*Math.PI),8,false);}}
function tea(x,y,a,col){if(a<=.01)return;ctx.save();ctx.globalAlpha=a*.9;ctx.fillStyle='#140c06';ctx.beginPath();ctx.moveTo(x-34,y-50);ctx.lineTo(x+34,y-50);ctx.lineTo(x+26,y+50);ctx.lineTo(x-26,y+50);ctx.fill();ctx.restore();
  glow([[x-34,y-50],[x+34,y-50],[x+26,y+50],[x-26,y+50],[x-34,y-50]],1,col,3,a,12,false);glow([[x+6,y-50],[x+18,y-100]],1,col,4,a,8,false);for(let i=0;i<5;i++)dot(x-16+i*8,y+38-(i%2)*8,5,'#c08a5a',a);}
function propFront(S,G,po){const{t,endF}=S;stepBox(YS,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const gold=t>=CLIMAX||(t>=B(7)&&t<B(8)),red=t>=B(8)&&t<CLIMAX;const col=gold?GOLD:red?'#ff7a8a':PC;
  const ta=endF*Math.min(1,win(t,5.95,7.6,.1,.2)+win(t,WAVES[0],B(7)-.1,.1,.2));const cupInHand=ta<.5&&t<DROP;
  const ca=endF*seg(t,2.5,2.75)*(1-seg(t,B(11)-.2,B(11)+.2));
  if(cupInHand&&t>=2.5)cup(G.fh[0]+10,G.fh[1]-40,.8,ca,col,t);else cup(G.hc[0]-250+DODGE(t),G.hc[1]-100,1,ca,col,t);
  if(!cupInHand)tea(G.fh[0]+10,G.fh[1]-30,ta,'#ffb07a');
  const ey=endF*Math.min(1,win(t,2.67,4.4,.1,.1)+win(t,B(8),CLIMAX-.2,.2,.2));if(ey>.01){[-16,16].forEach(d=>glow(Q([G.hc[0]+d+14,G.hc[1]+14],[G.hc[0]+d+20,G.hc[1]+22],[G.hc[0]+d+26,G.hc[1]+14],6),1,'#7a6aa0',3,ey,6,false));}
  if(t>=SNAPS[1]&&t<SLAM+.5){const a=endF*seg(t,SNAPS[1],SNAPS[1]+.1);glow([[G.nk[0]-24,G.nk[1]-6],[G.nk[0]-10,G.nk[1]+6],[G.nk[0]-24,G.nk[1]+16],[G.nk[0]-10,G.nk[1]+28]],1,'#ff5a5a',4,a,14,false);}
  if(t>=CLIMAX&&t<CLIMAX+1.2)sparks(t,CLIMAX,G.hc[0]-250,G.hc[1]-100,26,3,620,.9,GOLD,true);}
"""),

dict(py='zhoubao', ep=42, **SW, name='周报文学', en='WEEKLY REPORT FICTION', epn='第四十二期', pc='#ff8ac8',
  grad=['#ffffff','#ffdcef','#ff6ab4'], glowC='rgba(255,138,200,.85)', kwCol='rgba(255,232,244,.92)', slamCol='#ffc0e0',
  kw='一行活三页纸 · 形容词堆满 · 会包装 · 越吹越圆不回', words=['心虚','空洞','压力','露馅'],
  sky=SKY("['#1a0412','#5a1040','#ff6ab4']","['#10060c','#301024','#6a2048']","['#1a0a12','#8a3a6a','#ffdcef']"),
  M="{lean:-.04,hd:.1,fax:90,fay:10,bax:50,bay:30}", Z="{lean:.04,hd:.2,fax:80,fay:-40,bax:30,bay:50,exp:4}", E1='0', E2='0', EMK='0', TEVIL='0', BEXP='4',
  MKA="[{fax:110,fay:-100},{fax:100,fay:-150,bax:-90,bay:-60},{fax:110,fay:-160,bax:-110,bay:-160}]",
  tags=['一行活三页纸','形容词堆满','会包装','圆不回来'],
  caps=[('有一种人',[('周报',0),('写成小说',1)]),('改了一个bug',[('写成',0),('攻坚战',1)]),('开了一个会',[('写成',0),('里程碑',1)]),('一行的活',[('三页的',0),('报告',1)]),('这就是',[('周报文学',1)]),
        ('形容词',[('层层',0),('叠加',1)]),('数据',[('全靠',0),('修饰',1)]),
        ('同事',[('看完',0),('沉默',1)]),('领导',[('连连',0),('点头',1)]),
        ('好的一面',[('会包装',0),('会表达',1)]),('功劳',[('被',0),('看见',1)]),
        ('坏的一面',[('期望',0),('越吹越高',1)]),('下周',[('圆不',0),('回来',1)]),
        ('写得再漂亮',[('也要',0),('有干货',1)]),('做得好',[('更要',0),('说得实',1)])],
  cl=['写实一点','做实一点'], endCap=('周报',[('写的是',0),('真本事',1)]),
  tx=dict(i1='（打开周报模板）',i2='周报交了吗？',i3='本周…改了个bug',i4='就这？',i5='看我润色一下！',pv='妙笔生花',pvi=3,
     lab1=['赋能','提效200%','里程碑'],lab1c='#ff8ac8',mk=['全面赋能业务！','效率提升200%！','达成关键里程碑！'],
     w0=['b','这…是你写的？'],w1=['t','不错！下周翻倍'],lk='呃…好的老板',lkBig='一行的活，三页的周报',
     j0='包装也是能力~',j1='你文笔好好！',stBig='会做也会说，功劳看得见',
     lab4=['KPI翻倍','圆不回来','露馅'],s0='下周…写啥啊',s1='上周说的成果呢？',slBig='吹出去的牛，要自己扛',
     d1='……写的比做的多',d2='实话实说！',e1='清楚明白！',e2='真实靠谱！'),
  prop=STEPBOX+r"""
function DODGE(t,k=180){return -k*eOut(seg(t,B(8)-.3,B(8)))*(1-eOut(seg(t,SLAM+.2,SLAM+.6)));}
const ZB=[[2.67,'本周：改1个bug',0],[2.85,'周五 17:00',1],[4.45,'字数 +500',0],[5.95,'形容词 ×20',1],[6.4,'周报 3页',0],[DROP,'周报文学 ON',1],[MK[0],'赋能 ×3',0],[MK[1],'提效 200%',0],[MK[2],'里程碑 ×5',1],[B(6),'实际工作 1行',1],[B(7),'老板 点赞',2],[B(8),'KPI ×2',1],[SNAPS[1],'圆不回来',1],[CLIMAX,'实事求是',2]];
const DT=[[0,'改了个bug',1],[4.45,'优化系统稳定性',2],[6.4,'攻坚核心链路',4],[MK[0],'全面赋能业务',5],[MK[2],'达成关键里程碑',7],[B(8),'下周目标 ×2',7],[CLIMAX,'修复1个bug ✓',2]];
function docAt(t){let r=DT[0];for(const d of DT)if(t>=d[0])r=d;return r;}
function doc(x,y,a,col,t){if(a<=.01)return;const d=docAt(t);const pages=Math.min(3,1+Math.floor(d[2]/3));
  for(let k=pages-1;k>=0;k--){const ox=k*16,oy=-k*16;ctx.save();ctx.globalAlpha=a*.93;ctx.fillStyle='#120810';ctx.fillRect(x-110+ox,y-140+oy,220,280);ctx.restore();glow([[x-110+ox,y-140+oy],[x+110+ox,y-140+oy],[x+110+ox,y+140+oy],[x-110+ox,y+140+oy],[x-110+ox,y-140+oy]],1,col,2.6,a*(k?.5:1),10,false);}
  ctx.save();ctx.globalAlpha=a;ctx.textAlign='center';ctx.fillStyle='rgba(255,255,255,.7)';ctx.font='700 22px '+SER;ctx.fillText('本周工作总结',x,y-105);const p=eBack(seg(t,d[0],d[0]+.2));ctx.translate(x,y-58);ctx.scale(p,p);ctx.font='900 '+(d[1].length>6?28:34)+'px '+SER;ctx.fillStyle='#fff';ctx.shadowColor=col;ctx.shadowBlur=14;ctx.fillText(d[1],0,0);ctx.restore();
  for(let i=0;i<Math.min(7,d[2]);i++){const w=150-((i*37)%60);glow([[x-90,y-20+i*22],[x-90+w,y-20+i*22]],seg(t,d[0]+i*.03,d[0]+i*.03+.2),col,2,a*.7,6,false);}}
function propFront(S,G,po){const{t,endF}=S;stepBox(ZB,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const gold=t>=CLIMAX||(t>=B(7)&&t<B(8)),red=t>=B(8)&&t<CLIMAX;const col=gold?GOLD:red?'#ff7a8a':PC;
  const da=endF*seg(t,2.5,2.75)*(1-seg(t,B(11)-.2,B(11)+.2));const dx=G.hc[0]-280+DODGE(t),dy=G.hc[1]-150;doc(dx,dy,da,col,t);
  [4.45,6.4,MK[0],MK[2]].forEach((k,i)=>{if(t>=k&&t<k+.9)sparks(t,k,dx,dy-58,18,11+i,480,.8,PC,true);});
  if(t>=SLAM&&t<SLAM+1)shards(t,SLAM,dx,dy,endF,61,PC,24,800);
  if(t>=CLIMAX&&t<CLIMAX+1.2)sparks(t,CLIMAX,dx,dy-58,26,3,620,.9,GOLD,true);}
"""),

dict(py='huiyi', ep=43, **SW, name='会议狂魔', en='MEETING MANIAC', epn='第四十三期', pc='#8a9cff',
  grad=['#ffffff','#dde2ff','#7084ff'], glowC='rgba(138,156,255,.85)', kwCol='rgba(232,236,255,.92)', slamCol='#c0c8ff',
  kw='天天开会 · 会上加会 · 信息同步 · 没空干活', words=['冗长','疲惫','拖延','加班'],
  sky=SKY("['#060a1a','#18245a','#7084ff']","['#06060e','#141830','#2a3060']","['#0a0c1a','#3a4a8a','#dde2ff']"),
  M="{lean:-.05,hd:-.05,fax:110,fay:-60,bax:-40,bay:50}", Z="{lean:-.02,hd:0,fax:120,fay:-100,bax:-60,bay:40,exp:0}", E1='0', E2='0', EMK='0', TEVIL='1', BEXP='2',
  MKA="[{fax:120,fay:-120},{fax:100,fay:-40,bax:-100,bay:-40},{fax:110,fay:-150,bax:-110,bay:-150}]",
  tags=['天天开会','会上加会','信息同步','没空干活'],
  caps=[('有一种人',[('天天',0),('开会',1)]),('早上晨会',[('下午',0),('对齐',1)]),('一小时的会',[('开成',0),('三小时',1)]),('开完会',[('再开会',0),('讨论会',1)]),('这就是',[('会议狂魔',1)]),
        ('晨会对齐会',[('复盘',0),('会',1)]),('日历',[('全',0),('排满',1)]),
        ('同事',[('在会上',0),('睡着',1)]),('正事',[('一件',0),('没干',1)]),
        ('好的一面',[('信息',0),('同步及时',1)]),('大家',[('都在',0),('一条线',1)]),
        ('坏的一面',[('会多到',0),('没空干活',1)]),('下班后',[('才开始',0),('工作',1)]),
        ('能发消息的',[('别',0),('开会',1)]),('能开十分钟',[('别开',0),('一小时',1)])],
  cl=['会要少开','事要多干'], endCap=('开会',[('是为了',0),('解决问题',1)]),
  tx=dict(i1='（打开日历）',i2='今天又有会？',i3='来！拉个会！',i4='我还有活没干…',i5='先开会，再干活！',pv='会海无边',pvi=0,
     lab1=['晨会','对齐会','复盘会'],lab1c='#8a9cff',mk=['同步一下进度','我们再对齐一下','复盘！复盘！'],
     w0=['b','zzz…（会上睡着）'],w1=['t','所以结论是？'],lk='下次…再开会讨论',lkBig='开会三小时，结论没有',
     j0='信息同步很重要~',j1='大家都清楚了！',stBig='信息同步，步调一致',
     lab4=['没空干活','加班','崩溃'],s0='怎么…活都没干',s1='开完会，才开始上班',slBig='会开得越多，活干得越少',
     d1='……原来会才是问题',d2='十五分钟搞定！',e1='高效！',e2='准时下班！'),
  prop=STEPBOX+r"""
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
"""),
]

import sys,json,re,os,subprocess
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from specs import SPECS
CV={
'jiamang':(['键盘狂敲','演技满分','产出为零','活全堆着'],'看着很忙','假装很忙的人？'),
'zhuangsi':(['@所有人','消息99+','红包秒抢','最后被点名'],'鸦雀无声','群里装死的人？'),
'yangsheng':(['保温杯','泡枸杞','熬夜照旧','奶茶续命'],'朋克养生','工位养生的人？'),
'zhoubao':(['改个bug','写成史诗','形容词堆满','圆不回来'],'妙笔生花','把周报写成小说的人？'),
'huiyi':(['晨会','对齐会','复盘会','会上加会'],'会海无边','会议狂魔？'),
}
e=sys.argv[1];s=[x for x in SPECS if x['py']==e][0];labs,title,hk=CV[e]
cols=[s['pc'],'#ffffff','#ffd27a','#ff8a9a']
pc=s['pc'];r,g,b=int(pc[1:3],16),int(pc[3:5],16),int(pc[5:7],16)
C=dict(letters=[[c,cols[i],labs[i]] for i,c in enumerate(s['name'])],title=title,grad=s['grad'],glow=s['glowC'],pill='打工人图鉴 · '+s['epn'],pillCol=f'rgba({r},{g},{b},.95)',line1='你身边',hook=['有没有',hk],hi=pc)
d=os.path.dirname(os.path.abspath(__file__))+'/ep_'+e
h=open(d+'/cover.html').read().split('\n');h[2]='const C='+json.dumps(C,ensure_ascii=False)+';';open(d+'/cover.html','w').write('\n'.join(h).replace('letters(ctx,540,680,190,40);title(ctx,540,1010,250)','letters(ctx,540,680,170,36);title(ctx,540,1010,220)'))
bg=open(d+'/bgs.py').read().replace('draw(13.1)','draw(%s)'%sys.argv[2] if len(sys.argv)>2 else 'draw(12.2)');open(d+'/bgs.py','w').write(bg)
subprocess.run('python3 bgs.py && python3 coverrender.py '+e,shell=True,cwd=d,check=True)

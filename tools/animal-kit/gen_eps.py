import json,os,sys
HERE=os.path.dirname(os.path.abspath(__file__))
TPL=open(HERE+'/gen_skel.js.tpl').read()
J=lambda o:json.dumps(o,ensure_ascii=False)
def caps(rows):
    out=[]
    for a,b in rows:
        if isinstance(b,str):b=[[b,1]]
        out.append([[[a,0]],[[x,i] for x,i in b]])
    return out
def ep_js(s):
    EP=dict(series='当代人图鉴',slogan='每种状态，都是一种活法',name=s['name'],en=s['en'],epn=s['epn'],acc=s['pc'],grad=s['grad'],glowC=s['glowC'],kwCol=s['kwCol'],kw=s['kw'],slamCol=s['slamCol'],words=s['words'],
        cams=None,sky=None,caps=caps(s['caps']),tags=None,cl=s['cl'],endCap=caps([s['endCap']])[0])
    ej=J(EP)
    ej=ej.replace('"cams": null','cams:CAMS').replace('"sky": null','sky:'+s['sky']).replace('"tags": null',"tags:[['01',%s,PC],['02',%s,RED],['03',%s,GOLD],['04',%s,'#a0a8b8']]"%tuple(J(x) for x in s['tags']))
    cams="const CAMS=[[0,520,560,1.25],[2.3,560,580,1.08],[2.67,700,560,.92],[5.33,700,560,.95],[7.4,660,550,1.0],[DROP,700,570,.92],[B(5),700,570,.94],[B(6),700,580,.95],[LOCK,660,590,1.0],[B(7),690,570,.95],[STAMP,690,560,.97],[B(8),700,580,.94],[SLAM,680,600,.96],[B(9),560,660,1.08],[CLIMAX-.5,540,700,1.16],[CLIMAX,700,560,.9],[B(11),700,580,.93]];\n"
    r=TPL
    for k,v in dict(NAME=s['name'],PC=s['pc'],M=s['M'],Z=s['Z'],E1=s.get('E1','0'),E2=s.get('E2','0'),EMK=s.get('EMK','0'),MKA=s.get('MKA','[]'),ECL=s.get('ECL','0'),TEVIL=s.get('TEVIL','0'),BEXP=s.get('BEXP','0'),
                     TX=J(s['tx']),EP=ej,PHONE='true' if s.get('phone') else 'false',PROP=s.get('prop',''),CAMS=cams).items():
        r=r.replace('%'+k+'%',v)
    return r
if __name__=='__main__':
    sys.path.insert(0,HERE)
    from specs import SPECS
    for s in SPECS:
        if len(sys.argv)>1 and s['py'] not in sys.argv[1:]:continue
        d=HERE+'/ep_'+s['py']
        if not os.path.exists(d):os.system(f'cp -r {HERE}/template {d}')
        open(d+'/ep.js','w').write(ep_js(s))
        print('wrote',d)

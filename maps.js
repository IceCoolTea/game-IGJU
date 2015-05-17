/*################################# Ubaby Maps! ############################################*/

var greekMap="alpha,beta,gamma,delta,epsilon,zeta,eta,theta,iota,kappa,lambda,mu,nu,xi,omicron,pi,rho,sigma,tau,upsilon,phi,chi,psi,omega";

var binaryMap="0,1";

var hexaMap="0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F";

var miniMap="1,2,3,4,5";

var miniIntMap="-5,-4,-3,-2,-1,-0,1,2,3,4,5";

var lowIntMap="-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,-0,1,2,3,4,5,6,7,8,9,10";

var lowMap="1,2,3,4,5,6,7,8,9";

var mMap="1,2,3,4,5,6,7,8,9,10,20,30,40,50";

var medMap="10,20,30,40,50,60,70,80,90,100";

var medIntMap="-200,-100,-90,-80,-70,-60,-50,-40,-30,-20,-10,0,10,20,30,40,50,60,70,80,90,100,200"

var bigMap="100,200,300,400,500,600,700";

var colMap="0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F";

var varyMedMap=mMap+","+medMap;

var varyMap=medMap+","+bigMap;



/*################################# Font! ############################################*/



var fontBigMap="Helvetica,Garamond,Frutiger,Bodoni,Futura,Times New Roman,Akzidenz Grotesk,Officina,Gill Sans,Univers,Optima,Franklin Gothic,Bembo,Interstate,Thesis,Rockwell,Walbaum,Meta,Trinité,Din,Matrix,OCR,Avant Garde,Lucida,Sabon,Zapfino,Letter Gothic,Stone,Arnhem,Minion,Myriad,Rotis,Eurostile,Scala,Syntax,Joanna,Fleishmann,Palatino,Baskerville,Fedra,Gotham,Lexicon,Hands,Metro,Didot,Formata,Caslon,Cooper Black,Peignot,Bell Gothic,Antique Olive,Wilhelm Klingspor,Info,Dax,Proforma,Today Sans,Prokyon,Trade Gothic,Swift,Copperplate Gothic,Blur,Base,Bell Centennial,News Gothic,Avenir,Bernhard Modern,Amplitude,Trixie,Quadraat,Neutraface,Nobel,Industria,Bickham Script,Bank Gothic,Corporate ASE,Fago,Trajan,Kabel,House Gothic 23,Kosmik,Caecilia,Mrs Eaves,Corpid,Miller,Souvenir,Instant Types,Clarendon,Triplex,Benguiat,Zapf Renaissance,Filosifia,Chalet,Quary Sans,Cezanne,Reporter,Legacy,Agenda,Bello,Dalliance,Mistral"

var fontLowMap="Bookman Old Style,Garamond,Georgia,Palatino Linotype,Book Antiqua,Palatino,Times New Roman,Times,Arial,Helvetica,Arial Black,Gadget,Charcoal,Impact,MS Sans Serif,MS Serif,New York,Trebuchet MS,Lucida Sans Unicode,Lucida Grande,Tahoma,Geneva,Courier,Courier New,Lucida Console";



/*################################# Ancient God Maps! ############################################*/

var greekGodMap="Aphrodite,Apollo,Ares,Artemis,Athena,Demeter,Dionysus,Hades,Hephaestus,Hera,Hermes,Hestia,Poseidon,Zeus";



/*##########################################################################################*/

var egyptGodMap="Ammit,Anput,Anubis,Anuket,Apophis,Aten,Babi,Bast,Bastet,Bes,Geb,Gengen-Wer,Hapi,Hathor,Heket,Horus,Isis,Kebechet,Khepri,Khnum,Khonsu,Ma'at,Mafdet,Menhit,Nephthys,Nekhbet,Nut,Osiris,Ptah,Ra,Sekhmet,Serqet,Seshat,Seth,Shu,Sobek,Tawaret,Tefnut,Thoth,Wadjet";



/*##########################################################################################*/



var romanGodMap="Janus,Jupiter,Saturn,Genius,Mercury,Apollo,Mars,Vulcan,Neptune,Sol,Orcus,Liber,Tellus,Ceres,Juno,Luna,Diana,Minerva,Venus,Vesta,Feronia,Minerva,Novensides,Pales,Salus,Fortuna,Fons,Fides,Ops,Flora,Vediovis,Saturn,Sol,Luna,Vulcan,Summanus,Larunda,Terminus,Quirinus,Vortumnus,Lares,Diana,Lucina";



/*##########################################################################################*/

var demonMap="Abaddon,Abezethibou,Abraxas,Abyzou,Adramelech,Aeshma,Agaliarept,Agrat bat Mahlat,Agares,Agiel,Ahriman,Aim,AkaManah,Ala,Alal,Alastor,Alloces,Allu,Amaymon,Amdusias,Amy,Anamalech,Ancitif,Andhaka,Andras,Andrealphus,Andromalius,Antichrist,Anzu,Armaros,Archon,Asag,Asakku,Asb'el,Asmodai,Astaroth,Asura,Azazel,Azi Dahaka/Dahak,Baal,Babi ngepet,Balam,Balberith,Bali Raj,Banshee,Baphomet,Barbas,Barbatos,Barong,Bathin,Beelzebub,Behemoth,Belial,Beleth,Belphegor,Berith,Bh&#363;ta,Bifrons,Boruta,Botis,Buer,Bukavac,Bune,Bushyasta,Cain,Charun,Chemosh,Choronzon,Cimejes,Corson,Crocell,Culsu,Daeva,Dagon,Dajjal,Dantalion,Danjal,Davy Jones,Decarabia,Demiurge,Demogorgon,Devil,Div-e,Sepid,Drekavac,Dzoavits,Eblis,Eligos,Eisheth,Focalor,Foras,Forneus,Furcas,Furfur,Gaap,Gader'el,Gaki,Gamigin,Ghoul,Glasya,Labolas,Gorgon,Gremory,Grigori,Gualichu,Guayota,Gusion,Haagenti,Halphas,HantuRaya,Haures,Ifrit,Incubus,Ipos,Jinn,Jikininki,Kabandha,Kali,Kasadya,Kokabiel,Kroni,Krampus,Legion,Lechies,Leyak,Lempo,Leraje,Leviathan,Lili,Lilith,Lucifer,Lucifuge,Rofocale,Malphas,Mammon,Mara,Maricha,Marax,Marchosias,Masih ad-Dajjal,Mastema,Mephistopheles,Merihem,Moloch,Murmur,Morpheus,Naamah,Naberius,Ninurta,Namtar,Onoskelis,Orcus,Orias,Ornias,Orobas,Ose,Ördög,Tokata,Paimon,Pazuzu,Pelesit,Phenex,Penemue,Pithius,Pocong,Pontianak,Pruflas,Puloman,Rahab,Raum,Ronove,Rusalka,Rakshasa,Rangda,Ravan,Sabnock,Saleos,Salpsan,Samael,Satan,Seir,Semyaz,Shax,Shedim,Sitri,Sthenno,Stolas,Suanggi,Succubus,Surgat,Tannin,Toyol,Ukobach,Valac,Valefar,Vapula,Vassago,Vepar,Vine,Wendigo,Xaphan,Xezbeth,Yeqon,Yeter'el,Zagan,Zepar,Ziminiar";



/*##########################################################################################*/

var angelMap="Abaddon,Abathar Muzania,Adriel,Ahriman,Ambriel,,Amesha Spenta,Anael,Angel Moroni,Arariel,Archangel,Ariel,Azazel,Azrael,Barachiel,Bene Elohim,Camael,Cassiel,Castiel,Cherub,Daniel,Darda'il,Dominions,Dumah,Eremiel,Gabriel,Gadreel,Grigori,Hadraniel,Hahasiah,Hamalat al-Arsh,Haniel,Harut,Hashmal,Hesediel,Imamiah,Israfil,Jegudiel,Jehoel,Jequn,Jerahmeel,Jophiel,Kerubiel,Kiraman,Katibin,Kushiel,Leliel,Lucifer,Maalik,Marut,Mebahiah,Metatron,Michael,Munkar,Muriel,Mu’aqqibat,Nakir,Nanael,Netzach,Nithael,Nuriel,Pahaliah,Penemue,Phanuel,Powers,Poyel,Principalities,Puriel,Qaphsiel,Raguel,Raphael,Raziel,Remiel,Sachiel,Samael,Sandalphon,Sariel,Schemhampharae,Selaphiel,Seraph,Seraphiel,Shamsiel,Simiel,Temeluchus,Tennin,Thrones,Tzaphqiel,Uriel,Uzziel,Vehuel,Virtues,Wormwood,Zachariel,Zadkiel,Zaphkiel,Zephon,Zophiel";



/*##########################################################################################*/

var prefixMap="a,a-,ab,abs,ac,acer,acid,acri,act,acu,ad,aer,aero,af,ag,agi,agri,agro,al,alb,albo,ali,allo,alt,alter,am,ambi,ambul,ami,amor,an,an-,ana,andr,andro,ang,anim,ann,annu,ano,ant,ante,anthrop,anti,antico,ap,aph,apo,aqu,arch,as,aster,astr,at,auc,aud,audi,aug,aur,aus,aut,auto,bar,be,belli,bene,bi,bibl,bibli,biblio,bine,bio,brev,cad,calor,cap,capit,capt,cardi,carn,cas,cat,cata,cath,caus,cause,caut,ceas,ced,cede,ceed,ceiv,cent,centr,centri,cept,cess,chrom,chron,cid,cide,cip,circum,cis,cise,cit,civ,claim,clam,claus,clin,clud,clus,co,cog,cogn,col,coll,com,con,contr,contra,cor,cord,corp,cort,cosm,counter,cour,cracy,crat,cre,crea,crease,cred,cresc,cret,crit,cru,cur,cura,curr,curs,cus,cuse,cycl,cyclo,de-,dec,deca,dei,dem,demo,dent,derm,di-,dia,dic,dict,dif,dign,dis,dit,div,doc,doct,domin,don,dont,dorm,dox,duc,duct,dura,dy-,dynam,dys-,e-,ec-,eco-,ecto-,em-,en-,end-,enni,epi-,equi-,erg,et-,ev-,ex-,exter-,extra-,extro-,fa,fac,fact,fain,fall,fals,fan,fant,fas,fea,feat,fec,fect,feder,feign,femto,fer,fess,fic,fid,fide,fig,fila,fili,fin,fit,fix,flect,flex,flict,flu,fluc,fluv,flux,for,forc,fore,form,fort,fract,frag,frai,fuge,fuse,gam,gastr,gastro,gen,geo,germ,gest,giga,gin,glo,gloss,glot,glu,gnant,gnos,gor,grad,graf,gram,graph,grat,grav,gree,greg,gress,hale,heal,helio,hema,hemo,her,here,hes,hetero,hex,homo,hum,human,hydr,hydra,hydro,hyper,hypn,ig,ignis,il,im,in,infra,inter,intra,intro,ir,jac,ject,join,judice,jug,junct,just,juven,kilo,labor,lau,lav,leag,lect,leg,levi,lex,liber,lide,lig,liter,liver,loc,loco,locut,log,logo,loqu,lot,luc,lude,lum,lun,lus,lust,lut,macer,macr-,magn,main,mal,man,mand,mania,manu,mar,mari,matri,medi,mega,mem,ment,mer,meso,meta,meter,metr,micro,migra,mill,milli,min,mis,miss,mit,mob,mon,mono,mor,morph,mort,mot,mov,multi,nai,nano,nasc,nat,neo,neur,noc,nom,nomen,nomin,non,nov,nox,numer,numisma,nym,ob,oc,oct,of,oligo,ology,omni,onym,op,oper,ortho,over,pac,pair,paleo,pan,para,pare,pass,pat,pater,path,pathy,patr,ped,pedo,pel,pend,pens,penta,per,peri,phage,phan,phant,phas,phe,phen,phil,phlegma,phobia,phobos,phon,phot,photo,pico,pict,plac,plais,pli,plore,plu,plur,plus,ply,pneuma,pneumon,pod,poli,poly,pon,pond,pop,port,portion,pos,post,pot,pound,pre,prehendere,prim,prime,prin,pro,proto,psych,puls,punct,pur,pute,quad,quat,quer,quest,quint,quip,quir,quis,re,recti,reg,retro,ri,ridi,risi,rog,roga,rupt,sacr,salu,salv,sanc,sanct,sat,satis,scen,sci,scientia,scio,scope,scrib,script,se,sec,secr,sect,secu,sed,semi,sen,sens,sent,sept,sequ,serv,ses,sess,sex,sid,sign,signi,simil,simul,sist,soci,sol,solu,solus,solut,solv,somn,soph,spec,spect,sper,sphere,spi,spic,spir,st,sta,stab,stan,stand,stant,stat,stead,sti,stige,stit,strain,strict,string,stroy,stru,struct,stry,sub,suc,sue,suf,sume,sump,sup,super,supra,sur,sus,sym,syn,tact,tag,tain,tang,tect,teg,tele,tem,tempo,ten,tend,tens,tent,tera,term,terr,terra,test,the,theo,therm,thesis,thet,tig,tin,ting,tire,tom,tor,tors,tort,tox,tra,tract,trai,trans,treat,tri,trib,tribute,turbo,typ,ultima,umber,umbraticum,un,uni,vac,vade,vale,vali,valu,vect,veh,ven,vent,ver,verb,veri,vers,vert,verv,vi,vic,vicis,vict,vid,vinc,vis,vita,viv,vivi,voc,voke,vol,volcan,volt,volv,vor,with,zo";

/*##########################################################################################*/

var suffixMap="able,acy,ade,age,al,an,ance,ancy,ant,ar,ard,art,ary,ate,ation,ative,cade,cy,drome,ed,en,ence,ency,ent,eous,er,ery,es,ess,est,fold,ful,fy,galactic,ia,ial,ian,iatry,ible,ic,ical,ice,ics,ient,ier,ies,iest,ify,ile,ing,ion,ious,ish,ism,ist,ite,itive,ity,ive,ize,less,ly,ment,ness,or,ory,ose,ous,ship,stelar,ster,ty,ure,ward,wise,y";

/*##########################################################################################*/



/*##########################################################################################*/

var interrogativeMap="who,whom,ever,where,when,why,what,which,how,which";

var coordinatorMap="and,so,but,or,yet,nor,either,nor,neither,for";

var subordinatorMap="after,although,as,at,because,before,by,case,despite,due,even,ever,every,fact,first,following,from,if,in,instead,last,later,long,next,not,of,once,or,order,provided,providing,result,resulting,same,second,since,so,soon,spite,that,the,then,though,till,time,to,unless,until,when,whenever,whereas,whether,while";

var transitionMap="accordingly,addition,additionally,also,as a result,besides,by comparison,by contrast,consequently,conversely,for example,for instance,further,furthermore,hence,however in contrast,in,in all,in conclusion,in other words,in particular,in summation,instead,likewise,moreover,nevertheless,nonetheless,on the contrary,on the other hand,otherwise,similarly,therefore,thus,to conclude";

/*##########################################################################################*/


SET NAMES UTF8;
Drop DATABASE IF EXISTS MEIZU;
CREATE DATABASE MEIZU CHARSET=UTF8;
USE MEIZU;
CREATE TABLE index_prev(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pname  VARCHAR(20),
    paction VARCHAR(20),
    psrc VARCHAR(100)
);
INSERT INTO index_prev(pid,pname,paction,psrc) VALUES (1,"魅族 Note 9","立刻购买","img/e4fd82cd-8b0d-479f-aa3b-8c8d4d39c94c.jpg");
INSERT INTO index_prev(pid,pname,paction,psrc) VALUES (NULL,"魅族 X8","最高降价300","img/a0dfe03a-573f-456c-809c-bffc39dd6d69.png");
INSERT INTO index_prev(pid,pname,paction,psrc) VALUES (NULL,"依旧换新","免费寄件","img/8c83fffb-4928-47a4-b07f-cc881a457ab5.jpg");
INSERT INTO index_prev(pid,pname,paction,psrc) VALUES (NULL,"魅族 Note 9","延保活动登记","img/ae14a6e7-22e9-4d2e-89cc-9ab6e15daa86.jpg");
CREATE TABLE index_phone(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pname VARCHAR(20),
    pdesc VARCHAR(50),
    pprice DECIMAL(6,0),
    psrc VARCHAR(100),
    psign VARCHAR(10)
);
INSERT INTO index_phone(pid,pname,pdesc,pprice,psrc,psign) VALUES (1,"魅族 Note9","吃鸡不卡 拍她更美 | 晓龙675后置4800万",1398,"img/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png","新品");
INSERT INTO index_phone(pid,pname,pdesc,pprice,psrc,psign) VALUES (NULL,"魅族 16th","晓龙845 屏幕下指纹",2498,"img/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png","限售");
INSERT INTO index_phone(pid,pname,pdesc,pprice,psrc,psign) VALUES (NULL,"魅族 16th Plus","晓龙845 屏幕下指纹",2988,"img/Cgbj0FtqgkWALkhxAAkE5Uiy2no917.png","限时券");
INSERT INTO index_phone(pid,pname,pdesc,pprice,psrc,psign) VALUES (NULL,"魅族 x8","人脸指纹双解锁 旗舰双摄",1298,"img/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png","直降");
INSERT INTO index_phone(pid,pname,pdesc,pprice,psrc,psign) VALUES (NULL,"魅族 16x","高通晓龙710 屏幕下指纹旗舰双摄",1789,"img/Cgbj0VvINL-AGM20AAw4GirVtYA698.png","领券");
INSERT INTO index_phone(pid,pname,pdesc,pprice,psrc,psign) VALUES (NULL,"魅族 Note8","全像素双核对焦 大电池长续航",999,"img/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png","领券");
INSERT INTO index_phone(pid,pname,pdesc,pprice,psrc,psign) VALUES (NULL,"魅族 V8 高配版","1200万+500万高清双摄",898,"img/Cgbj0VujaMyAYB76AATj19tgy08068.png","领券");
INSERT INTO index_phone(pid,pname,pdesc,pprice,psrc,psign) VALUES (NULL,"魅族 15","晓龙660 2000万暗光双摄",1498,"img/Cgbj0FrcbkeAW38NAAjvsXhhyFE066.png","领券");
INSERT INTO index_phone(pid,pname,pdesc,pprice,psrc,psign) VALUES (NULL,"魅族 15 Plus","8895处理器 2000万暗光双摄",1798,"img/Cgbj0FrcbqKANbtFAAu0nXkFYY4657.png",NULL);
INSERT INTO index_phone(pid,pname,pdesc,pprice,psrc,psign) VALUES (NULL,"魅族 E3","晓龙636处理器 全系6G大运存",1799,"img/Cgbj0Vq9-oeARs_XAALvUdl5qpo302.png",NULL);
CREATE TABLE index_sound(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    src VARCHAR(100),
    sname VARCHAR(20),
    sdesc VARCHAR(30),
    price DECIMAL(5,0),
    bprice DECIMAL(5,0)
);
INSERT INTO index_sound(id,src,sname,sdesc,price,bprice) VALUES (1,"img/4a466aec-1717-48b5-a0bd-7b921ad2a338.jpg","魅族蓝牙音频接收器","轻巧设计 独立音频芯片 一键控制 6小时续航",89,NULL);
INSERT INTO index_sound(id,src,sname,sdesc,price,bprice) VALUES (NULL,"img/Cgbj0VrcX6yABHxPAARZwWUAjc4748.png","魅族 HALO 激光蓝牙耳机","夜跑神器 随性张扬",499,999);
INSERT INTO index_sound(id,src,sname,sdesc,price,bprice) VALUES (NULL,"img/Cgbj0FpeqUqAYAbBAAJRQlEIMmc702.png","魅族 Flow Bass 三单元耳机","延续经典，重赋新声",399,599);
INSERT INTO index_sound(id,src,sname,sdesc,price,bprice) VALUES (NULL,"img/1459849377-64075.png","魅族 EP51 蓝牙运动耳机","臻享音质 自在运动",129,299);
INSERT INTO index_sound(id,src,sname,sdesc,price,bprice) VALUES (NULL,"img/ea900393-0119-4f34-87c1-0770a22a84a1.jpg","魅族 LIVE 四单元动铁耳机","6期免息",1099,1299);
INSERT INTO index_sound(id,src,sname,sdesc,price,bprice) VALUES (NULL,"img/Cgbj0Vl22XGAC6YIAAGautlHsjo741.png","魅族 Flow 三单元耳机","用得惬意 听得尽兴",399,599);
INSERT INTO index_sound(id,src,sname,sdesc,price,bprice) VALUES (NULL,"img/Cgbj0Fmb55mABV4HAAKspJD9ivQ842.png","魅蓝 EP52 蓝牙耳机","轻盈悦耳 动无拘束",199,299);
INSERT INTO index_sound(id,src,sname,sdesc,price,bprice) VALUES (NULL,"img/Cix_s1gcVpeAOmoaAAGh-ubroNg891.png","魅族 EP2X 耳机","契合声音的流动之美",69,129);
INSERT INTO index_sound(id,src,sname,sdesc,price,bprice) VALUES (NULL,"img/e786c416-5129-495a-b7fb-d2ca90da6e74.jpg","POP 真无线蓝牙耳机","双无线 零设限",499,NULL);
INSERT INTO index_sound(id,src,sname,sdesc,price,bprice) VALUES (NULL,"img/Cgbj0VmRZCiAKwA3AADYrtiPJlQ156.png","ME20入耳式耳机","享受 不绝于耳",99,199);
INSERT INTO index_sound(id,src,sname,sdesc,price,bprice) VALUES (NULL,"img/Cgbj0VrBl16Af2alAAWkq7hK2yI025.png","魅族 MC-5N 耳机升级线","MMCX插头通用线 Live耳机升级线",399,NULL);
INSERT INTO index_sound(id,src,sname,sdesc,price,bprice) VALUES (NULL,"img/Cgbj0Ft-WkOAAhCKAAFqcNe6c3M482.png","魅族 EP-31 耳机","舒适均衡 精致优雅",99,199);
CREATE TABLE index_part(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
src VARCHAR(100),
pname VARCHAR(20),
pdesc VARCHAR(30),
price DECIMAL(3,0),
bprice DECIMAL(3,0)
);
INSERT INTO index_part(id,src,pname,pdesc,price,bprice) VALUES (1,"img/01782af6-5c38-4f95-b2aa-0e0e680ad054.png","魅族 X8 高透保护膜","高透光率 助双眼捕捉每一颗像素的色彩",19,NULL);
INSERT INTO index_part(id,src,pname,pdesc,price,bprice) VALUES (NULL,"img/Cgbj0VwRr8KAC2JKAAl05Yq0esM119.png","魅族 Note8 高透保护膜","高透光率 助双眼捕捉每一颗像素的色彩",19,NULL);
INSERT INTO index_part(id,src,pname,pdesc,price,bprice) VALUES (NULL,"img/Cgbj0VwRr8OAK0BlAApiHfXlhQA575.png","魅族 V8 高配版高透保护膜","高透光率 助双眼捕捉每一颗像素的色彩",19,NULL);
INSERT INTO index_part(id,src,pname,pdesc,price,bprice) VALUES (NULL,"img/Cgbj0VwkSZKATjTlAAajD8PGNhs208.png","魅族 16th 高透保护膜","高透光率 支持魅族16th屏幕指纹解锁",19,NULL);
INSERT INTO index_part(id,src,pname,pdesc,price,bprice) VALUES (NULL,"img/5370aa79-9b77-4b43-b37b-1dace18d4efa.jpg","快充电源适配器","快速充电 安全无忧",69,89);
INSERT INTO index_part(id,src,pname,pdesc,price,bprice) VALUES (NULL,"img/1458617159-29477.png","魅族 Micro USB 数据线","广泛兼容 经久耐用",29,NULL);
INSERT INTO index_part(id,src,pname,pdesc,price,bprice) VALUES (NULL,"img/Cgbj0FqYqxqAcZ-nAAGaLqkN71s729.png","魅族 Type-C 2.0数据线","5A大电流充电 高速传输",49,59);
INSERT INTO index_part(id,src,pname,pdesc,price,bprice) VALUES (NULL,"img/1467363452-36956.png","魅族 Micro USB 金属数据线","耐用 才好用",29,NULL);
INSERT INTO index_part(id,src,pname,pdesc,price,bprice) VALUES (NULL,"img/c616d3eb-874d-4ff8-944c-af9ac3e65c68.jpg","魅族无线充电器","10W快速充电 无线即放即充",79,99);
INSERT INTO index_part(id,src,pname,pdesc,price,bprice) VALUES (NULL,"img/CnQOjVef_HaAaD-bAAHXId4TWtA165.png","魅族 Type-C 金属数据线","支持2A快速充电 耐用又放心",39,NULL);
INSERT INTO index_part(id,src,pname,pdesc,price,bprice) VALUES (NULL,"img/Cgbj0Vv8upiAbtRBAAcE-otAJt8537.png","魅族 X8 亲肤保护壳","轻盈亲近 薄若无形",29,NULL);
INSERT INTO index_part(id,src,pname,pdesc,price,bprice) VALUES (NULL,"img/Cgbj0Vv8um2AVBoyAAdHMP5_gzM044.png","魅族 Note8 亲肤保护壳","轻盈亲近 薄若无形",29,NULL);
CREATE TABLE index_aside(
aid INT PRIMARY key NOT NULL AUTO_INCREMENT,
src VARCHAR(100),
aname VARCHAR(30),
adesc VARCHAR(30),
price DECIMAL(5,0),
bprice DECIMAL(5,0)
);
INSERT INTO index_aside(aid,src,aname,adesc,price,bprice) VALUES (1,"img/011c8745-9eb9-47b7-b6b1-97c98f7dcdf0.jpg","魅蓝胸包","时尚个性 动无拘束",89,199);
INSERT INTO index_aside(aid,src,aname,adesc,price,bprice) VALUES (NULL,"img/Cgbj0Vqwv3SAKEs9AAeZO9uMlbg447.png","Everyday 乐游系列 酷 MA 萌定制版","萌友为伴，为出行添点乐趣",499,599);
INSERT INTO index_aside(aid,src,aname,adesc,price,bprice) VALUES (NULL,"img/Cgbj0FkmeZaAYy1oAAGW2D1yGJ8034.png","魅族缤纷 Mini 自拍杆","便携轻巧",49,NULL);
INSERT INTO index_aside(aid,src,aname,adesc,price,bprice) VALUES (NULL,"img/Cix_s1gYZWCAc1jqAAGoLQ8h81w741.png","魅族盒子 一键找回遥控器","海量内容 同享美妙",199,399);
INSERT INTO index_aside(aid,src,aname,adesc,price,bprice) VALUES (NULL,"img/fdf15a13-8aa1-45eb-8713-44e20b8f18ed.jpg","魅蓝 休闲旅行双肩包","曲面一体式 多功能隔层 极简与线条之美",199,NULL);
INSERT INTO index_aside(aid,src,aname,adesc,price,bprice) VALUES (NULL,"img/Cgbj0Vmnd4mANqFvAAYQNPMfK1w252.png","魅蓝数码收纳包","随身收纳 安全安心",59,NULL);
INSERT INTO index_aside(aid,src,aname,adesc,price,bprice) VALUES (NULL,"img/Cgbj0VlZqvaAGb0QAAUD7V55-H8213.png","魅蓝旅行包","轻盈负重 细节开花",269,NULL);
INSERT INTO index_aside(aid,src,aname,adesc,price,bprice) VALUES (NULL,"img/Cix_s1iW3W2AQAzZAAJUz1tTYF4022.png","魅族蓝牙自拍杆","还给你自由的双手",99,NULL);
CREATE TABLE index_cart(
cid INT PRIMARY key NOT NULL AUTO_INCREMENT,
src_full_img VARCHAR(100),
src_head_img VARCHAR(100),
author_name VARCHAR(30),
cdesc VARCHAR(100),
tip VARCHAR(10)
);
INSERT INTO index_cart(cid,src_full_img,src_head_img,author_name,cdesc,tip) VALUES(1,"img/dc6c4a26-479e-40ea-bde2-3c0ed2024d1c.jpg","img/w100h100.jpg","hooyeah","魅族 Note9 邀请函 JK 服妹子出镜，谁才是最美游戏姬","魅族 Note9");
INSERT INTO index_cart(cid,src_full_img,src_head_img,author_name,cdesc,tip) VALUES(NULL,"img/a6ced8bc-c933-43eb-b086-0dad644aa08f.jpg","img/w100h100(1).jpg","xrx3p","摄影离不开适当的后期，好在如今你可以在魅族手机上轻松完成操作。","摄影技巧");
INSERT INTO index_cart(cid,src_full_img,src_head_img,author_name,cdesc,tip) VALUES(NULL,"img/1bac33ce-9307-4e7a-85d2-3d38beff2fd5.jpg","img/w100h100(2).jpg","小墨灰","工作和学习中的沟通总离不开邮件，而 Flyme 邮箱的出色体验为我们带来的不只是生产力。","功能解析");
INSERT INTO index_cart(cid,src_full_img,src_head_img,author_name,cdesc,tip) VALUES(NULL,"img/11ff6461-0bf0-4718-ac8c-b513d44e55b2.jpg","img/w100h100(3).jpg","Keicy520","妙用 Flyme 分身，做生活和工作的「两面派」。","功能解析");
INSERT INTO index_cart(cid,src_full_img,src_head_img,author_name,cdesc,tip) VALUES(NULL,"img/103175b7-33ea-4974-abd4-dabe7c15fa6f.jpg","img/w100h100(4).jpg","歩惊云","这款匠心精神打造的十五周年旗舰机，再不下手就要后悔啦~","魅族 15");
INSERT INTO index_cart(cid,src_full_img,src_head_img,author_name,cdesc,tip) VALUES(NULL,"img/7d4f1678-b9a2-4ebf-99b2-bac0a333b288.jpg","img/w100h100(5).jpg","郑金龙","千元最强性能手机登场，高通骁龙 710 次旗舰级处理器加持，玩王者荣耀 Vulkan 模式请认准魅族 X8。","魅族 X8");
INSERT INTO index_cart(cid,src_full_img,src_head_img,author_name,cdesc,tip) VALUES(NULL,"img/1c303ede-134e-4e4c-ba54-0cf4adf05dc6.jpg","img/w100h100(6).jpg","屌丝扮海绵","“窗含西岭千秋雪” 魅族 16th 用旗舰双摄带你领略诗句中的美景。","魅族 16th");
INSERT INTO index_cart(cid,src_full_img,src_head_img,author_name,cdesc,tip) VALUES(NULL,"img/5574c92b-cdfd-440e-b964-615acde85648.jpg","img/w100h100(8).jpg","醉刘的摄影狮","准旗舰游戏拍照手机魅族 X8，不止有实力，还有最美刘海屏！","魅族 X8");
CREATE TABLE index_flyme(
    fid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    fsrc VARCHAR(100),
    fdesc VARCHAR(10)
);
INSERT INTO index_flyme(fid,fsrc,fdesc) VALUES (1,"img/e96845c4-e2e5-411c-bfbb-23adfc9253a0.png",NULL);
INSERT INTO index_flyme(fid,fsrc,fdesc) VALUES (NULL,"img/ff08fb55-b18d-4ac4-8f9f-6e59a085a615.jpg","管理手机妙招");
INSERT INTO index_flyme(fid,fsrc,fdesc) VALUES (NULL,"img/d9d72a55-f2af-4746-9b17-6845e8494063.jpg","全局夜间模式");
INSERT INTO index_flyme(fid,fsrc,fdesc) VALUES (NULL,"img/0a4fe1f2-c68d-4cc0-ae0d-b02c180f1ad1.jpg","性能更出众");
INSERT INTO index_flyme(fid,fsrc,fdesc) VALUES (NULL,"img/522c05cd-8947-4251-ba88-fd781c2c0d9d.jpg","解锁真的快");
INSERT INTO index_flyme(fid,fsrc,fdesc) VALUES (NULL,"img/3e11cc8e-2547-468d-8b32-18f80cefa1c7.jpg","全新魅族社区");
INSERT INTO index_flyme(fid,fsrc,fdesc) VALUES (NULL,"img/fc7dc8cb-471b-4304-aba7-e17c55b0026b.jpg","驾驶辅助");
CREATE TABLE index_video(
    vid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    vsrc VARCHAR(100),
    vdesc VARCHAR(30)
);
INSERT INTO index_video(vid,vsrc,vdesc) VALUES (1,"img/c03cf33a-0dbf-438f-8b5f-6d5fb929f700.jpg","吃鸡不卡，拍她更美：魅族 Note9");
INSERT INTO index_video(vid,vsrc,vdesc) VALUES (NULL,"img/66a6a875-bc3e-4ee7-aacd-b5401c0524b0.jpg","国民拍照手机：魅族 Note8");
INSERT INTO index_video(vid,vsrc,vdesc) VALUES (NULL,"img/e3abac8f-dd5e-4c21-83a9-7dc71a3c5684.jpg","轻奢旗舰：魅族 16 X");
INSERT INTO index_video(vid,vsrc,vdesc) VALUES (NULL,"img/04662fc0-faa5-44e1-8711-6df03d4f7ce2.jpg","准旗舰游戏拍照手机：魅族 X8");
INSERT INTO index_video(vid,vsrc,vdesc) VALUES (NULL,"img/45e511b0-51ff-46a9-93ed-83b2ec522d24.jpg","Flyme 7");
INSERT INTO index_video(vid,vsrc,vdesc) VALUES (NULL,"img/3b75dc9f-7af7-4104-94fa-a384252ef78c.jpg","安全家庭");
INSERT INTO index_video(vid,vsrc,vdesc) VALUES (NULL,"img/05560a91-cabe-48c5-9bd9-c8dd52a2ecb7.jpg","魅族互娱 MGC 探险嘉年华");
INSERT INTO index_video(vid,vsrc,vdesc) VALUES (NULL,"img/86e36692-1cdb-4906-a5df-7d8bcafe9ebe.jpg","魅族 X8 游戏性能测试");
-- 头部
CREATE TABLE head_phone(
    hid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    hsrc VARCHAR(100),
    hname VARCHAR(20),
    price DECIMAL(6,0)
);
INSERT INTO head_phone(hid,hsrc,hname,price) VALUES (1,"img/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png@240x240.jpg","魅族 Note8",998);
INSERT INTO head_phone(hid,hsrc,hname,price) VALUES (NULL,"img/Cgbj0FvINLWACd0AAAh2dGv5_R0516.png@240x240.jpg","魅族 16x",1768);
INSERT INTO head_phone(hid,hsrc,hname,price) VALUES (NULL,"img/Cgbj0VuhxsmABvIIAAMCZZS4ycg181.png@240x240.jpg","魅族 v8高配版",898);
INSERT INTO head_phone(hid,hsrc,hname,price) VALUES (NULL,"img/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png@240x240.jpg","魅族 x8",1298);
INSERT INTO head_phone(hid,hsrc,hname,price) VALUES (NULL,"img/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png@240x240.jpg","魅族 16th",2498);
INSERT INTO head_phone(hid,hsrc,hname,price) VALUES (NULL,"img/Cgbj0FrcblSAGHrPAAvT_qZZSA0427.png@240x240.jpg","魅族 15",1498);
INSERT INTO head_phone(hid,hsrc,hname,price) VALUES (NULL,"img/Cgbj0Vq9-oeARs_XAALvUdl5qpo302.png@240x240.jpg","魅族 E3",1799);
INSERT INTO head_phone(hid,hsrc,hname,price) VALUES (NULL,"img/Cgbj0VsM-kuAGYZmAAm_NQr8nSk674.png@240x240.jpg","魅族 6T",799);
CREATE TABLE product_list(
    pid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    pname VARCHAR(50),
    pdesc VARCHAR(100),
    pprice DECIMAL(6,0),
    psign VARCHAR(10)
);
INSERT INTO product_list(pid,pname,pdesc,pprice,psign) VALUES (NULL,"魅族 16th","51购实惠 | 骁龙845 屏幕下指纹",2298,"直降");
INSERT INTO product_list(pid,pname,pdesc,pprice,psign) VALUES (null,"魅族 16s","骁龙855 4800W光学防抖",3198,"新品");
INSERT INTO product_list(pid,pname,pdesc,pprice,psign) VALUES (NULL,"魅族 x8","人脸指纹双解锁 旗舰双摄",1298,"直降");
INSERT INTO product_list(pid,pname,pdesc,pprice,psign) VALUES (null,"魅族 Note9","吃鸡不卡 拍她更美 | 晓龙675后置4800万",1398,"新品");
INSERT INTO product_list(pid,pname,pdesc,pprice,psign) VALUES (NULL,"魅族 16x","高通晓龙710 屏幕下指纹旗舰双摄",1789,"领券");
INSERT INTO product_list(pid,pname,pdesc,pprice,psign) VALUES (NULL,"魅族 16th Plus","晓龙845 屏幕下指纹",2988,"限时券");
INSERT INTO product_list(pid,pname,pdesc,pprice,psign) VALUES (NULL,"魅族 Note8","全像素双核对焦 大电池长续航",999,"领券");
INSERT INTO product_list(pid,pname,pdesc,pprice,psign) VALUES (NULL,"魅族 V8 高配版","1200万+500万高清双摄",898,"领券");
INSERT INTO product_list(pid,pname,pdesc,pprice,psign) VALUES (NULL,"魅族 15","晓龙660 2000万暗光双摄",1498,null);
INSERT INTO product_list(pid,pname,pdesc,pprice,psign) VALUES (NULL,"魅族 15 Plus","8895处理器 2000万暗光双摄",1798,NULL);
INSERT INTO product_list(pid,pname,pdesc,pprice,psign) VALUES (NULL,"魅族 E3","晓龙636处理器 全系6G大运存",1799,NULL);
INSERT INTO product_list(pid,pname,pdesc,pprice,psign) VALUES (NULL,"魅族 16th 高透保护膜","高透光率 支持魅族16th屏幕指纹解锁",19,NULL);
INSERT INTO product_list(pid,pname,pdesc,pprice,psign) VALUES (NULL,"魅族 16th Plus 亲肤保护壳","量体打造的纤薄 薄如无形",29,NULL);
INSERT INTO product_list(pid,pname,pdesc,pprice,psign) VALUES (NULL,"魅族 Micro USB 数据线","广泛兼容 经久耐用",29,NULL);







CREATE TABLE user(
    id int PRIMARY key not NULL AUTO_INCREMENT,
    uname VARCHAR(10),
    upwd VARCHAR(32),
    phone VARCHAR(11),
    email VARCHAR(30)
);
INSERT INTO user(id,uname,upwd,phone,email) VALUES (null,"lisi",md5("123456"),null,null);

CREATE TABLE icon_color_src(
    iid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cname VARCHAR(10),
    csrc VARCHAR(100),
    psrc VARCHAR(100),
    prolisId int,
    foreign key(prolisId) references product_list(pid)
);

INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"幻影蓝","http://127.0.0.1:9000/img/Cgbj0VzFXcWADbyoAAAbAyGs-Hw580.png","//127.0.0.1:9000/img/Cgbj0Vy9c0GAVhJoAAjSpZmLQ2k220.png@480x480.jpg",2);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"凝光白","http://127.0.0.1:9000/img/Cgbj0FzFXcWAatqeAAAWGAde3TI196.png","//127.0.0.1:9000/img/Cgbj0Vy9czKAcknWAAeeKULcEXg126.png@480x480.jpg",2);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"碳纤黑","http://127.0.0.1:9000/img/Cgbj0FzFXcWAUCvwAAAWicGGU48268.png","//127.0.0.1:9000/img/Cgbj0Fy9c0KAXyeaAAa7nrDVZiw073.png@480x480.jpg",2);

INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"静夜黑","http://127.0.0.1:9000/img/Cgbj0Vw0T3KAVpPqAAAKRl5WFHo585.png","//127.0.0.1:9000/img/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png@480x480.jpg",1);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"远山白","http://127.0.0.1:9000/img/Cgbj0Vw0T3SActowAAAJazF5kdU066.png","//127.0.0.1:9000/img/Cgbj0VtqgmyADfzUAAdk_Uz-jKk371.png@480x480.jpg",1);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"极光蓝","http://127.0.0.1:9000/img/Cgbj0Vw0T3OAco2pAAAY2Ea5xv4546.png","//127.0.0.1:9000/img/Cgbj0FujRsOADooMAAbehLx6_Co899.png@480x480.jpg",1);

INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"玉白","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAEdZCAAAJazF5kdU736.png","//127.0.0.1:9000/img/Cgbj0FusSJyACGwcAAg0epdui5o951.png@480x480.jpg",3);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"亮黑","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAUsmSAAAKRl5WFHo325.png","//127.0.0.1:9000/img/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png@480x480.jpg",3);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"幻蓝","http://127.0.0.1:9000/img/Cgbj0Vw0T3OAWwcZAAAKAuloWpw010.png","//127.0.0.1:9000/img/Cgbj0FusSL6AS8w5AAhRPgc1bQE955.png@480x480.jpg",3);

INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"幻黑","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAUsmSAAAKRl5WFHo325.png","//127.0.0.1:9000/img/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png@480x480.jpg",4);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"皓白","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAEdZCAAAJazF5kdU736.png","//127.0.0.1:9000/img/Cgbj0Fx_ZKSATnTJAAU3Ca8M6D8964.png@480x480.jpg",4);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"星耀蓝","http://127.0.0.1:9000/img/Cgbj0Vw0T3OAWwcZAAAKAuloWpw010.png","//127.0.0.1:9000/img/Cgbj0Fx_ZMCAdyF9AAbOHZSdVO8974.png@480x480.jpg",4);

INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"幻黑","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAUsmSAAAKRl5WFHo325.png","//127.0.0.1:9000/img/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png@480x480.jpg",5);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"皓白","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAEdZCAAAJazF5kdU736.png","//127.0.0.1:9000/img/Cgbj0Fx_ZKSATnTJAAU3Ca8M6D8964.png@480x480.jpg",5);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"星耀蓝","http://127.0.0.1:9000/img/Cgbj0Vw0T3OAWwcZAAAKAuloWpw010.png","//127.0.0.1:9000/img/Cgbj0Fx_ZMCAdyF9AAbOHZSdVO8974.png@480x480.jpg",5);

INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"幻黑","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAUsmSAAAKRl5WFHo325.png","//127.0.0.1:9000/img/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png@480x480.jpg",6);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"皓白","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAEdZCAAAJazF5kdU736.png","//127.0.0.1:9000/img/Cgbj0Fx_ZKSATnTJAAU3Ca8M6D8964.png@480x480.jpg",6);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"星耀蓝","http://127.0.0.1:9000/img/Cgbj0Vw0T3OAWwcZAAAKAuloWpw010.png","//127.0.0.1:9000/img/Cgbj0Fx_ZMCAdyF9AAbOHZSdVO8974.png@480x480.jpg",6);


INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"幻黑","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAUsmSAAAKRl5WFHo325.png","//127.0.0.1:9000/img/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png@480x480.jpg",7);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"皓白","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAEdZCAAAJazF5kdU736.png","//127.0.0.1:9000/img/Cgbj0Fx_ZKSATnTJAAU3Ca8M6D8964.png@480x480.jpg",7);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"星耀蓝","http://127.0.0.1:9000/img/Cgbj0Vw0T3OAWwcZAAAKAuloWpw010.png","//127.0.0.1:9000/img/Cgbj0Fx_ZMCAdyF9AAbOHZSdVO8974.png@480x480.jpg",7);

INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"幻黑","http://127.0.0.1:9000/img/1451459052-28689.png","//127.0.0.1:9000/img/Cgbj0VujaMOAFzUFAARRWnHvM84529.png@480x480.jpg",8);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"雅金","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAKTLmAAAKABlplKE204.png","//127.0.0.1:9000/img/Cgbj0VujaMyAYB76AATj19tgy08068.png@480x480.jpg",8);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"灰蓝","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAb9uWAAAJ72eJf_8989.png","//127.0.0.1:9000/img/Cgbj0FvRoBuAPurkAAKeRCbcKvM061.png@480x480.jpg",8);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"烟紫","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAXiNDAAAJ9hjovo8776.png","//127.0.0.1:9000/img/Cgbj0VvRoByAY7m7AAKnNypBK54141.png@480x480.jpg",8);

INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"幻黑","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAUsmSAAAKRl5WFHo325.png","//127.0.0.1:9000/img/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png@480x480.jpg",9);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"皓白","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAEdZCAAAJazF5kdU736.png","//127.0.0.1:9000/img/Cgbj0Fx_ZKSATnTJAAU3Ca8M6D8964.png@480x480.jpg",9);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"星耀蓝","http://127.0.0.1:9000/img/Cgbj0Vw0T3OAWwcZAAAKAuloWpw010.png","//127.0.0.1:9000/img/Cgbj0Fx_ZMCAdyF9AAbOHZSdVO8974.png@480x480.jpg",9);

INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"幻黑","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAUsmSAAAKRl5WFHo325.png","//127.0.0.1:9000/img/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png@480x480.jpg",10);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"皓白","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAEdZCAAAJazF5kdU736.png","//127.0.0.1:9000/img/Cgbj0Fx_ZKSATnTJAAU3Ca8M6D8964.png@480x480.jpg",10);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"星耀蓝","http://127.0.0.1:9000/img/Cgbj0Vw0T3OAWwcZAAAKAuloWpw010.png","//127.0.0.1:9000/img/Cgbj0Fx_ZMCAdyF9AAbOHZSdVO8974.png@480x480.jpg",10);

INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"幻黑","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAUsmSAAAKRl5WFHo325.png","//127.0.0.1:9000/img/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png@480x480.jpg",11);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"皓白","http://127.0.0.1:9000/img/Cgbj0Fw0T3OAEdZCAAAJazF5kdU736.png","//127.0.0.1:9000/img/Cgbj0Fx_ZKSATnTJAAU3Ca8M6D8964.png@480x480.jpg",11);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"星耀蓝","http://127.0.0.1:9000/img/Cgbj0Vw0T3OAWwcZAAAKAuloWpw010.png","//127.0.0.1:9000/img/Cgbj0Fx_ZMCAdyF9AAbOHZSdVO8974.png@480x480.jpg",11);


INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"透明","http://127.0.0.1:9000/img/Cgbj0Fw8RZKAZoWmAAAJazF5kdU895.png","//127.0.0.1:9000/img/Cgbj0VwkSZKATjTlAAajD8PGNhs208.png@480x480.jpg",12);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"黑色","http://127.0.0.1:9000/img/1451459052-28689.png","//127.0.0.1:9000/img/Cgbj0Ft7iV6AQANcAAL00J0tbyQ152.png@480x480.jpg",13);
INSERT INTO icon_color_src(iid,cname,csrc,psrc,prolisId) VALUES (null,"白色","http://127.0.0.1:9000/img/Cgbj0Fw8RZKAZoWmAAAJazF5kdU895.png","//127.0.0.1:9000/img/1458617159-29477.png@480x480.jpg",14);

#商品详情，花呗分期
CREATE TABLE product_details(
    id INT PRIMARY key not null AUTO_INCREMENT,
    periods VARCHAR(30),
    rate VARCHAR(30),
    sid INT
);
INSERT INTO product_details(id,periods,rate,sid) VALUES (null,"¥466.00×3期","免费手续",1);
INSERT INTO product_details(id,periods,rate,sid) VALUES (null,"¥233.00×6期","免费手续",1);
INSERT INTO product_details(id,periods,rate,sid) VALUES (null,"¥125.23×12期","含手续费 ￥8.73/期",1);
INSERT INTO product_details(id,periods,rate,sid) VALUES (null,"¥532.66×3期","免费手续",2);
INSERT INTO product_details(id,periods,rate,sid) VALUES (null,"¥266.33×6期","免费手续",2);
INSERT INTO product_details(id,periods,rate,sid) VALUES (null,"¥143.14×12期","含手续费 ￥9.98/期",2);
INSERT INTO product_details(id,periods,rate,sid) VALUES (null,"¥532.66×3期","免费手续",3);
INSERT INTO product_details(id,periods,rate,sid) VALUES (null,"¥266.33×6期","免费手续",3);
INSERT INTO product_details(id,periods,rate,sid) VALUES (null,"¥143.14×12期","含手续费 ￥9.98/期",3);









//마우스 우클릭 금지
$(document).bind("contextmenu", function(e){
	//return false;
});

//document.onselectstart = new Function('return false');
//document.oncontextmenu = new Function('return false');

function makePopLayer(s,w,h)
{
	if (!w) w = 600;
	if (!h) h = 400;

	var pixelBorder = 3;
	w += pixelBorder * 2;
	h += pixelBorder * 2;

	var bodyW = document.documentElement["clientWidth"];
	var bodyH = document.documentElement["clientHeight"];

	var posX = (bodyW - w) / 2;
	var posY = (bodyH - h) / 2;

	hiddenSelectBox('hidden');

	/* 전체 bg */
	var _css = {
		"position" : "absolute",
		"left" : "0px",
		"top"  : "0px",
		"zIndex" : "9998",
		"width" : "100%",
		"height" : document.documentElement["scrollHeight"],

		"backgroundColor" : "#000000",
		"opacity" : "0.5",
		"filter" : "Alpha(Opacity=80)"
	};
	var $bg = $("<div></div>").css( _css ).attr("id", "objPopupLayerBg").appendTo("body");


	/* content */
	_css = {
		"position" : "absolute",
		"left" : posX + document.documentElement["scrollLeft"],
		"top"  : posY + $(document).scrollTop(),
		"width" : w,
		"height" : h,
		"zIndex" : "9999",
		"backgroundColor" : "#ffffff",
		"border" : "3px solid #000000"
	};
	var $content = $("<div></div>").css( _css ).attr("id", "objPopupLayer").appendTo("body");



	/* close 버튼 */
	_css = {
		"position" : "absolute",
		"left"     : w + pixelBorder,
		"top"      : -pixelBorder,
		"width"    : 25,
		"height"   : 25
	};
	var $btn_close = $("<div></div>").css( _css ).attr("id", "popLayerCloseBtn").appendTo( $("#objPopupLayer") );
	$("#popLayerCloseBtn").html("<a href='javascript:closePopLayer()'><img src='/_dev/img/btn_layer_close.gif'></a>");
	


	/* iframe */
	_css = {
		"width"    : w - 6,
		"height"   : h - pixelBorder * 2 - 3
	};
	var $iframe = $("<iframe></iframe>").css( _css ).attr("frameBorder", "0").attr("src", s).attr("scrolling","no").appendTo( $("#objPopupLayer") );
}

function closePopLayer()
{
	hiddenSelectBox('visible');
	$("#objPopupLayer").remove();
	$("#objPopupLayerBg").remove();
}

function hiddenSelectBox(mode)
{
	if( $("body").find("select").length )
	{
		$("body").find("select").css("visibility", mode);
	}
}

function randomStr() 
{
    this.str = '';
    this.pattern = /^[a-zA-Z0-9]+$/;

    this.setStr = function(n) {
        if(!/^[0-9]+$/.test(n)) n = 0x10;
        this.str = '';
        for(var i=0; i<n-1; i++) 
		{
            this.rndchar();
        }
    }

    this.setType = function(s) {
        switch(s) {
            case '1' : this.pattern = /^[0-9]+$/; break;
            case 'A' : this.pattern = /^[A-Z]+$/; break;
            case 'a' : this.pattern = /^[a-z]+$/; break;
            case 'A1' : this.pattern = /^[A-Z0-9]+$/; break;
            case 'a1' : this.pattern = /^[a-z0-9]+$/; break;
            default : this.pattern = /^[a-zA-Z0-9]+$/;
        }
    }

    this.getStr = function() {
        return this.str;
    }

    this.rndchar = function() {
        var rnd = Math.round(Math.random() * 1000);

        if(!this.pattern.test(String.fromCharCode(rnd))) {
            this.rndchar();
        } else {
            this.str += String.fromCharCode(rnd);
        }
    }
}
/*
var rndstr = new randomStr();

rndstr.setType(0); //대문자+소문자+숫자
rndstr.setStr(32); //32자리
document.write(rndstr.getStr() + "<br />");
*/

// 전역 변수
var errmsg = "";
var errfld;


function clipBoardCopy(txt)
{
	var ie = (document.all) ? true : false;

	if( ie )
	{
		window.clipboardData.setData("Text",txt);
		alert("코드가 복사되었습니다 ctrl+v 로 붙여넣기 하세요");
	}
	else
	{
		temp = prompt("Ctrl+C를 눌러 클립보드로 복사하세요", txt);
	}
}

function window_open(id,url,width,height)
{
	var left = screen.width  ?  (screen.width - width)   / 2 : 100;
	var top  = screen.height ?  (screen.height - height) / 2 : 100; 
	var attr = "width="+width+",height="+height+",left="+left+",top="+top+",toolbar=no,resizable=yes,menubar=no,status=no";
	window.open(url,id,attr);
}

// 필드 검사
function check_field(fld, msg) 
{
	if ((fld.value = trim(fld.value)) == "") 			   
		error_field(fld, msg);
	else
		clear_field(fld);
	return;
}

// 필드 오류 표시
function error_field(fld, msg) 
{
	if (msg != "")
		errmsg += msg + "\n";
	if (!errfld) errfld = fld;
	fld.style.background = "#BDDEF7";
}

// 필드를 깨끗하게
function clear_field(fld) 
{
	fld.style.background = "#FFFFFF";
}

function trim_trim(str)
{
	str = input.replace(/(^\s*)|(\s*$)/, "");
	return str
}

function trim(s)
{
	var t = "";
	var from_pos = to_pos = 0;

	for (i=0; i<s.length; i++)
	{
		if (s.charAt(i) == ' ')
			continue;
		else 
		{
			from_pos = i;
			break;
		}
	}

	for (i=s.length; i>=0; i--)
	{
		if (s.charAt(i-1) == ' ')
			continue;
		else 
		{
			to_pos = i;
			break;
		}
	}	

	t = s.substring(from_pos, to_pos);
	//				alert(from_pos + ',' + to_pos + ',' + t+'.');
	return t;
}

// 자바스크립트로 PHP의 number_format 흉내를 냄
// 숫자에 , 를 출력
function number_format(data) 
{
	
	var tmp = '';
	var number = '';
	var cutlen = 3;
	var comma = ',';
	var i;
   
	len = data.length;
	mod = (len % cutlen);
	k = cutlen - mod;
	for (i=0; i<data.length; i++) 
	{
		number = number + data.charAt(i);
		
		if (i < data.length - 1) 
		{
			k++;
			if ((k % cutlen) == 0) 
			{
				number = number + comma;
				k = 0;
			}
		}
	}

	return number;
}

// 새 창
function popup_window(url, winname, opt)
{
	window.open(url, winname, opt);
}


// 폼메일 창
function popup_formmail(url)
{
	opt = 'scrollbars=yes,width=617,height=500,top=10,left=20'; 
	popup_window(url, "wformmail", opt); 
}

// , 를 없앤다.
function no_comma(data)
{
	var tmp = '';
	var comma = ',';
	var i;

	for (i=0; i<data.length; i++)
	{
		if (data.charAt(i) != comma)
			tmp += data.charAt(i);
	}
	return tmp;
}

// 삭제 검사 확인
function del(href) 
{
	if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
		if (raon_charset.toUpperCase() == 'EUC-KR') 
			document.location.href = href;
		else
			document.location.href = encodeURI(href);
	}
}

// 쿠키 입력
function set_cookie(name, value, expirehours, domain) 
{
	var today = new Date();
	today.setTime(today.getTime() + (60*60*1000*expirehours));
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";";
	if (domain) {
		document.cookie += "domain=" + domain + ";";
	}
}

// 쿠키 얻음
function get_cookie(name) 
{
	var find_sw = false;
	var start, end;
	var i = 0;

	for (i=0; i<= document.cookie.length; i++)
	{
		start = i;
		end = start + name.length;

		if(document.cookie.substring(start, end) == name) 
		{
			find_sw = true
			break
		}
	}

	if (find_sw == true) 
	{
		start = end + 1;
		end = document.cookie.indexOf(";", start);

		if(end < start)
			end = document.cookie.length;

		return document.cookie.substring(start, end);
	}
	return "";
}

// 쿠키 지움
function delete_cookie(name) 
{
	var today = new Date();

	today.setTime(today.getTime() - 1);
	var value = get_cookie(name);
	if(value != "")
		document.cookie = name + "=" + value + "; path=/; expires=" + today.toGMTString();
}

// 이미지의 크기에 따라 새창의 크기가 변경됩니다.
// zzzz님께서 알려주셨습니다. 2005/04/12
function image_window(img)
{
	var w = img.tmp_width; 
	var h = img.tmp_height; 
	var winl = (screen.width-w)/2; 
	var wint = (screen.height-h)/3; 

	if (w >= screen.width) { 
		winl = 0; 
		h = (parseInt)(w * (h / w)); 
	} 

	if (h >= screen.height) { 
		wint = 0; 
		w = (parseInt)(h * (w / h)); 
	} 

	var js_url = "<script type='text/javascript'> \n"; 
		js_url += "<!-- \n"; 
		js_url += "var ie=document.all; \n"; 
		js_url += "var nn6=document.getElementById&&!document.all; \n"; 
		js_url += "var isdrag=false; \n"; 
		js_url += "var x,y; \n"; 
		js_url += "var dobj; \n"; 
		js_url += "function movemouse(e) \n"; 
		js_url += "{ \n"; 
		js_url += "  if (isdrag) \n"; 
		js_url += "  { \n"; 
		js_url += "    dobj.style.left = nn6 ? tx + e.clientX - x : tx + event.clientX - x; \n"; 
		js_url += "    dobj.style.top  = nn6 ? ty + e.clientY - y : ty + event.clientY - y; \n"; 
		js_url += "    return false; \n"; 
		js_url += "  } \n"; 
		js_url += "} \n"; 
		js_url += "function selectmouse(e) \n"; 
		js_url += "{ \n"; 
		js_url += "  var fobj      = nn6 ? e.target : event.srcElement; \n"; 
		js_url += "  var topelement = nn6 ? 'HTML' : 'BODY'; \n"; 
		js_url += "  while (fobj.tagName != topelement && fobj.className != 'dragme') \n"; 
		js_url += "  { \n"; 
		js_url += "    fobj = nn6 ? fobj.parentNode : fobj.parentElement; \n"; 
		js_url += "  } \n"; 
		js_url += "  if (fobj.className=='dragme') \n"; 
		js_url += "  { \n"; 
		js_url += "    isdrag = true; \n"; 
		js_url += "    dobj = fobj; \n"; 
		js_url += "    tx = parseInt(dobj.style.left+0); \n"; 
		js_url += "    ty = parseInt(dobj.style.top+0); \n"; 
		js_url += "    x = nn6 ? e.clientX : event.clientX; \n"; 
		js_url += "    y = nn6 ? e.clientY : event.clientY; \n"; 
		js_url += "    document.onmousemove=movemouse; \n"; 
		js_url += "    return false; \n"; 
		js_url += "  } \n"; 
		js_url += "} \n"; 
		js_url += "document.onmousedown=selectmouse; \n"; 
		js_url += "document.onmouseup=new Function('isdrag=false'); \n"; 
		js_url += "//--> \n"; 
		js_url += "</"+"script> \n"; 

	var settings;

	if (raon_is_gecko) {
		settings  ='width='+(w+10)+','; 
		settings +='height='+(h+10)+','; 
	} else {
		settings  ='width='+w+','; 
		settings +='height='+h+','; 
	}
	settings +='top='+wint+','; 
	settings +='left='+winl+','; 
	settings +='scrollbars=no,'; 
	settings +='resizable=yes,'; 
	settings +='status=no'; 


	win=window.open("","image_window",settings); 
	win.document.open(); 
	win.document.write ("<html><head> \n<meta http-equiv='imagetoolbar' CONTENT='no'> \n<meta http-equiv='content-type' content='text/html; charset="+raon_charset+"'>\n"); 
	var size = "이미지 사이즈 : "+w+" x "+h;
	win.document.write ("<title>"+size+"</title> \n"); 
	if(w >= screen.width || h >= screen.height) { 
		win.document.write (js_url); 
		var click = "ondblclick='window.close();' style='cursor:move' title=' "+size+" \n\n 이미지 사이즈가 화면보다 큽니다. \n 왼쪽 버튼을 클릭한 후 마우스를 움직여서 보세요. \n\n 더블 클릭하면 닫혀요. '"; 
	} 
	else 
		var click = "onclick='window.close();' style='cursor:pointer' title=' "+size+" \n\n 클릭하면 닫혀요. '"; 
	win.document.write ("<style>.dragme{position:relative;}</style> \n"); 
	win.document.write ("</head> \n\n"); 
	win.document.write ("<body leftmargin=0 topmargin=0 bgcolor=#dddddd style='cursor:arrow;'> \n"); 
	win.document.write ("<table width=100% height=100% cellpadding=0 cellspacing=0><tr><td align=center valign=middle><img src='"+img.src+"' width='"+w+"' height='"+h+"' border=0 class='dragme' "+click+"></td></tr></table>");
	win.document.write ("</body></html>"); 
	win.document.close(); 

	if(parseInt(navigator.appVersion) >= 4){win.window.focus();} 
}

// a 태그에서 onclick 이벤트를 사용하지 않기 위해
function win_open(url, name, option)
{
	var popup = window.open(url, name, option);
	popup.focus();
}



function win_zip_daum(frm_name, frm_zip1, frm_zip2, frm_addr1, frm_addr2, frm_zip)
{
	var width = 500; //팝업의 너비
	var height = 600; //팝업의 높이
	
	new daum.Postcode({
			width: width,
			height: height,
            oncomplete: function(data) {
				$("input[name="+frm_zip1+"]").val( data.postcode1 );
				$("input[name="+frm_zip2+"]").val( data.postcode2 );
				$("input[name="+frm_zip+"]").val( data.zonecode );

				$("input[name="+frm_addr1+"]").val( data.address );
				$("input[name="+frm_addr2+"]").focus();
            }

        }).open({
        	left: (window.screen.width / 2) - (width / 2),
            top: (window.screen.height / 2) - (height / 2)
        });
}

// 우편번호 창
function win_zip(frm_name, frm_zip1, frm_zip2, frm_addr1, frm_addr2)
{
	url = "/_dev/zipcode/zip.php?frm_name="+frm_name+"&frm_zip1="+frm_zip1+"&frm_zip2="+frm_zip2+"&frm_addr1="+frm_addr1+"&frm_addr2="+frm_addr2;
	win_open(url, "winZip", "left=50,top=50,width=616,height=460,scrollbars=1");
}

function win_zip_new(frm_name, frm_zip1, frm_zip2, frm_addr1, frm_addr2)
{
	url = "/_dev/zipcode/zip_new.php?frm_name="+frm_name+"&frm_zip1="+frm_zip1+"&frm_zip2="+frm_zip2+"&frm_addr1="+frm_addr1+"&frm_addr2="+frm_addr2;
	win_open(url, "winZip", "left=50,top=50,width=616,height=460,scrollbars=1");
}

// 쪽지 창
function win_memo(url)
{
	if (!url)
		url = "/_dev/memo/memo.php";
	win_open(url, "winMemo", "left=50,top=50,width=620,height=460,scrollbars=1");
}

/*
// 포인트 창
function win_point(url)
{
	win_open(raon_path + "/" + raon_bbs + "/point.php", "winPoint", "left=20, top=20, width=616, height=635, scrollbars=1");
}

// 코멘트 창
function win_comment(url)
{
	win_open(url, "winComment", "left=50, top=50, width=800, height=600, scrollbars=1");
}
*/
// 폼메일 창
function win_formmail(id, name, email)
{
	if (raon_charset.toLowerCase() == 'euc-kr')
		win_open("/board/formmail.php?id="+id+"&name="+name+"&email="+email, "winFormmail", "left=50, top=50, width=600, height=500, scrollbars=0");
	else
		win_open("/board/formmail.php?id="+id+"&name="+encodeURIComponent(name)+"&email="+email, "winFormmail", "left=50, top=50, width=600, height=480, scrollbars=0");
}

var last_id = null;
function menu(id)
{
	if (id != last_id)
	{
		if (last_id != null)
			document.getElementById(last_id).style.display = "none";
		document.getElementById(id).style.display = "block";
		last_id = id;
	}
	else
	{
		document.getElementById(id).style.display = "none";
		last_id = null;
	}
}

function textarea_decrease(id, row)
{
	if (document.getElementById(id).rows - row > 0)
		document.getElementById(id).rows -= row;
}

function textarea_original(id, row)
{
	document.getElementById(id).rows = row;
}

function textarea_increase(id, row)
{
	document.getElementById(id).rows += row;
}

// 글숫자 검사
function check_byte(content, target)
{
	var i = 0;
	var cnt = 0;
	var ch = '';
	var cont = document.getElementById(content).value;

	for (i=0; i<cont.length; i++) {
		ch = cont.charAt(i);
		if (escape(ch).length > 4) {
			cnt += 2;
		} else {
			cnt += 1;
		}
	}
	// 숫자를 출력
	document.getElementById(target).innerHTML = cnt;

	return cnt;
}

// 브라우저에서 오브젝트의 왼쪽 좌표
function get_left_pos(obj)
{
	var parentObj = null;
	var clientObj = obj;
	//var left = obj.offsetLeft + document.body.clientLeft;
	var left = obj.offsetLeft;

	while((parentObj=clientObj.offsetParent) != null)
	{
		left = left + parentObj.offsetLeft;
		clientObj = parentObj;
	}

	return left;
}

// 브라우저에서 오브젝트의 상단 좌표
function get_top_pos(obj)
{
	var parentObj = null;
	var clientObj = obj;
	//var top = obj.offsetTop + document.body.clientTop;
	var top = obj.offsetTop;

	while((parentObj=clientObj.offsetParent) != null)
	{
		top = top + parentObj.offsetTop;
		clientObj = parentObj;
	}

	return top;
}

function flash_movie(src, ids, width, height, wmode)
{
	var wh = "";
	if (parseInt(width) && parseInt(height)) 
		wh = " width='"+width+"' height='"+height+"' ";
	return "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0' "+wh+" id="+ids+"><param name=wmode value="+wmode+"><param name=movie value="+src+"><param name=quality value=high><embed src="+src+" quality=high wmode="+wmode+" type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?p1_prod_version=shockwaveflash' "+wh+"></embed></object>";
}

function obj_movie(src, ids, width, height, autostart)
{
	var wh = "";
	if (parseInt(width) && parseInt(height)) 
		wh = " width='"+width+"' height='"+height+"' ";
	if (!autostart) autostart = false;
	return "<embed src='"+src+"' "+wh+" autostart='"+autostart+"'></embed>";
}

function doc_write(cont)
{
	document.write(cont);
}

function addCommas(nStr) 
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) 
	{
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function fsearchbox_submit(f)
{
    if (f.stx.value.length < 2) {
        alert("검색어는 두글자 이상 입력하십시오.");
        f.stx.select();
        f.stx.focus();
        return false;
    }

    // 검색에 많은 부하가 걸리는 경우 이 주석을 제거하세요.
    var cnt = 0;
    for (var i=0; i<f.stx.value.length; i++) {
        if (f.stx.value.charAt(i) == ' ')
            cnt++;
    }

    if (cnt > 1) {
        alert("빠른 검색을 위하여 검색어에 공백은 한개만 입력할 수 있습니다.");
        f.stx.select();
        f.stx.focus();
        return false;
    }

    f.action = "<?=$raon[bbs_path]?>/search.php";
    return true;
}



/*!
	Colorbox v1.4.24 - 2013-06-24
	jQuery lightbox and modal window plugin
	(c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(t,e,i){function o(i,o,n){var r=e.createElement(i);return o&&(r.id=te+o),n&&(r.style.cssText=n),t(r)}function n(){return i.innerHeight?i.innerHeight:t(i).height()}function r(t){var e=E.length,i=(j+t)%e;return 0>i?e+i:i}function l(t,e){return Math.round((/%/.test(t)?("x"===e?H.width():n())/100:1)*parseInt(t,10))}function h(t,e){return t.photo||t.photoRegex.test(e)}function s(t,e){return t.retinaUrl&&i.devicePixelRatio>1?e.replace(t.photoRegex,t.retinaSuffix):e}function a(t){"contains"in y[0]&&!y[0].contains(t.target)&&(t.stopPropagation(),y.focus())}function d(){var e,i=t.data(A,Z);null==i?(O=t.extend({},Y),console&&console.log&&console.log("Error: cboxElement missing settings object")):O=t.extend({},i);for(e in O)t.isFunction(O[e])&&"on"!==e.slice(0,2)&&(O[e]=O[e].call(A));O.rel=O.rel||A.rel||t(A).data("rel")||"nofollow",O.href=O.href||t(A).attr("href"),O.title=O.title||A.title,"string"==typeof O.href&&(O.href=t.trim(O.href))}function c(i,o){t(e).trigger(i),se.trigger(i),t.isFunction(o)&&o.call(A)}function u(){var t,e,i,o,n,r=te+"Slideshow_",l="click."+te;O.slideshow&&E[1]?(e=function(){clearTimeout(t)},i=function(){(O.loop||E[j+1])&&(t=setTimeout(J.next,O.slideshowSpeed))},o=function(){R.html(O.slideshowStop).unbind(l).one(l,n),se.bind(ne,i).bind(oe,e).bind(re,n),y.removeClass(r+"off").addClass(r+"on")},n=function(){e(),se.unbind(ne,i).unbind(oe,e).unbind(re,n),R.html(O.slideshowStart).unbind(l).one(l,function(){J.next(),o()}),y.removeClass(r+"on").addClass(r+"off")},O.slideshowAuto?o():n()):y.removeClass(r+"off "+r+"on")}function p(i){G||(A=i,d(),E=t(A),j=0,"nofollow"!==O.rel&&(E=t("."+ee).filter(function(){var e,i=t.data(this,Z);return i&&(e=t(this).data("rel")||i.rel||this.rel),e===O.rel}),j=E.index(A),-1===j&&(E=E.add(A),j=E.length-1)),g.css({opacity:parseFloat(O.opacity),cursor:O.overlayClose?"pointer":"auto",visibility:"visible"}).show(),V&&y.add(g).removeClass(V),O.className&&y.add(g).addClass(O.className),V=O.className,O.closeButton?P.html(O.close).appendTo(x):P.appendTo("<div/>"),$||($=q=!0,y.css({visibility:"hidden",display:"block"}),W=o(ae,"LoadedContent","width:0; height:0; overflow:hidden").appendTo(x),_=b.height()+k.height()+x.outerHeight(!0)-x.height(),D=T.width()+C.width()+x.outerWidth(!0)-x.width(),N=W.outerHeight(!0),z=W.outerWidth(!0),O.w=l(O.initialWidth,"x"),O.h=l(O.initialHeight,"y"),J.position(),u(),c(ie,O.onOpen),B.add(S).hide(),y.focus(),O.trapFocus&&e.addEventListener&&(e.addEventListener("focus",a,!0),se.one(le,function(){e.removeEventListener("focus",a,!0)})),O.returnFocus&&se.one(le,function(){t(A).focus()})),w())}function f(){!y&&e.body&&(X=!1,H=t(i),y=o(ae).attr({id:Z,"class":t.support.opacity===!1?te+"IE":"",role:"dialog",tabindex:"-1"}).hide(),g=o(ae,"Overlay").hide(),L=t([o(ae,"LoadingOverlay")[0],o(ae,"LoadingGraphic")[0]]),v=o(ae,"Wrapper"),x=o(ae,"Content").append(S=o(ae,"Title"),M=o(ae,"Current"),K=t('<button type="button"/>').attr({id:te+"Previous"}),I=t('<button type="button"/>').attr({id:te+"Next"}),R=o("button","Slideshow"),L),P=t('<button type="button"/>').attr({id:te+"Close"}),v.append(o(ae).append(o(ae,"TopLeft"),b=o(ae,"TopCenter"),o(ae,"TopRight")),o(ae,!1,"clear:left").append(T=o(ae,"MiddleLeft"),x,C=o(ae,"MiddleRight")),o(ae,!1,"clear:left").append(o(ae,"BottomLeft"),k=o(ae,"BottomCenter"),o(ae,"BottomRight"))).find("div div").css({"float":"left"}),F=o(ae,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),B=I.add(K).add(M).add(R),t(e.body).append(g,y.append(v,F)))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),p(this))}return y?(X||(X=!0,I.click(function(){J.next()}),K.click(function(){J.prev()}),P.click(function(){J.close()}),g.click(function(){O.overlayClose&&J.close()}),t(e).bind("keydown."+te,function(t){var e=t.keyCode;$&&O.escKey&&27===e&&(t.preventDefault(),J.close()),$&&O.arrowKey&&E[1]&&!t.altKey&&(37===e?(t.preventDefault(),K.click()):39===e&&(t.preventDefault(),I.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+te,"."+ee,i):t("."+ee).live("click."+te,i)),!0):!1}function w(){var n,r,a,u=J.prep,p=++de;q=!0,U=!1,A=E[j],d(),c(he),c(oe,O.onLoad),O.h=O.height?l(O.height,"y")-N-_:O.innerHeight&&l(O.innerHeight,"y"),O.w=O.width?l(O.width,"x")-z-D:O.innerWidth&&l(O.innerWidth,"x"),O.mw=O.w,O.mh=O.h,O.maxWidth&&(O.mw=l(O.maxWidth,"x")-z-D,O.mw=O.w&&O.w<O.mw?O.w:O.mw),O.maxHeight&&(O.mh=l(O.maxHeight,"y")-N-_,O.mh=O.h&&O.h<O.mh?O.h:O.mh),n=O.href,Q=setTimeout(function(){L.show()},100),O.inline?(a=o(ae).hide().insertBefore(t(n)[0]),se.one(he,function(){a.replaceWith(W.children())}),u(t(n))):O.iframe?u(" "):O.html?u(O.html):h(O,n)?(n=s(O,n),U=e.createElement("img"),t(U).addClass(te+"Photo").bind("error",function(){O.title=!1,u(o(ae,"Error").html(O.imgError))}).one("load",function(){var e;p===de&&(U.alt=t(A).attr("alt")||t(A).attr("data-alt")||"",O.retinaImage&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),O.scalePhotos&&(r=function(){U.height-=U.height*e,U.width-=U.width*e},O.mw&&U.width>O.mw&&(e=(U.width-O.mw)/U.width,r()),O.mh&&U.height>O.mh&&(e=(U.height-O.mh)/U.height,r())),O.h&&(U.style.marginTop=Math.max(O.mh-U.height,0)/2+"px"),E[1]&&(O.loop||E[j+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",setTimeout(function(){u(U)},1))}),setTimeout(function(){U.src=n},1)):n&&F.load(n,O.data,function(e,i){p===de&&u("error"===i?o(ae,"Error").html(O.xhrError):t(this).contents())})}var g,y,v,x,b,T,C,k,E,H,W,F,L,S,M,R,I,K,P,B,O,_,D,N,z,A,j,U,$,q,G,Q,J,V,X,Y={transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,trapFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0},Z="colorbox",te="cbox",ee=te+"Element",ie=te+"_open",oe=te+"_load",ne=te+"_complete",re=te+"_cleanup",le=te+"_closed",he=te+"_purge",se=t("<a/>"),ae="div",de=0;t.colorbox||(t(f),J=t.fn[Z]=t[Z]=function(e,i){var o=this;if(e=e||{},f(),m()){if(t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;i&&(e.onComplete=i),o.each(function(){t.data(this,Z,t.extend({},t.data(this,Z)||Y,e))}).addClass(ee),(t.isFunction(e.open)&&e.open.call(o)||e.open)&&p(o[0])}return o},J.position=function(t,e){function i(t){b[0].style.width=k[0].style.width=x[0].style.width=parseInt(t.style.width,10)-D+"px",x[0].style.height=T[0].style.height=C[0].style.height=parseInt(t.style.height,10)-_+"px"}var o,r,h,s=0,a=0,d=y.offset();H.unbind("resize."+te),y.css({top:-9e4,left:-9e4}),r=H.scrollTop(),h=H.scrollLeft(),O.fixed?(d.top-=r,d.left-=h,y.css({position:"fixed"})):(s=r,a=h,y.css({position:"absolute"})),a+=O.right!==!1?Math.max(H.width()-O.w-z-D-l(O.right,"x"),0):O.left!==!1?l(O.left,"x"):Math.round(Math.max(H.width()-O.w-z-D,0)/2),s+=O.bottom!==!1?Math.max(n()-O.h-N-_-l(O.bottom,"y"),0):O.top!==!1?l(O.top,"y"):Math.round(Math.max(n()-O.h-N-_,0)/2),y.css({top:d.top,left:d.left,visibility:"visible"}),t=y.width()===O.w+z&&y.height()===O.h+N?0:t||0,v[0].style.width=v[0].style.height="9999px",o={width:O.w+z+D,height:O.h+N+_,top:s,left:a},0===t&&y.css(o),y.dequeue().animate(o,{duration:t,complete:function(){i(this),q=!1,v[0].style.width=O.w+z+D+"px",v[0].style.height=O.h+N+_+"px",O.reposition&&setTimeout(function(){H.bind("resize."+te,J.position)},1),e&&e()},step:function(){i(this)}})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(O.w=l(t.width,"x")-z-D),t.innerWidth&&(O.w=l(t.innerWidth,"x")),W.css({width:O.w}),t.height&&(O.h=l(t.height,"y")-N-_),t.innerHeight&&(O.h=l(t.innerHeight,"y")),t.innerHeight||t.height||(e=W.scrollTop(),W.css({height:"auto"}),O.h=W.height()),W.css({height:O.h}),e&&W.scrollTop(e),J.position("none"===O.transition?0:O.speed))},J.prep=function(i){function n(){return O.w=O.w||W.width(),O.w=O.mw&&O.mw<O.w?O.mw:O.w,O.w}function l(){return O.h=O.h||W.height(),O.h=O.mh&&O.mh<O.h?O.mh:O.h,O.h}if($){var a,d="none"===O.transition?0:O.speed;W.empty().remove(),W=o(ae,"LoadedContent").append(i),W.hide().appendTo(F.show()).css({width:n(),overflow:O.scrolling?"auto":"hidden"}).css({height:l()}).prependTo(x),F.hide(),t(U).css({"float":"none"}),a=function(){function i(){t.support.opacity===!1&&y[0].style.removeAttribute("filter")}var n,l,a=E.length,u="frameBorder",p="allowTransparency";$&&(l=function(){clearTimeout(Q),L.hide(),c(ne,O.onComplete)},S.html(O.title).add(W).show(),a>1?("string"==typeof O.current&&M.html(O.current.replace("{current}",j+1).replace("{total}",a)).show(),I[O.loop||a-1>j?"show":"hide"]().html(O.next),K[O.loop||j?"show":"hide"]().html(O.previous),O.slideshow&&R.show(),O.preloading&&t.each([r(-1),r(1)],function(){var i,o,n=E[this],r=t.data(n,Z);r&&r.href?(i=r.href,t.isFunction(i)&&(i=i.call(n))):i=t(n).attr("href"),i&&h(r,i)&&(i=s(r,i),o=e.createElement("img"),o.src=i)})):B.hide(),O.iframe?(n=o("iframe")[0],u in n&&(n[u]=0),p in n&&(n[p]="true"),O.scrolling||(n.scrolling="no"),t(n).attr({src:O.href,name:(new Date).getTime(),"class":te+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",l).appendTo(W),se.one(he,function(){n.src="//about:blank"}),O.fastIframe&&t(n).trigger("load")):l(),"fade"===O.transition?y.fadeTo(d,1,i):i())},"fade"===O.transition?y.fadeTo(d,0,function(){J.position(0,a)}):J.position(d,a)}},J.next=function(){!q&&E[1]&&(O.loop||E[j+1])&&(j=r(1),p(E[j]))},J.prev=function(){!q&&E[1]&&(O.loop||j)&&(j=r(-1),p(E[j]))},J.close=function(){$&&!G&&(G=!0,$=!1,c(re,O.onCleanup),H.unbind("."+te),g.fadeTo(O.fadeOut||0,0),y.stop().fadeTo(O.fadeOut||0,0,function(){y.add(g).css({opacity:1,cursor:"auto"}).hide(),c(he),W.empty().remove(),setTimeout(function(){G=!1,c(le,O.onClosed)},1)}))},J.remove=function(){y&&(y.stop(),t.colorbox.close(),y.stop().remove(),g.remove(),G=!1,y=null,t("."+ee).removeData(Z).removeClass(ee),t(e).unbind("click."+te))},J.element=function(){return t(A)},J.settings=Y)})(jQuery,document,window);


// 날짜계산
$(function () {
    $.fn.extend({
        getDiffDate: function (diff_day) {
            var to_date = new Date();

            //var diff_date = new Date(Date.parse(to_date) - (parseInt(diff_day) * 1000 * 60 * 60 * 24));

            var diff_date = new Date();
            diff_date.setDate(diff_date.getDate() - diff_day);

            //alert(diff_date.getFullYear());

            $(this).val(diff_date.getFullYear() + '-' + $.fn.setAddZero(diff_date.getMonth() + 1) + '-' + $.fn.setAddZero(diff_date.getDate()));
        },
        setAddZero: function (val) {
            var tmp = val.toString();
            if (tmp.length == 1) {
                tmp = '0' + tmp;
            }
            return tmp;
        }
    });
});


/**
* jQuery bxSlider v3.0
* http://bxslider.com
*
* Copyright 2010, Steven Wanderski
* http://stevenwanderski.com
*
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 
*/

(function ($) {
    $.fn.bxSlider = function (options) {
        var defaults = { mode: 'horizontal', infiniteLoop: true, hideControlOnEnd: false, controls: true, speed: 500, pager: false, pagerSelector: null, pagerType: 'full', pagerLocation: 'bottom', pagerShortSeparator: '/', pagerActiveClass: 'pager-active', nextText: 'next', nextImage: '', nextSelector: null, prevText: 'prev', prevImage: '', prevSelector: null, captions: false, captionsSelector: null, auto: false, autoDirection: 'next', autoControls: false, autoControlsSelector: null, autoStart: true, autoHover: false, pause: 3000, startText: 'start', startImage: '', stopText: 'stop', stopImage: '', ticker: false, tickerSpeed: 5000, tickerDirection: 'next', tickerHover: false, wrapperClass: 'bx-wrapper', startingSlide: 0, displaySlideQty: 1, moveSlideQty: 1, randomStart: false, onBeforeSlide: function () { }, onAfterSlide: function () { }, onLastSlide: function () { }, onFirstSlide: function () { }, onNextSlide: function () { }, onPrevSlide: function () { }, buildPager: null }
        var options = $.extend(defaults, options); var base = this; var $parent = $(this); var $children = $parent.children(); var $outerWrapper = ''; var $firstChild = $parent.children(':first'); var childrenWidth = $firstChild.width(); var childrenMaxWidth = 0; var childrenOuterWidth = $firstChild.outerWidth(); var childrenMaxHeight = 0; var wrapperWidth = getWrapperWidth(); var wrapperHeight = getWrapperHeight(); var isWorking = false; var $pager = ''; var currentSlide = 0; var origLeft = 0; var origTop = 0; var interval = ''; var $autoControls = ''; var $stopHtml = ''; var $startContent = ''; var $stopContent = ''; var autoPlaying = true; var loaded = false; var origShowWidth = 0; var origShowHeight = 0; var tickerLeft = 0; var tickerTop = 0; $children.each(function (index) {
            if ($(this).outerHeight() > childrenMaxHeight) { childrenMaxHeight = $(this).outerHeight(); }
            if ($(this).outerWidth() > childrenMaxWidth) { childrenMaxWidth = $(this).outerWidth(); } 
        }); if (options.randomStart) { var randomNumber = Math.floor(Math.random() * $children.length); currentSlide = randomNumber; origLeft = childrenOuterWidth * (options.moveSlideQty + randomNumber); origTop = childrenMaxHeight * (options.moveSlideQty + randomNumber); } else { currentSlide = options.startingSlide; origLeft = childrenOuterWidth * (options.moveSlideQty + options.startingSlide); origTop = childrenMaxHeight * (options.moveSlideQty + options.startingSlide); }
        var firstSlide = 0; var lastSlide = $children.length - 1; this.goToSlide = function (number, stopAuto) {
            if (!isWorking) {
                isWorking = true; currentSlide = number; options.onBeforeSlide(currentSlide, $children.length, $children.eq(currentSlide)); if (typeof (stopAuto) == 'undefined') { var stopAuto = true; }
                if (stopAuto) { if (options.auto) { base.stopShow(true); } }
                if (!options.infiniteLoop) { if (currentSlide > lastSlide - options.displaySlideQty) { slide = (lastSlide - options.displaySlideQty) + 1; } else { slide = number; } } else { slide = number; }
                if (slide == firstSlide) { options.onFirstSlide(currentSlide, $children.length, $children.eq(currentSlide)); }
                if (slide == lastSlide) { options.onLastSlide(currentSlide, $children.length, $children.eq(currentSlide)); }
                if (options.mode == 'horizontal') { $parent.animate({ 'left': '-' + getSlidePosition(slide, 'left') + 'px' }, options.speed, function () { isWorking = false; options.onAfterSlide(currentSlide, $children.length, $children.eq(currentSlide)); }); } else if (options.mode == 'vertical') { $parent.animate({ 'top': '-' + getSlidePosition(slide, 'top') + 'px' }, options.speed, function () { isWorking = false; options.onAfterSlide(currentSlide, $children.length, $children.eq(currentSlide)); }); } else if (options.mode == 'fade') { setChildrenFade(); }
                checkEndControls(); makeSlideActive(number); showCaptions();
            } 
        }
        this.goToNextSlide = function (stopAuto) {
            if (typeof (stopAuto) == 'undefined') { var stopAuto = true; }
            if (stopAuto) { if (options.auto) { base.stopShow(true); } }
            if (!options.infiniteLoop) {
                if (!isWorking) {
                    var slideLoop = false; currentSlide = (currentSlide + (options.moveSlideQty)); if (currentSlide >= lastSlide) { currentSlide = lastSlide; }
                    checkEndControls(); options.onNextSlide(currentSlide, $children.length, $children.eq(currentSlide)); base.goToSlide(currentSlide);
                } 
            } else {
                if (!isWorking) {
                    isWorking = true; var slideLoop = false; currentSlide = (currentSlide + options.moveSlideQty); if (currentSlide > lastSlide) { currentSlide = currentSlide % $children.length; slideLoop = true; }
                    options.onNextSlide(currentSlide, $children.length, $children.eq(currentSlide)); options.onBeforeSlide(currentSlide, $children.length, $children.eq(currentSlide)); if (options.mode == 'horizontal') {
                        var parentLeft = (options.moveSlideQty * childrenOuterWidth); $parent.animate({ 'left': '-=' + parentLeft + 'px' }, options.speed, function () {
                            isWorking = false; if (slideLoop) { $parent.css('left', '-' + getSlidePosition(currentSlide, 'left') + 'px'); }
                            options.onAfterSlide(currentSlide, $children.length, $children.eq(currentSlide));
                        });
                    } else if (options.mode == 'vertical') {
                        var parentTop = (options.moveSlideQty * childrenMaxHeight); $parent.animate({ 'top': '-=' + parentTop + 'px' }, options.speed, function () {
                            isWorking = false; if (slideLoop) { $parent.css('top', '-' + getSlidePosition(currentSlide, 'top') + 'px'); }
                            options.onAfterSlide(currentSlide, $children.length, $children.eq(currentSlide));
                        });
                    } else if (options.mode == 'fade') { setChildrenFade(); }
                    makeSlideActive(currentSlide); showCaptions();
                } 
            } 
        }
        this.goToPreviousSlide = function (stopAuto) {
            if (typeof (stopAuto) == 'undefined') { var stopAuto = true; }
            if (stopAuto) { if (options.auto) { base.stopShow(true); } }
            if (!options.infiniteLoop) {
                if (!isWorking) {
                    var slideLoop = false; currentSlide = currentSlide - options.moveSlideQty; if (currentSlide < 0) { currentSlide = 0; if (options.hideControlOnEnd) { $('.bx-prev', $outerWrapper).hide(); } }
                    checkEndControls(); options.onPrevSlide(currentSlide, $children.length, $children.eq(currentSlide)); base.goToSlide(currentSlide);
                } 
            } else {
                if (!isWorking) {
                    isWorking = true; var slideLoop = false; currentSlide = (currentSlide - (options.moveSlideQty)); if (currentSlide < 0) {
                        negativeOffset = (currentSlide % $children.length); if (negativeOffset == 0) { currentSlide = 0; } else { currentSlide = ($children.length) + negativeOffset; }
                        slideLoop = true;
                    }
                    options.onPrevSlide(currentSlide, $children.length, $children.eq(currentSlide)); options.onBeforeSlide(currentSlide, $children.length, $children.eq(currentSlide)); if (options.mode == 'horizontal') {
                        var parentLeft = (options.moveSlideQty * childrenOuterWidth); $parent.animate({ 'left': '+=' + parentLeft + 'px' }, options.speed, function () {
                            isWorking = false; if (slideLoop) { $parent.css('left', '-' + getSlidePosition(currentSlide, 'left') + 'px'); }
                            options.onAfterSlide(currentSlide, $children.length, $children.eq(currentSlide));
                        });
                    } else if (options.mode == 'vertical') {
                        var parentTop = (options.moveSlideQty * childrenMaxHeight); $parent.animate({ 'top': '+=' + parentTop + 'px' }, options.speed, function () {
                            isWorking = false; if (slideLoop) { $parent.css('top', '-' + getSlidePosition(currentSlide, 'top') + 'px'); }
                            options.onAfterSlide(currentSlide, $children.length, $children.eq(currentSlide));
                        });
                    } else if (options.mode == 'fade') { setChildrenFade(); }
                    makeSlideActive(currentSlide); showCaptions();
                } 
            } 
        }
        this.goToFirstSlide = function (stopAuto) {
            if (typeof (stopAuto) == 'undefined') { var stopAuto = true; }
            base.goToSlide(firstSlide, stopAuto);
        }
        this.goToLastSlide = function () {
            if (typeof (stopAuto) == 'undefined') { var stopAuto = true; }
            base.goToSlide(lastSlide, stopAuto);
        }
        this.getCurrentSlide = function () { return currentSlide; }
        this.getSlideCount = function () { return $children.length; }
        this.stopShow = function (changeText) {
            clearInterval(interval); if (typeof (changeText) == 'undefined') { var changeText = true; }
            if (changeText && options.autoControls) { $autoControls.html($startContent).removeClass('stop').addClass('start'); autoPlaying = false; } 
        }
        this.startShow = function (changeText) {
            if (typeof (changeText) == 'undefined') { var changeText = true; }
            setAutoInterval(); if (changeText && options.autoControls) { $autoControls.html($stopContent).removeClass('start').addClass('stop'); autoPlaying = true; } 
        }
        this.stopTicker = function (changeText) {
            $parent.stop(); if (typeof (changeText) == 'undefined') { var changeText = true; }
            if (changeText && options.ticker) { $autoControls.html($startContent).removeClass('stop').addClass('start'); autoPlaying = false; } 
        }
        this.startTicker = function (changeText) {
            if (options.mode == 'horizontal') {
                if (options.tickerDirection == 'next') { var stoppedLeft = parseInt($parent.css('left')); var remainingDistance = (origShowWidth + stoppedLeft) + $children.eq(0).width(); } else if (options.tickerDirection == 'prev') { var stoppedLeft = -parseInt($parent.css('left')); var remainingDistance = (stoppedLeft) - $children.eq(0).width(); }
                var finishingSpeed = (remainingDistance * options.tickerSpeed) / origShowWidth; moveTheShow(tickerLeft, remainingDistance, finishingSpeed);
            } else if (options.mode == 'vertical') {
                if (options.tickerDirection == 'next') { var stoppedTop = parseInt($parent.css('top')); var remainingDistance = (origShowHeight + stoppedTop) + $children.eq(0).height(); } else if (options.tickerDirection == 'prev') { var stoppedTop = -parseInt($parent.css('top')); var remainingDistance = (stoppedTop) - $children.eq(0).height(); }
                var finishingSpeed = (remainingDistance * options.tickerSpeed) / origShowHeight; moveTheShow(tickerTop, remainingDistance, finishingSpeed); if (typeof (changeText) == 'undefined') { var changeText = true; }
                if (changeText && options.ticker) { $autoControls.html($stopContent).removeClass('start').addClass('stop'); autoPlaying = true; } 
            } 
        }
        this.initShow = function () {
            initCss(); if (options.pager && !options.ticker) { if (options.pagerType == 'full') { showPager('full'); } else if (options.pagerType == 'short') { showPager('short'); } }
            if (options.controls && !options.ticker) { setControlsVars(); }
            if (options.auto || options.ticker) {
                if (options.autoControls) { setAutoControlsVars(); }
                if (options.autoStart) { base.startShow(true); } else { base.stopShow(true); }
                if (options.autoHover) { setAutoHover(); } 
            }
            makeSlideActive(currentSlide); checkEndControls(); if (options.captions) { showCaptions(); }
            options.onAfterSlide(currentSlide, $children.length, $children.eq(currentSlide));
        }
        function initCss() {
            setChildrenLayout(options.startingSlide); if (options.mode == 'horizontal') { $parent.wrap('<div class="' + options.wrapperClass + '" style="width:' + wrapperWidth + 'px; position:relative;"></div>').wrap('<div class="bx-window" style="position:relative; overflow:hidden;"></div>').css({ width: '99999px', position: 'relative', left: '-' + (origLeft) + 'px' }); $parent.children().css({ width: childrenWidth, float: 'left', listStyle: 'none' }); $outerWrapper = $parent.parent().parent(); $children.addClass('pager'); } else if (options.mode == 'vertical') { $parent.wrap('<div class="' + options.wrapperClass + '" style="width:' + childrenMaxWidth + 'px; position:relative;"></div>').wrap('<div class="bx-window" style="width:' + childrenMaxWidth + 'px; height:' + wrapperHeight + 'px; position:relative; overflow:hidden;"></div>').css({ height: '99999px', position: 'relative', top: '-' + (origTop) + 'px' }); $parent.children().css({ listStyle: 'none', height: childrenMaxHeight }); $outerWrapper = $parent.parent().parent(); $children.addClass('pager'); } else if (options.mode == 'fade') { $parent.wrap('<div class="' + options.wrapperClass + '" style="width:' + childrenMaxWidth + 'px; position:relative;"></div>').wrap('<div class="bx-window" style="height:' + childrenMaxHeight + 'px; width:' + childrenMaxWidth + 'px; position:relative; overflow:hidden;"></div>'); $parent.children().css({ listStyle: 'none', position: 'absolute', top: 0, left: 0, zIndex: 98 }); $outerWrapper = $parent.parent().parent(); $children.not(':eq(' + currentSlide + ')').fadeTo(0, 0); $children.eq(currentSlide).css('zIndex', 99); }
            if (options.captions && options.captionsSelector == null) { $outerWrapper.append('<div class="bx-captions"></div>'); } 
        }
        function setChildrenLayout() { if (options.mode == 'horizontal' || options.mode == 'vertical') { var $prependedChildren = getArraySample($children, 0, options.moveSlideQty, 'backward'); $.each($prependedChildren, function (index) { $parent.prepend($(this)); }); var totalNumberAfterWindow = ($children.length + options.moveSlideQty) - 1; var pagerExcess = $children.length - options.displaySlideQty; var numberToAppend = totalNumberAfterWindow - pagerExcess; var $appendedChildren = getArraySample($children, 0, numberToAppend, 'forward'); $.each($appendedChildren, function (index) { $parent.append($(this)); }); } }
        function setControlsVars() {
            if (options.nextImage != '') { nextContent = options.nextImage; nextType = 'image'; } else { nextContent = options.nextText; nextType = 'text'; }
            if (options.prevImage != '') { prevContent = options.prevImage; prevType = 'image'; } else { prevContent = options.prevText; prevType = 'text'; }
            showControls(nextType, nextContent, prevType, prevContent);
        }
        function setAutoInterval() {
            if (options.auto) {
                if (!options.infiniteLoop) {
                    if (options.autoDirection == 'next') {
                        interval = setInterval(function () {
                            currentSlide += options.moveSlideQty; if (currentSlide > lastSlide) { currentSlide = currentSlide % $children.length; }
                            base.goToSlide(currentSlide, false);
                        }, options.pause);
                    } else if (options.autoDirection == 'prev') {
                        interval = setInterval(function () {
                            currentSlide -= options.moveSlideQty; if (currentSlide < 0) { negativeOffset = (currentSlide % $children.length); if (negativeOffset == 0) { currentSlide = 0; } else { currentSlide = ($children.length) + negativeOffset; } }
                            base.goToSlide(currentSlide, false);
                        }, options.pause);
                    } 
                } else { if (options.autoDirection == 'next') { interval = setInterval(function () { base.goToNextSlide(false); }, options.pause); } else if (options.autoDirection == 'prev') { interval = setInterval(function () { base.goToPreviousSlide(false); }, options.pause); } } 
            } else if (options.ticker) {
                options.tickerSpeed *= 100; $('.pager').each(function (index) { origShowWidth += $(this).width(); origShowHeight += $(this).height(); }); if (options.tickerDirection == 'prev' && options.mode == 'horizontal') { $parent.css('left', '-' + (origShowWidth + origLeft) + 'px'); } else if (options.tickerDirection == 'prev' && options.mode == 'vertical') { $parent.css('top', '-' + (origShowHeight + origTop) + 'px'); }
                if (options.mode == 'horizontal') { tickerLeft = parseInt($parent.css('left')); moveTheShow(tickerLeft, origShowWidth, options.tickerSpeed); } else if (options.mode == 'vertical') { tickerTop = parseInt($parent.css('top')); moveTheShow(tickerTop, origShowHeight, options.tickerSpeed); }
                if (options.tickerHover) { setTickerHover(); } 
            } 
        }
        function moveTheShow(leftCss, distance, speed) { if (options.mode == 'horizontal') { if (options.tickerDirection == 'next') { $parent.animate({ 'left': '-=' + distance + 'px' }, speed, 'linear', function () { $parent.css('left', leftCss); moveTheShow(leftCss, origShowWidth, options.tickerSpeed); }); } else if (options.tickerDirection == 'prev') { $parent.animate({ 'left': '+=' + distance + 'px' }, speed, 'linear', function () { $parent.css('left', leftCss); moveTheShow(leftCss, origShowWidth, options.tickerSpeed); }); } } else if (options.mode == 'vertical') { if (options.tickerDirection == 'next') { $parent.animate({ 'top': '-=' + distance + 'px' }, speed, 'linear', function () { $parent.css('top', leftCss); moveTheShow(leftCss, origShowHeight, options.tickerSpeed); }); } else if (options.tickerDirection == 'prev') { $parent.animate({ 'top': '+=' + distance + 'px' }, speed, 'linear', function () { $parent.css('top', leftCss); moveTheShow(leftCss, origShowHeight, options.tickerSpeed); }); } } }
        function setAutoControlsVars() {
            if (options.startImage != '') { startContent = options.startImage; startType = 'image'; } else { startContent = options.startText; startType = 'text'; }
            if (options.stopImage != '') { stopContent = options.stopImage; stopType = 'image'; } else { stopContent = options.stopText; stopType = 'text'; }
            showAutoControls(startType, startContent, stopType, stopContent);
        }
        function setAutoHover() { $outerWrapper.find('.bx-window').hover(function () { if (autoPlaying) { base.stopShow(false); } }, function () { if (autoPlaying) { base.startShow(false); } }); }
        function setTickerHover() { $parent.hover(function () { if (autoPlaying) { base.stopTicker(false); } }, function () { if (autoPlaying) { base.startTicker(false); } }); }
        function setChildrenFade() { $children.not(':eq(' + currentSlide + ')').fadeTo(options.speed, 0).css('zIndex', 98); $children.eq(currentSlide).css('zIndex', 99).fadeTo(options.speed, 1, function () { isWorking = false; options.onAfterSlide(currentSlide, $children.length, $children.eq(currentSlide)); }); }; function makeSlideActive(number) { if (options.pagerType == 'full' && options.pager) { $('a', $pager).removeClass(options.pagerActiveClass); $('a', $pager).eq(number).addClass(options.pagerActiveClass); } else if (options.pagerType == 'short' && options.pager) { $('.bx-pager-current', $pager).html(currentSlide + 1); } }
        function showControls(nextType, nextContent, prevType, prevContent) {
            var $nextHtml = $('<a href="" class="bx-next"></a>'); var $prevHtml = $('<a href="" class="bx-prev"></a>'); if (nextType == 'text') { $nextHtml.html(nextContent); } else { $nextHtml.html('<img src="' + nextContent + '" />'); }
            if (prevType == 'text') { $prevHtml.html(prevContent); } else { $prevHtml.html('<img src="' + prevContent + '" />'); }
            if (options.prevSelector) { $(options.prevSelector).append($prevHtml); } else { $outerWrapper.append($prevHtml); }
            if (options.nextSelector) { $(options.nextSelector).append($nextHtml); } else { $outerWrapper.append($nextHtml); }
            $nextHtml.click(function () { base.goToNextSlide(); return false; }); $prevHtml.click(function () { base.goToPreviousSlide(); return false; });
        }
        function showPager(type) {
            var pagerString = ''; if (options.buildPager) { $children.each(function (index, value) { pagerString += options.buildPager(index, value); }); } else if (type == 'full') { $children.each(function (index) { pagerString += '<a href="" class="pager-link pager-' + (index + 1) + '">' + (index + 1) + '</a>'; }); } else if (type == 'short') { pagerString = '<span class="bx-pager-current">' + (options.startingSlide + 1) + '</span> ' + options.pagerShortSeparator + ' <span class="bx-pager-total">' + $children.length + '<span>'; }
            if (options.pagerSelector) { $(options.pagerSelector).append(pagerString); $pager = $(options.pagerSelector); } else {
                var $pagerContainer = $('<div class="bx-pager"></div>'); $pagerContainer.append(pagerString); if (options.pagerLocation == 'top') { $outerWrapper.prepend($pagerContainer); } else if (options.pagerLocation == 'bottom') { $outerWrapper.append($pagerContainer); }
                $pager = $('.bx-pager', $outerWrapper);
            }
            $pager.children().click(function () {
                if (options.pagerType == 'full') { var slideIndex = $pager.children().index(this); base.goToSlide(slideIndex); }
                return false;
            });
        }
        function showCaptions() { var caption = $('img', $children.eq(currentSlide)).attr('title'); if (caption != '') { if (options.captionsSelector) { $(options.captionsSelector).html(caption); } else { $('.bx-captions', $outerWrapper).html(caption); } } else { if (options.captionsSelector) { $(options.captionsSelector).html('?'); } else { $('.bx-captions', $outerWrapper).html('?'); } } }
        function showAutoControls(startType, startContent, stopType, stopContent) {
            $autoControls = $('<a href="" class="bx-start"></a>'); if (startType == 'text') { $startContent = startContent; } else { $startContent = '<img src="' + startContent + '" />'; }
            if (stopType == 'text') { $stopContent = stopContent; } else { $stopContent = '<img src="' + stopContent + '" />'; }
            if (options.startSelector) { $(options.startSelector).append($autoControls); } else { $outerWrapper.append('<div class="bx-auto"></div>'); $('.bx-auto', $outerWrapper).html($autoControls); }
            $autoControls.click(function () {
                if (options.ticker) { if ($(this).hasClass('stop')) { base.stopTicker(); } else if ($(this).hasClass('start')) { base.startTicker(); } } else { if ($(this).hasClass('stop')) { base.stopShow(true); } else if ($(this).hasClass('start')) { base.startShow(true); } }
                return false;
            });
        }
        function checkEndControls() {
            if (!options.infiniteLoop && options.hideControlOnEnd) {
                if (currentSlide == firstSlide) { $('.bx-prev', $outerWrapper).hide(); } else { $('.bx-prev', $outerWrapper).show(); }
                if (currentSlide == lastSlide) { $('.bx-next', $outerWrapper).hide(); } else { $('.bx-next', $outerWrapper).show(); } 
            } 
        }
        function getSlidePosition(number, side) {
            if (side == 'left') { var position = $('.pager', $outerWrapper).eq(number).position().left; } else if (side == 'top') { var position = $('.pager', $outerWrapper).eq(number).position().top; }
            return position;
        }
        function getWrapperWidth() { var wrapperWidth = $firstChild.outerWidth() * options.displaySlideQty; return wrapperWidth; }
        function getWrapperHeight() { var wrapperHeight = $firstChild.outerHeight() * options.displaySlideQty; return wrapperHeight; }
        function getArraySample(array, start, length, direction) {
            var sample = []; var loopLength = length; var startPopulatingArray = false; if (direction == 'backward') { array = $.makeArray(array); array.reverse(); }
            while (loopLength > 0) { $.each(array, function (index, val) { if (loopLength > 0) { if (!startPopulatingArray) { if (index == start) { startPopulatingArray = true; sample.push($(this).clone()); loopLength--; } } else { sample.push($(this).clone()); loopLength--; } } else { return false; } }); }
            return sample;
        }
        this.each(function () { base.initShow(); }); return this;
    } 
})(jQuery);


/* colorpicker */
if(jQuery)(function($){$.extend($.fn,{miniColors:function(o,data){var create=function(input,o,data){var color=cleanHex(input.val());if(!color)color='FFFFFF';var hsb=hex2hsb(color);var trigger=$('<a class="miniColors-trigger" style="background-color: #'+color+'" href="#"></a>');trigger.insertAfter(input);input.addClass('miniColors').attr('maxlength',7).attr('autocomplete','off');input.data('trigger',trigger);input.data('hsb',hsb);if(o.change)input.data('change',o.change);if(o.readonly)input.attr('readonly',true);if(o.disabled)disable(input);trigger.bind('click.miniColors',function(event){event.preventDefault();input.trigger('focus');});input.bind('focus.miniColors',function(event){show(input);});input.bind('blur.miniColors',function(event){var hex=cleanHex(input.val());input.val(hex?'#'+hex:'');});input.bind('keydown.miniColors',function(event){if(event.keyCode===9)hide(input);});input.bind('keyup.miniColors',function(event){var filteredHex=input.val().replace(/[^A-F0-9#]/ig,'');input.val(filteredHex);if(!setColorFromInput(input)){input.data('trigger').css('backgroundColor','#FFF');}});input.bind('paste.miniColors',function(event){setTimeout(function(){input.trigger('keyup');},5);});};var destroy=function(input){hide();input=$(input);input.data('trigger').remove();input.removeAttr('autocomplete');input.removeData('trigger');input.removeData('selector');input.removeData('hsb');input.removeData('huePicker');input.removeData('colorPicker');input.removeData('mousebutton');input.removeData('moving');input.unbind('click.miniColors');input.unbind('focus.miniColors');input.unbind('blur.miniColors');input.unbind('keyup.miniColors');input.unbind('keydown.miniColors');input.unbind('paste.miniColors');$(document).unbind('mousedown.miniColors');$(document).unbind('mousemove.miniColors');};var enable=function(input){input.attr('disabled',false);input.data('trigger').css('opacity',1);};var disable=function(input){hide(input);input.attr('disabled',true);input.data('trigger').css('opacity',.5);};var show=function(input){if(input.attr('disabled'))return false;hide();var selector=$('<div class="miniColors-selector"></div>');selector.append('<div class="miniColors-colors" style="background-color: #FFF;"><div class="miniColors-colorPicker"></div></div>');selector.append('<div class="miniColors-hues"><div class="miniColors-huePicker"></div></div>');selector.css({top:input.is(':visible')?input.offset().top+input.outerHeight():input.data('trigger').offset().top+input.data('trigger').outerHeight(),left:input.is(':visible')?input.offset().left:input.data('trigger').offset().left,display:'none'}).addClass(input.attr('class'));var hsb=input.data('hsb');selector.find('.miniColors-colors').css('backgroundColor','#'+hsb2hex({h:hsb.h,s:100,b:100}));var colorPosition=input.data('colorPosition');if(!colorPosition)colorPosition=getColorPositionFromHSB(hsb);selector.find('.miniColors-colorPicker').css('top',colorPosition.y+'px').css('left',colorPosition.x+'px');var huePosition=input.data('huePosition');if(!huePosition)huePosition=getHuePositionFromHSB(hsb);selector.find('.miniColors-huePicker').css('top',huePosition.y+'px');input.data('selector',selector);input.data('huePicker',selector.find('.miniColors-huePicker'));input.data('colorPicker',selector.find('.miniColors-colorPicker'));input.data('mousebutton',0);$('BODY').append(selector);selector.fadeIn(100);selector.bind('selectstart',function(){return false;});$(document).bind('mousedown.miniColors',function(event){input.data('mousebutton',1);if($(event.target).parents().andSelf().hasClass('miniColors-colors')){event.preventDefault();input.data('moving','colors');moveColor(input,event);}
if($(event.target).parents().andSelf().hasClass('miniColors-hues')){event.preventDefault();input.data('moving','hues');moveHue(input,event);}
if($(event.target).parents().andSelf().hasClass('miniColors-selector')){event.preventDefault();return;}
if($(event.target).parents().andSelf().hasClass('miniColors'))return;hide(input);});$(document).bind('mouseup.miniColors',function(event){input.data('mousebutton',0);input.removeData('moving');});$(document).bind('mousemove.miniColors',function(event){if(input.data('mousebutton')===1){if(input.data('moving')==='colors')moveColor(input,event);if(input.data('moving')==='hues')moveHue(input,event);}});};var hide=function(input){if(!input)input='.miniColors';$(input).each(function(){var selector=$(this).data('selector');$(this).removeData('selector');$(selector).fadeOut(100,function(){$(this).remove();});});$(document).unbind('mousedown.miniColors');$(document).unbind('mousemove.miniColors');};var moveColor=function(input,event){var colorPicker=input.data('colorPicker');colorPicker.hide();var position={x:event.clientX-input.data('selector').find('.miniColors-colors').offset().left+$(document).scrollLeft()-5,y:event.clientY-input.data('selector').find('.miniColors-colors').offset().top+$(document).scrollTop()-5};if(position.x<=-5)position.x=-5;if(position.x>=144)position.x=144;if(position.y<=-5)position.y=-5;if(position.y>=144)position.y=144;input.data('colorPosition',position);colorPicker.css('left',position.x).css('top',position.y).show();var s=Math.round((position.x+5)*.67);if(s<0)s=0;if(s>100)s=100;var b=100-Math.round((position.y+5)*.67);if(b<0)b=0;if(b>100)b=100;var hsb=input.data('hsb');hsb.s=s;hsb.b=b;setColor(input,hsb,true);};var moveHue=function(input,event){var huePicker=input.data('huePicker');huePicker.hide();var position={y:event.clientY-input.data('selector').find('.miniColors-colors').offset().top+$(document).scrollTop()-1};if(position.y<=-1)position.y=-1;if(position.y>=149)position.y=149;input.data('huePosition',position);huePicker.css('top',position.y).show();var h=Math.round((150-position.y-1)*2.4);if(h<0)h=0;if(h>360)h=360;var hsb=input.data('hsb');hsb.h=h;setColor(input,hsb,true);};var setColor=function(input,hsb,updateInputValue){input.data('hsb',hsb);var hex=hsb2hex(hsb);if(updateInputValue)input.val('#'+hex);input.data('trigger').css('backgroundColor','#'+hex);if(input.data('selector'))input.data('selector').find('.miniColors-colors').css('backgroundColor','#'+hsb2hex({h:hsb.h,s:100,b:100}));if(input.data('change')){input.data('change').call(input,'#'+hex,hsb2rgb(hsb));}};var setColorFromInput=function(input){var hex=cleanHex(input.val());if(!hex)return false;var hsb=hex2hsb(hex);var currentHSB=input.data('hsb');if(hsb.h===currentHSB.h&&hsb.s===currentHSB.s&&hsb.b===currentHSB.b)return true;var colorPosition=getColorPositionFromHSB(hsb);var colorPicker=$(input.data('colorPicker'));colorPicker.css('top',colorPosition.y+'px').css('left',colorPosition.x+'px');var huePosition=getHuePositionFromHSB(hsb);var huePicker=$(input.data('huePicker'));huePicker.css('top',huePosition.y+'px');setColor(input,hsb,false);return true;};var getColorPositionFromHSB=function(hsb){var x=Math.ceil(hsb.s/.67);if(x<0)x=0;if(x>150)x=150;var y=150-Math.ceil(hsb.b/.67);if(y<0)y=0;if(y>150)y=150;return{x:x-5,y:y-5};}
var getHuePositionFromHSB=function(hsb){var y=150-(hsb.h/2.4);if(y<0)h=0;if(y>150)h=150;return{y:y-1};}
var cleanHex=function(hex){hex=hex.replace(/[^A-Fa-f0-9]/,'');if(hex.length==3){hex=hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];}
return hex.length===6?hex:null;};var hsb2rgb=function(hsb){var rgb={};var h=Math.round(hsb.h);var s=Math.round(hsb.s*255/100);var v=Math.round(hsb.b*255/100);if(s==0){rgb.r=rgb.g=rgb.b=v;}else{var t1=v;var t2=(255-s)*v/255;var t3=(t1-t2)*(h%60)/60;if(h==360)h=0;if(h<60){rgb.r=t1;rgb.b=t2;rgb.g=t2+t3;}
else if(h<120){rgb.g=t1;rgb.b=t2;rgb.r=t1-t3;}
else if(h<180){rgb.g=t1;rgb.r=t2;rgb.b=t2+t3;}
else if(h<240){rgb.b=t1;rgb.r=t2;rgb.g=t1-t3;}
else if(h<300){rgb.b=t1;rgb.g=t2;rgb.r=t2+t3;}
else if(h<360){rgb.r=t1;rgb.g=t2;rgb.b=t1-t3;}
else{rgb.r=0;rgb.g=0;rgb.b=0;}}
return{r:Math.round(rgb.r),g:Math.round(rgb.g),b:Math.round(rgb.b)};};var rgb2hex=function(rgb){var hex=[rgb.r.toString(16),rgb.g.toString(16),rgb.b.toString(16)];$.each(hex,function(nr,val){if(val.length==1)hex[nr]='0'+val;});return hex.join('');};var hex2rgb=function(hex){var hex=parseInt(((hex.indexOf('#')>-1)?hex.substring(1):hex),16);return{r:hex>>16,g:(hex&0x00FF00)>>8,b:(hex&0x0000FF)};};var rgb2hsb=function(rgb){var hsb={h:0,s:0,b:0};var min=Math.min(rgb.r,rgb.g,rgb.b);var max=Math.max(rgb.r,rgb.g,rgb.b);var delta=max-min;hsb.b=max;hsb.s=max!=0?255*delta/max:0;if(hsb.s!=0){if(rgb.r==max){hsb.h=(rgb.g-rgb.b)/delta;}else if(rgb.g==max){hsb.h=2+(rgb.b-rgb.r)/delta;}else{hsb.h=4+(rgb.r-rgb.g)/delta;}}else{hsb.h=-1;}
hsb.h*=60;if(hsb.h<0){hsb.h+=360;}
hsb.s*=100/255;hsb.b*=100/255;return hsb;};var hex2hsb=function(hex){var hsb=rgb2hsb(hex2rgb(hex));if(hsb.s===0)hsb.h=360;return hsb;};var hsb2hex=function(hsb){return rgb2hex(hsb2rgb(hsb));};switch(o){case'readonly':$(this).each(function(){$(this).attr('readonly',data);});return $(this);break;case'disabled':$(this).each(function(){if(data){disable($(this));}else{enable($(this));}});return $(this);case'value':$(this).each(function(){$(this).val(data).trigger('keyup');});return $(this);break;case'destroy':$(this).each(function(){destroy($(this));});return $(this);default:if(!o)o={};$(this).each(function(){if($(this)[0].tagName.toLowerCase()!=='input')return;if($(this).data('trigger'))return;create($(this),o,data);});return $(this);}}});})(jQuery);


jQuery(function () {
    if ($('body').find('.datepicker').length > 0) {

        $.datepicker.regional['ko'] = {
            closeText: '닫기',
			prevText: '이전달',
			nextText: '다음달',
			currentText: '오늘',
			monthNames: ['1월','2월','3월','4월','5월','6월',
			'7월','8월','9월','10월','11월','12월'],
			monthNamesShort: ['1월','2월','3월','4월','5월','6월',
			'7월','8월','9월','10월','11월','12월'],
			dayNames: ['일','월','화','수','목','금','토'],
			dayNamesShort: ['일','월','화','수','목','금','토'],
			dayNamesMin: ['일','월','화','수','목','금','토'],
			dateFormat: 'yy-mm-dd',
			firstDay: 0,
			showOn:"both",
			buttonImageOnly: true,
			buttonText: "달력",
			buttonImage: '/_Admin_/img/calendar.png',
			showButtonPanel:false,
			yearRange: 'c-120:c+10',
			changeYear: true,
			changeMonth: true,
			isRTL: false
        };
        $.datepicker.setDefaults($.datepicker.regional['ko']);

    }
});

$(document).ready(function(){

	$("#btn_scrap_open").click(function(e){
		e.preventDefault();

		window.open("/board/scrap.php", "scrap", "toolbar=0,left=100 top=50 location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,copyhistory=0,width=720 ,height=600"); 
	});

	$('.faq_view li').eq(0).find('div.content').show();
	$('.faq_view h4 a').click(function(){
		$('.faq_view li').removeClass('active');
		$(this).parent().parent().addClass('active');
		$('.faq_view li div.content').slideUp();
		$(this).parent().parent().find('.content').slideDown();
		return false;
	});

	if( $("body").find(".datepicker").length > 0 )
	{
		$(".datepicker").datepicker();
	}

	if( $("body").find("input.onlynumber").length > 0 )
	{
		$("input.onlynumber").numeric();
		$("input.onlynumber").css("ime-mode", "disabled");
	}

	if( $("body").find("input.numeric").length > 0 )
	{
		//$("input.numeric").numeric();
		$("input.numeric").css("ime-mode", "disabled");
	}

	if ($('body').find('.nyroModal').length > 0)
	{
		$(".nyroModal").nyroModal({
			closeButton : "<a href='#' class='nyroModalClose nyroModalCloseButton nmReposition' title='close'><img src='/_dev/img/close_1.gif'></a>"
		});
	}

	if ($('body').find('input.colorpicker').length > 0)
	{
		$(".colorpicker").miniColors();
	}

	if( $("body").find(".hover_tr").length > 0 )
	{
		$("tr.hover_tr").hover(
			function(){
			$(this).addClass("list1");
		},
			function(){
			$(this).removeClass("list1");
		});
	}

	// input 테두리
	$('input.inputbox').focus(function() {
		$(this).addClass('inputbox_focus');
	}).blur(function() {
		$(this).removeClass('inputbox_focus');
	});

	$('input.inputbox').blur();


	// textarea 테두리
	$('textarea.textbox').focus(function() {
		$(this).addClass('textbox_focus');
	}).blur(function() {
		$(this).removeClass('textbox_focus');
	});

	$('textarea.textbox').blur();






	$(document).on('change', '.filebox .file-hidden', function() {
        //if(window.FileReader){
            // 파일명 추출
        //    var filename = $(this)[0].files[0].name;
        //} 

        //else {
            // Old IE 파일명 추출
            var filename = $(this).val().split('/').pop().split('\\').pop();
        //};

        $(this).parent("label").parent(".filebox").children('.upload-name').val(filename);
    });




	$(document).on('change', '.preview-image .file-hidden', function() {

        var parent = $(this).parent("label").parent(".filebox");
        parent.children('.upload-display').remove();

        if(window.FileReader){
            //image 파일만
            //if (!$(this)[0].files[0].type.match(/image\//)) return;
            
            //var reader = new FileReader();
            //reader.onload = function(e){
            //    var src = e.target.result;
            //    parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img src="'+src+'" class="upload-thumb"></div></div>');
            //}
            //reader.readAsDataURL($(this)[0].files[0]);
        }

        else {
        //    $(this)[0].select();
        //    $(this)[0].blur();
        //    var imgSrc = document.selection.createRange().text;
        //   parent.prepend('<div class="upload-display"><div class="upload-thumb-wrap"><img class="upload-thumb"></div></div>');

        //    var img = $(this).siblings('.upload-display').find('img');
        //    img[0].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\""+imgSrc+"\")";        
        }
    });





});




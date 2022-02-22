<!DOCTYPE HTML>
<html lang="en-US">
<head>
	
	<title>LMS</title>
	<link href="lms_main/html/images/icon.png" rel="shortcut icon" type="image/x-icon">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta property="og:type" content="website">
	<meta property="og:image" content="lms_main/html/images/logo_b.png">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
	<link rel="stylesheet" href="lms_main/css/basic_boot.css">
	<link rel="stylesheet" href="lms_main/css/board_boot.css">
	
	<link rel="stylesheet" href="lms_main/html/_css/default.css">
	<link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

	<!---------------       달력                                        -------------->

	<link rel=" shortcut icon" href="image/favicon.ico">

    <link rel="stylesheet" href="calendar/vendor/css/fullcalendar.min.css" />
    <link rel="stylesheet" href="calendar/vendor/css/bootstrap.min.css">
    <link rel="stylesheet" href='calendar/vendor/css/select2.min.css' />
    <link rel="stylesheet" href='calendar/vendor/css/bootstrap-datetimepicker.min.css' />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,500,600">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <link rel="stylesheet" href="calendar/css/c-main.css">

	<!---------------                                                  -------------->


	<link rel="stylesheet" type="text/css" href="lms_main/js/jquery-ui.css" />
	<link rel="stylesheet" href="lms_main/js/nyroModal.css" type="text/css" />
	
	<script type="text/javascript" src="lms_main/js/jquery-ui.js"></script>
	<script type="text/javascript" src="lms_main/js/jquery.nyroModal.custom.min.js"></script>
	<script type="text/javascript" src="lms_main/js/jquery.alphanumeric.pack.js"></script>
	<script type="text/javascript" src="lms_main/js/validation.js"></script>
	<script type="text/javascript" src="lms_main/js/jquery.cookie.js"></script>
	<script type="text/javascript" src="lms_main/js/spamFree.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
	
	<!---------------                                                  -------------->

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="google-signin-client_id" content="590968650592-qdtueujvulc0lf3up3kk2krckjre7qhf.apps.googleusercontent.com">
<link href="images/icon.png" rel="shortcut icon" type="image/x-icon">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue-grey.css">
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://apis.google.com/js/platform.js" async defer></script>
	
<script>
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var date = new Date();
  date.setDate(date.getDate() + 1);
  var Name = "Name=" + googleUser.getBasicProfile().getName() + ";expires=" + date.toUTCString();
  var Email = "Email=" + googleUser.getBasicProfile().getEmail() + ";expires=" + date.toUTCString();
  var Avatar = "Avatar=" + googleUser.getBasicProfile().getImageUrl() + ";expires=" + date.toUTCString();
	
  document.cookie = Name;
  document.cookie = Email;
  document.cookie = Avatar;
}

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  var date = new Date();
  date.setDate(date.getDate() - 1);
  var Name = "Name=;expires=" + date.toUTCString();
  var Email = "Email=;expires=" + date.toUTCString();
  var Avatar = "Avatar=;expires=" + date.toUTCString();
	
  document.cookie = Name;
  document.cookie = Email;
  document.cookie = Avatar;
}
</script>

<style>
	table{
		width:100%;
	}
	th{
		background-color: #eeeeee;
	}
	th, td{
		width: 16%;
	}
	table, th, td{
		border: 1px solid #dddddd;
		border-collapse: collapse;
		padding : 5px;
		text-align: center;
		vertical-align: center;
	}
	.d_p1{
		width: 70%;
		margin: auto;
		padding-bottom: 1000px;
	}
</style>

<?php 
$conn = mysqli_connect("0.0.0.0", "php", "1234");
mysqli_select_db($conn, "phpdb");
mysqli_set_charset($conn, "utf8");
?>


	<script type="text/javascript" src="lms_main/js/common.js"></script>
	<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
	<script>
function go_page(directory, page, vType)
{
	if( vType == "write" )
		location.href = "/"+directory+"/"+page+".php?vType="+vType;
	elseV
		location.href = "/"+directory+"/"+page+".php";
}




</script></head>

<body id="myPage">

<style>
.navbar-sns li {
	list-style:none;
}
.navbar-collapse {margin-top: 10px;}

@media (min-width: 768px){
.navbar-nav{
    position: absolute;
    /* margin: 0 auto; */
    left: 35%;
}

.navbar-sns {
	position: absolute;
    right: 5%;
	top:25px;
}
.navbar-sns li {
	float:left;
	margin-left:20px;	
}
.navbar-collapse {margin-top: 0px;}

.navbar-brand{display:inline;}
}
</style>


<!-- 글로벌 메뉴 시작 -->
<nav class="navbar navbar-default navbar-fixed-top">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				<span class="icon-bar bgColor-white"></span>
				<span class="icon-bar bgColor-white"></span>
				<span class="icon-bar bgColor-white"></span>
			</button>
			<a class="navbar-brand" href="https://lms-m-awfpf.run.goorm.io/LMS_m/"><img src="lms_main/html/images/main_logo.png" alt="로고" width="40%"></a>
		</div>
		<div class="collapse navbar-collapse navbar-right" id="myNavbar">
			<ul class="nav navbar-nav">



								<li>
					<a class="dropdown-toggle sub03 on" data-toggle="dropdown" href="https://lms-m-awfpf.run.goorm.io/LMS_m/"  title="COMMUNITY" >스케줄<span class="caret"></span></a>

										<ul class="dropdown-menu">
					

						<li><a href="https://lms-m-awfpf.run.goorm.io/LMS_m/"  title="SCHEDULER">스케줄</a></li>
					

										</ul>
								</li>


                                <li>
					<a class="dropdown-toggle sub02 " data-toggle="dropdown" href="https://lms-m-awfpf.run.goorm.io/LMS_m/index_m.php?id=design_plan"  title="ARTIST" >설계<span class="caret"></span></a>

										<ul class="dropdown-menu">
					
						<li><a href="https://lms-m-awfpf.run.goorm.io/LMS_m/index_m.php?id=design_plan"  title="DESIGN">학습계획서 설계</a></li>

										</ul>
								</li>



								<li>
					<a class="dropdown-toggle sub04 " data-toggle="dropdown" href="https://lms-m-awfpf.run.goorm.io/LMS_m/index_m.php?id=result_plan"  title="CONTACT US" >확인<span class="caret"></span></a>

										<ul class="dropdown-menu">
					
						<li><a href="https://lms-m-awfpf.run.goorm.io/LMS_m/index_m.php?id=result_plan"  title="RESULT">학습계획서 확인</a></li>

										</ul>
								</li>
				

			</ul>
			

		</div>
	</div>
</nav>
<!-- 글로벌 메뉴 끝 --><!--수정,삭제-->
<div id="sub_visual" style="background:url(lms_main/html/images/sub_visual_01.jpg) no-repeat center center / cover">
</div>

<!-- left_menu start-->
	<div id="left_menu" class="container">
		<div class="left_flash text-center">
			<div id="left-menu" >
	<ul id="over_menu" class="leftMenu list-unstyled clearfix" >
                <li >
				<a href="https://lms-m-awfpf.run.goorm.io/LMS_m/index_m.php?id=design_plan"  title="DESIGN" class="dp1"> DESIGN</a>
				</li>
				<li  class='on' >
				<a href="https://lms-m-awfpf.run.goorm.io/LMS_m/"  title="SCHEDULE" class="dp1"> SCHEDULER</a>
				</li>
				<li >
				<a href="https://lms-m-awfpf.run.goorm.io/LMS_m/index_m.php?id=result_plan"  title="NEWS" class="dp1"> RESULT</a>
				</li>
		</ul>
</div>
<script>

$(document).ready(function() {

	$("#over_menu li ul").css("display","none");
	$("#over_menu li.on ul").css("display","block");

	$("#over_menu").children("li").children("a").click(
		function() {
			if( $(this).attr("href") == "#." ) {
				$("#over_menu li ul").stop(true,true).slideUp();
				$(this).parent("li").children("ul").stop(false,false).slideDown();
			}
		}
	);

});

</script>

<script type="text/javascript">
</script>

		</div>
	</div>
	<!-- left_menu end -->
	<script type="text/javascript">
		$(function(){
			var smenu_li = $('#over_menu > li').length;
			$('#over_menu').addClass('li_m'+smenu_li)
		});
	</script>




<!-- 중심 내용 -->
<div class="w3-container w3-content" style="max-width:1400px;margin-top:80px">    
  <!-- The Grid -->
  <div class="w3-row">
    <!-- Left Column -->
    <div class="w3-col m3">
      <!-- Profile -->
      <div class="w3-card w3-round w3-white"> 
        <div class="w3-container">
         <h4 class="w3-center">My Profile</h4>
		<?php if(isset($_COOKIE[Avatar])){?>
         <p class="w3-center"><img src="<?php echo $_COOKIE[Avatar];?>" class="w3-circle" style="height:106px;width:106px" alt="Avatar"></p>
         <hr>
         <p><i class="fa fa-child fa-fw w3-margin-right w3-text-theme"></i> <?php echo $_COOKIE[Name];?></p>
         <p><i class="fa fa-envelope fa-fw w3-margin-right w3-text-theme"></i><?php echo $_COOKIE[Email];?></p>
         <p><i class="fa fa-lock fa-fw w3-margin-right w3-text-theme"></i><a href="#" onclick="signOut();">Sign out</a></p>
		 <p><div class="g-signin2" data-onsuccess="onSignIn"></div></p>
		<?php }else{?>
         <p class="w3-center"><img src="https://www.w3schools.com/w3images/avatar3.png" class="w3-circle" style="height:106px;width:106px" alt="Avatar"></p>
         <hr>
         <p><i class="fa fa-child fa-fw w3-margin-right w3-text-theme"></i>로그인 해주세요!</p>
		 <p><div class="g-signin2" data-onsuccess="onSignIn"></div></p>
		<?php }?>
        </div>
      </div>
      <br>
    <!-- End Left Column -->
    </div>
	
    <!-- Middle Column -->
    <div class="w3-col m9">
    
      <div class="w3-row-padding">
        <div class="w3-col m12">
          <div class="w3-card w3-round w3-white">
            <div class="w3-container w3-padding">
				<?php
					if(isset($_GET[id])){
						require("views/".$_GET[id].".php");
					}else{
						require("views/info.php");
					}
				?>
            </div>
          </div>
        </div>
      </div>
    <!-- End Middle Column -->
    </div>
  <!-- End Grid -->
  </div>
<!-- End Page Container -->
</div>
<script type="text/javascript">


function ChangeTab(num)
{
	var tab1 = document.getElementById("tab01");
	var tab2 = document.getElementById("tab02");
	var tab3 = document.getElementById("tab03");



	tab1.style.display = "none";
	tab2.style.display = "none";
	tab3.style.display = "none";
	if(num==1)
	{
		tab1.style.display = "block";
	}
	else if(num==2)
	{
		tab2.style.display = "block";
	}
	else if(num==3)
	{
		tab3.style.display = "block";
	}

}

</script>

<!-- 게시판 목록 끝 -->

</div>


</div>
<!-- 푸터 시작 -->
<div id="footer" class="container-fluid text-center" style="margin-top: 100px;">
	
	<a href="#myPage" title="To Top">
			<span class="glyphicon glyphicon-chevron-up Color-White"></span>
	</a>
<div class="row mt20">
	<div class="col-sm-12">
		<a href="https://lms-m-awfpf.run.goorm.io/LMS_m/"><img src="lms_main/html/images/foot_logo1.png" alt="" />
		<br />
		<br />
		<div class="row" style="color:#b1b1b1;">
			수원여자대학교</br>
			경기도 수원시 권선구 온정로 72(오목천동) 수원여자대학교<br/>
			Onjeong-ro 72 (Omokcheon-dong), Gwonseon-gu, Suwon-si, Gyeonggi-do, Republic of Korea
			<p class="copy mt10 pb10" style="color:#b1b1b1;">Copyright(c) 2021. All rights reserved.</p>
		</div>
	</div>
</div>
</div>
<!-- 푸터 끝 -->



<script>
$(document).ready(function(){

  // Add smooth scrolling to all links in navbar + footer link
  $("a[href='#myPage']").on('click', function(event) {
		
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim1").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 1000) {
          $(this).addClass("slide-view1");
        }
    });
  });
	$(window).scroll(function() {
    $(".slideanim2").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 950) {
          $(this).addClass("slide-view2");
        }
    });
  });
	$(window).scroll(function() {
    $(".slideanim3").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 900) {
          $(this).addClass("slide-view3");
        }
    });
  });
	$(window).scroll(function() {
    $(".slideanim4").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 850) {
          $(this).addClass("slide-view4");
        }
    });
  });
	$(window).scroll(function() {
    $(".slideanim5").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 2000) {
          $(this).addClass("slide-view5");
        }
    });
  });
});
</script>
<!-- js 링크 -->
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script src="lms_main/html/_js/classie.js"></script>
<script src="lms_main/html/_js/cbpAnimatedHeader.js"></script>
<script src="lms_main/html/_js/owl.carousel.min.js"></script>
<link rel="stylesheet" href="lms_main/html/_js/jquery.scrollbar.css" />
<link rel="stylesheet" href="lms_main/html/_js/owl.theme.default.css" />
<link rel="stylesheet" href="lms_main/html/_js/owl.carousel.css" />
<script src="lms_main/html/_js/jquery.scrollbar.min.js"></script>

</body>

</html>
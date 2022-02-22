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
</style>

<?php 
$mentor = explode(":",$_POST[mentor]);
$contents = "{$_POST[background]}##{$_POST[value]}##{$_POST[ability]}##{$_POST[goal]}
##{$_POST[w1]}##{$_POST[w2]}##{$_POST[w3]}##{$_POST[w4]}##{$_POST[w5]}##{$_POST[w6]}
##{$_POST[w7]}##{$_POST[w8]}##{$_POST[object]}##{$_POST[level]}##{$_POST[point]}
##{$_POST[book]}##{$_POST[self_ratio]}##{$_POST[self_evaluation]}##{$_POST[mentor_ratio]}
##{$_POST[mentor_evaluation]}##{$_POST[adv_ratio]}##{$_POST[adv_evaluation]}##{$_POST[criteria]}";

if(isset($_POST[submit])){
	mysqli_query($conn,"INSERT INTO plan(grade,email,name,mentor_email,mentor,sub,classname,contents,created)
	VALUES('학생','{$_COOKIE[Email]}','{$_COOKIE[Name]}','{$mentor[1]}','{$mentor[0]}','{$_POST[sub]}','{$_POST[classname]}','{$contents}',now())");
} //30
?>

<h4><strong>학습계획서 작성</strong></h4>
<form action="index_m.php?id=design_plan" method="post">
	<table class="w3-small w3-card-4">
	<tr>
		<th>작성자</th>
		<td><input class="w3-input w3-center" type="text" name="name" value="<?php echo $_COOKIE[Name];?>" readonly></td>
		<td colspan="2"><input class="w3-input w3-center" type="text" name="name" value="<?php echo $_COOKIE[Email];?>" readonly></td>
		<th>멘토</th>
		<td>
			<select class="w3-select" name="mentor">
				<option value="강미주:kangmj123@gmail.com">강미주</option>
				<option value="김민지:kimmj123@gmail.com">김민지</option>
				<option value="이하은:leehe123@gmail.com">이하은</option>
				<option value="허가원:heogw123@gmail.com">허가원</option>
			</select>
		</td>
	</tr>
	<tr>
		<th>교과/과목</th>
		<td>
			<select class="w3-select" name="sub">
				<option value="융합/캡스톤디자인">융합/캡스톤디자인</option>
				<option value="융합/소프트웨어">융합/소프트웨어</option>
				<option value="스마트디자인">스마트디자인</option>
				<option value="인터넷마케팅">인터넷마케팅</option>
				<option value="소프트품질및테스트">소프트품질및테스트</option>
				<option value="IoT로봇프로그래밍">IoT로봇프로그래밍</option>
			</select>
		</td>
		<th>강좌명</th>
		<td colspan="3"><input class="w3-input" type="text" name="classname"></td>
	</tr>
	<tr>
		<th rowspan="2">개설배경</th>
		<td colspan="3" rowspan="2"><textarea class="w3-input" name="background"></textarea></td>
		<th>가치분야</th>
		<td>
			<select class="w3-select" name="value">
				<option value="공동체">공동체</option>
				<option value="제자도">제자도</option>
				<option value="개발">개발</option>
				<option value="협동">협동</option>
			</select>
		</td>
	</tr>
	<tr>
		<th>역량분야</th>
		<td>
			<select class="w3-select" name="ability">
				<option value="사고력">사고력</option>
				<option value="의사소통">의사소통</option>
				<option value="자기관리">자기관리</option>
			</select>
		</td>
	</tr>
	<tr>
		<th rowspan="9">학습내용</th>
		<th>총괄목표</th>
		<td colspan="4"><textarea class="w3-input" name="goal"></textarea></td>
	</tr>
	<tr>
		<th>1주차</th><td colspan="4"><input class="w3-input" type="text" name="w1"></td>
	</tr>
	<tr>
		<th>2주차</th><td colspan="4"><input class="w3-input" type="text" name="w2"></td>
	</tr>
	<tr>
		<th>3주차</th><td colspan="4"><input class="w3-input" type="text" name="w3"></td>
	</tr>
	<tr>
		<th>4주차</th><td colspan="4"><input class="w3-input" type="text" name="w4"></td>
	</tr>
	<tr>
		<th>5주차</th><td colspan="4"><input class="w3-input" type="text" name="w5"></td>
	</tr>
	<tr>
		<th>6주차</th><td colspan="4"><input class="w3-input" type="text" name="w6"></td>
	</tr>
	<tr>
		<th>7주차</th><td colspan="4"><input class="w3-input" type="text" name="w7"></td>
	</tr>
	<tr>
		<th>8주차</th><td colspan="4"><input class="w3-input" type="text" name="w8"></td>
	</tr>
	<tr>
		<th>수강대상</th>
		<td>
			<select class="w3-select" name="object">
				<option value="전학년">전학년</option>
				<option value="1학년">1학년</option>
				<option value="2학년">2학년</option>
				<option value="3학년">3학년</option>
				<option value="4학년">4학년</option>
			</select>
		</td>
		<th>수준</th>
		<td>
			<select class="w3-select" name="level">
				<option value="하">하</option>
				<option value="중하">중하</option>
				<option value="중">중</option>
				<option value="중상">중상</option>
				<option value="상">상</option>
			</select>
		</td>
		<th>신청학점</th>
		<td><input class="w3-input" type="number" name="point"></td>
	</tr>	
	<tr>
		<th>교재</th>
		<td colspan="5"><input class="w3-input" type="text" name="book"></td>
	</tr>
	<tr>
		<th rowspan="4">평가계획</th>
		<th>평가자</th>
		<th>비율</th>
		<th colspan="4">평가계획</th>
	</tr>
	<tr>
		<th>본인</th>
		<td>
			<select class="w3-select" name="self_ratio">
				<option value="0%">0%</option>
				<option value="10%">10%</option>
				<option value="20%">20%</option>
				<option value="30%">30%</option>
			</select>
		</td>
		<td colspan="4"><input class="w3-input" type="text" name="self_evaluation"></td>
	</tr>
	<tr>
		<th>멘토</th>
		<td>
			<select class="w3-select" name="mentor_ratio">
				<option value="100%">100%</option>
				<option value="90%">90%</option>
				<option value="80%">80%</option>
				<option value="70%">70%</option>
				<option value="60%">60%</option>
				<option value="50%">50%</option>
				<option value="40%">40%</option>
				<option value="30%">30%</option>
			</select>
		</td>
		<td colspan="4"><input class="w3-input" type="text" name="mentor_evaluation"></td>
	</tr>
	<tr>
		<th>어드바이저</th>
		<td>
			<select class="w3-select" name="adv_ratio">
				<option value="0%">0%</option>
				<option value="10%">10%</option>
				<option value="20%">20%</option>
				<option value="30%">30%</option>
				<option value="40%">40%</option>
				<option value="50%">50%</option>
				<option value="60%">60%</option>
				<option value="70%">70%</option>
			</select>
		</td>
		<td colspan="4"><input class="w3-input" type="text" name="adv_evaluation"></td>
	</tr>	
	<br>
	<tr>
		<th>등급기준</th>
			<td colspan="5">
			<select class="w3-select" name="criteria">
				<option value="P/F">P/F</option>
				<option value="A/B/C/F">A/B/C/F</option>
			</select>
		</td>
	</tr>
	<tr>
		<th colspan="6"><input class="w3-input" type="submit" name="submit" value="제출"></th>	
	</tr>
	</table>
</form>
<br>

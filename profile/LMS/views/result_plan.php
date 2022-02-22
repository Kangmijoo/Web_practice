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
	$result = mysqli_query($conn,"SELECT * FROM plan");	//20

	if(isset($_POST[plan_id])){
		$result_plan = mysqli_query($conn, "SELECT * FROM plan WHERE id ='{$_POST[plan_id]}'") or die (mysqli_error($conn));
		$row = mysqli_fetch_assoc($result_plan);
		$contents = explode("##",$row[contents]);
	}
?>
<h4><strong>학습계획서 결과</strong></h4>
<form action="index_m.php?id=result_plan" method="post">
	<select class="w3-select w3-card" style="width:100%" name="plan_id" onchange="form.submit()">
		<option></option>
		<?php foreach($result as $key => $value){?>
			<option value="<?php echo $value[id];?>"><?php echo $value[classname];?></option>
		<?php }?>
	</select>
</form>
<br>
<table class="w3-small w3-card-4">
<tr>
	<th>작성자</th><td><?php echo $row[grade];?></td><td><?php echo $row[name];?></td><td colspan="3"><?php echo $row[email];?></td>
</tr>
<tr>
	<th>멘토</th><td>교수</td><td><?php echo $row[mentor];?></td><td colspan="3"><?php echo $row[mentor_email];?></td>
</tr>
<tr>
	<th>교과/과목</th><td><?php echo $row[sub];?></td><th>강좌명</th><td colspan="3"><?php echo $row[classname];?></td>
</tr>
<tr>
	<th rowspan="2">개설배경</th><td colspan="3" rowspan="2"><?php echo $contents[0];?></td><th>가치분야</th><td><?php echo $contents[1];?></td>
</tr>
<tr>
	<th>역량분야</th><td><?php echo $contents[2];?></td>
</tr>
<tr>
	<th rowspan="9">학습내용</th><th>총괄목표</th><td colspan="4"><?php echo $contents[3];?></td>
</tr>
<tr>
	<th>1주차</th><td colspan="4"><?php echo $contents[4];?></td>
</tr>
<tr>
	<th>2주차</th><td colspan="4"><?php echo $contents[5];?></td>
</tr>
<tr>
	<th>3주차</th><td colspan="4"><?php echo $contents[6];?></td>
</tr>
<tr>
	<th>4주차</th><td colspan="4"><?php echo $contents[7];?></td>
</tr>
<tr>
	<th>5주차</th><td colspan="4"><?php echo $contents[8];?></td>
</tr>
<tr>
	<th>6주차</th><td colspan="4"><?php echo $contents[9];?></td>
</tr>
<tr>
	<th>7주차</th><td colspan="4"><?php echo $contents[10];?></td>
</tr>
<tr>
	<th>8주차</th><td colspan="4"><?php echo $contents[11];?></td>
</tr>
<tr>
	<th>수강대상</th><td><?php echo $contents[12];?></td><th>수준</th><td><?php echo $contents[13];?></td><th>신청학점</th><td><?php echo $contents[14];?></td>
</tr>	
<tr>
	<th>교재</th><td colspan="5"><?php echo $contents[15];?></td>
</tr>
<tr>
	<th rowspan="4">평가계획</th><th>평가자</th><th>비율</th><th colspan="4">평가계획</th>
</tr>
<tr>
	<th>본인</th><td><?php echo $contents[16];?></td><td colspan="4"><?php echo $contents[17];?></td>
</tr>
<tr>
	<th>멘토</th><td><?php echo $contents[18];?></td><td colspan="4"><?php echo $contents[19];?></td>
</tr>
<tr>
	<th>어드바이저</th><td><?php echo $contents[20];?></td><td colspan="4"><?php echo $contents[21];?></td>
</tr>	
<tr>
	<th>등급기준</th><td colspan="5"><?php echo $contents[22];?></td>
</tr>
</table>
<br>

<?php
	$count = $_REQUEST['count'] + 1;
	
	$arr = array_pad(str_split($count), -7, "");
	foreach($arr as $res){
		if($res == ''){
			$retrun .= '<span>0</span>';
		} else {
			$retrun .= '<span>'.$res.'</span>';
		}
	}
	$write = '<span class="counter">'.$retrun.'</span>';
	$file = fopen("counter.txt","w");
	fwrite($file,$write);
	fclose($file);
	$data['count'] = $write ;
	echo json_encode($data);
?>
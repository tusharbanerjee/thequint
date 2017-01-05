<?php
	$total_data = array(
		array(
			'n1' => rand(0,99999999),
			'n2' => rand(0,99999999)
		 ),	
	);	
	echo $_GET['jsonp'].'('. json_encode($total_data) . ')';  
?>
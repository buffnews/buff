<?php

header('Access-Control-Allow-Origin: *');

header('Content-type: application/xml');
echo file_get_contents("http://buffalo.com/full-text");

?>
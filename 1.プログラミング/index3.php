<?php
 
$array = [ ['田中',20,'女性'], ['佐藤',25,'女性'],['鈴木',23,'男性'],['金岡',30,'男性'],['阪上',29,'女性']];

foreach($array as $vals){
    echo $vals[0].'('.$vals[1].'歳'.$vals[2].')';
    echo'<br>';
}
<?php

for($i = 1; $i <= 100; $i++){
    if($i % 15 === 0){
        echo 'FizzBuzz' . "\n";
        continue;
    } elseif ($i % 3 === 0){
        echo 'fizz' . "\n";
        continue;
    }
    echo $i . "\n";
}
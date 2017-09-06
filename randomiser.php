<!DOCTYPE html>
<html>
<body>

<?php

$input = array("Music Masters", "Draw It", "Electric Floor", "Battery Dash",
"One in the Chamber", "Splegg", "The Herobrine", "Sploop", "Heroes", "Slaparoo", "RestaurantRush", "Cranked", "BedWars:Teams",
"BedWars: Solo", "BedWars: Duo", "Hide and Seek", "Skywars: Solo", "SkyWars: Teams", "SkyGiants: Mini", "SkyGiants", "DeathRun",
"Trouble in Mineville", "Murder in Mineville", "BlockParty", "SG", "SG 2.0", "Cowboys and Indians", "Gravity", "The Lab");

$rand_keys = array_rand($input, 2);
echo $input[$rand_keys[0]] . "\n";
echo $input[$rand_keys[1]] . "\n";
?>

</body>
</html>

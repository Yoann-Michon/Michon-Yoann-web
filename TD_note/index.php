<?php

require 'vendor/autoload.php';
use Illuminate\Database\Capsule\Manager as BD;
use factcli\models\Client;
use factcli\models\Facture;

$db = new BD();
$db->addConnection(parse_ini_file('src/conf/conf.ini'));

$db->setAsGlobal();
$db->bootEloquent();

echo '<select name="client">'."\n";
echo '<option value="nom">--Liste des clients--</option>'."\n";
$ListClient = Client::select( 'nomcli')->get();
foreach ($ListClient as $row) {
    $nomClient = $row["nomcli"];
    echo "<option value='.$ListClient.'>".$nomClient."</option> \n";
}

echo "</select>\n";
?>
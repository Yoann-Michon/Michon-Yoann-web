<?php

require 'vendor/autoload.php';
use Illuminate\Database\Capsule\Manager as BD;
use TD_note\models\client;
use TD_note\models\facture;

$db = new BD();
$db->addConnection(parse_ini_file('src/conf/conf.ini'));

$db->setAsGlobal();
$db->bootEloquent();

echo '<select name="client">'."\n";
echo '<option value="value1">--Liste des clients--</option>'."\n";
$ListClient = client::SELECT( 'nomcli')->get();

while ( $row = FETCH_ARRAY( $ListClient)) {

    $nomClient = $row['nomcli'];
    <option value="<?php echo $nomClient; ?>"><?php echo $nomClient; ?></option>;
}
echo "</select>\n";
?>
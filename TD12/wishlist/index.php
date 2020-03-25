<?php


require_once  'vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as BD;
use mywishlist\models\Item;
use mywishlist\models\Liste;

$db = new BD();
$db->addConnection(parse_ini_file('src/conf/conf.ini'));

$db->setAsGlobal();
$db->bootEloquent();

/*
$q1 = Item::select( 'id', 'descr', 'nom')->get( ) ;
          
foreach ($q1 as $row) {
                 print_r("$row->id : $row->descr : $row->nom");
                 echo ('<br>');
                 }

 $q1 = Liste::select( 'no','titre', 'description')->get();

foreach ($q1 as $row) {
        print_r("$row->no : $row->titre : $row->description"); 
        echo ('<br>');
        }*/

$q2=Item::where('id','=',2)->first();
$item_liste=$q2->hasMany('models\Liste', 'id')->first();
?>
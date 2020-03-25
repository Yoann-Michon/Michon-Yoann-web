<?php
 namespace mywishlist\models;
 require_once  'vendor/autoload.php';

class Item extends \Illuminate\Database\Eloquent\Model{
    protected $table = 'items'; 
    protected $primaryKey = 'id'; 
    public $timestamps = false;
}
?>
<?php
 namespace mywishlist\models;

class Item extends \Illuminate\Database\Eloquent\Model{
    protected $table = 'items'; 
    protected $primaryKey = 'id'; 
    public $timestamps = false;
}
?>
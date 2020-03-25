<?php
 namespace mywishlist\models;
 require_once  'vendor/autoload.php';

class  Liste extends \Illuminate\Database\Eloquent\Model{
protected $table = 'Liste';
 protected $primaryKey = 'no' ;
  public $timestamps = false;
}
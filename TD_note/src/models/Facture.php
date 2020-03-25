<?php
namespace factcli\models;
require_once 'vendor/autoload.php';

class Facture extends \Illuminate\Database\Eloquent\Model{
    protected $table = 'facture';
    protected $primaryKey = 'id';
    public $timestamps = false;

    public function fact(){
            return $this->belongsTo('\factcli\models\Facture', 'client_id')->first();
    }

    public static function getId($id){
        return Item::where('id', '=', $id)->first();
    }
}
?>
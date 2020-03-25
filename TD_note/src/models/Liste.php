<?php
 namespace factcli\models;

class  Client extends \Illuminate\Database\Eloquent\Model{
    protected $table = 'client';
    protected $primaryKey = 'id';
    public $timestamps = false;

    public function fact(){
        return $this->hasMany('\factcli\models\facture','client_id')->get();
    }
}
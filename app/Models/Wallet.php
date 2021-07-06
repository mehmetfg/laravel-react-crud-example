<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    use HasFactory;
    protected $attributes= ["dealer_id"=> 1, "token_id"=> 1, "user_id"=> 1];
    protected $table='vallets';
    protected $guarded=[];
}

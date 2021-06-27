<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'message'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }


    public function getCreatedAtAttribute($value){
        return \Carbon\Carbon::parse($value)->format('d M y, H:i a');
    }
}

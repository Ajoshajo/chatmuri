<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'message',
        'status',
        'conversation_id'
    ];

    protected $appends = ['date', 'time'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the conversation that owns the Message
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function conversation(): BelongsTo
    {
        return $this->belongsTo(Conversation::class);
    }

    public function getCreatedAtAttribute($value)
    {
        return \Carbon\Carbon::parse($value)->format('d M y, h:i a');
    }

    public function getDateAttribute()
    {
        return \Carbon\Carbon::parse($this->created_at)->format('d M Y');
    }

    public function getTimeAttribute()
    {
        return \Carbon\Carbon::parse($this->created_at)->format('h:i a');
    }
}

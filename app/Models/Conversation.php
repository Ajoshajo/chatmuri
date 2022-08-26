<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;

class Conversation extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * Get all of the messages for the Conversation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function messages(): HasMany
    {
        return $this->hasMany(Message::class);
    }

    /**
     * Get the receiver that owns the Conversation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function receiver(): BelongsTo
    {
        $user_column = 'from_user_id';
        if (Auth::user()->id != $this->from_user_id) {$user_column = 'to_user_id';};
        return $this->belongsTo(User::class, $user_column);
    }

    public function scopeUser($id)
    {
        $this->where('from_user_id', $id)->orWhere('to_user_id', $id)->with('receiver');
    }
}

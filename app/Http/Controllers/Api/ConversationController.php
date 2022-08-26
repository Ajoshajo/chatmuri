<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Conversation;
use App\Models\User;
use Illuminate\Http\Request;

class ConversationController extends Controller
{
    public function users()
    {
        return response()->json(User::all());
    }

    public function conversations(Request $request)
    {
        return response()->json(Conversation::user($request->user()->id)->with('receiver')->get());
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Events\MessageSentEvent;
use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index()
    {
        return Message::with('user')->get();
    }

    public function store(Request $request)
    {
        $message = $request->user()->messages()->create(['message' => $request->message]);
        broadcast(new MessageSentEvent($message, $request->user()))->toOthers();

        return [
            'message' => $message,
            'user' => $request->user()->only(['name', 'email']),
        ];
    }
}

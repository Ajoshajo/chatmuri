<?php

namespace App\Http\Controllers;

use App\Events\MessageDeliveredEvent;
use App\Events\MessageSentEvent;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $user = AUth::user();
        $msg = Message::with('user')->get();
        Message::where('user_id', '!=', $user->id)->update(['status' => 1]);
        return $msg;
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        $message = $user->messages()->create([
            'message' => $request->input('message'),
        ]);

        broadcast(new MessageSentEvent($message, $user))->toOthers();

        return [
            'message' => $message,
            'user' => $user,
        ];
    }

    
}

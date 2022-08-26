<?php

namespace App\Http\Controllers\Api;

use App\Events\MessageDeliveredEvent;
use App\Events\MessageSentEvent;
use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function index(Request $request)
    {
        $user = Auth::user();
        $conversation_id = $request->conversation_id;
        $msg = Message::with('user')->whereHas('conversation', function ($conversation) use ($conversation_id) {
            $conversation->whereId($conversation_id);
        })->latest()->paginate();
        $delivered = $msg->where('user_id', '!=', $user->id)->where('status', 0);
        // $notDelivered = $delivered->get();
        // $delivered->update(['status' => 1]);
        foreach ($delivered as $dm) {
            $dm->update(['status' => 1]);
            // try {
            broadcast(new MessageDeliveredEvent($dm))->toOthers();
            // } catch (\Exception $e) {

            // }
        }
        return response()->json($msg);
    }

    public function store(Request $request)
    {
        $message = $request->user()->messages()->create(['message' => $request->message, 'conversation_id' => $request->conversation_id]);
        // try {
        broadcast(new MessageSentEvent($message, $request->user()))->toOthers();
        // } catch (\Exception $e) {
        //     return $e->getMessage();
        // }

        return response()->json([
            'message' => $message,
            'user' => $request->user()->only(['name', 'email']),
        ]);
    }

    public function delivered(Request $request, Message $message)
    {
        $message->status = 1;
        $message->update();

        broadcast(new MessageDeliveredEvent($message))->toOthers();
    }
}

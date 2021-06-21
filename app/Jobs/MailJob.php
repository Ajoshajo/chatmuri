<?php

namespace App\Jobs;

use App\Mail\Mail;
use App\Models\Student;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail as Maila;

class MailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $st = Student::leftJoin('online_exam_user_status', function ($join) {
            $join->on('student.id', '=', 'online_exam_user_status.userID');
        })
        ->where('id', '>', 38)
            ->whereNull('online_exam_user_status.userID')
            ->get();
        foreach ($st as $key => $s) {
            Maila::to($s->email)->send(new Mail($s));
            Log::info("sent to " . $s->id . ' ' . $key);
            sleep(1);
        }
    }
}

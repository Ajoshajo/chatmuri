<?php

namespace App\Http\Controllers;

use App\Jobs\MailJob;
use App\Jobs\ImportJob;
use App\Models\Student;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Rap2hpoutre\FastExcel\FastExcel;

// use Rap2hpoutre\FastExcel\Facades\FastExcel;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
        echo hash('sha512', 'PON20000');
    }

    public function import()
    {
        // return hash('sha512', Student::first()->rollno);
        // dd(Student::all());
        $collection = (new FastExcel)->import('KSCSA.xlsx');
        ImportJob::dispatch($collection);
        return 'h';
        // $s = Student::leftJoin('online_exam_user_status', function ($join) {
        //     $join->on('student.id', '=', 'online_exam_user_status.userID');
        // })
        //     ->whereNull('online_exam_user_status.userID')
        //     ->get();
        // $s->each(function($st){
        //     // echo hash('sha512',$st->rollno).'<br>';
        //     // $st->update(['password'=>hash('sha512',$st->rollno),'hash'=>hash('sha512',$st->rollno)]);
        // });
    }

    public function mail()
    {
        MailJob::dispatch();
        // $collection = (new FastExcel)->sheet(3)->import('file-3.xlsx');
        // dd($collection);
        // $s = Student::find(1153);
        // Mail::to('ajoshj1@gmail.com')->send(new ExamMail($s));
        return 'hi';
    }

    public function export()
    {
        $st = Student::leftJoin('online_exam_user_status', function ($join) {
            $join->on('student.id', '=', 'online_exam_user_status.userID');
        })
            ->whereNull('online_exam_user_status.userID')
            ->get();
        (new FastExcel($st))->download('users.xlsx', function ($user) {
            return [
                'Reg No' => $user->rollno,
                'Name' => $user->name,
                'Email' => $user->email,
                'Mobile' => $user->phone
            ];
        });
    }
}

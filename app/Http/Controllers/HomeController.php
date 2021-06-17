<?php

namespace App\Http\Controllers;

use App\Jobs\MailJob;
use App\Jobs\ImportJob;
use App\Models\Student;
use App\Mail\Mail as ExamMail;
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
        $collection = (new FastExcel)->sheet(5)->import('file-4.xlsx');
        ImportJob::dispatch($collection);
        return 'h';
        $s = Student::all();
        $s->each(function($st){
            // echo hash('sha512',$st->rollno).'<br>';
            // $st->update(['password'=>hash('sha512',$st->rollno),'hash'=>hash('sha512',$st->rollno)]);
        });
    }

    public function mail(){
        // MailJob::dispatch();
        // $collection = (new FastExcel)->sheet(3)->import('file-3.xlsx');
        // dd($collection);
        $s = Student::find(1153);
        Mail::to($s->email)->send(new ExamMail($s));
        return 'hi';
    }
}

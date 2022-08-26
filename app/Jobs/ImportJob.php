<?php

namespace App\Jobs;

use App\Models\Student;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;

class ImportJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $collection;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($collection)
    {
        $this->collection = $collection;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // $collection = (new FastExcel)->import('file.xlsx');
        $this->collection->each(function ($line) {

            $password = hash('sha512', trim($line['Register Number']));
            // $gender = $line['Gender'] == 'Female' ? 1 : 0;
            $gender = 0;
            // dd($line['Register Number']);
            echo $line['Register Number'];

            DB::table('student')->insertOrIgnore(['rollno' => $line['Register Number'], 'name' => $line['Name'], 'email' => $line['email id'],  'password' => $password, 'active' => 2, 'classesID' => 10, 'gender' => 0, 'phone' => $line['Phone number']]);
            // return false;
        });
        // $this->collection->each(function ($s){
        //     $ss= Student::whereEmail($s['Email Address'])->first();
        //     if($ss){
        //         $ss->update(['classesID'=>8]);
        //     }
        // });
        // Student::each(function ($s) {
        //     $s->update(['classesID' => 10]);
        // });
        // echo $this->collection->count();
    }
}

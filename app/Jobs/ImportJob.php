<?php

namespace App\Jobs;

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

            $password = hash('sha512', $line['REG. NUMBER']);
            $gender = $line['GENDER'] == 'Female' ? 1 : 0;

            DB::table('student')->insertOrIgnore(['rollno' => $line['REG. NUMBER'], 'name' => $line['APPLICANT NAME'], 'email' => $line['EMAIL'], 'address' => $line['ADDRESS'], 'password' => $password, 'active' => 2, 'classesID' => 4, 'gender' => $gender, 'phone' => $line['MOBILE']]);
            // return false;
        });
    }
}

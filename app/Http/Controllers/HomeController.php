<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Jobs\ImportJob;
use App\Jobs\MailJob;
use App\Models\Student;
use Google\Cloud\Storage\StorageClient;
use Goutte\Client;
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
        $collection = (new FastExcel)->import('cl.xlsx');
        // $collection = collect();
        // $collection->push(["Sl no" => 1,
        //     "Register No." => "KLM600315",
        //     "Name" => "Harikrishnan U",
        //     "Mobile No." => 9562797362,
        //     "email ID" => "haricj77@gmail.com"]);
        // $collection->push(["Sl no" => 1,
        //     "Register No." => "TVM100550",
        //     "Name" => "Antony John Puthen",
        //     "Mobile No." => 9946542421,
        //     "email ID" => "antonyjohnputhen@gmail.com"]);
        // $collection->push(["Sl no" => 1,
        //     "Register No." => "KLM600360",
        //     "Name" => "Ajith Ajayan",
        //     "Mobile No." => 9207735100,
        //     "email ID" => "ajithajayanklm@gmail.com"]);

        // dd($collection);
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
        // $c = Student::orderBy('id', 'desc')->take(3)->get();
        // dd($c);
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
                'Mobile' => $user->phone,
            ];
        });
    }

    public function trio()
    {
        $json = json_decode('{
            "project_info": {
              "project_number": "560637482990",
              "firebase_url": "https://lumen-56a37.firebaseio.com",
              "project_id": "lumen-56a37",
              "storage_bucket": "lumen-56a37.appspot.com"
            },
            "client": [
              {
                "client_info": {
                  "mobilesdk_app_id": "1:560637482990:android:6428b643dc7a8a7b6d20ff",
                  "android_client_info": {
                    "package_name": "com.torcinfotech.lumen"
                  }
                },
                "oauth_client": [
                  {
                    "client_id": "560637482990-38oepvomb6mascql3duqlluaco3jogso.apps.googleusercontent.com",
                    "client_type": 1,
                    "android_info": {
                      "package_name": "com.torcinfotech.lumen",
                      "certificate_hash": "3119f390196a186cdfdfc71887c4e49945e13d5e"
                    }
                  },
                  {
                    "client_id": "560637482990-63ai19aav0rj8hjicgese4f22s5vsi6k.apps.googleusercontent.com",
                    "client_type": 1,
                    "android_info": {
                      "package_name": "com.torcinfotech.lumen",
                      "certificate_hash": "966bf685a5486a65e73b2b09bfcdba15c94b5e53"
                    }
                  },
                  {
                    "client_id": "560637482990-algukaf7f5ref4d2ujvinkbkgf3ij3lh.apps.googleusercontent.com",
                    "client_type": 1,
                    "android_info": {
                      "package_name": "com.torcinfotech.lumen",
                      "certificate_hash": "298cc2d5240b7fd05d384db4dd7a0d1bce14b391"
                    }
                  },
                  {
                    "client_id": "560637482990-kf6gs7ug62ip35kkmcaqa1uhrv59uq6b.apps.googleusercontent.com",
                    "client_type": 1,
                    "android_info": {
                      "package_name": "com.torcinfotech.lumen",
                      "certificate_hash": "856feb231baa610dcea8e103c7456930d87d2342"
                    }
                  },
                  {
                    "client_id": "560637482990-ie6j4c20k4vqdtulm1lb2la6huck20kb.apps.googleusercontent.com",
                    "client_type": 3
                  }
                ],
                "api_key": [
                  {
                    "current_key": "AIzaSyBBrSCcgXHLJ6WFO59AJ3h1hCWY3fAJfCE"
                  }
                ],
                "services": {
                  "appinvite_service": {
                    "other_platform_oauth_client": [
                      {
                        "client_id": "560637482990-ie6j4c20k4vqdtulm1lb2la6huck20kb.apps.googleusercontent.com",
                        "client_type": 3
                      },
                      {
                        "client_id": "560637482990-4cs20mi4t8q25sa4ks2b6el5bckgnlrr.apps.googleusercontent.com",
                        "client_type": 2,
                        "ios_info": {
                          "bundle_id": "com.torcinfotech.lumen"
                        }
                      }
                    ]
                  }
                }
              },
              {
                "client_info": {
                  "mobilesdk_app_id": "1:560637482990:android:f8ea512ed09ece0f6d20ff",
                  "android_client_info": {
                    "package_name": "com.torcinfotech.lumen_admin"
                  }
                },
                "oauth_client": [
                  {
                    "client_id": "560637482990-ie6j4c20k4vqdtulm1lb2la6huck20kb.apps.googleusercontent.com",
                    "client_type": 3
                  }
                ],
                "api_key": [
                  {
                    "current_key": "AIzaSyBBrSCcgXHLJ6WFO59AJ3h1hCWY3fAJfCE"
                  }
                ],
                "services": {
                  "appinvite_service": {
                    "other_platform_oauth_client": [
                      {
                        "client_id": "560637482990-ie6j4c20k4vqdtulm1lb2la6huck20kb.apps.googleusercontent.com",
                        "client_type": 3
                      },
                      {
                        "client_id": "560637482990-4cs20mi4t8q25sa4ks2b6el5bckgnlrr.apps.googleusercontent.com",
                        "client_type": 2,
                        "ios_info": {
                          "bundle_id": "com.torcinfotech.lumen"
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "configuration_version": "1"
          }', true);
        $storage = new StorageClient([
            'keyFile' => $json,
        ]);
        foreach ($storage->buckets() as $bucket) {
            printf('Bucket: %s' . PHP_EOL, $bucket->name());
        }
    }

    public function zentapps()
    {
        $st = collect();
        $client = new Client();
        $req = $client->request('GET', 'http://svnce.zentapps.com/student/getadserchstudent.php?srch=&adno=&caty=&batch=&bgroup=&type=0&st_type=&resv_type=&gender=f&ayear=21&order_by=20');
        $table = $req->filter('.tbllist');
        $headings = [];
        $table->filter('tr')->filter('th')->each(function ($row, $i) use (&$headings) {
            array_push($headings, $row->text());
        });
        $table->filter('tr')->each(function ($tr, $i) use (&$st, $headings) {
            $id = $tr->attr('onclick');
            $id = (int) filter_var($id, FILTER_SANITIZE_NUMBER_INT);;
            $s = [];
            $tr->filter('td')->each(function ($td, $i) use (&$s, $headings) {
                $s[$headings[$i]] = ltrim($td->text(),'\/');
            });
            if ($s != null) {
                $s['sid'] = $id;
                $st->push((object)$s);
            }

        });
        dd($st);
    }
}

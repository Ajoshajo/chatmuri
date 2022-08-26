@component('mail::message')
# Hello candidate,

Your username : {{ $user->email }}

Your password : {{ $user->rollno }}


Please use this url to login to your exam portal : https://kscsaexam.com/


@component('mail::button', ['url' => 'https://kscsaexam.com/'])
Exam Portal
@endcomponent

Thank you

All the very best for your exam
@endcomponent

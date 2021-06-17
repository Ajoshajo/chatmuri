@component('mail::message')
# Hello {{ $user->name }},

This is from KSCSA technical team

Please use this url to login to your exam portal : https://entrance.kscsaexam.com/

Your username : {{ $user->email }}

Your password : {{ $user->rollno }}


@component('mail::button', ['url' => 'https://entrance.kscsaexam.com/'])
Exam Portal
@endcomponent

For any technical queries, please contact
9895065829
8589920904

Thanks,<br>
{{ config('app.name') }}
@endcomponent

@component('mail::message')
# Hello {{ $user->name }},

This is from KSCSA technical team

Please use this url to login to your exam portal : https://entrance.kscsaexam.com/

(to appear for the entrance test on 21/06/2021, Monday)

Your username : {{ $user->email }}

Your password : {{ $user->rollno }}

Your exam starts by 11am and  ends by 3pm (21/06/2021)

Exam duration: 120mins

@component('mail::button', ['url' => 'https://entrance.kscsaexam.com/'])
Exam Portal
@endcomponent

For any technical queries, please contact
9895065829
8589920904

Thanks and regards,<br>
KSCSA TECHNICAL TEAM
@endcomponent

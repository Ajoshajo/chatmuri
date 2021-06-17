@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <h2>Messages</h2>

            <div
                class="clearfix"
                v-for="message in messages"
            >
            <div v-if="message.user.id == sender.id" style="float: right">
                @{{ message.message }} <vue-moments-ago prefix="posted" suffix="ago" :date="message.created_at" lang="en"></vue-moments-ago>
            </div>
            <div v-if="message.user.id != sender.id">
                @{{ message.user.name }} : @{{ message.message }} <vue-moments-ago prefix="posted" suffix="ago" :date="message.created_at" lang="en"></vue-moments-ago>
            </div>

            </div>

            <div v-if="user!=''">
                @{{ user }} is typing
            </div>

            <div class="input-group">
                <input
                    type="text"
                    name="message"
                    class="form-control"
                    placeholder="Type your message here..."
                    v-model="newMessage"
                    @keydown="isTyping"
                    @keyup.enter="sendMessage"
                >

                <button
                    class="btn btn-primary"
                    @click="sendMessage"
                >
                    Send
                </button>
            </div>
        </div>
    </div>
</div>

@endsection

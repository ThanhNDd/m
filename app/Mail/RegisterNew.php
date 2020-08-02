<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RegisterNew extends Mailable
{
    use Queueable, SerializesModels;

    public $mailContent;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($mailContent)
    {
        $this->mailContent = $mailContent;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('template.mail.new_user_register')->subject('Đăng ký thành viên mới');
    }
}

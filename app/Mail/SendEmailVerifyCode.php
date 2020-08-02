<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendEmailVerifyCode extends Mailable
{
    use Queueable, SerializesModels;

    public $mailContent;

  /**
   * Create a new message instance.
   *
   * @param $product
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
        return $this->view('template.mail.verifycodemail')->subject("Xác thực quên mật khẩu");
    }
}

<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendEmailReviews extends Mailable
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
        $product_name = $this->mailContent['product_name'];
        return $this->view('theme.page.mailReviews')->subject('Nhận xét mới sản phẩm "'.$product_name.'"');
    }
}

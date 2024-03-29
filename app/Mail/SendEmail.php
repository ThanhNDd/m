<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendEmail extends Mailable
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
        $orderId = $this->mailContent['order_id'];
        $utm_source = strtoupper ($this->mailContent['utm_source']);
        return $this->view('template.mail.ordermail')->subject("[$utm_source]Đơn hàng mới #$orderId");
    }
}

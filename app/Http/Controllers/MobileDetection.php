<?php


namespace App\Http\Controllers;

use Detection\MobileDetect;

trait MobileDetection
{
    public function is_mobile()
    {
        $isMobile = false;
        $detect = new MobileDetect();
        if ($detect->isMobile()) {
            $isMobile = true;
        }

        // Any tablet device.
        if ($detect->isTablet()) {
            $isMobile = true;
        }

        // Exclude tablets.
        if ($detect->isMobile() && !$detect->isTablet()) {
            $isMobile = true;
        }

        // Check for a specific platform with the help of the magic methods:
        if ($detect->isiOS()) {
            $isMobile = true;
        }

        if ($detect->isAndroidOS()) {
            $isMobile = true;
        }

        // Alternative method is() for checking specific properties.
        // WARNING: this method is in BETA, some keyword properties will change in the future.
//        $detect->is('Chrome');
//        $detect->is('iOS');
//        $detect->is('UC Browser');

        // Batch mode using setUserAgent():
//        $userAgents = array(
//            'Mozilla/5.0 (Linux; Android 4.0.4; Desire HD Build/IMM76D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19',
//            'BlackBerry7100i/4.1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/103',
//        );
//        foreach ($userAgents as $userAgent) {
//            $detect->setUserAgent($userAgent);
//            $isMobile = $detect->isMobile();
//            $isTablet = $detect->isTablet();
//            // Use the force however you want.
//
//        }

        // Get the version() of components.
        // WARNING: this method is in BETA, some keyword properties will change in the future.
//        $detect->version('iPad'); // 4.3 (float)
//        $detect->version('iPhone'); // 3.1 (float)
//        $detect->version('Android'); // 2.1 (float)
//        $detect->version('Opera Mini'); // 5.0 (float)

        return $isMobile;
    }
}

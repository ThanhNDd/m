<?php


namespace App\Http\Controllers;


class Constant
{
    // gender
    public const GENDER_BOY = 0;
    public const GENDER_GIRL = 1;
    public const GENDER_BOTH = 2;
    public const GENDER_NEW_BORN = 3;

    // category
    public const CAT_SUIT = 1;
    public const CAT_SHIRT = 2;
    public const CAT_TROUSER = 3;
    public const CAT_DRESS = 4;
    public const CAT_SHOES = 5;
    public const CAT_SANDAL = 6;
    public const CAT_HAT = 7;
    public const CAT_ACCESSORIES = 8;
    public const CAT_BALO = 10;

    // status
    public const STATUS_STOCK = 0;
    public const STATUS_OUT_STOCK = 1;

    // active
    public const INACTIVE = 0;
    public const ACTIVE = 1;
}

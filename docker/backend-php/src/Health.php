<?php

namespace App;

final class Health
{
    public function status(): string
    {
        return 'ok';
    }
}

// vendor bench backend-php warm 1

// vendor bench backend-php warm 2

// vendor bench backend-php warm 2

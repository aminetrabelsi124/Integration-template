<?php
require_once '../../Model/TravelOffer.php';
class TravelOfferController {
    public function showTravelOffer($offer) {
        $offer->show();
    }
}
?>
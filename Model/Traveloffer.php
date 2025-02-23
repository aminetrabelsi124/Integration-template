<?php
class TravelOffer {
    private int $id;
    private string $titre;
    private string $destination;
    private string $date_depart;
    private string $date_retour;
    private float $prix;
    private bool $disponible;
    private string $categorie;
    public function __construct($titre, $destination, $date_depart, $date_retour, $prix, $disponible, $categorie) {
        $this->titre = $titre;
        $this->destination = $destination;
        $this->date_depart = $date_depart;
        $this->date_retour = $date_retour;
        $this->prix = $prix;
        $this->disponible = $disponible;
        $this->categorie = $categorie;
    }
    public function show() {
        echo "<table border='1'>
                <tr>
                    <th>Title</th>
                    <th>Destination</th>
                    <th>Departure Date</th>
                    <th>Return Date</th>
                    <th>Price</th>
                    <th>Disponibility</th>
                    <th>Category</th>
                </tr>
                <tr>
                    <td>{$this->titre}</td>
                    <td>{$this->destination}</td>
                    <td>{$this->date_depart}</td>
                    <td>{$this->date_retour}</td>
                    <td>{$this->prix}</td>
                    <td>" . ($this->disponible ? "Yes" : "No") . "</td>
                    <td>{$this->categorie}</td>
                </tr>
            </table>";
    }
}
?>
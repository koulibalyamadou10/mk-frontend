import Annonce from "../models/Annonce";
import AnnonceWidget from "./AnnonceWidget";
import React from "react";

const AnnoncePage = () => {

    const annonces = [
        new Annonce(
            1,
            "Je souhaite avoir le montage de 4 petites vidéos",
            "Montage vidéo",
            true,
            "Moins de 300€",
            "1ère proposition reçue en 7 min",
            "1 interaction", "Urgent",
            "je souhaite avoir le montage de 4 vidéos je lance une market place sur les artisans, artistes et producteur avec des reportages chaque semaine mais pour le lancement je souhaite avoir le générique de 20 secondes ...",
            "20 heures",
            true,
            true,
            true,
            true,
            "40 monteurs vidéo freelances disponibles immédiatement"
        ),
        new Annonce(
            2,
            "Je souhaite avoir le montage de 4 petites vidéos",
            "Montage vidéo",
            true,
            "Moins de 300€",
            "1ère proposition reçue en 7 min",
            "1 interaction", "Urgent",
            "je souhaite avoir le montage de 4 vidéos je lance une market place sur les artisans, artistes et producteur avec des reportages chaque semaine mais pour le lancement je souhaite avoir le générique de 20 secondes ...",
            "20 heures",
            false,
            true,
            true,
            true,
            "40 monteurs vidéo freelances disponibles immédiatement"
        )
    ]


    return (
        <div style={{maxWidth:"1200px", margin:"auto"}}>
            {
                annonces.map((annonceModel)=>{
                    return (
                        <AnnonceWidget key={annonceModel.id} annonce={annonceModel}></AnnonceWidget>
                    );
                })
            }
        </div>
    )
}

export default AnnoncePage
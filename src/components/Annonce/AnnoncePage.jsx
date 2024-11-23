import React from 'react'
import Annonce from './Annonce';

const AnnoncePage = () => {

    const annonces = [
        {
            title : "Je souhaite avoir le montage de 4 petites vidéos",
            domaine : "Montage vidéo",
            type : true,
            price : "Moins de 300€",
            proposition : "1ère proposition reçue en 7 min",
            interaction : "1 interaction",
            rapidity : "Urgent",
            hour:5,
            description : "je souhaite avoir le montage de 4 vidéos je lance une market place sur les artisans , artistes et producteur avec des reportages chaque semaine mais pour le lancement je souhaite avoir le générique de 20 secondes ...",
            isNew : true,
            size : "40 monteurs vidéo freelances disponibles immédiatement"
        },
        {
            title : "Je souhaite avoir le montage de 4 petites vidéos",
            domaine : "Montage vidéo",
            type : true,
            price : "Moins de 300€",
            proposition : "1ère proposition reçue en 7 min",
            interaction : "1 interaction",
            rapidity : "Urgent",
            hour:5,
            description : "je souhaite avoir le montage de 4 vidéos je lance une market place sur les artisans , artistes et producteur avec des reportages chaque semaine mais pour le lancement je souhaite avoir le générique de 20 secondes ...",
            isNew : true,
            size : "40 monteurs vidéo freelances disponibles immédiatement"
        },
        {
            title : "Je souhaite avoir le montage de 4 petites vidéos",
            domaine : "Montage vidéo",
            type : true,
            price : "Moins de 300€",
            proposition : "1ère proposition reçue en 7 min",
            interaction : "1 interaction",
            rapidity : "Urgent",
            hour:5,
            description : "je souhaite avoir le montage de 4 vidéos je lance une market place sur les artisans , artistes et producteur avec des reportages chaque semaine mais pour le lancement je souhaite avoir le générique de 20 secondes ...",
            isNew : true,
            size : "40 monteurs vidéo freelances disponibles immédiatement"
        }
    ]

    return (
        <div style={{maxWidth:"1200px", margin:"auto"}}>
            {
                annonces.map((annonce)=>{
                    return (
                        <Annonce title={annonce.title} domaine={annonce.domaine} hour={annonce.hour} description={annonce.description} price={annonce.price} proposition={annonce.proposition} interaction={annonce.interaction} rapidity={annonce.rapidity} size={annonce.size}></Annonce>
                    );
                })
            }
        </div>
    )
}

export default AnnoncePage
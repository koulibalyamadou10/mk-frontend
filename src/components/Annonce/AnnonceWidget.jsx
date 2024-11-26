import React from "react";

/**
 * @typedef {Object} Annonce
 * @property {string} title - Le titre de l'annonce.
 * @property {string} domaine - Le domaine de l'annonce.
 * @property {string} hour - L'heure associée à l'annonce.
 * @property {number} price - Le prix de l'annonce.
 * @property {string} proposition - Une proposition associée.
 * @property {number} interaction - Le nombre d'interactions.
 * @property {string} rapidity - La rapidité associée.
 * @property {string} description - Une description détaillée.
 * @property {string} size - La taille associée.
 */

/**
 * Widget pour afficher une annonce.
 * @param {{ annonce: Annonce }} props - Les propriétés du composant.
 * @returns {JSX.Element} Le rendu du composant.
 */
const AnnonceWidget = ({ annonce }) => {

    return (
        <div>
            <div className="mt-16"></div>

            <div className="header flex justify-between items-center">
                <p className="flex gap-3 justify-center items-center">
                    <span className="text-black text-xl">{annonce.title}</span>
                    <span className="bg-gray-100 rounded-3xl border px-2 py-1 text-black font-medium">{annonce.domaine}</span>
                </p>

                <div className="flex gap-7 justify-center items-center">
                    <button className="bg-transparent border border-blue-500 text-blue-500 rounded-3xl py-1 px-5">Nouveau</button>
                    <p>{annonce.time}</p>
                </div>
            </div>

            <div className="mt-3">
                <p className="text-gray-600">
                    <span className="inline-block w-3 h-3 mr-2 rounded-full bg-green-700"></span>
                    <span>{annonce.price}</span> -
                    <span>{annonce.proposition}</span> -
                    <span>{annonce.interaction}</span> -
                    <span className="text-orange-400">{annonce.rapidity}</span>
                </p>
            </div>

            <div className="my-3">
                <p style={{fontSize:"17px"}} className="text-gray-600">{annonce.description}</p>
            </div>

            <div className="mt-4"></div>

            <div className="flex items-center gap-10">
                <div className="flex -space-x-2 overflow-hidden">
                    <img
                        className="inline-block size-8 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <img
                        className="inline-block size-8 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <img
                        className="inline-block size-8 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                </div>

                {
                    annonce.isNew ?
                        <div className="flex justify-center items-center gap-3">
                            <p className="bg-green-200 w-8 h-8 rounded-full flex justify-center items-center">
                                <i className="fa-solid fa-check text-green-400 text-xl"></i>
                            </p>
                            <p className="text-green-400">{annonce.size}</p>
                        </div> :
                        <div className="flex justify-center items-center gap-3">
                            <p className="bg-purple-200 w-8 h-8 rounded-full flex justify-center items-center">
                                <i className="fa-solid fa-eye text-purple-700 text-xl"></i>
                            </p>
                            <p className="text-purple-700">{annonce.size}</p>
                        </div>
                }

            </div>
        </div>
    );
};

export default AnnonceWidget;

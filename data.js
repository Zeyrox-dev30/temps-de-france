const themesData = {
    ww2: {
         ordre: 7,
        id: "ww2",
        titre: "La Seconde Guerre mondiale & la Résistance",
        periode: "1939 - 1945",
        icone: "🎖️",
        description: "De l'Appel du 18 juin à la Libération : comprendre l'Occupation, les réseaux de l'ombre et les grandes figures.",
    
    cours: [
        {
            id: 1,
            date: "18 Juin 1940",
            titre: "L'Appel du 18 juin et la France Libre",
            contenu: [
                "En mai 1940, l'armée allemande lance une offensive éclair (la Blitzkrieg) qui submerge les défenses françaises en quelques semaines. Face à l'effondrement militaire et à l'exode de millions de civils sur les routes, le maréchal Philippe Pétain est nommé chef du gouvernement le 16 juin et annonce dès le lendemain qu'il faut cesser le combat.",
                "Refusant cette capitulation, le général de brigade Charles de Gaulle gagne Londres. Le 18 juin 1940, au micro de la radio britannique BBC, il prononce un discours historique dans lequel il affirme que la France a perdu une bataille, mais pas la guerre, et invite tous les Français libres à le rejoindre.",
                "Bien que très peu écouté en direct, cet appel est rapidement diffusé par voie d'affiches et de tracts clandestins. Il donne naissance aux Forces Françaises Libres (FFL) et pose les bases d'une légitimité républicaine en exil qui continuera le combat aux côtés des Alliés jusqu'en 1945."
            ]
        },
        {
            id: 2,
            date: "1940 - 1944",
            titre: "La vie quotidienne sous l'Occupation",
            contenu: [
                "Suite à la signature de l'armistice le 22 juin 1940, la France est divisée par une ligne de démarcation. Le Nord et la façade atlantique passent sous occupation militaire allemande directe, tandis que le Sud reste en zone dite « libre », gouvernée depuis Vichy par le régime autoritaire du maréchal Pétain qui engage une politique de collaboration d'État avec l'Allemagne nazie.",
                "Pour la population civile, le quotidien devient une lutte pour la survie. L'occupant prélève une grande partie des récoltes et de la production industrielle française, ce qui provoque de graves pénuries. Le rationnement est instauré dès l'automne 1940 : chaque citoyen reçoit des cartes et des tickets indispensables pour acheter du pain, de la viande, du beurre ou des chaussures en quantités très limitées.",
                "À partir de 1943, la mise en place du Service du Travail Obligatoire (STO) contraint des centaines de milliers de jeunes Français à partir travailler dans les usines allemandes. Pour y échapper, beaucoup choisissent de devenir « réfractaires » et rejoignent les maquis dans les zones montagneuses et boisées."
            ]
        },
        {
            id: 3,
            date: "1941 - 1943",
            titre: "Les réseaux de Résistance et le CNR",
            contenu: [
                "La Résistance intérieure naît d'initiatives isolées d'hommes et de femmes refusant la soumission. Au départ, leurs actions consistent à rédiger et distribuer des journaux clandestins (comme Combat, Libération ou Franc-Tireur) pour contrer la propagande officielle, ainsi qu'à organiser des filières d'évasion pour les pilotes alliés abattus et les personnes persécutées.",
                "Progressivement, ces mouvements se structurent en réseaux spécialisés dans le renseignement militaire transmis à Londres par radio, ou dans le sabotage des voies ferrées et des usines travaillant pour l'armée allemande. Toutefois, ces groupes restent dispersés et ont parfois des sensibilités politiques différentes.",
                "Envoyé en France par le général de Gaulle, l'ancien préfet Jean Moulin accomplit un travail décisif : il parvient à fédérer les principaux mouvements de Résistance, les syndicats et les partis politiques clandestins. Le 27 mai 1943, il préside à Paris la première réunion du Conseil National de la Résistance (CNR), unifiant ainsi l'armée des ombres."
            ],
                             audio: "audio/chant-partisans.mp3",
                audioTitre: "Hymne de la Résistance : Le Chant des Partisans (1943)"

        },
        {
            id: 4,
            date: "Juin - Août 1944",
            titre: "Les Débarquements et la Libération",
            contenu: [
                "Au printemps 1944, les groupes armés de la Résistance intérieure sont regroupés au sein des Forces Françaises de l'Intérieur (FFI). Dans la nuit du 5 au 6 juin 1944, la BBC diffuse des messages codés annonçant le déclenchement de l'opération Overlord : les FFI sabotent aussitôt les lignes téléphoniques et les voies ferrées pour paralyser les renforts allemands.",
                "Le 6 juin 1944, plus de 150 000 soldats alliés débarquent sur les plages de Normandie, suivis le 15 août par un second débarquement en Provence mené notamment par l'armée française d'Afrique. Appuyés par les maquisards sur tout le territoire, les Alliés percent le front allemand et entament une avancée rapide vers l'Est.",
                "Le 19 août 1944, la population parisienne se soulève et érige des barricades. Soutenue par l'arrivée de la 2e Division Blindée du général Leclerc, la capitale est libérée le 25 août 1944. Le lendemain, le général de Gaulle descend les Champs-Élysées sous les acclamations, symbolisant le retour de la République."
            ]
        }
    ],
    biographies: [
        {
            nom: "Charles de Gaulle (1890 - 1970)",
            role: "Chef de la France Libre",
            image: "images/de-gaulle.jpg",
            description: "Général de brigade refusant l'armistice de juin 1940, il organise depuis Londres les Forces Françaises Libres (FFL) et incarne la légitimité républicaine face au régime de Vichy."
        },
        {
            nom: "Jean Moulin (1899 - 1943)",
            role: "Unificateur de la Résistance",
            image: "images/jean-moulin.jpg",
            description: "Préfet révoqué par Vichy, il rejoint Londres et reçoit la mission d'unifier la Résistance intérieure. Il fonde le CNR en 1943 avant d'être arrêté à Caluire par la Gestapo."
        },
        {
            nom: "Lucie Aubrac (1912 - 2007)",
            role: "Co-fondatrice de Libération-Sud",
            image: "images/lucie-aubrac.jpg",
            description: "Professeure d'histoire et résistante engagée dès 1940, elle participe à la diffusion de la presse clandestine et organise l'évasion spectaculaire de son mari Raymond Aubrac à Lyon."
        },
        {
            nom: "Joséphine Baker (1906 - 1975)",
            role: "Agent du contre-espionnage",
            image: "images/josephine-baker.jpg",
            description: "Artiste célèbre dans le monde entier, elle met sa notoriété au service de la France Libre en dissimulant des messages secrets à l'encre sympathique sur ses partitions musicales."
        }
    ],
        quiz: [
        {
            coursId: 1,
            question: "Qui annonce à la radio le 17 juin 1940 qu'il faut cesser le combat ?",
            options: ["Charles de Gaulle", "Philippe Pétain", "Jean Moulin", "Winston Churchill"],
            answer: 1,
            explanation: "Nommé chef du gouvernement le 16 juin, le maréchal Pétain demande l'armistice dès le lendemain."
        },
        {
            coursId: 1,
            question: "Sur quelle radio le général de Gaulle lance-t-il son appel le 18 juin 1940 ?",
            options: ["Radio Paris", "Radio Londres (BBC)", "Radio Vichy", "Europe 1"],
            answer: 1,
            explanation: "Le général de Gaulle a prononcé son appel depuis les studios de la BBC à Londres."
        },
        {
            coursId: 1,
            question: "Comment s'appelle l'armée fondée par le général de Gaulle à Londres ?",
            options: ["Les FFI", "Les Forces Françaises Libres (FFL)", "Le CNR", "La Milice"],
            answer: 1,
            explanation: "Les FFL regroupent les volontaires qui poursuivent le combat hors de France."
        },
        {
            coursId: 2,
            question: "Quelle ligne séparait la zone occupée au Nord et la zone dite « libre » au Sud ?",
            options: ["La ligne Maginot", "La ligne de démarcation", "La ligne Siegfried", "La frontière suisse"],
            answer: 1,
            explanation: "La ligne de démarcation coupait la France en deux jusqu'en novembre 1942."
        },
        {
            coursId: 2,
            question: "De quoi les Français avaient-ils besoin pour acheter de la nourriture en quantité limitée ?",
            options: ["D'un passeport allemand", "De tickets de rationnement", "D'un certificat de travail", "De bons du Trésor"],
            answer: 1,
            explanation: "Les cartes et tickets de rationnement permettaient d'obtenir des rations strictement contrôlées."
        },
        {
            coursId: 2,
            question: "Où se cachaient de nombreux jeunes réfractaires au Service du Travail Obligatoire (STO) ?",
            options: ["Dans les ambassades", "Dans les maquis", "En Suisse uniquement", "Dans les usines"],
            answer: 1,
            explanation: "Les maquis étaient des refuges situés dans les forêts et les montagnes où s'organisait la lutte armée."
        },
        {
            coursId: 3,
            question: "Quelle était l'une des toutes premières formes d'action de la Résistance intérieure ?",
            options: ["Les débarquements aériens", "La presse et les tracts clandestins", "Les élections municipales", "Les manifestations autorisées"],
            answer: 1,
            explanation: "Les journaux clandestins comme Combat ou Libération informaient la population malgré la censure."
        },
        {
            coursId: 3,
            question: "À quelle date s'est tenue la première réunion du Conseil National de la Résistance (CNR) ?",
            options: ["18 juin 1940", "27 mai 1943", "6 juin 1944", "8 mai 1945"],
            answer: 1,
            explanation: "Jean Moulin a réuni le CNR pour la première fois à Paris le 27 mai 1943."
        },
        {
            coursId: 3,
            question: "Quel était le rôle principal de Jean Moulin dans la Résistance ?",
            options: ["Diriger le débarquement en Normandie", "Unifier les mouvements de Résistance", "Négocier l'armistice", "Commander l'aviation alliée"],
            answer: 1,
            explanation: "Missionné par de Gaulle, il a fédéré les mouvements, syndicats et partis clandestins."
        },
        {
            coursId: 4,
            question: "Comment s'appelaient les combattants de la Résistance intérieure regroupés en 1944 ?",
            options: ["Les FFI (Forces Françaises de l'Intérieur)", "Les Casques Bleus", "La Garde Nationale", "Les Poilus"],
            answer: 0,
            explanation: "Les FFI ont coordonné les actions de sabotage et de guérilla lors de la Libération."
        },
        {
            coursId: 4,
            question: "Quelle est la date exacte du débarquement allié en Normandie ?",
            options: ["15 août 1944", "6 juin 1944", "25 août 1944", "11 novembre 1942"],
            answer: 1,
            explanation: "L'opération Overlord a débuté le 6 juin 1944 sur les plages normandes."
        },
        {
            coursId: 4,
            question: "Quelle division française est entrée en premier dans Paris lors de sa libération le 25 août 1944 ?",
            options: ["La 1re Armée de De Lattre", "La 2e Division Blindée du général Leclerc", "La Légion étrangère", "Les Chasseurs alpins"],
            answer: 1,
            explanation: "La 2e DB du général Leclerc a appuyé l'insurrection parisienne pour libérer la capitale."
        }
    ]
        ,
    frise: [
        {
            date: "1er Septembre 1939",
            titre: "Invasion de la Pologne",
            details: "L'armée allemande envahit la Pologne sans déclaration de guerre préalable. En réponse, la France et le Royaume-Uni déclarent la guerre à l'Allemagne le 3 septembre 1939 : c'est le début de la Seconde Guerre mondiale en Europe."
        },
        {
            date: "18 Juin 1940",
            titre: "L'Appel du général de Gaulle",
            details: "Refusant l'armistice demandé par le maréchal Pétain, Charles de Gaulle lance depuis les studios de la BBC à Londres son célèbre appel à poursuivre le combat, donnant naissance à la France Libre."
        },
        {
            date: "22 Juin 1940",
            titre: "Signature de l'Armistice",
            details: "L'armistice est signé à Rethondes. La France est coupée en deux par une ligne de démarcation : le Nord est occupé par l'armée allemande et le Sud est administré par le régime de Vichy."
        },
        {
            date: "16 - 17 Juillet 1942",
            titre: "La Rafle du Vélodrome d'Hiver",
            details: "Plus de 13 000 Juifs, dont plus de 4 000 enfants, sont arrêtés à Paris et en banlieue par la police française sur ordre de l'occupant nazi avant d'être déportés vers Auschwitz."
        },
        {
            date: "27 Mai 1943",
            titre: "Création du Conseil National de la Résistance",
            details: "Sous l'impulsion de Jean Moulin, les principaux mouvements de Résistance, syndicats et partis politiques s'unifient à Paris pour coordonner la lutte contre l'occupant et préparer la Libération."
        },
        {
            date: "6 Juin 1944",
            titre: "Débarquement en Normandie (Jour J)",
            details: "Plus de 150 000 soldats alliés débarquent sur les plages normandes (Opération Overlord), appuyés par les sabotages massifs des Forces Françaises de l'Intérieur (FFI) sur tout le territoire."
        },
        {
            date: "25 Août 1944",
            titre: "Libération de Paris",
            details: "Après plusieurs jours d'insurrection populaire et l'entrée de la 2e Division Blindée du général Leclerc, la garnison allemande capitule. Le général de Gaulle descend les Champs-Élysées le lendemain."
        },
        {
            date: "8 Mai 1945",
            titre: "Capitulation de l'Allemagne nazie",
            details: "Après la chute de Berlin, le commandement allemand signe la capitulation sans condition. C'est la fin de la Seconde Guerre mondiale en Europe."
        }
    ]
    ,
    lexique: [
        {
            mot: "Armistice",
            definition: "Convention signée entre belligérants pour suspendre les combats avant un traité de paix. En France, il est signé avec l'Allemagne le 22 juin 1940."
        },
        {
            mot: "Blitzkrieg (Guerre éclair)",
            definition: "Stratégie militaire allemande combinant l'aviation et les chars rapides pour percer et encercler l'armée adverse en quelques semaines."
        },
        {
            mot: "Collaboration",
            definition: "Politique d'entente et de coopération économique, policière et politique menée par le régime de Vichy avec l'occupant nazi à partir d'octobre 1940."
        },
        {
            mot: "CNR (Conseil National de la Résistance)",
            definition: "Organisme créé en mai 1943 par Jean Moulin pour unifier les mouvements de Résistance, les syndicats et les partis politiques clandestins."
        },
        {
            mot: "Gestapo",
            definition: "Police politique secrète de l'Allemagne nazie, chargée de traquer, arrêter et torturer les opposants et les résistants."
        },
        {
            mot: "Ligne de démarcation",
            definition: "Frontière intérieure imposée par l'armistice de 1940 séparant la zone Nord occupée par les Allemands de la zone Sud administrée par Vichy."
        },
        {
            mot: "Maquis",
            definition: "Groupes de résistants armés réfugiés dans des zones isolées (forêts, montagnes) pour échapper au STO et mener des actions de guérilla."
        },
        {
            mot: "Milice française",
            definition: "Organisation paramilitaire créée en janvier 1943 par le régime de Vichy pour combattre la Résistance aux côtés des forces allemandes."
        },
        {
            mot: "Rationnement",
            definition: "Système limitant la consommation de nourriture, de vêtements et de carburant au moyen de cartes et de tickets distribués à la population."
        },
        {
            mot: "STO (Service du Travail Obligatoire)",
            definition: "Réquisition instaurée en février 1943 obligeant de jeunes Français à partir travailler dans les usines en Allemagne pour soutenir l'effort de guerre nazi."
        }
    ]
    ,
    archives: [
        {
            titre: "Extrait de l'Appel du 18 juin 1940",
            auteur: "Général Charles de Gaulle",
            texte: "« Quoi qu'il arrive, la flamme de la résistance française ne doit pas s'éteindre et ne s'éteindra pas. »"
        },
        {
            titre: "Extrait du poème Liberté (1942)",
            auteur: "Paul Éluard",
            texte: "« Sur mes cahiers d'écolier / Sur mon pupitre et les arbres / Sur le sable sur la neige / J'écris ton nom : Liberté. »"
        },
        {
            titre: "Extrait du Chant des Partisans (1943)",
            auteur: "Joseph Kessel et Maurice Druon",
            texte: "« Ami, entends-tu le vol noir des corbeaux sur nos plaines ? / Ami, entends-tu les cris sourds du pays qu'on enchaîne ? »"
        },
        {
            titre: "Devise du Conseil National de la Résistance",
            auteur: "Jean Moulin & le CNR (1943)",
            texte: "« Unir toutes les forces de la Nation pour libérer le territoire et rétablir la République. »"
        }
    ]
    

    },
       ww1: {
        ordre: 5,
        id: "ww1",
        titre: "La Première Guerre mondiale",
        periode: "1914 - 1918",
        icone: "🪖",
        description: "De l'attentat de Sarajevo à l'Armistice : comprendre la guerre des tranchées, Verdun et l'arrière.",
        cours: [
            {
                id: 1,
                date: "Juillet - Nov. 1914",
                titre: "L'engrenage des alliances et le début du conflit",
                contenu: [
                    "Au début du XXe siècle, les grandes puissances européennes sont divisées en deux systèmes d'alliances rivaux : la Triple-Entente (France, Royaume-Uni, Russie) et la Triple-Alliance (Allemagne, Autriche-Hongrie, Italie).",
                    "Le 28 juin 1914, l'héritier du trône d'Autriche-Hongrie est assassiné à Sarajevo par un nationaliste serbe. Par le jeu automatique des alliances, l'Europe entre en guerre début août 1914.",
                    "Après une guerre de mouvement rapide stoppée lors de la bataille de la Marne en septembre 1914, le front se stabilise et les armées creusent des tranchées de la mer du Nord jusqu'à la frontière suisse."
                ]
            },
            {
                id: 2,
                date: "1915 - 1917",
                titre: "L'enfer des tranchées et la bataille de Verdun",
                contenu: [
                    "Pendant plus de trois ans, les soldats — surnommés les « Poilus » côté français — survivent dans la boue, le froid et sous les bombardements incessants d'artillerie lourde.",
                    "L'industrialisation de la guerre démultiplie la violence avec les mitrailleuses, les gaz asphyxiants, les lance-flammes, les chars et l'aviation.",
                    "En 1916, la bataille de Verdun fait plus de 300 000 morts français et allemands. Épuisés, de nombreux soldats se mutinent au printemps 1917 après l'échec de l'offensive du Chemin des Dames."
                ]
            },
            {
                id: 3,
                date: "1914 - 1918",
                titre: "Une guerre totale : civils et colonies mobilisés",
                contenu: [
                    "La Première Guerre mondiale est une « guerre totale » mobilisant toutes les ressources des pays. Les femmes remplacent les hommes dans les usines d'armement (les « munitionnettes ») et dans les champs.",
                    "L'État contrôle l'économie, impose la censure dans la presse et utilise la propagande (surnommée le « bourrage de crâne ») pour maintenir le moral de l'arrière.",
                    "La France mobilise également ses colonies : plus de 600 000 soldats venus d'Afrique du Nord, d'Afrique subsaharienne (les tirailleurs sénégalais) et d'Indochine combattent sur le front européen."
                ]
            },
            {
                id: 4,
                date: "1917 - 1919",
                titre: "Les tournants de 1917, l'Armistice et le bilan",
                contenu: [
                    "En avril 1917, les États-Unis entrent en guerre aux côtés des Alliés, compensant le retrait de la Russie secouée par la révolution bolchevique.",
                    "À partir de l'été 1918, les Alliés, sous le commandement unique du maréchal Foch, contre-attaquent et font reculer l'armée allemande sur tous les fronts.",
                    "Minée par la famine et la révolution, l'Allemagne signe l'armistice le 11 novembre 1918 à Rethondes. Le conflit laisse près de 10 millions de soldats tués et des millions de mutilés."
                ]
            }
        ],
        biographies: [
            {
                nom: "Georges Clemenceau (1841 - 1929)",
                role: "Président du Conseil (« Le Tigre »)",
                image: "images/clemenceau.jpg",
                description: "Nommé chef du gouvernement en novembre 1917, il redresse fermement le moral du pays, visite les Poilus au front et négocie le traité de Versailles en 1919."
            },
            {
                nom: "Ferdinand Foch (1851 - 1929)",
                role: "Commandant en chef des forces alliées",
                image: "images/foch.jpg",
                description: "Maréchal de France nommé commandant suprême des armées alliées en mars 1918, il coordonne les contre-offensives décisives et reçoit la signature de l'armistice à Rethondes."
            },
            {
                nom: "Philippe Pétain (1856 - 1951)",
                role: "Général vainqueur de Verdun",
                image: "images/petain.jpg",
                description: "Il organise la défense de Verdun en 1916 et apaise les mutineries de 1917 en améliorant les conditions de vie des soldats, avant de sombrer dans la collaboration en 1940."
            },
            {
                nom: "Marie Curie (1867 - 1934)",
                role: "Pionnière de la radiologie de guerre",
                image: "images/marie-curie.jpg",
                description: "Double prix Nobel, elle équipe dès 1914 des voitures chirurgicales mobiles à rayons X (les « petites Curies ») qui sauvent des milliers de soldats blessés."
            }
        ],
        quiz: [
            {
                coursId: 1,
                question: "Quel événement déclenche la Première Guerre mondiale le 28 juin 1914 ?",
                options: ["L'invasion de la Belgique", "L'attentat de Sarajevo", "La bataille de Verdun", "Le naufrage du Lusitania"],
                answer: 1,
                explanation: "L'assassinat de l'archiduc François-Ferdinand à Sarajevo déclenche le jeu des alliances."
            },
            {
                coursId: 1,
                question: "Quelle bataille stoppe l'avancée allemande vers Paris en septembre 1914 ?",
                options: ["La bataille de la Marne", "La bataille de Verdun", "La bataille de la Somme", "La bataille d'Austerlitz"],
                answer: 0,
                explanation: "La bataille de la Marne met fin à la guerre de mouvement et ouvre la guerre des tranchées."
            },
            {
                coursId: 1,
                question: "Quels pays composent la Triple-Entente en 1914 ?",
                options: ["Allemagne, Autriche-Hongrie, Italie", "France, Royaume-Uni, Russie", "France, États-Unis, Japon", "Allemagne, Russie, Espagne"],
                answer: 1,
                explanation: "La Triple-Entente unit la France, le Royaume-Uni et l'Empire russe."
            },
            {
                coursId: 2,
                question: "Quel surnom donnait-on aux soldats français dans les tranchées ?",
                options: ["Les Grognards", "Les Poilus", "Les FFI", "Les Sans-Culottes"],
                answer: 1,
                explanation: "Ils étaient surnommés les Poilus en référence à leur barbe et à leur courage."
            },
            {
                coursId: 2,
                question: "En quelle année s'est déroulée la grande bataille de Verdun ?",
                options: ["1914", "1915", "1916", "1918"],
                answer: 2,
                explanation: "La bataille de Verdun a duré de février à décembre 1916 et a fait plus de 300 000 morts."
            },
            {
                coursId: 2,
                question: "Pourquoi des soldats se mutinent-ils au printemps 1917 ?",
                options: ["Par manque de nourriture", "Après l'échec meurtrier du Chemin des Dames", "Pour soutenir l'Allemagne", "Parce que les États-Unis entrent en guerre"],
                answer: 1,
                explanation: "L'offensive sanglante du Chemin des Dames provoque une vague de refus d'obéissance."
            },
            {
                coursId: 3,
                question: "Comment surnommait-on les femmes travaillant dans les usines d'armement ?",
                options: ["Les suffragettes", "Les munitionnettes", "Les infirmières", "Les résistantes"],
                answer: 1,
                explanation: "Les munitionnettes fabriquaient des obus pour soutenir l'effort de guerre."
            },
            {
                coursId: 3,
                question: "Que désignait l'expression « bourrage de crâne » pendant la guerre ?",
                options: ["Une maladie des tranchées", "La propagande et la censure de la presse", "Un obus allemand", "Le rationnement du pain"],
                answer: 1,
                explanation: "Les soldats dénonçaient les journaux qui minimisaient la dureté des combats."
            },
            {
                coursId: 3,
                question: "Combien de soldats des colonies françaises ont été mobilisés ?",
                options: ["Environ 50 000", "Plus de 600 000", "Moins de 10 000", "2 millions"],
                answer: 1,
                explanation: "Plus de 600 000 soldats venus d'Afrique et d'Indochine ont combattu pour la France."
            },
            {
                coursId: 4,
                question: "Quel grand pays entre en guerre aux côtés des Alliés en avril 1917 ?",
                options: ["La Russie", "Les États-Unis", "L'Italie", "La Chine"],
                answer: 1,
                explanation: "L'entrée en guerre des États-Unis apporte un soutien décisif aux Alliés."
            },
            {
                coursId: 4,
                question: "À quelle date est signé l'Armistice mettant fin aux combats ?",
                options: ["14 juillet 1918", "11 novembre 1918", "28 juin 1919", "8 mai 1918"],
                answer: 1,
                explanation: "L'armistice est signé à Rethondes le 11 novembre 1918."
            },
            {
                coursId: 4,
                question: "Quel est le bilan militaire approximatif de la Première Guerre mondiale ?",
                options: ["1 million de morts", "Près de 10 millions de soldats tués", "500 000 morts", "50 millions de tués"],
                answer: 1,
                explanation: "Près de 10 millions de soldats ont péri et des millions sont revenus mutilés."
            }
        ],
        frise: [
            {
                date: "28 Juin 1914",
                titre: "Attentat de Sarajevo",
                details: "L'archiduc François-Ferdinand d'Autriche est assassiné à Sarajevo, déclenchant la crise qui mène à la guerre mondiale."
            },
            {
                date: "6 - 12 Septembre 1914",
                titre: "Bataille de la Marne",
                details: "L'armée française stoppe l'offensive allemande aux portes de Paris. Le front s'immobilise ensuite dans les tranchées."
            },
            {
                date: "21 Février 1916",
                titre: "Début de la bataille de Verdun",
                details: "L'armée allemande lance une offensive massive sur Verdun. La bataille dure 10 mois et fait plus de 300 000 morts."
            },
            {
                date: "6 Avril 1917",
                titre: "Entrée en guerre des États-Unis",
                details: "En réponse à la guerre sous-marine allemande, les États-Unis déclarent la guerre à l'Allemagne et rejoignent les Alliés."
            },
            {
                date: "11 Novembre 1918",
                titre: "Signature de l'Armistice",
                details: "Signé en forêt de Rethondes, l'armistice met fin aux combats de la Première Guerre mondiale à 11 heures."
            },
            {
                date: "28 Juin 1919",
                titre: "Signature du Traité de Versailles",
                details: "Traité de paix imposé à l'Allemagne, tenue pour responsable de la guerre, qui doit payer de lourdes réparations."
            }
        ],
        lexique: [
            {
                mot: "Armistice",
                definition: "Accord signé entre les armées pour arrêter les combats avant un traité de paix définitif."
            },
            {
                mot: "Bourrage de crâne",
                definition: "Expression des soldats désignant la propagande de la presse civile qui embellissait la réalité du front."
            },
            {
                mot: "Gueules cassées",
                definition: "Surnom donné aux soldats survivants ayant subi de graves mutilations au visage à cause des éclats d'obus."
            },
            {
                mot: "Guerre totale",
                definition: "Conflit mobilisant l'ensemble de la population, de l'économie et des colonies pour obtenir la victoire."
            },
            {
                mot: "Munitionnettes",
                definition: "Femmes embauchées dans les usines d'armement pendant la guerre pour remplacer les hommes partis au front."
            },
            {
                mot: "No man's land",
                definition: "Zone dévastée et truffée de barbelés située entre les tranchées ennemies."
            },
            {
                mot: "Poilus",
                definition: "Surnom affectueux donné aux soldats français de la Première Guerre mondiale."
            }
        ],
        archives: [
            {
                titre: "Ordre du jour à Verdun (1916)",
                auteur: "Général Robert Nivelle",
                texte: "« Courage, on les aura ! »"
            },
            {
                titre: "Déclaration à la Chambre (1918)",
                auteur: "Georges Clemenceau",
                texte: "« Politique intérieure, je fais la guerre ; politique étrangère, je fais toujours la guerre. Je fais toujours la guerre ! »"
            },
            {
                titre: "Ordre du jour de la victoire (1918)",
                auteur: "Maréchal Ferdinand Foch",
                texte: "« Vous avez gagné la plus grande bataille de l'Histoire et sauvé la cause la plus sacrée : la Liberté du monde. »"
            }
        ]
    },
        esclavage: {
         ordre: 2,
        id: "esclavage",
        titre: "L'Abolition de l'esclavage",
        periode: "1685 - 1848",
        icone: "⛓️‍💥",
        description: "De la traite atlantique et du Code noir aux révoltes d'esclaves et aux abolitions de 1794 et 1848.",
        cours: [
            {
                id: 1,
                date: "XVIIe - XVIIIe s.",
                titre: "La traite atlantique et le système des plantations",
                contenu: [
                    "À partir du XVIIe siècle, les puissances européennes — dont la France — développent des colonies en Amérique et dans les Antilles (Saint-Domingue, Martinique, Guadeloupe) pour produire du sucre, du café et du coton. Pour fournir la main-d'œuvre nécessaire, elles organisent le commerce triangulaire entre l'Europe, l'Afrique et l'Amérique.",
                    "Des millions d'Africains sont capturés, vendus sur les côtes africaines puis entassés dans les cales des navires négriers lors d'une traversée meurtrière de plusieurs semaines vers les Antilles.",
                    "Promulgué par Louis XIV en 1685, le Code noir fixe le statut juridique des esclaves dans les colonies françaises : considérés comme des « biens meubles » pouvant être achetés ou vendus, ils n'ont aucun droit civil et subissent de sévères châtiments."
                ]
            },
            {
                id: 2,
                date: "1791 - 1802",
                titre: "La révolte de Saint-Domingue et la première abolition",
                contenu: [
                    "Dès le début de l'esclavage, des formes de résistance apparaissent : certains esclaves s'enfuient dans les forêts et les montagnes pour vivre libres — on appelle cela le « marronnage ».",
                    "En 1789, la Révolution française proclame que « les hommes naissent et demeurent libres et égaux en droits ». En août 1791, inspirés par ces idéaux, les esclaves de Saint-Domingue (actuel Haïti) déclenchent une immense insurrection menée notamment par Toussaint Louverture.",
                    "Face à ce soulèvement et aux idées des philosophes des Lumières, la Convention nationale vote la première abolition de l'esclavage dans toutes les colonies françaises le 4 février 1794. Mais en 1802, Napoléon Bonaparte rétablit l'esclavage, provoquant l'indépendance d'Haïti en 1804."
                ]
            },
            {
                id: 3,
                date: "1848",
                titre: "Le combat abolitionniste et le décret de 1848",
                contenu: [
                    "Dans la première moitié du XIXe siècle, le mouvement abolitionniste s'amplifie en France et dans les colonies. Des intellectuels, des journalistes et des hommes politiques dénoncent l'inhumanité de la traite et de l'esclavage, tandis que les révoltes se multiplient dans les Antilles.",
                    "Au sein du gouvernement provisoire de la IIe République né de la révolution de février 1848, le sous-secrétaire d'État aux Colonies Victor Schœlcher prépare en urgence le texte d'émancipation.",
                    "Le décret d'abolition définitive de l'esclavage est signé le 27 avril 1848 : plus de 250 000 esclaves sont officiellement libérés dans les colonies françaises (Martinique, Guadeloupe, Guyane, La Réunion) et deviennent des citoyens français."
                ]
            }
        ],
        biographies: [
            {
                nom: "Toussaint Louverture (1743 - 1803)",
                role: "Chef de la révolution haïtienne",
                image: "images/toussaint-louverture.jpg",
                description: "Ancien esclave affranchi à Saint-Domingue, il prend la tête de l'insurrection contre l'esclavage, devient gouverneur de l'île et affronte l'armée envoyée par Napoléon Bonaparte avant d'être capturé et emprisonné en France."
            },
            {
                nom: "Victor Schœlcher (1804 - 1893)",
                role: "Artisan du décret d'abolition de 1848",
                image: "images/victor-schoelcher.jpg",
                description: "Journaliste et homme politique français engagé toute sa vie contre l'esclavage, il rédige et fait adopter le décret du 27 avril 1848 qui abolit définitivement l'esclavage dans les colonies françaises."
            },
            {
                nom: "Solitude (vers 1772 - 1802)",
                role: "Figure de la résistance en Guadeloupe",
                image: "images/solitude.jpg",
                description: "Née d'une mère esclave en Guadeloupe, elle rejoint les insurgés menés par Louis Delgrès en 1802 pour combattre les troupes venues rétablir l'esclavage, et est exécutée au lendemain de son accouchement."
            },
            {
                nom: "Olympe de Gouges (1748 - 1793)",
                role: "Femme de lettres abolitionniste",
                image: "images/olympe-de-gouges.jpg",
                description: "Pionnière des droits des femmes et membre de la Société des amis des Noirs, elle écrit dès 1788 des pièces de théâtre et des essais dénonçant la traite et l'esclavage dans les colonies."
            }
        ],
        quiz: [
            {
                coursId: 1,
                question: "Comment appelle-t-on le circuit commercial reliant l'Europe, l'Afrique et l'Amérique ?",
                options: ["La route de la soie", "Le commerce triangulaire", "Le blocus continental", "La ligne de démarcation"],
                answer: 1,
                explanation: "Les navires partaient d'Europe avec des marchandises, achetaient des captifs en Afrique et les revendaient aux Antilles."
            },
            {
                coursId: 1,
                question: "En quelle année Louis XIV promulgue-t-il le Code noir ?",
                options: ["1685", "1789", "1802", "1848"],
                answer: 0,
                explanation: "Le Code noir de 1685 encadrait la vie des esclaves et les considérait juridiquement comme des biens meubles."
            },
            {
                coursId: 1,
                question: "Quelles cultures étaient principalement produites dans les plantations antillaises ?",
                options: ["Le blé et le maïs", "Le sucre, le café et le coton", "La vigne et les olives", "Le riz et le thé"],
                answer: 1,
                explanation: "La canne à sucre et le café étaient les principales richesses exploitées dans les colonies."
            },
            {
                coursId: 2,
                question: "Comment appelait-on la fuite d'un esclave hors de sa plantation pour vivre libre ?",
                options: ["Le rationnement", "Le marronnage", "L'armistice", "La mobilisation"],
                answer: 1,
                explanation: "Les esclaves en fuite, appelés « marrons », se réfugiaient dans les montagnes ou les forêts."
            },
            {
                coursId: 2,
                question: "À quelle date la Convention vote-t-elle la première abolition de l'esclavage ?",
                options: ["14 juillet 1789", "4 février 1794", "18 juin 1802", "27 avril 1848"],
                answer: 1,
                explanation: "Suite à l'insurrection de Saint-Domingue, la Convention abolit l'esclavage le 4 février 1794."
            },
            {
                coursId: 2,
                question: "Qui rétablit l'esclavage dans les colonies françaises en 1802 ?",
                options: ["Louis XVI", "Napoléon Bonaparte", "Victor Schœlcher", "Georges Clemenceau"],
                answer: 1,
                explanation: "Napoléon Bonaparte rétablit l'esclavage en mai 1802, ce qui mène à l'indépendance d'Haïti en 1804."
            },
            {
                coursId: 3,
                question: "Qui a préparé et porté le décret d'abolition définitive de l'esclavage en 1848 ?",
                options: ["Toussaint Louverture", "Victor Schœlcher", "Jean Moulin", "Ferdinand Foch"],
                answer: 1,
                explanation: "Sous-secrétaire d'État aux Colonies en 1848, Victor Schœlcher a fait signer le décret d'abolition."
            },
            {
                coursId: 3,
                question: "Quelle est la date exacte du décret d'abolition définitive de l'esclavage en France ?",
                options: ["4 février 1794", "1er janvier 1804", "27 avril 1848", "11 novembre 1848"],
                answer: 2,
                explanation: "Le décret est adopté le 27 avril 1848 par le gouvernement provisoire de la IIe République."
            },
            {
                coursId: 3,
                question: "Combien d'esclaves environ ont été libérés dans les colonies françaises en 1848 ?",
                options: ["Environ 10 000", "Plus de 250 000", "5 millions", "50 000"],
                answer: 1,
                explanation: "Plus de 250 000 personnes ont accédé à la liberté et à la citoyenneté française."
            }
        ],
        frise: [
            {
                date: "Mars 1685",
                titre: "Promulgation du Code noir",
                details: "Louis XIV signe l'édit qui réglemente l'esclavage dans les colonies françaises d'Amérique et prive les esclaves de tout droit civil."
            },
            {
                date: "Août 1791",
                titre: "Insurrection des esclaves à Saint-Domingue",
                details: "Des dizaines de milliers d'esclaves se soulèvent dans le nord de Saint-Domingue pour réclamer la liberté promise par la Révolution."
            },
            {
                date: "4 Février 1794",
                titre: "Première abolition de l'esclavage",
                details: "La Convention nationale vote l'abolition immédiate de l'esclavage dans toutes les colonies françaises."
            },
            {
                date: "Mai 1802",
                titre: "Rétablissement de l'esclavage par Bonaparte",
                details: "Napoléon Bonaparte rétablit l'esclavage et la traite négrière, déclenchant de violents combats en Guadeloupe et à Saint-Domingue."
            },
            {
                date: "1er Janvier 1804",
                titre: "Indépendance d'Haïti",
                details: "Saint-Domingue proclame son indépendance sous le nom d'Haïti et devient la première république noire libre au monde."
            },
            {
                date: "27 Avril 1848",
                titre: "Abolition définitive de l'esclavage",
                details: "Sur proposition de Victor Schœlcher, la IIe République abolit définitivement l'esclavage sur tout le territoire français."
            }
        ],
        lexique: [
            {
                mot: "Abolitionnisme",
                definition: "Mouvement philosophique, politique et citoyen militant pour la suppression définitive de la traite et de l'esclavage."
            },
            {
                mot: "Code noir",
                definition: "Ensemble de textes juridiques promulgués à partir de 1685 fixant les règles de l'esclavage dans les colonies françaises."
            },
            {
                mot: "Commerce triangulaire",
                definition: "Échange commercial entre l'Europe, l'Afrique et l'Amérique reposant sur la déportation d'esclaves africains vers les plantations."
            },
            {
                mot: "Marronnage",
                definition: "Fuite d'un esclave hors de la plantation de son maître pour retrouver la liberté dans les montagnes ou les forêts."
            },
            {
                mot: "Plantation",
                definition: "Grande exploitation agricole coloniale produisant du sucre, du café ou du coton grâce au travail forcé des esclaves."
            },
            {
                mot: "Traite atlantique",
                definition: "Commerce et déportation forcée de millions d'Africains à travers l'océan Atlantique vers les colonies d'Amérique."
            }
        ],
        archives: [
            {
                titre: "Décret d'abolition de l'esclavage (27 avril 1848)",
                auteur: "Gouvernement provisoire de la IIe République",
                texte: "« Nulle terre française ne peut plus porter d'esclaves. »"
            },
            {
                titre: "Proclamation de Toussaint Louverture (1793)",
                auteur: "Toussaint Louverture",
                texte: "« Frères et amis, je suis Toussaint Louverture ; mon nom s'est peut-être fait connaître jusqu'à vous. J'ai entrepris la vengeance de ma race. Je veux que la liberté et l'égalité règnent à Saint-Domingue. »"
            },
            {
                titre: "Réflexions sur l'esclavage des Nègres (1788)",
                auteur: "Olympe de Gouges",
                texte: "« Les hommes partout sont égaux : les rois qui sont justes ne veulent point d'esclaves ; ils savent qu'ils ont des sujets soumis, et non des hommes achetés. »"
            }
        ]
    },
        revolution: {
         ordre: 3,
        id: "revolution",
        titre: "La Révolution française",
        periode: "1789 - 1799",
        icone: "⚖️",
        description: "De la prise de la Bastille à la chute de la monarchie : la naissance des droits de l'homme et de la République.",
        cours: [
            {
                id: 1,
                date: "Mai - Août 1789",
                titre: "La crise de l'Ancien Régime et l'été 1789",
                contenu: [
                    "En 1789, la France traverse une grave crise financière, économique et sociale. La société d'Ancien Régime est divisée en trois ordres inégaux : le Clergé et la Noblesse détiennent les privilèges et ne paient presque pas d'impôts, tandis que le Tiers État (98 % de la population) supporte toutes les charges.",
                    "Pour résoudre la crise, le roi Louis XVI convoque les États généraux à Versailles en mai 1789. Face au blocage des votes, les députés du Tiers État se proclament Assemblée nationale et jurent de donner une Constitution à la France lors du Serment du Jeu de paume (20 juin 1789).",
                    "Le 14 juillet 1789, le peuple de Paris s'empare de la forteresse royale de la Bastille, symbole de l'absolutisme. Dans la nuit du 4 août 1789, l'Assemblée abolit les privilèges féodaux, puis adopte le 26 août la Déclaration des droits de l'homme et du citoyen."
                ]
            },
            {
                id: 2,
                date: "1791 - 1792",
                titre: "La chute de la monarchie et la Ire République",
                contenu: [
                    "Après l'adoption d'une première Constitution en 1791 qui instaure une monarchie constitutionnelle, la confiance entre le roi et le peuple est rompue suite à la tentative de fuite de la famille royale à Varennes en juin 1791.",
                    "En avril 1792, la France entre en guerre contre l'Autriche et la Prusse qui menacent la Révolution. Accusé de trahison et de complicité avec les armées étrangères, Louis XVI est renversé lors de la prise du palais des Tuileries par les sans-culottes le 10 août 1792.",
                    "Le 20 septembre 1792, l'armée révolutionnaire remporte la bataille de Valmy. Dès le lendemain, le 21 septembre 1792, la nouvelle assemblée (la Convention) abolit la royauté et proclame la Première République."
                ],
                                audio: "audio/marseillaise.mp3",
                audioTitre: "Chant de guerre de l'Armée du Rhin : La Marseillaise (1792)"

            },
            {
                id: 3,
                date: "1793 - 1799",
                titre: "La Terreur, le Directoire et le coup d'État de Bonaparte",
                contenu: [
                    "Jugé pour trahison, Louis XVI est guillotiné le 21 janvier 1793. La jeune République fait alors face à de graves périls : une coalition européenne aux frontières, des soulèvements royalistes en Vendée et la crise économique.",
                    "Pour sauver la Révolution, le Comité de salut public dominé par Maximilien de Robespierre instaure un régime d'exception appelé « la Terreur » (1793-1794) : les libertés sont suspendues et des milliers de suspects sont exécutés jusqu'à la chute de Robespierre en juillet 1794.",
                    "De 1795 à 1799, un régime plus modéré — le Directoire — tente de stabiliser le pays mais reste affaibli par les crises politiques. Le 9 novembre 1799 (18 Brumaire), le général Napoléon Bonaparte prend le pouvoir par un coup d'État, mettant fin à la Révolution."
                ]
            }
        ],
        biographies: [
            {
                nom: "Louis XVI (1754 - 1793)",
                role: "Dernier roi de l'Ancien Régime",
                image: "images/louis-xvi.jpg",
                description: "Roi de France depuis 1774, il convoque les États généraux en 1789 face à la faillite de l'État. Hésitant face aux réformes et arrêté lors de sa fuite à Varennes, il est jugé pour trahison et guillotiné en janvier 1793."
            },
            {
                nom: "Maximilien de Robespierre (1758 - 1794)",
                role: "Figure majeure de la Convention et de la Terreur",
                image: "images/robespierre.jpg",
                description: "Avocat surnommé « l'Incorruptible », il défend le suffrage universel et l'abolition de l'esclavage, puis dirige le Comité de salut public durant la Terreur avant d'être lui-même renversé et exécuté le 28 juillet 1794."
            },
            {
                nom: "Georges Danton (1759 - 1794)",
                role: "Orateur et tribun révolutionnaire",
                image: "images/danton.jpg",
                description: "Ministre de la Justice en 1792, il galvanise la population par ses discours célèbres pour défendre la patrie en danger face aux armées étrangères avant d'être guillotiné sur ordre de Robespierre."
            },
            {
                nom: "Marquis de La Fayette (1757 - 1834)",
                role: "Héros des deux mondes",
                image: "images/lafayette.jpg",
                description: "Noble rallié aux idées des Lumières après avoir combattu pour l'indépendance américaine, il commande la Garde nationale en 1789 et participe à la rédaction de la Déclaration des droits de l'homme."
            }
        ],
        quiz: [
            {
                coursId: 1,
                question: "Quel ordre représentait 98 % de la population française sous l'Ancien Régime ?",
                options: ["Le Clergé", "La Noblesse", "Le Tiers État", "La Bourgeoisie royale"],
                answer: 2,
                explanation: "Le Tiers État regroupait les paysans, les artisans et les bourgeois, et supportait l'essentiel des impôts."
            },
            {
                coursId: 1,
                question: "Quelle forteresse parisienne est prise par le peuple le 14 juillet 1789 ?",
                options: ["Le château de Versailles", "La Bastille", "Le palais du Louvre", "Les Invalides"],
                answer: 1,
                explanation: "La prise de la Bastille le 14 juillet 1789 symbolise la fin de l'absolutisme royal."
            },
            {
                coursId: 1,
                question: "Quel texte fondamental est adopté par l'Assemblée le 26 août 1789 ?",
                options: ["Le Code civil", "La Déclaration des droits de l'homme et du citoyen", "Le décret d'abolition de l'esclavage", "L'édit de Nantes"],
                answer: 1,
                explanation: "Ce texte proclame la liberté, l'égalité devant la loi et la souveraineté de la nation."
            },
            {
                coursId: 2,
                question: "Dans quelle ville le roi Louis XVI est-il arrêté lors de sa tentative de fuite en juin 1791 ?",
                options: ["Lyon", "Varennes", "Bordeaux", "Reims"],
                answer: 1,
                explanation: "La fuite à Varennes brise définitivement la confiance entre le roi et les révolutionnaires."
            },
            {
                coursId: 2,
                question: "À quelle date la Première République française est-elle proclamée ?",
                options: ["14 juillet 1789", "10 août 1792", "21 septembre 1792", "21 janvier 1793"],
                answer: 2,
                explanation: "La Convention abolit la royauté et proclame la République le 21 septembre 1792, au lendemain de Valmy."
            },
            {
                coursId: 2,
                question: "Quelle victoire militaire française sauve la Révolution le 20 septembre 1792 ?",
                options: ["La bataille de Valmy", "La bataille de Verdun", "La bataille d'Austerlitz", "La bataille de Waterloo"],
                answer: 0,
                explanation: "L'armée de citoyens stoppe l'invasion prussienne à Valmy."
            },
            {
                coursId: 3,
                question: "À quelle date le roi Louis XVI est-il guillotiné à Paris ?",
                options: ["14 juillet 1790", "21 janvier 1793", "28 juillet 1794", "9 novembre 1799"],
                answer: 1,
                explanation: "Condamné à mort par la Convention pour trahison, Louis XVI est exécuté le 21 janvier 1793."
            },
            {
                coursId: 3,
                question: "Qui dirigeait le Comité de salut public pendant la période de la Terreur (1793-1794) ?",
                options: ["La Fayette", "Maximilien de Robespierre", "Napoléon Bonaparte", "Louis XVIII"],
                answer: 1,
                explanation: "Robespierre mène la politique d'exception de la Terreur jusqu'à sa chute en juillet 1794."
            },
            {
                coursId: 3,
                question: "Quel général met fin à la Révolution par le coup d'État du 18 Brumaire (9 novembre 1799) ?",
                options: ["Le général Leclerc", "Napoléon Bonaparte", "Le maréchal Foch", "Le général de Gaulle"],
                answer: 1,
                explanation: "Napoléon Bonaparte renverse le Directoire et instaure le Consulat."
            }
        ],
        frise: [
            {
                date: "5 Mai 1789",
                titre: "Ouverture des États généraux",
                details: "Louis XVI réunit les représentants des trois ordres à Versailles pour tenter de résoudre la crise financière du royaume."
            },
            {
                date: "14 Juillet 1789",
                titre: "Prise de la Bastille",
                details: "Les Parisiens s'emparent de la prison royale de la Bastille pour trouver de la poudre et défendre l'Assemblée nationale."
            },
            {
                date: "26 Août 1789",
                titre: "Déclaration des droits de l'homme et du citoyen",
                details: "L'Assemblée nationale adopte le texte fondateur affirmant que tous les hommes naissent libres et égaux en droits."
            },
            {
                date: "21 Septembre 1792",
                titre: "Proclamation de la Ire République",
                details: "Au lendemain de la victoire de Valmy, la Convention abolit la monarchie et fonde la Première République."
            },
            {
                date: "21 Janvier 1793",
                titre: "Exécution de Louis XVI",
                details: "Reconnu coupable de trahison envers la nation, l'ancien roi est guillotiné sur la place de la Révolution à Paris."
            },
            {
                date: "9 Novembre 1799",
                titre: "Coup d'État du 18 Brumaire",
                details: "Le général Napoléon Bonaparte renverse le Directoire et prend le pouvoir, marquant la fin de la Révolution française."
            }
        ],
        lexique: [
            {
                mot: "Ancien Régime",
                definition: "Système politique et social de la France avant 1789, fondé sur la monarchie absolue et la société d'ordres inégaux."
            },
            {
                mot: "Cahiers de doléances",
                definition: "Registres dans lesquels les Français ont inscrit leurs plaintes et leurs souhaits de réformes avant les États généraux de 1789."
            },
            {
                mot: "Monarchie absolue",
                definition: "Régime politique dans lequel le roi détient tous les pouvoirs (faire les lois, gouverner et rendre la justice)."
            },
            {
                mot: "Privilèges",
                definition: "Avantages réservés à la Noblesse et au Clergé sous l'Ancien Régime, comme l'exemption des principaux impôts."
            },
            {
                mot: "Sans-culottes",
                definition: "Révolutionnaires issus du peuple parisien portant le pantalon rayé plutôt que la culotte courte des nobles."
            },
            {
                mot: "La Terreur",
                definition: "Période de 1793 à 1794 durant laquelle le gouvernement révolutionnaire suspend les libertés pour éliminer les ennemis de la République."
            }
        ],
        archives: [
            {
                titre: "Article 1er de la Déclaration des droits de l'homme (1789)",
                auteur: "Assemblée nationale constituante",
                texte: "« Les hommes naissent et demeurent libres et égaux en droits. Les distinctions sociales ne peuvent être fondées que sur l'utilité commune. »"
            },
            {
                titre: "Discours à l'Assemblée législative (2 septembre 1792)",
                auteur: "Georges Danton",
                texte: "« Pour vaincre les ennemis de la patrie, il nous faut de l'audace, encore de l'audace, toujours de l'audace, et la France est sauvée ! »"
            },
            {
                titre: "Devise nationale de la République (1793)",
                auteur: "République française",
                texte: "« Liberté, Égalité, Fraternité. »"
            }
        ]
    },
        napoleon: {
         ordre: 4,
        id: "napoleon",
        titre: "Napoléon & le Premier Empire",
        periode: "1799 - 1815",
        icone: "🦅",
        description: "Du Consulat au sacre impérial, des grandes réformes du Code civil aux campagnes militaires jusqu'à Waterloo.",
        cours: [
            {
                id: 1,
                date: "1799 - 1804",
                titre: "Du Consulat au Sacre de l'Empereur",
                contenu: [
                    "Après le coup d'État du 18 Brumaire (9 novembre 1799), Napoléon Bonaparte met fin au Directoire et instaure un nouveau régime : le Consulat. Nommé Premier consul, il concentre rapidement l'essentiel du pouvoir exécutif et législatif tout en conservant les acquis sociaux de la Révolution.",
                    "Pour rétablir la paix intérieure et la stabilité financière, il signe le Concordat avec le pape Pie VII en 1801, réorganise l'administration en créant les préfets, fonde la Banque de France et crée les lycées pour former les élites de la nation.",
                    "En 1804, il promulgue le Code civil (appelé Code Napoléon) qui unifie les lois en France et consacre l'égalité des citoyens devant la loi et le droit de propriété. Le 2 décembre 1804, il est sacré Empereur des Français à Notre-Dame de Paris sous le nom de Napoléon Ier."
                ]
            },
            {
                id: 2,
                date: "1805 - 1811",
                titre: "La Grande Armée et la domination sur l'Europe",
                contenu: [
                    "Face aux coalitions militaires financées par le Royaume-Uni, Napoléon réorganise l'armée française en créant la « Grande Armée ». Grâce à sa rapidité de manœuvre et à son génie tactique, il remporte des victoires éclatantes comme Austerlitz (2 décembre 1805), Iéna (1806) et Wagram (1809).",
                    "À son apogée en 1811, le Grand Empire français compte 130 départements, de Hambourg jusqu'à Rome. Napoléon place des membres de sa famille sur plusieurs trônes européens (Espagne, Naples, Hollande, Westphalie) et impose le Blocus continental pour tenter d'asphyxier économiquement le Royaume-Uni.",
                    "Partout où avancent les armées françaises, les principes de la Révolution et le Code civil sont diffusés, abolissant la féodalité mais éveillant aussi un fort sentiment national contre l'occupation française."
                ]
            },
            {
                id: 3,
                date: "1812 - 1815",
                titre: "La campagne de Russie, les Cent-Jours et Waterloo",
                contenu: [
                    "En juin 1812, pour contraindre le tsar Alexandre Ier à respecter le Blocus continental, Napoléon envahit la Russie avec plus de 600 000 hommes. L'armée russe pratique la politique de la « terre brûlée » et l'hiver glacial décime la Grande Armée lors de la terrible retraite de Russie.",
                    "Affaibli, Napoléon est vaincu par une coalition européenne à la bataille de Leipzig en 1813. L'invasion de la France contraint l'Empereur à abdiquer en avril 1814 : il est exilé sur l'île d'Elbe tandis que la monarchie est restaurée avec Louis XVIII.",
                    "En mars 1815, Napoléon s'évade de l'île d'Elbe, débarque en Provence et reprend le pouvoir sans tirer un coup de feu : c'est la période des « Cent-Jours ». Mais les puissances européennes s'unissent à nouveau et le battent définitivement à Waterloo le 18 juin 1815. Il est exilé sur l'île de Sainte-Hélène où il meurt en 1821."
                ]
            }
        ],
        biographies: [
            {
                nom: "Napoléon Bonaparte (1769 - 1821)",
                role: "Premier Consul puis Empereur des Français",
                image: "images/napoleon.jpg",
                description: "Général brillant issu de la Révolution, il prend le pouvoir en 1799, modernise l'État français grâce au Code civil et aux préfets, et domine l'Europe continentale avant sa chute définitive à Waterloo en 1815."
            },
            {
                nom: "Joséphine de Beauharnais (1763 - 1814)",
                role: "Impératrice des Français",
                image: "images/josephine-beauharnais.jpg",
                description: "Épouse de Napoléon Bonaparte et couronnée Impératrice à Notre-Dame en 1804, elle joue un rôle diplomatique et culturel majeur à la cour impériale avant leur divorce en 1809 faute d'héritier."
            },
            {
                nom: "Charles-Maurice de Talleyrand (1754 - 1838)",
                role: "Ministre des Relations extérieures",
                image: "images/talleyrand.jpg",
                description: "Diplomate habile et influent, il négocie les grands traités européens sous le Consulat et l'Empire avant de préparer le retour des Bourbons et de représenter la France au Congrès de Vienne en 1815."
            },
            {
                nom: "Michel Ney (1769 - 1815)",
                role: "Maréchal d'Empire (« Le Brave des braves »)",
                image: "images/marechal-ney.jpg",
                description: "L'un des plus célèbres maréchaux de Napoléon, il s'illustre lors de la retraite de Russie en protégeant l'arrière-garde et mène les charges de cavalerie à Waterloo avant d'être fusillé sous la Restauration."
            }
        ],
        quiz: [
            {
                coursId: 1,
                question: "Quel régime politique Napoléon Bonaparte instaure-t-il après le coup d'État de 1799 ?",
                options: ["Le Directoire", "Le Consulat", "La IIe République", "La Restauration"],
                answer: 1,
                explanation: "Napoléon devient Premier consul en 1799 et concentre l'essentiel des pouvoirs."
            },
            {
                coursId: 1,
                question: "En quelle année le Code civil est-il promulgué ?",
                options: ["1789", "1799", "1804", "1815"],
                answer: 2,
                explanation: "Promulgué en 1804, le Code civil unifie le droit en France et consacre l'égalité devant la loi."
            },
            {
                coursId: 1,
                question: "Où Napoléon est-il sacré Empereur le 2 décembre 1804 ?",
                options: ["À la cathédrale de Reims", "À Notre-Dame de Paris", "Au château de Versailles", "Aux Invalides"],
                answer: 1,
                explanation: "Le sacre impérial a lieu à la cathédrale Notre-Dame de Paris en présence du pape Pie VII."
            },
            {
                coursId: 2,
                question: "Quelle célèbre victoire Napoléon remporte-t-il le 2 décembre 1805 ?",
                options: ["La bataille de Valmy", "La bataille d'Austerlitz", "La bataille de Waterloo", "La bataille de Verdun"],
                answer: 1,
                explanation: "À Austerlitz, Napoléon bat les armées autrichienne et russe réunies."
            },
            {
                coursId: 2,
                question: "Quel mesure économique Napoléon impose-t-il pour affaiblir le Royaume-Uni ?",
                options: ["Le commerce triangulaire", "Le Blocus continental", "Le rationnement", "La création de l'euro"],
                answer: 1,
                explanation: "Le Blocus continental interdit aux pays européens de commercer avec le Royaume-Uni."
            },
            {
                coursId: 2,
                question: "Combien de départements le Grand Empire français comptait-il à son apogée en 1811 ?",
                options: ["83 départements", "130 départements", "50 départements", "200 départements"],
                answer: 1,
                explanation: "L'Empire s'étendait alors sur 130 départements, de Hambourg à Rome."
            },
            {
                coursId: 3,
                question: "Quelle campagne militaire de 1812 marque le début du déclin de la Grande Armée ?",
                options: ["La campagne d'Égypte", "La campagne de Russie", "La campagne d'Italie", "La campagne d'Algérie"],
                answer: 1,
                explanation: "L'hiver russe et la politique de la terre brûlée déciment la Grande Armée lors de la retraite."
            },
            {
                coursId: 3,
                question: "Comment appelle-t-on le retour au pouvoir de Napoléon entre mars et juin 1815 ?",
                options: ["La Terreur", "Les Cent-Jours", "La Fronde", "La Belle Époque"],
                answer: 1,
                explanation: "Les Cent-Jours désignent la période entre son retour de l'île d'Elbe et sa défaite à Waterloo."
            },
            {
                coursId: 3,
                question: "Sur quelle île lointaine Napoléon est-il exilé après sa défaite à Waterloo en 1815 ?",
                options: ["L'île d'Elbe", "La Corse", "L'île de Sainte-Hélène", "La Guadeloupe"],
                answer: 2,
                explanation: "Les Britanniques l'exilent sur l'île de Sainte-Hélène dans l'Atlantique Sud, où il meurt en 1821."
            }
        ],
        frise: [
            {
                date: "9 Novembre 1799",
                titre: "Coup d'État du 18 Brumaire",
                details: "Napoléon Bonaparte renverse le Directoire et met en place le Consulat dont il devient le Premier consul."
            },
            {
                date: "21 Mars 1804",
                titre: "Promulgation du Code civil",
                details: "Unification des lois civiles en France consacrant l'égalité des citoyens devant la loi et le droit de propriété."
            },
            {
                date: "2 Décembre 1804",
                titre: "Sacre de Napoléon Ier",
                details: "Napoléon se couronne lui-même Empereur des Français à la cathédrale Notre-Dame de Paris."
            },
            {
                date: "2 Décembre 1805",
                titre: "Victoire d'Austerlitz",
                details: "Surnommée la « bataille des Trois Empereurs », elle consacre la suprématie militaire de la Grande Armée en Europe."
            },
            {
                date: "Juin - Décembre 1812",
                titre: "Campagne et retraite de Russie",
                details: "L'invasion de la Russie tourne au désastre face au froid glacial et entraîne la perte de la majorité de la Grande Armée."
            },
            {
                date: "18 Juin 1815",
                titre: "Bataille de Waterloo",
                details: "Défaite finale de Napoléon face aux armées britannique et prussienne, suivie de sa seconde abdication et de son exil à Sainte-Hélène."
            }
        ],
        lexique: [
            {
                mot: "Blocus continental",
                definition: "Décret de 1806 interdisant tout commerce et toute importation de marchandises britanniques sur le continent européen."
            },
            {
                mot: "Cent-Jours",
                definition: "Période du 20 mars au 22 juin 1815 durant laquelle Napoléon reprend le pouvoir en France après son évasion de l'île d'Elbe."
            },
            {
                mot: "Code civil",
                definition: "Recueil de lois rédigé sous l'impulsion de Napoléon en 1804 unifiant les règles de la famille, des biens et des contrats."
            },
            {
                mot: "Concordat",
                definition: "Accord signé en 1801 entre Napoléon Bonaparte et le pape Pie VII rétablissant la paix religieuse en France."
            },
            {
                mot: "Grande Armée",
                definition: "Nom donné à l'armée impériale commandée par Napoléon Ier de 1805 à 1815."
            },
            {
                mot: "Préfet",
                definition: "Haut fonctionnaire créé par Napoléon en 1800 pour représenter l'État et faire appliquer les lois dans chaque département."
            }
        ],
        archives: [
            {
                titre: "Proclamation au soir d'Austerlitz (3 décembre 1805)",
                auteur: "Napoléon Ier",
                texte: "« Soldats, je suis content de vous ! Vous avez décoré vos aigles d'une immortelle gloire. »"
            },
            {
                titre: "Mémorial de Sainte-Hélène (1823)",
                auteur: "Napoléon Bonaparte",
                texte: "« Ma vraie gloire n'est pas d'avoir gagné quarante batailles ; Waterloo effacera le souvenir de tant de victoires. Ce que rien n'effacera, ce qui vivra éternellement, c'est mon Code civil. »"
            },
            {
                titre: "Adieux de Fontainebleau (20 avril 1814)",
                auteur: "Napoléon Ier à sa Vieille Garde",
                texte: "« Soldats de ma Vieille Garde, je vous fais mes adieux. Depuis vingt ans, je vous ai trouvés constamment sur le chemin de l'honneur et de la gloire. »"
            }
        ]
    },
    moyenage: {
         ordre: 1,
        id: "moyenage",
        ordre: 1,
        titre: "Le Moyen Âge & la Guerre de Cent Ans",
        periode: "476 - 1492",
        icone: "🏰",
        description: "De Clovis et Charlemagne aux châteaux forts, aux croisades et à l'épopée de Jeanne d'Arc.",
        cours: [
            {
                id: 1,
                date: "481 - 814",
                titre: "Clovis, Charlemagne et la naissance du royaume",
                contenu: [
                    "Après la chute de l'Empire romain d'Occident en 476, les peuples germaniques s'installent en Gaule. En 481, Clovis devient roi des Francs : il unifie une grande partie de la Gaule par ses conquêtes et se fait baptiser à Reims vers 496, obtenant ainsi le soutien de l'Église chrétienne.",
                    "Au VIIIe siècle, une nouvelle dynastie prend le pouvoir : les Carolingiens. Le plus célèbre d'entre eux, Charlemagne, agrandit considérablement le royaume par ses campagnes militaires et est sacré Empereur à Rome par le pape le 25 décembre 800.",
                    "Pour administrer son vaste empire, Charlemagne s'appuie sur des comtes et des envoyés spéciaux (les « missi dominici ») et encourage le renouveau des écoles et de l'écriture pour former les futurs administrateurs et clercs."
                ]
            },
            {
                id: 2,
                date: "Xe - XIIIe s.",
                titre: "La société féodale : seigneurs, chevaliers et paysans",
                contenu: [
                    "À partir du Xe siècle, l'autorité royale s'affaiblit face aux invasions (Vikings, Sarrasins). Les grands seigneurs locaux construisent des châteaux forts pour protéger les populations et s'imposent comme les véritables maîtres des terres : c'est la féodalité.",
                    "La société médiévale est organisée en trois ordres : ceux qui prient (le clergé), ceux qui combattent (les nobles et les chevaliers liés entre eux par la cérémonie de l'hommage) et ceux qui travaillent (les paysans, qui représentent près de 90 % de la population).",
                    "Dans la seigneurie, les paysans — libres (les vilains) ou attachés à la terre (les serfs) — cultivent les champs, paient de nombreuses taxes au seigneur (banalités, taille) et effectuent des travaux gratuits appelés corvées en échange de sa protection."
                ]
            },
            {
                id: 3,
                date: "1337 - 1453",
                titre: "La Guerre de Cent Ans et Jeanne d'Arc",
                contenu: [
                    "En 1337, une crise de succession au trône de France déclenche un long conflit entre les rois de France et d'Angleterre : la Guerre de Cent Ans. Les armées anglaises remportent d'importantes victoires (Crécy, Azincourt) et occupent une grande partie du royaume, tandis que la peste noire décime l'Europe.",
                    "Alors que le roi de France Charles VII est en difficulté, une jeune paysanne lorraine de 17 ans, Jeanne d'Arc, affirme avoir reçu la mission divine de chasser les Anglais. En 1429, elle libère la ville d'Orléans assiégée et conduit Charles VII jusqu'à Reims où il est sacré roi.",
                    "Capturée par les Bourguignons puis vendue aux Anglais, Jeanne d'Arc est jugée pour hérésie et brûlée vive à Rouen en 1431. Mais son action a inversé le cours de la guerre : en 1453, les Anglais sont définitivement chassés de France (sauf Calais) et le pouvoir royal sort renforcé."
                ]
            }
        ],
        biographies: [
            {
                nom: "Clovis (vers 466 - 511)",
                role: "Premier roi chrétien des Francs",
                image: "images/clovis.jpg",
                description: "Roi des Francs de la dynastie des Mérovingiens, il unifie la Gaule par ses victoires militaires, fait de Paris sa capitale et scelle une alliance durable avec l'Église lors de son baptême à Reims."
            },
            {
                nom: "Charlemagne (742 - 814)",
                role: "Roi des Francs puis Empereur d'Occident",
                image: "images/charlemagne.jpg",
                description: "Souverain conquérant et bâtisseur, il crée un vaste empire européen, est couronné Empereur en l'an 800 et favorise l'essor des écoles et des monastères."
            },
            {
                nom: "Jeanne d'Arc (vers 1412 - 1431)",
                role: "Héroïne de la Guerre de Cent Ans",
                image: "images/jeanne-darc.jpg",
                description: "Jeune paysanne de Domrémy, elle redonne espoir à l'armée française en libérant Orléans en 1429 et permet le sacre de Charles VII à Reims avant d'être capturée et brûlée à Rouen à 19 ans."
            },
            {
                nom: "Louis IX / Saint Louis (1214 - 1270)",
                role: "Roi bâtisseur et justicier",
                image: "images/saint-louis.jpg",
                description: "Roi capétien célèbre pour sa piété, sa réforme de la justice royale et la construction de la Sainte-Chapelle à Paris, il meurt de maladie devant Tunis lors de la huitième croisade."
            }
        ],
        quiz: [
            {
                coursId: 1,
                question: "Dans quelle ville Clovis se fait-il baptiser vers 496 ?",
                options: ["Paris", "Reims", "Orléans", "Rome"],
                answer: 1,
                explanation: "Le baptême de Clovis à Reims lui apporte le soutien essentiel des évêques et de l'Église."
            },
            {
                coursId: 1,
                question: "En quelle année Charlemagne est-il sacré Empereur à Rome ?",
                options: ["476", "732", "800", "987"],
                answer: 2,
                explanation: "Charlemagne est couronné Empereur par le pape Léon III le 25 décembre 800."
            },
            {
                coursId: 1,
                question: "Comment appelait-on les envoyés chargés de surveiller les comtes dans l'empire de Charlemagne ?",
                options: ["Les préfets", "Les missi dominici", "Les mousquetaires", "Les sans-culottes"],
                answer: 1,
                explanation: "Les missi dominici (« envoyés du maître ») contrôlaient l'application des lois dans tout l'empire."
            },
            {
                coursId: 2,
                question: "Quelle catégorie de la population représentait environ 90 % des habitants au Moyen Âge ?",
                options: ["Les chevaliers", "Les moines", "Les paysans", "Les marchands"],
                answer: 2,
                explanation: "La société médiévale était très majoritairement rurale et agricole."
            },
            {
                coursId: 2,
                question: "Comment appelait-on les travaux gratuits que les paysans devaient accomplir pour leur seigneur ?",
                options: ["Les corvées", "Les banalités", "La dîme", "Le cens"],
                answer: 0,
                explanation: "Les corvées consistaient à entretenir les routes, les ponts ou les terres du seigneur."
            },
            {
                coursId: 2,
                question: "Quelle cérémonie unissait un seigneur (suzerain) et son chevalier (vassal) ?",
                options: ["Le sacre", "L'hommage", "L'armistice", "Le concordat"],
                answer: 1,
                explanation: "Lors de l'hommage, le vassal jure fidélité et aide militaire à son suzerain en échange d'un fief."
            },
            {
                coursId: 3,
                question: "Quelle ville assiégée par les Anglais Jeanne d'Arc libère-t-elle en mai 1429 ?",
                options: ["Paris", "Orléans", "Rouen", "Calais"],
                answer: 1,
                explanation: "La libération d'Orléans en 1429 marque le tournant décisif de la Guerre de Cent Ans."
            },
            {
                coursId: 3,
                question: "Quel roi de France Jeanne d'Arc fait-elle sacrer à Reims en 1429 ?",
                options: ["Louis XIV", "Charles VII", "François Ier", "Clovis"],
                answer: 1,
                explanation: "Le sacre à Reims redonne à Charles VII toute sa légitimité royale face au roi d'Angleterre."
            },
            {
                coursId: 3,
                question: "En quelle année la Guerre de Cent Ans prend-elle fin avec le départ des Anglais ?",
                options: ["1337", "1429", "1431", "1453"],
                answer: 3,
                explanation: "En 1453, les Anglais sont chassés de France (ils ne conservent que le port de Calais)."
            }
        ],
        frise: [
            {
                date: "476",
                titre: "Chute de l'Empire romain d'Occident",
                details: "La déposition du dernier empereur romain d'Occident marque traditionnellement la fin de l'Antiquité et le début du Moyen Âge."
            },
            {
                date: "Vers 496",
                titre: "Baptême de Clovis à Reims",
                details: "Le roi des Francs se convertit au christianisme, unissant les Francs et les populations gallo-romaines."
            },
            {
                date: "25 Décembre 800",
                titre: "Couronnement impérial de Charlemagne",
                details: "Charlemagne est sacré Empereur à Rome par le pape Léon III, restaurant l'idée impériale en Occident."
            },
            {
                date: "987",
                titre: "Hugues Capet devient roi des Francs",
                details: "Début de la dynastie des Capétiens qui régnera sur la France pendant plus de huit siècles."
            },
            {
                date: "1337",
                titre: "Début de la Guerre de Cent Ans",
                details: "Le roi d'Angleterre Édouard III revendique la couronne de France, déclenchant un long conflit franco-anglais."
            },
            {
                date: "8 Mai 1429",
                titre: "Jeanne d'Arc libère Orléans",
                details: "À la tête de l'armée royale, Jeanne d'Arc brise le siège anglais d'Orléans et ouvre la route du sacre de Charles VII."
            },
            {
                date: "1453",
                titre: "Fin de la Guerre de Cent Ans",
                details: "Après la bataille de Castillon, les Anglais quittent le territoire français et l'autorité du roi de France est restaurée."
            }
        ],
        lexique: [
            {
                mot: "Chevalier",
                definition: "Combattant à cheval issu de la noblesse médiévale, équipé d'une armure et lié à un seigneur par serment."
            },
            {
                mot: "Corvée",
                definition: "Travail gratuit obligatoire dû par les paysans à leur seigneur pour entretenir le château, les routes ou les champs."
            },
            {
                mot: "Féodalité",
                definition: "Organisation politique et sociale du Moyen Âge fondée sur les liens de fidélité entre seigneurs (suzerains et vassaux)."
            },
            {
                mot: "Fief",
                definition: "Terre accordée par un seigneur à son vassal en échange de sa fidélité et de son service militaire."
            },
            {
                mot: "Serf",
                definition: "Paysan du Moyen Âge non libre, attaché à la terre de son seigneur et soumis à des taxes particulières."
            },
            {
                mot: "Suzerain",
                definition: "Seigneur puissant qui accorde une terre (fief) et sa protection à un autre seigneur moins puissant appelé vassal."
            }
        ],
        archives: [
            {
                titre: "Lettre aux Anglais devant Orléans (22 mars 1429)",
                auteur: "Jeanne d'Arc",
                texte: "« Roi d'Angleterre, rendez compte au Roi du Ciel de votre sang royal ; rendez les clés de toutes les bonnes villes que vous avez prises en France. »"
            },
            {
                titre: "Récit du baptême de Clovis (VIe siècle)",
                auteur: "Grégoire de Tours",
                texte: "« Courbe la tête, fier Sicambre ; adore ce que tu as brûlé, brûle ce que tu as adoré. »"
            },
            {
                titre: "Capitulaire sur les écoles (789)",
                auteur: "Charlemagne",
                texte: "« Que l'on crée des écoles pour apprendre à lire aux enfants ; dans chaque monastère, que l'on enseigne les psaumes, les notes, le chant, le calcul et la grammaire. »"
            }
        ]
    },
       contemporain: {
        id: "contemporain",
        ordre: 7,
        titre: "La Ve République & l'Europe",
        periode: "1945 - Aujourd'hui",
        icone: "🏛️",
        description: "De la reconstruction d'après-guerre et la fondation de la Ve République par de Gaulle jusqu'à la construction européenne.",
        cours: [
            {
                id: 1,
                date: "1945 - 1958",
                titre: "La Reconstruction, l'État-providence et la IVe République",
                contenu: [
                    "Au lendemain de la Seconde Guerre mondiale, la France est exsangue : les villes, les ports et les voies ferrées sont détruits et le rationnement dure jusqu'en 1949. Le gouvernement provisoire applique le programme du Conseil National de la Résistance (CNR) en créant la Sécurité sociale en 1945 et en accordant le droit de vote aux femmes (exercé pour la première fois en avril 1945).",
                    "En 1946 naît la IVe République, un régime parlementaire marqué par une forte instabilité ministérielle, mais qui lance la modernisation économique du pays. La France entre dans les « Trente Glorieuses » (1945-1975), une période de croissance économique exceptionnelle, de plein emploi et d'accès à la société de consommation.",
                    "Dans le même temps, l'empire colonial français est secoué par les mouvements d'indépendance : après la guerre d'Indochine (1946-1954), la guerre d'Algérie éclate en novembre 1954 et provoque une grave crise politique qui entraîne la chute de la IVe République en mai 1958."
                ]
            },
            {
                id: 2,
                date: "1958 - 1981",
                titre: "Le général de Gaulle et la naissance de la Ve République",
                contenu: [
                    "Rappelé au pouvoir en mai 1958 pour résoudre la crise algérienne, le général Charles de Gaulle fait adopter par référendum une nouvelle Constitution en septembre 1958 : c'est la naissance de la Ve République, qui renforce considérablement les pouvoirs du Président de la République (élu au suffrage universel direct à partir de 1962).",
                    "Après la signature des accords d'Évian en mars 1962 qui mettent fin à la guerre d'Algérie, la France connaît d'importantes mutations sociales. En mai 1968, une vaste contestation étudiante puis une grève générale ouvrière paralysent le pays, débouchant sur les accords de Grenelle (hausse des salaires et droits syndicaux).",
                    "Dans les années 1970, sous les présidences de Georges Pompidou puis de Valéry Giscard d'Estaing, de grandes réformes de société sont adoptées, comme l'abaissement de la majorité à 18 ans (1974) et la loi Veil autorisant l'interruption volontaire de grossesse (1975)."
                ]
            },
            {
                id: 3,
                date: "1957 - Aujourd'hui",
                titre: "L'alternance politique et la construction européenne",
                contenu: [
                    "En mai 1981, l'élection de François Mitterrand marque la première alternance politique de la Ve République avec l'arrivée de la gauche au pouvoir, marquée notamment par l'abolition de la peine de mort en octobre 1981 et les lois de décentralisation.",
                    "Parallèlement, depuis les années 1950, la France est un moteur de la construction européenne pour garantir une paix durable sur le continent. Après le traité de Rome (1957) créant la Communauté économique européenne (CEE), le traité de Maastricht (1992) fonde l'Union européenne et prépare la monnaie unique, l'euro, mise en circulation en 2002.",
                    "Aujourd'hui, la France et l'Union européenne relèvent de nouveaux défis majeurs : la transition écologique, la révolution numérique, la défense des valeurs démocratiques et la place de l'Europe dans la mondialisation."
                ]
            }
        ],
        biographies: [
            {
                nom: "Charles de Gaulle (1890 - 1970)",
                role: "Fondateur de la Ve République",
                image: "images/de-gaulle.jpg",
                description: "Chef de la France Libre pendant la guerre, il revient au pouvoir en 1958, fonde la Ve République dont il devient le premier président, met fin à la guerre d'Algérie et affirme l'indépendance diplomatique de la France."
            },
            {
                nom: "Simone Veil (1927 - 2017)",
                role: "Ministre et première présidente du Parlement européen",
                image: "images/simone-veil.jpg",
                description: "Rescapée des camps d'Auschwitz, elle devient ministre de la Santé en 1974 et porte la loi légalisant l'IVG en 1975, avant de devenir en 1979 la première femme élue présidente du Parlement européen."
            },
            {
                nom: "François Mitterrand (1916 - 1996)",
                role: "Président de la République (1981 - 1995)",
                image: "images/mitterrand.jpg",
                description: "Premier président socialiste de la Ve République, il fait abolir la peine de mort en 1981, lance de grands travaux culturels à Paris et œuvre avec Helmut Kohl au traité de Maastricht en 1992."
            },
            {
                nom: "Robert Schuman (1886 - 1963)",
                role: "L'un des « Pères de l'Europe »",
                image: "images/robert-schuman.jpg",
                description: "Ministre français des Affaires étrangères, il prononce le 9 mai 1950 la déclaration historique proposant de mettre en commun le charbon et l'acier franco-allemands pour rendre toute guerre impossible en Europe."
            }
        ],
        quiz: [
            {
                coursId: 1,
                question: "En quelle année les femmes françaises ont-elles voté pour la première fois ?",
                options: ["1918", "1936", "1945", "1958"],
                answer: 2,
                explanation: "Accordé par ordonnance en avril 1944, le droit de vote des femmes est exercé pour la première fois lors des élections municipales d'avril 1945."
            },
            {
                coursId: 1,
                question: "Comment appelle-t-on la période de forte croissance économique entre 1945 et 1975 ?",
                options: ["La Belle Époque", "Les Trente Glorieuses", "Les Années folles", "Le Siècle des Lumières"],
                answer: 1,
                explanation: "Les Trente Glorieuses désignent trois décennies de modernisation, de plein emploi et d'élévation du niveau de vie."
            },
            {
                coursId: 1,
                question: "Quelle crise coloniale provoque la chute de la IVe République en mai 1958 ?",
                options: ["La crise de Suez", "La guerre d'Algérie", "La guerre de Corée", "L'indépendance du Maroc"],
                answer: 1,
                explanation: "La guerre d'Algérie, débutée en 1954, entraîne une crise politique majeure qui ramène le général de Gaulle au pouvoir."
            },
            {
                coursId: 2,
                question: "En quelle année la Constitution de la Ve République est-elle adoptée ?",
                options: ["1946", "1958", "1968", "1981"],
                answer: 1,
                explanation: "La Constitution de la Ve République est adoptée par référendum le 28 septembre 1958."
            },
            {
                coursId: 2,
                question: "Quels accords signés en mars 1962 mettent fin à la guerre d'Algérie ?",
                options: ["Les accords de Grenelle", "Les accords d'Évian", "Les accords de Matignon", "Le traité de Rome"],
                answer: 1,
                explanation: "Les accords d'Évian du 18 mars 1962 instaurent le cessez-le-feu et ouvrent la voie à l'indépendance de l'Algérie."
            },
            {
                coursId: 2,
                question: "Quelle loi majeure Simone Veil fait-elle adopter en 1975 ?",
                options: ["La création du SMIC", "La légalisation de l'interruption volontaire de grossesse (IVG)", "L'abolition de la peine de mort", "La semaine de 35 heures"],
                answer: 1,
                explanation: "La loi Veil dépénalise et encadre l'interruption volontaire de grossesse en France."
            },
            {
                coursId: 3,
                question: "Quelle réforme emblématique est votée en octobre 1981 sous la présidence de François Mitterrand ?",
                options: ["L'abolition de la peine de mort", "Le droit de vote à 18 ans", "La création de la Sécurité sociale", "Le service militaire obligatoire"],
                answer: 0,
                explanation: "Portée par le ministre de la Justice Robert Badinter, la loi abolissant la peine de mort est promulguée le 9 octobre 1981."
            },
            {
                coursId: 3,
                question: "Quel traité signé en 1992 fonde l'Union européenne et prépare la monnaie unique ?",
                options: ["Le traité de Versailles", "Le traité de Maastricht", "Le traité de Verdun", "Le traité de Rethondes"],
                answer: 1,
                explanation: "Le traité de Maastricht transforme la CEE en Union européenne et crée la citoyenneté européenne."
            },
            {
                coursId: 3,
                question: "En quelle année les billets et pièces en euros sont-ils mis en circulation ?",
                options: ["1992", "1999", "2002", "2007"],
                answer: 2,
                explanation: "L'euro fiduciaire remplace le franc français dans le porte-monnaie des citoyens le 1er janvier 2002."
            }
        ],
        frise: [
            {
                date: "Octobre 1945",
                titre: "Création de la Sécurité sociale",
                details: "Application du programme du Conseil National de la Résistance garantissant la protection contre la maladie, la vieillesse et les accidents."
            },
            {
                date: "25 Mars 1957",
                titre: "Signature du Traité de Rome",
                details: "Six pays européens (France, RFA, Italie, Belgique, Pays-Bas, Luxembourg) fondent la Communauté économique européenne (CEE)."
            },
            {
                date: "28 Septembre 1958",
                titre: "Naissance de la Ve République",
                details: "Adoption par référendum de la nouvelle Constitution préparée par le général de Gaulle, renforçant le pouvoir présidentiel."
            },
            {
                date: "Mai 1968",
                titre: "Crise étudiante et grève générale",
                details: "Vaste mouvement de contestation culturelle et sociale qui aboutit aux accords de Grenelle et à une forte hausse des salaires."
            },
            {
                date: "10 Mai 1981",
                titre: "Élection de François Mitterrand",
                details: "Première alternance politique de la Ve République avec l'arrivée de la gauche au pouvoir et l'abolition de la peine de mort."
            },
            {
                date: "7 Février 1992",
                titre: "Signature du Traité de Maastricht",
                details: "Création officielle de l'Union européenne et lancement du projet de monnaie unique européenne (l'euro)."
            },
            {
                date: "1er Janvier 2002",
                titre: "Mise en circulation de l'euro",
                details: "L'euro remplace officiellement le franc en France et dans onze autres pays de l'Union européenne."
            }
        ],
        lexique: [
            {
                mot: "Alternance politique",
                definition: "Changement démocratique de majorité politique au pouvoir suite à des élections (par exemple le passage de la droite à la gauche en 1981)."
            },
            {
                mot: "Cohabitation",
                definition: "Situation politique sous la Ve République où le Président de la République et le Premier ministre appartiennent à des camps politiques opposés."
            },
            {
                mot: "État-providence",
                definition: "Système dans lequel l'État intervient activement pour assurer la protection sociale des citoyens (Sécurité sociale, retraites, allocations)."
            },
            {
                mot: "Référendum",
                definition: "Vote direct par lequel l'ensemble des citoyens répond par « oui » ou par « non » à une question ou un projet de loi posé par le Président."
            },
            {
                mot: "Suffrage universel direct",
                definition: "Mode de scrutin dans lequel tous les citoyens majeurs élisent directement leur représentant (instauré en 1962 pour l'élection présidentielle)."
            },
            {
                mot: "Trente Glorieuses",
                definition: "Expression désignant la période de forte croissance économique et de modernisation sociale entre 1945 et 1975."
            }
        ],
        archives: [
            {
                titre: "Déclaration du 9 mai 1950",
                auteur: "Robert Schuman",
                texte: "« L'Europe ne se fera pas d'un coup, ni dans une construction d'ensemble : elle se fera par des réalisations concrètes créant d'abord une solidarité de fait. »"
            },
            {
                titre: "Discours de la place de la République (4 septembre 1958)",
                auteur: "Général Charles de Gaulle",
                texte: "« Qu'il existe, au-dessus des luttes politiques, un arbitre national élu par les citoyens qui détient un mandat public : tel est l'esprit de la nouvelle Constitution. »"
            },
            {
                titre: "Discours à l'Assemblée nationale sur l'IVG (26 novembre 1974)",
                auteur: "Simone Veil",
                texte: "« Aucune femme ne recourt de gaieté de cœur à l'avortement. Il suffit d'écouter les femmes. »"
            }
        ]
    }
};

let currentThemeId = "moyenage";
let appData = themesData[currentThemeId];








import { Grille } from './Grille';
import { EtatCase } from './EtatCase';
import { ResultatSolveur } from './ResultatSolveur';
export class Solveur {
    static obtenirResultat(grille: Grille): ResultatSolveur {
        const ligneDeDepartMaximum = 2
        for (let ligneDeDepart = 0; ligneDeDepart <= ligneDeDepartMaximum; ligneDeDepart++) {
            const etatCase = grille.obtenirEtatCase(0, ligneDeDepart);
            let nombrePionsCouleur = Solveur.compterPionsCouleur(grille, ligneDeDepart, etatCase);
            if (nombrePionsCouleur == 4 && etatCase != EtatCase.Vide) {
                return Solveur.etatCaseVersResultat(etatCase);
            }
        }
        return ResultatSolveur.PasEncoreDeGagnant;
    }

    private static etatCaseVersResultat(etatCase: EtatCase) {
        switch (etatCase) {
            case EtatCase.Jaune:
                return ResultatSolveur.JauneGagne;
            case EtatCase.Rouge:
                return ResultatSolveur.RougeGagne;
        }
    }

    private static compterPionsCouleur(grille: Grille, ligneDeDepart: number, etatCase: EtatCase) {
        let compteur = 0;
        for (let ecart = 0; ecart < 4; ecart++) {
            if (grille.obtenirEtatCase(0, ecart + ligneDeDepart) == etatCase) {
                compteur++;
            }
        }
        return compteur;
    }
}

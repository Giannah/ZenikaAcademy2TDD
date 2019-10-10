import { Couleur } from './Couleur';
import { EtatCase } from './EtatCase';

const NOMBRE_COLONNES = 7;
const NOMBRE_LIGNES = 6;

export class Grille {
  private grille: EtatCase[][] = [];
  constructor() {
    for (let i = 0; i < NOMBRE_COLONNES; i++) {
      this.grille.push([EtatCase.Vide, EtatCase.Vide, EtatCase.Vide, EtatCase.Vide, EtatCase.Vide, EtatCase.Vide]);
    }
  }

  ajouterPion(colonne: number, couleur: Couleur) {
    if (colonne >= NOMBRE_COLONNES || colonne < 0)
      throw "Colonne inexistante";
    const etat = this.couleurVersEtat(couleur);
    const laColonne = this.grille[colonne];
    for (let i = 0; i < laColonne.length; i++) {
      if (laColonne[i] == EtatCase.Vide) {
        laColonne[i] = etat;
        return;
      }
    }
    throw "Colonne pleine";
  }

  private couleurVersEtat(couleur: Couleur): EtatCase {
    return couleur == Couleur.Jaune ? EtatCase.Jaune : EtatCase.Rouge;
  }
  
  obtenirEtatCase(colonne: number, ligne: number): EtatCase {
    this.siCaseEnDehorsErreur(colonne, ligne);
    return this.grille[colonne][ligne];
  }

  private siCaseEnDehorsErreur(colonne, ligne) {
    if (colonne < 0 || colonne >= NOMBRE_COLONNES || ligne < 0 || ligne >= NOMBRE_LIGNES)
      throw "Case inexistante";
  }
}

import { expect } from 'chai';
import 'mocha';
import { Grille } from './Grille';
import { Couleur } from './Couleur';
import { ResultatSolveur } from './ResultatSolveur';
import { Solveur } from './Solveur';

describe.only('Solveur', () => {

    it('4 pions jaunes dans colonne 0, Jaune gagne', () => {
      const grille = new Grille()
      grille.ajouterPion(0, Couleur.Jaune)
      grille.ajouterPion(0, Couleur.Jaune)
      grille.ajouterPion(0, Couleur.Jaune)
      grille.ajouterPion(0, Couleur.Jaune)
      const resultat : ResultatSolveur = Solveur.obtenirResultat(grille)
      expect(resultat).to.equal(ResultatSolveur.JauneGagne);
    });


    it('4 pions rouges dans colonne 0, Rouge gagne', () => {
        const grille = new Grille()
        grille.ajouterPion(0, Couleur.Rouge)
        grille.ajouterPion(0, Couleur.Rouge)
        grille.ajouterPion(0, Couleur.Rouge)
        grille.ajouterPion(0, Couleur.Rouge)
        const resultat : ResultatSolveur = Solveur.obtenirResultat(grille)
        expect(resultat).to.equal(ResultatSolveur.RougeGagne);
      });

    it('1 pion rouge et 4 jaunes en colonne 0, Jaune gagne', () => {
    const grille = new Grille()
    grille.ajouterPion(0, Couleur.Rouge)
    grille.ajouterPion(0, Couleur.Jaune)
    grille.ajouterPion(0, Couleur.Jaune)
    grille.ajouterPion(0, Couleur.Jaune)
    grille.ajouterPion(0, Couleur.Jaune)
    const resultat : ResultatSolveur = Solveur.obtenirResultat(grille)
    expect(resultat).to.equal(ResultatSolveur.JauneGagne);
    });

    it('Si pas de pion, pas de gagnant', () => {
    const grille = new Grille()
    const resultat : ResultatSolveur = Solveur.obtenirResultat(grille)
    expect(resultat).to.equal(ResultatSolveur.PasEncoreDeGagnant);
    });
    it('1 pion jaune en colonne 0, pas encore de gagnant', () => {
        const grille = new Grille()
        grille.ajouterPion(0, Couleur.Jaune)
        const resultat : ResultatSolveur = Solveur.obtenirResultat(grille)
        expect(resultat).to.equal(ResultatSolveur.PasEncoreDeGagnant);
        });

        it('3 pions jaune en colonne 0, pas encore de gagnant', () => {
            const grille = new Grille()
            grille.ajouterPion(0, Couleur.Jaune);
            grille.ajouterPion(0, Couleur.Jaune);
            grille.ajouterPion(0, Couleur.Jaune);
            const resultat : ResultatSolveur = Solveur.obtenirResultat(grille)
            expect(resultat).to.equal(ResultatSolveur.PasEncoreDeGagnant);
            });

            it('1 pion rouge et 3 jaunes en colonne 0, pas encore de gagnant', () => {
                const grille = new Grille()
                grille.ajouterPion(0, Couleur.Rouge)
                grille.ajouterPion(0, Couleur.Jaune)
                grille.ajouterPion(0, Couleur.Jaune)
                grille.ajouterPion(0, Couleur.Jaune)
                const resultat : ResultatSolveur = Solveur.obtenirResultat(grille)
                expect(resultat).to.equal(ResultatSolveur.PasEncoreDeGagnant);
                });

                it('2 pions rouges et 4 jaunes en colonne 0, jaune gagnant', () => {
                    const grille = new Grille()
                    grille.ajouterPion(0, Couleur.Rouge)
                    grille.ajouterPion(0, Couleur.Rouge)
                    grille.ajouterPion(0, Couleur.Jaune)
                    grille.ajouterPion(0, Couleur.Jaune)
                    grille.ajouterPion(0, Couleur.Jaune)
                    grille.ajouterPion(0, Couleur.Jaune)
                    const resultat : ResultatSolveur = Solveur.obtenirResultat(grille)
                    expect(resultat).to.equal(ResultatSolveur.JauneGagne);
                    });
})
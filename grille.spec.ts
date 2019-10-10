import { expect } from 'chai';
import 'mocha';
import { Couleur } from './Couleur';
import { EtatCase } from './EtatCase';
import { Grille } from './Grille';



describe('Grille', () => {

  it('Au début la case en bas à gauche est vide', () => {
    const grille = new Grille()
    const etatCase = grille.obtenirEtatCase(0, 0)
    expect(etatCase).to.equal(EtatCase.Vide);
  });

  it('Si je mets un pion jaune en colonne de gauche, la case en bas à gauche est jaune', () => {
    const grille = new Grille()
    grille.ajouterPion(0, Couleur.Jaune);
    const etatCase = grille.obtenirEtatCase(0, 0)
    expect(etatCase).to.equal(EtatCase.Jaune);
  });




  it('Si je mets  un jaune et un rouge en colonne de gauche, la case en (0,1) est rouge', () => {
    const grille = new Grille()
    grille.ajouterPion(0, Couleur.Jaune);
    grille.ajouterPion(0, Couleur.Rouge);
    const etatCase = grille.obtenirEtatCase(0, 1)
    expect(etatCase).to.equal(EtatCase.Rouge);
  });

  it('Si je mets  un rouge et un jaune en colonne de gauche, la case en (0,1) est jaune', () => {
    const grille = new Grille()
    grille.ajouterPion(0, Couleur.Rouge);
    grille.ajouterPion(0, Couleur.Jaune);
    const etatCase = grille.obtenirEtatCase(0, 1)
    expect(etatCase).to.equal(EtatCase.Jaune);
  });

  it('Si je mets deux jaune en colonne de gauche, la case en (0,2) est vide', () => {
    const grille = new Grille()
    grille.ajouterPion(0, Couleur.Jaune);
    grille.ajouterPion(0, Couleur.Rouge);
    const etatCase = grille.obtenirEtatCase(0, 2)
    expect(etatCase).to.equal(EtatCase.Vide);
  });

  it('Si je mets trois jaune en colonne de gauche, la case en (0,2) est jaune', () => {
    const grille = new Grille()
    grille.ajouterPion(0, Couleur.Jaune);
    grille.ajouterPion(0, Couleur.Jaune);
    grille.ajouterPion(0, Couleur.Jaune);
    const etatCase = grille.obtenirEtatCase(0, 2)
    expect(etatCase).to.equal(EtatCase.Jaune);
  });

  it('Si je mets 6 jaunes en colonne de gauche, la case en (0,5) est jaune', () => {
    const grille = new Grille()
    grille.ajouterPion(0, Couleur.Jaune);
    grille.ajouterPion(0, Couleur.Jaune);
    grille.ajouterPion(0, Couleur.Jaune);
    grille.ajouterPion(0, Couleur.Jaune);
    grille.ajouterPion(0, Couleur.Jaune);
    grille.ajouterPion(0, Couleur.Jaune);
    const etatCase = grille.obtenirEtatCase(0, 5)
    expect(etatCase).to.equal(EtatCase.Jaune);
  });

  it(`si je tente d'ajouter un septième pion, j'ai une exception`, () => {
    const grille = new Grille()
    grille.ajouterPion(0, Couleur.Jaune);
    grille.ajouterPion(0, Couleur.Jaune);
    grille.ajouterPion(0, Couleur.Jaune);
    grille.ajouterPion(0, Couleur.Jaune);
    grille.ajouterPion(0, Couleur.Jaune);
    grille.ajouterPion(0, Couleur.Jaune);

    expect(() => grille.ajouterPion(0, Couleur.Jaune)).to.throw("Colonne pleine");

  });

  it('Si je mets un pion en colonne de gauche, la case en (1,0) est vide', () => {
    const grille = new Grille()
    grille.ajouterPion(0, Couleur.Jaune);
    const etatCase = grille.obtenirEtatCase(1, 0)
    expect(etatCase).to.equal(EtatCase.Vide);
  });

  it('Si je mets un pion en colonne de 1, la case en (1,0) est pleine', () => {
    const grille = new Grille()
    grille.ajouterPion(1, Couleur.Jaune);
    const etatCase = grille.obtenirEtatCase(1, 0)
    expect(etatCase).to.equal(EtatCase.Jaune);
  });

  it('Si je mets un pion en colonne de 7eme, la case en (6,0) est pleine', () => {

  
    const grille = new Grille()
    grille.ajouterPion(6, Couleur.Jaune);
    const etatCase = grille.obtenirEtatCase(6, 0)
    expect(etatCase).to.equal(EtatCase.Jaune);
  });

  it('Si je mets un pion en colonne de 7eme, la case en (6,0) est pleine', () => {
    const grille = new Grille()
    expect(() => grille.ajouterPion(7, Couleur.Jaune)).to.throw("Colonne inexistante");
  });

  it('Si je mets un pion en colonne -1, une erreur est envoyée', () => {
    const grille = new Grille()
    expect(() => grille.ajouterPion(-1, Couleur.Jaune)).to.throw("Colonne inexistante");
  });

  it('renvoie une erreur si je demande une case à gauche de la grille', () => {
    const grille = new Grille()
    expect(() => grille.obtenirEtatCase(-1, 0)).to.throw("Case inexistante");
  });

  it('renvoie une erreur si je demande une case à droite de la grille', () => {
    const grille = new Grille()
    expect(() => grille.obtenirEtatCase(7, 0)).to.throw("Case inexistante");
  });

  it('renvoie une erreur si je demande une case en dessous de la grille', () => {
    const grille = new Grille()
    expect(() => grille.obtenirEtatCase(0, -1)).to.throw("Case inexistante");
  });

  it('renvoie une erreur si je demande une case au dessus de la grille', () => {
    const grille = new Grille()
    expect(() => grille.obtenirEtatCase(0, 6)).to.throw("Case inexistante");
  });




});
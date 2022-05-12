# GIT

Explications quant à l'utilisation des remotes et des branches sur Github.

## REMOTE

Un remote représente l'adresse d'un repository.

On peut ajouter un remote en faisant :

```bash
git remote add ...
```

On peut supprimer un remote en faisant :

```bash
git remote remove ...
```

Liste des remotes :

```bash
git remote -v
```

Un dossier en local peut donc pointer vers plusieurs repositories sur Github.

Dans le cadre de l'exercice, on a un remote "origin" qui pointe vers le repository de l'étudiant, le remote "correction" vers le repository du formateur.

## BRANCHE

Dans un repository, il est possible de créer des branches.

Généralement dans un projet, nous avons la branche "master" qui désigne la version de production.

Les branches annexes vont être destinées à des versions en cours de développement. Une fois la version de la branche terminée, on effectue une fusion (merge) avec la branche "master".

Pour créer une branche :

```
git checkout -b nom_de_la_branche
```

Basculement sur une branche :

```bash
git switch num_de_la_branche
```

Liste des branches :

```bash
git branch -a
```

Dans le cadre de l'exercice, sur le repository du formateur, on crèe une branche par jour qui contient la correction.

## Cadre de l'exercice

Deux scénari sont proposés :

1- l'étudiant ne travaille que sur son repository.

2- l'étudiant part de la correction du jour et push sur son repository.

Dans le premier scénario, il faut simplement copier/coller le contenu du README du formateur et continuer sur sa solution.

Dans le deuxième scénario, les étapes sont les suivantes :

1- l'étudiant récupère le code de la correction
2- l'étudiant effectue l'atelier
3- l'étudiant push sur son repo

Le lendemain, le même scénario se répète.

Pour pouvoir faire ça :

```bash

# 1- l'étudiant  récupère le code de la correction
git pull --no-edit --allow-unrelated-histories -X theirs correction nom_de_la_branche_du_jour

# l'idée ici est de récupérer le code qui se trouve sur le repository "correction" au niveau de la branche "nom_de_la_branche_du_jour" sans se soucier de conflits éventuels

```

Après avoir codé l'atelier du jour, on peut effectuer la commande pour push sur son repository :

```bash
# 3- l'étudiant push sur son repo
git add .
git commit -m "message"
git push origin master

```

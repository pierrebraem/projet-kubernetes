# Vue d'ensemble

Le projet consiste à mettre en place une infrastructure cloud moderne et résiliente sur Google Cloud Platform (GCP). L'infrastructure repose sur deux éléments principaux :

- Google Kubernetes Engine (GKE) pour le déploiement et la gestion des conteneurs.
- Terraform pour la gestion de l'infrastructure en tant que code (IaC).

# Architecture globale

- GKE Cluster : Un cluster Kubernetes est créé sur GCP via Terraform, ce qui permet de déployer, gérer et scaler l'application de manière efficace.
- Prometheus : Utilisé pour la collecte des métriques et la mise en place d'un système de monitoring complet.
- Applications conteneurisées : Déploiement d'une application web simple en conteneurs sur le cluster GKE.
- Stratégies de déploiement : Mise en œuvre de stratégies comme les déploiements Rolling Update, Canary et Blue-Green pour assurer une haute disponibilité et des mises à jour sans interruption.

# Composants Clés

- GKE Cluster : Gère les conteneurs dans l'infrastructure.
- Terraform : Permet de définir l'infrastructure cloud comme code, facilitant la gestion des ressources GCP.
- Prometheus : Utilisé pour surveiller les applications déployées, collecter des métriques et envoyer des alertes.
- Exporteurs Prometheus : Pour récupérer des métriques spécifiques, comme celles de GKE, des applications ou de l'infrastructure sous-jacente.
